<template>
  <div class="rating-input">
    <UiCheckbox :checked="checked" />
    <UiRating :rating="rating" readonly />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  rating: number
  checked: boolean
}>()
</script>

<style scoped lang="scss">
.rating-input {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>