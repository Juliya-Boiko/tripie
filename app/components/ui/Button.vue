<template>
  <button type="button" :disabled="disabled" class="button" :class="[variant, size]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'neutral' | 'light'
  size: 's' | 'm'
  disabled?: boolean
}>()
</script>

<style scoped lang="scss">
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  line-height: 16px;
  border-radius: 90px;
  transition: all 250ms ease-in-out;
  
  &.s {
    font-size: 14px;
    padding: 12px 16px;
  }

  &.m {
    font-size: 16px;
    padding: 16px 24px;
  }

  &.neutral {
    background-color: $primary-green;
    color: $neutral-8;

    &:hover {
      background-color: $primary-green-dark;
    }
  }

  &.light {
    border: 2px solid $neutral-6;
    background-color: transparent;
    color: $neutral-2;

    &:hover {
      background-color: $neutral-2;
      color: $neutral-8;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: $neutral-2 !important;
    opacity: 0.3;
    color: $neutral-8;
  }
}
</style>