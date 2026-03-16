<template>
  <div ref="wrapperRef" class="guest-input">
    <div class="guest-input__wrapper">
      <div class="guest-input__icon">
        <Icon
          name="user"
          width="24px"
          height="24px"
          fill="#B1B5C3"
        />
      </div>
      
      <div class="guest-input__value" @click="isFocused = true">
        <div class="body-2-bold guest-input__selected">
          <span>{{ displayedGuests }}</span>
          <button 
            v-if="guests.adults || guests.children" 
            type="button" 
            class="guest-input__clear"
            @mousedown.prevent="clearGuests"
          >
            <Icon
              name="cross-outlined"
              width="24px"
              height="24px"
              fill="currentColor"
            />
          </button>
        </div>
        <span class="body-3 guest-input__label">Add guests</span>
      </div>
    </div>

    <div 
      v-if="isFocused"
      class="guest-input__dropdown"
    >
      <div class="guest-input__item">
        <div>
          <p class="body-3-medium">Adults</p>
          <p class="caption-2 guest-input__descr">Ages 13 or above</p>
        </div>
        <UiCounter 
          :amount="guests.adults" 
          @update="(v) => guests.adults = v" 
        />
      </div>
      <div class="guest-input__item">
        <div>
          <p class="body-3-medium">Children</p>
          <p class="caption-2 guest-input__descr">Ages 0 - 12</p>
        </div>
        <UiCounter 
          :amount="guests.children"
          @update="(v) => guests.children = v" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"

const wrapperRef = ref(null)
const isFocused = ref(false)
const guests = ref({
  adults: 0,
  children: 0
})

const clearGuests = () => {
  guests.value.adults = 0
  guests.value.children = 0
}

const displayedGuests = computed(() => {
  if (!guests.value.adults && !guests.value.children) return 'Guests'
  return `${guests.value.adults ? guests.value.adults + ' Ad' : ''}${guests.value.adults && guests.value.children ? ',' : ''} ${guests.value.children ? guests.value.children + ' Ch' :''}`
})

onClickOutside(wrapperRef, () => {
  isFocused.value = false
})
</script>

<style scoped lang="scss">
.guest-input {
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
    bottom: 100px;
    right: 0;
    max-height: 240px;
    overflow-y: auto;
    background-color: $neutral-8;
    padding: 24px;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__item {
    display: flex;
    padding-bottom: 12px;
    align-items: center;
    justify-content: space-between;
  }

  &__descr {
    color: $neutral-4;
  }
}
</style>