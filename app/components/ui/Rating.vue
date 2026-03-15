<template>
  <div class="rating">
    <button
      v-for="star in max"
      :key="star"
      class="rating__star"
      :class="{ accent: star <= rating }"
      :disabled="readonly"
      type="button"
      @click="setRating(star)"
    >
      <Icon 
        :name="star <= rating ? 'star-filled' : 'star-outlined'" 
        width="24px" 
        height="24px" 
        fill="currentColor" 
      />
    </button>
  </div>
</template>


<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating: number
    max?: number
    readonly?: boolean
  }>(),
  {
    max: 5,
  }
)

const emit = defineEmits<{
  (e: "update", value: number): void
}>()

const setRating = (value: number) => {
  if (props.readonly) return
  emit("update", value)
}
</script>

<style scoped lang="scss">
.rating {
  display: flex;
  align-items: center;
  gap: 4px;

  &__star {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: $neutral-5;

    &.accent {
      color: $primary-yellow;
    }

    &:disabled {
      cursor: default;
    }
  }
}
</style>