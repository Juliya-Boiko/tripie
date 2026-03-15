<template>
  <label class="password-input">
    <input
      class="caption password-input__custom"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="isPasswordType ? 'password' : 'text'"
      @input="onInput"
    />
    <button type="button" class="password-input__button" @click="isPasswordType = !isPasswordType">
      <Icon
        :name="isPasswordType ? 'eye-open' : 'eye-closed'"
        width="24"
        height="24"
        stroke="currentColor"
      />
    </button>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  disabled?: boolean
  placeholder?: string
}>()

const isPasswordType = ref(true)

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", target.value)
}
</script>

<style scoped lang="scss">
.password-input {
  cursor: pointer;
  position: relative;
 
  &__custom {
    width: 100%;
    padding: 8px 48px 8px 24px;
    height: 48px;
    border: 2px solid $neutral-6;
    border-radius: 40px;
    background-color: transparent;
    outline: none;
    color: $neutral-2;

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

  &__button {
    position: absolute;
    background-color: transparent;
    outline: none;
    border: none;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}
</style>