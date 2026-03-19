<template>
  <div class="card">
    <div class="card__image">
      <button type="button" class="card__button">
        <Icon 
          name="heart-outlined" 
          width="20px" 
          height="20px" 
          fill="currentColor" 
        />
      </button>
      <div class="card__link">Explore</div>
    </div>
    <div class="card__info">
      <p class="body-3-medium">Pack wisely before traveling</p>
      <p class="caption card__text">It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...</p>
      <p class="card__date">
        <Icon 
          name="calendar" 
          width="24px" 
          height="24px" 
          fill="currentColor" 
        />
        <span>25 May, 2021</span>
      </p>
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
  gap: 24px;
  color: $neutral-2;
  width: 100%;

  &__image {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 320px;
    background: #23262F;
    border-radius: 16px;
  }

  &__link {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 107px;
    height: 48px;
    background-color: $neutral-8;
    border-radius: 90px;
    color: $neutral-2;
    opacity: 0;
    transition: all 250ms ease-in-out;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 32px;
    height: 32px;
    right: 16px;
    top: 16px;
    background-color: $neutral-8;
    box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.1);
    border-radius: 50%;
    outline: none;
    color: $neutral-5;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__text {
    color: $neutral-4;
  }

  &__date {
    padding-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: $neutral-4;
  }

  &:hover {
    .card__link {
      display: flex;
      opacity: 1;
    }
  }
}
</style>