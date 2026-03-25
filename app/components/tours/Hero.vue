<template>
  <section class="hero">
    <h1 class="heading-hero hero__title">Tour List</h1>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('/tours-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: $neutral-8;

  @media screen and (max-width: 1200px) {
    
  }
}
</style>