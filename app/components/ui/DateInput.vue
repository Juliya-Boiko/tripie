<template>
  <div ref="wrapperRef" class="date-input">
    <div class="date-input__wrapper">
      <div class="date-input__icon">
        <Icon
          name="calendar"
          width="24px"
          height="24px"
          fill="#B1B5C3"
        />
      </div>
      
      <div class="date-input__value" @click="isFocused = true">
        <div class="body-2-bold date-input__selected">
          <span>{{ displayedDates }}</span>
          <button 
            v-if="dateRange.start && dateRange.end" 
            type="button" 
            class="date-input__clear"
            @mousedown.prevent="clearDates"
          >
            <Icon
              name="cross-outlined"
              width="24px"
              height="24px"
              fill="currentColor"
            />
          </button>
        </div>
        <span class="body-3 date-input__label">Add date</span>
      </div>
    </div>

    <div 
      v-if="isFocused"
      class="date-input__dropdown"
    >
      <div class="date-input__header">
        <button 
          type="button" 
          class="date-input__btn" 
          @click="prevMonth"
        >
          <Icon
            name="chevron-left"
            width="24px"
            height="24px"
            stroke="currentColor"
          />
        </button>
        <span class="body-3-medium">{{ currentMonth }} {{ baseDate.getFullYear() }}</span>
        <button 
          type="button" 
          class="date-input__btn" 
          @click="nextMonth"
        >
          <Icon
            name="chevron-right"
            width="24px"
            height="24px"
            stroke="currentColor"
          />
        </button>
      </div>
      <div class="date-input__calendar">
        <div class="caption-bold date-input__week">
          <div
            v-for="item in weekDayNames"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        

        <div
          v-for="(week, idx) in weeks"
          :key="idx"
          class="date-input__grid"
        >
          <div
            v-for="day in week"
            :key="day.dayNumber"
            class="date-input__day"
            :class="{
              today: day.isToday,
              start: isStart(day.date),
              startOnly: dateRange.start && !dateRange.end,
              end: isEnd(day.date),
              range: isInRange(day.date),
              anotherMonth: !day.isCurrentMonth
            }"
            @click="selectDay(day)"
          >
            {{ day.dayNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"

const weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const wrapperRef = ref(null)
const isFocused = ref(false)
const dateRange = ref({ start: '', end: '' })
const baseDate = ref(new Date())

const currentMonth = computed(() =>
  new Intl.DateTimeFormat('en-US', { month: 'long' }).format(baseDate.value),
)

const formatDates = (v: string) => {
  const date = new Date(v)
  return date.toLocaleDateString("en-US")
} 

const displayedDates = computed(() => {
  if (!dateRange.value.start && !dateRange.value.end) return 'Dates'
  return `${formatDates(dateRange.value.start)}${dateRange.value.end ? '-'+formatDates(dateRange.value.end) : ''}`
})

const clearDates = () => {
  dateRange.value.start = ''
  dateRange.value.end = ''
}

const nextMonth = () => {
  const d = new Date(baseDate.value)
  d.setMonth(d.getMonth() + 1)
  baseDate.value = d
}

const prevMonth = () => {
  const d = new Date(baseDate.value)
  d.setMonth(d.getMonth() - 1)
  baseDate.value = d
}

onClickOutside(wrapperRef, () => {
  isFocused.value = false
})

interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  dayNumber: number
}

const calendarDays = computed<CalendarDay[]>(() => {
  const year = baseDate.value.getFullYear()
  const month = baseDate.value.getMonth()
  const days: CalendarDay[] = []
  const total = 42 // Maximum possible days (6 weeks)

  const addDay = (date: Date, isCur: boolean) => {
    days.push({
      date,
      dayNumber: date.getDate(),
      isCurrentMonth: isCur,
      isToday: isCur && new Date().toDateString() === date.toDateString(),
    })
  }

  // Previous month tail
  const first = new Date(year, month, 1)
  const offset = first.getDay()
  const prevLast = new Date(year, month, 0).getDate()
  for (let i = prevLast - offset + 1; i <= prevLast; i++) {
    addDay(new Date(year, month - 1, i), false)
  }

  // Current month
  const last = new Date(year, month + 1, 0).getDate()
  for (let i = 1; i <= last; i++) addDay(new Date(year, month, i), true)

  // Next month head (only add enough to complete the last week with current month days)
  const currentMonthDaysCount = last + offset
  const weeksToFill = Math.ceil(currentMonthDaysCount / 7)
  const daysToAdd = weeksToFill * 7 - days.length
  for (let i = 1; i <= daysToAdd && days.length < total; i++) {
    addDay(new Date(year, month + 1, i), false)
  }

  return days
})

// Split into weeks of 7, keeping only weeks with at least one current-month day
const weeks = computed(() => {
  const all = calendarDays.value
  const out: CalendarDay[][] = []
  for (let i = 0; i < all.length; i += 7) {
    const week = all.slice(i, i + 7)
    // Only include the week if it has at least one day from the current month
    if (week.some((d) => d.isCurrentMonth)) {
      out.push(week)
    }
  }
  return out
})

const toLocalISO = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, "0")

  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.000Z`
}

const selectDay = (v: CalendarDay) => {
  // const iso = toLocalISO(v.date)

  // if (!dateRange.value.start || dateRange.value.end) {
  //   dateRange.value.start = iso
  //   dateRange.value.end = ''
  // } else {
  //   dateRange.value.end = iso
  // }
  const iso = toLocalISO(v.date)

  if (!dateRange.value.start || dateRange.value.end) {
    dateRange.value.start = iso
    dateRange.value.end = ''
  } else {
    const start = new Date(dateRange.value.start)

    if (v.date < start) {
      dateRange.value.end = dateRange.value.start
      dateRange.value.start = iso
    } else {
      dateRange.value.end = iso
    }
  }
  console.log(dateRange.value)
}

function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

const checkAccent = (v: Date) => {
  if (!dateRange.value.start && !dateRange.value.end) return false

  const selected = normalizeDate(v).getTime()
  const normStart = normalizeDate(new Date(dateRange.value.start)).getTime()
  const normEnd = normalizeDate(new Date(dateRange.value.end)).getTime()

  return selected === normStart || selected === normEnd
}

function isStart(date: Date) {
  if (!dateRange.value.start) return false

  return normalizeDate(date).getTime() ===
    normalizeDate(new Date(dateRange.value.start)).getTime()
}

function isEnd(date: Date) {
  if (!dateRange.value.end) return false

  return normalizeDate(date).getTime() ===
    normalizeDate(new Date(dateRange.value.end)).getTime()
}

function isInRange(date: Date) {
  if (!dateRange.value.start || !dateRange.value.end) return false

  const d = normalizeDate(date).getTime()
  const start = normalizeDate(new Date(dateRange.value.start)).getTime()
  const end = normalizeDate(new Date(dateRange.value.end)).getTime()

  return d > start && d < end
}
</script>

<style scoped lang="scss">
.date-input {
  min-width: 220px;
  position: relative;

  &__wrapper {
    padding: 20px;
    display: flex;
    gap: 12px;
  }

  &__icon {
    padding: 4px;
  }

  &__value {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    color: $neutral-4;
  }

  &__clear {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    outline: none;
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__dropdown {
    width: 100%;
    min-width: 320px;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: $neutral-8;
    padding: 8px;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: $neutral-2;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn {
    background-color: transparent;
    border: none;
    outline: none;
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    color: $neutral-4;
  }

  &__calendar {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
  }

  &__day {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.anotherMonth {
      color: $neutral-5;
    }

    &.today {
      font-weight: 700;
      color: $primary-blue;
    }

    &.range {
      background: $neutral-2;
      color: $neutral-8;
    }

    &.start {
      background: $neutral-2;
      color: $neutral-8;
      border-radius: 20px 0 0 20px;
    }

    &.startOnly {
      border-radius: 50%;
    }

    &.end {
      background: $neutral-2;
      color: $neutral-8;
      border-radius: 0 20px 20px 0;
    }


  }
}
</style>