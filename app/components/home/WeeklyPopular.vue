<template>
  <section class="section">
    <h2 class="section__title heading-h2">Discover Weekly</h2>
    <p class="section__text body-2">An enim nullam tempor sapien gravida donec enim ipsum</p>
    <div class="section__grid">
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
      <UiTourCard />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: 0 160px 100px 160px;

  &__title {
    text-align: center;
    margin-bottom: 12px;
  }

  &__text {
    text-align: center;
    color: $neutral-4;
    margin-bottom: 64px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 40px 80px 40px;
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>