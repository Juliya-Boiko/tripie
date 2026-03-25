<template>
  <div class="select-tabs">
    <button 
      type="button"
      v-for="item in options"
      :key="item.value"
      class="caption-bold select-tabs__item"
      :class="{ accent: item.value === value }"
      @click="handleSelect(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value?: string
  options: { label: string; value: string }[]
}>()

const emit = defineEmits<{
  (e: 'update', v: string | undefined): void
}>()

const handleSelect = (v: string) => {
  emit('update', v)
}

const formattedValue = computed(() => {
  const current = props.options.find((o) => o.value === props.value)
  return current ? current.label : ''
})
</script>

<style scoped lang="scss">
.select-tabs {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &__item {
    color: $neutral-4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    border-radius: 100px;
    background-color: transparent;
    border: none;
    outline: none;

    &.accent {
      background-color: $neutral-2;
      color: $neutral-8;
    }
  }

  
}
</style>