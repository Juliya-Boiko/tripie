<template>
  <section class="hero">
    <div class="hero__wrapper">
      <h1 class="heading-hero hero__title">Discover the most engaging places</h1>
      <p class="body-3-medium">Less planning 45,000 trips are ready for you</p>
    </div>
    <nuxt-link to="/" class="body-2-bold hero__link">Start now</nuxt-link>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
  height: 627px;
  padding: 110px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  text-align: center;
  background-image:
    linear-gradient(
      179.74deg,
      rgba(0, 40, 146, 0.3) 34.1%,
      rgba(255, 255, 255, 0) 98.18%
    ),
    url('/home-hero.png');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: $neutral-8;
    max-width: 660px;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    border-radius: 90px;
    transition: all 250ms ease-in-out;
    background-color: $primary-green;
    color: $neutral-8;
    width: 265px;
    height: 64px;
    outline: 6px solid rgba(255, 255, 255, 0.5);

    border-radius: 90px;

    &:hover {
      background-color: $primary-green-dark;
    }
  }

  @media screen and (max-width: 1200px) {
    &__link {
      width: 180px;
      font-size: 16px;
      line-height: 24px;
      height: 48px;
    }
  }
}
</style>