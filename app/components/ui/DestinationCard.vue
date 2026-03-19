<template>
  <div class="card">
    <div class="card__image">
      <div 
        class="card__badge hairline-small" 
        :style="{ backgroundColor: getRandomColor() }"
      >07 Tours</div>
    </div>
    <div class="card__info">
      <p class="body-1-bold">Europe</p>
      <p class="caption-2 card__price">From <span class="card__accent">$540</span> per day</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const getRandomColor = () => {
  const colors = ['#4AC63F', '#F6C92D', '#FD7FE9', '#62B3FD'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: $neutral-2;
  width: 100%;

  &__image {
    padding: 16px;
    height: 256px;
    border-radius: 24px;
    background-color: $neutral-2;
  }

  &__badge {
    padding: 8px 12px;
    border-radius: 32px;
    color: $neutral-8;
    text-transform: uppercase;
    display: inline-flex;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__price {
    color: $neutral-4;
  }

  &__accent {
    color: $neutral-2;
    font-weight: 700;
  }
}
</style>