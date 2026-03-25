<template>
  <input
    type="text"
    class="code-input"
    maxlength="1"
    :value="value"
    @keydown="handleKeyDown"
  />
</template>

<script setup lang="ts">
defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'update', v: string): void
}>()

const handleKeyDown = (e: KeyboardEvent) => {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (allowedKeys.includes(e.key)) return

  if (!/\d/.test(e.key)) {
    e.preventDefault()
  } else {
    emit('update', e.key)
  }
}
</script>

<style scoped lang="scss">
.code-input {
  width: 54px;
  height: 64px;
  background-color: $neutral-7;
  border-radius: 8px;
  border: 1px solid $neutral-7;
  font-size: 32px;
  color: $neutral-2;
  outline: none;
  text-align: center;
  transition: all 250ms ease-in-out;

  &:focus, &:focus-visible {
    border-color: $neutral-6;
    background-color: $neutral-8;
  }
}
</style>