<template>
  <label class="checkbox" :class="{ checked: checked, disabled }">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />

    <span class="checkbox__custom">
      <Icon
        v-if="checked"
        name="check"
        width="16px"
        height="16px"
        fill="#FCFCFD"
      />
    </span>
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
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  &__custom {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background: $neutral-8;
    border: 2px solid $neutral-5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 250ms ease-in-out;
  }

  &.checked &__custom {
    background: $neutral-1;
    border-color: $neutral-1;
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}
</style>