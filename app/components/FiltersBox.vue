<template>
  <div class="filters">
    <div class="filters__inputs">
      <UiLocationInput />
      <UiActivityInput />
      <UiDateInput />
      <UiGuestInput />
    </div>
    <div v-if="fullView" class="filters__ranges">ranges</div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
const fullView = ref(false)
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
  }

  &__ranges {
    display: flex;
    flex-direction: row;
    padding: 40px 0px;
    gap: 120px;
    border-bottom: 1px solid $neutral-6;
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
}
</style>