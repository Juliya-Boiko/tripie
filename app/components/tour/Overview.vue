<template>
  <div class="overview">
    <h6 class="body-2-bold">Overview</h6>
    <div class="body-3 overview__text">The secret journey of Tonkin is designed for travelers who want to touch, taste and feel the souls of Northern Vietnam through their unique highlights and experiences. More than simple whirlwind tours, the secret journey of Tonkin of Tonkin marry iconic destinations and must-see spots with the hidden corners and below-the-skin experiences to discover some of the famous and unique places around the Halong region.</div>
    <UiButton variant="light" size="s">Show more</UiButton>
  </div>
</template>

<style scoped lang="scss">
.overview {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid $neutral-6;
  align-items: flex-start;

  &__text {
    color: $neutral-4;
  }
}
</style>