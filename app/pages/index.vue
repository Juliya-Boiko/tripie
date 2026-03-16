<template>
  <div class="wrapper">
    <HomeHero />
    <div class="wrapper__filters">
      <FiltersBox />
    </div>
  </div>
</template>

<script setup lang="ts">
const input = ref('')
const price = ref(1500)
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  padding-bottom: 80px;
  background-color: aqua;

  &__filters {
    width: 100%;
    max-width: 1220px;
    position: relative;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
  }
}
</style>