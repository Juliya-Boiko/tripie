<template>
  <label class="text-input">
    <input
      class="caption text-input__custom"
      :class="{ selectView }"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="onInput"
    />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  disabled?: boolean
  placeholder?: string
  selectView?: boolean
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", target.value)
}
</script>

<style scoped lang="scss">
.text-input {
  cursor: pointer;
 
  &__custom {
    width: 100%;
    padding: 8px 24px;
    height: 48px;
    border: 2px solid $neutral-6;
    border-radius: 40px;
    background-color: transparent;
    outline: none;
    color: $neutral-2;

    &.selectView {
      border-radius: 12px;
    }

    &:focus, &:focus-visible {
      border-color: $primary-blue;
    }

    &::placeholder {
      color: $neutral-4;
      font-size: 14px;
      line-height: 24px;
      font-weight: 700;
    }
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}
</style>