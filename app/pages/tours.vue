<template>
  <div class="wrapper">
    <ToursHero />
    <div class="wrapper__filters">
      <FiltersBox />
    </div>
    <div class="wrapper__sorters">
      <UiSelectTabs :options="filterByOptions" value="Favourite" />
      <UiSelectInput :options="sortByOptions" />
    </div>
    <div class="wrapper__grid">
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
    </div>
    <ToursSubscribe />
  </div>
</template>

<script setup lang="ts">
import { sortByOptions, filterByOptions } from '~/constants';
const input = ref('')
const price = ref(1500)
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  background-color: $neutral-8;

  &__filters {
    width: 100%;
    max-width: 1220px;
    position: relative;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
  }

  &__sorters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 160px 48px 160px;
  }

  &__grid {
    padding: 0 160px 100px 160px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media screen and (max-width: 1200px) {
    &__filters {
      width: calc(100% - 80px);
    }

    &__sorters {
      padding: 0 40px 48px 40px;
    }

    &__grid {
      padding: 0 40px 100px 40px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>