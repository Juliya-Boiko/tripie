<template>
  <div class="counter">
    <button 
      type="button" 
      class="counter__btn"
      :disabled="amount === 0"
      @click="change('decr')"
    >
      <Icon
        name="minus-outlined"
        width="24px"
        height="24px"
        fill="currentColor"
      />
    </button>
    <span class="body-3-medium">{{ amount }}</span>
    <button 
      type="button" 
      class="counter__btn" 
      @click="change('incr')"
    >
      <Icon
        name="plus-outlined"
        width="24px"
        height="24px"
        fill="currentColor"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  amount: number
}>()

const emit = defineEmits<{
  (e: "update", v: number): void
}>()

const change = (v: 'decr' | 'incr') => {
  if (v === 'decr' && props.amount === 0) return
  if (v === 'decr') {
    const newValue = props.amount - 1
    emit('update', newValue)
  } else {
    const newValue = props.amount + 1
    emit('update', newValue)
  }
}
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;
  gap: 16px;

  &__btn {
    background-color: transparent;
    border: none;
    outline: none;
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:disabled {
      color: $neutral-6;
      cursor: not-allowed;
    }
  }

}
</style>