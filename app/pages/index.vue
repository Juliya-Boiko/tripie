<template>
  <div class="wrapper">
    <HomeHero />
    <div class="wrapper__filters">
      <FiltersBox />
    </div>
    <HomeWeeklyPopular />
    <HomeTourOffer />
    <HomeStatistic />
  </div>
</template>

<script setup lang="ts">

const input = ref('')
const price = ref(1500)
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;

  &__filters {
    width: 100%;
    max-width: 1220px;
    position: relative;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 1200px) {
    &__filters {
      width: calc(100% - 48px);
    }
  }
}
</style>