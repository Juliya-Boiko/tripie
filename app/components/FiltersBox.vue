<template>
  <section class="filters">
    <div class="filters__inputs">
      <UiLocationInput />
      <UiActivityInput />
      <UiDateInput />
      <UiGuestInput />
      <div class="filters__search">
        <button type="button" class="filters__btn">
          <Icon 
            name="search" 
            width="24px" 
            height="24px" 
            fill="currentColor" 
          />
        </button>
      </div>
    </div>
    <div v-if="fullView" class="filters__ranges">
      <div class="filters__block">
        <p class="hairline-small filters__title">Price range</p>
        <UiRange v-model="price" />
      </div>
      <div class="filters__block">
        <p class="hairline-small filters__title">Review Score</p>
        <div class="filters__grid">
          <UiRatingInput 
            v-for="rate in 5"
            :key="rate"
            :rating="rate"
            :checked="rate === 1"
          />
        </div>
      </div>
    </div>
    <div class="filters__buttons">
      <button 
        type="button" 
        class="filters__toggle"
        :class="{ rotate: fullView }"
        @click="fullView = !fullView"
      >
        <Icon 
          name="small-chevron-down" 
          width="24px" 
          height="24px" 
          fill="currentColor" 
        />
      </button>
      <UiButton v-if="fullView" size="m" variant="light">Reset filters</UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const fullView = ref(false)
const price = ref(2500)
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  gap: 16px;
  background-color: $neutral-8;
  border: 1px solid $neutral-8;
  box-shadow: 0px 40px 64px -32px rgba(15, 15, 15, 0.1);
  border-radius: 24px;

  &__inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 24px;
    border-bottom: 1px solid $neutral-6;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  &__ranges {
    display: flex;
    flex-direction: row;
    padding: 40px 0px;
    gap: 120px;
    border-bottom: 1px solid $neutral-6;
  }

  &__title {
    text-transform: uppercase;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid $neutral-6;
    border-radius: 50%;
    color: $neutral-4;
    background-color: transparent;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  &__search {
    padding: 20px;
    display: flex;
  }

  &__btn {
    width: 64px;
    height: 64px;
    background-color: $primary-green;
    border: none;
    outline: none;
    color: $neutral-8;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  @media screen and (max-width: 1200px) {
    
    &__inputs {
      flex-wrap: wrap;
      /* justify-content: flex-start; */
      /* display: grid;
      grid-template-columns: repeat(2, 1fr); */
    }

    &__ranges {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
  }
}
</style>