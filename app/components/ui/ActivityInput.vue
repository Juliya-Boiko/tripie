<template>
  <div ref="wrapperRef" class="activity-input">
    <div class="activity-input__wrapper">
      <div class="activity-input__icon">
        <Icon
          :name="disaplyedIcon"
          width="24px"
          height="24px"
          fill="#B1B5C3"
        />
      </div>
      
      <div class="activity-input__value" @click="isFocused = true">
        <div class="body-2-bold activity-input__selected">
          <span>{{ activity || 'Activity' }}</span>
          <button 
            v-if="activity" 
            type="button" 
            class="activity-input__clear"
            @mousedown.prevent="activity = ''"
          >
            <Icon
              name="cross-outlined"
              width="24px"
              height="24px"
              fill="currentColor"
            />
          </button>
        </div>
        <span class="body-3 activity-input__label">Add Activity</span>
      </div>
    </div>

    <div 
      v-if="isFocused"
      class="activity-input__dropdown"
    >
      <div 
        v-for="{ icon, value } in activityOptions"
        :key="value"
        class="body-3 activity-input__item"
        @mousedown.prevent="selectActivity(value)"
      >
        <div class="activity-input__svg">
           <Icon
            :name="icon"
            width="16px"
            height="16px"
            fill="#777E90"
          />
        </div>
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import { activityOptions } from "~/constants"
const wrapperRef = ref(null)
const isFocused = ref(false)
const activity = ref('')

const selectActivity = (v: string) => {
  activity.value = v
  isFocused.value = false
}

onClickOutside(wrapperRef, () => {
  isFocused.value = false
})

const disaplyedIcon = computed(() => {
  if (!activity.value) return 'car'
  const current = activityOptions.find((o) => o.value === activity.value)
  return current ? current.icon : 'car'
})
</script>

<style scoped lang="scss">
.activity-input {
  position: relative;
  min-width: 220px;

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
    position: absolute;
    bottom: 100px;
    max-height: 240px;
    overflow-y: auto;
    background-color: $neutral-8;
    padding: 8px;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    border-radius: 24px;
  }

  &__item {
    display: flex;
    gap: 12px;
    padding: 12px;
    align-items: center;
    color: $neutral-4;
    cursor: pointer;
    border-radius: 12px;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: $neutral-7;
      color: $neutral-2;
    }
  }

  &__svg {
    width: 32px;
    height: 32px;
    background: $neutral-8;
    border: 1px solid $neutral-6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>