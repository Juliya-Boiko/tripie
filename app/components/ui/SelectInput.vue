<template>
  <div ref="wrapperRef" class="select-input">
    <button
      type="button"
      class="select-input__toggle"
      :class="{ open: isOpen }"
      @click="isOpen = !isOpen"
    >
      <div class="select-input__values caption-bold">
        {{ formattedValue }}
      </div>
      <div class="select-input__icon" :class="{ open: isOpen, rotate: isOpen }">
        <Icon
          name="small-chevron-down"
          width="24px"
          height="24px"
          fill="currentColor" 
        />
      </div>
    </button>
    <ul v-if="isOpen" class="select-input__list">
      <li
        v-for="{ label, value } in options"
        :key="value"
        class="select-input__item"
        @click="handleSelect(value)"
      >
        <span>{{ label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"

const props = defineProps<{
  value?: string
  options: { label: string; value: string }[]
  required?: boolean
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update', v: string | undefined): void
}>()

const isOpen = ref(false)
const wrapperRef = ref(null)

const handleSelect = (v: string) => {
  emit('update', v)
  isOpen.value = false
}

const formattedValue = computed(() => {
  const current = props.options.find((o) => o.value === props.value)
  return current ? current.label : props.placeholder || ''
})

onClickOutside(wrapperRef, () => {
  isOpen.value = false
})
</script>

<style scoped lang="scss">
.select-input {
  position: relative;
  width: 100%;
  max-width: 256px;

  &__toggle {
    width: 100%;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 8px 8px 8px 16px;
    gap: 18px;
    border: 2px solid $neutral-6;
    border-radius: 12px;
    background-color: transparent;
    outline: none;
  }

  &__values {
    
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 2px solid $neutral-6;
    border-radius: 50%;
    color: $neutral-4;
    transition: all 250ms ease-in-out;
  }

  .open {
    border-color: $neutral-5;
  }

  .rotate {
    transform: rotate(180deg);
  }

  &__list {
    position: absolute;
    left: 0;
    z-index: 3;
    width: 100%;
    border: 1px solid var(--grey200);
    top: 52px;
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
}
</style>