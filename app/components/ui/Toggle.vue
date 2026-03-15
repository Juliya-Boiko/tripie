<template>
  <label class="toggle" :class="{ checked: checked, disabled }">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />

    <span class="toggle__custom" />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  checked?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: "update"): void
}>()

const onChange = () => {
  emit("update")
}
</script>

<style scoped lang="scss">
.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 24px;
  padding: 2px;
  background-color: $neutral-6;
  border-radius: 32px;
  transition: all 250ms ease-in-out;

  input {
    display: none;
  }

  &__custom {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $neutral-8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1);
  }

  &.checked{
    justify-content: flex-end;
    background: $primary-green;
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}
</style>