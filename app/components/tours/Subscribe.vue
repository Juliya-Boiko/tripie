<template>
  <section class="section">
    <div class="section__wrapper">
      <p class="hairline-small section__subtitle">Take A Tour</p>
      <h2 class="heading-h2">Join our <br /> newsletter</h2>
      <p class="body-3 section__text">An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit.</p>
      <SubscribeForm />
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  ' Luctus risusd diam eget',
  'Donec enim  congue magna',
  'Blandit sit amet non magna'
]
</script>

<style scoped lang="scss">
.section {
  padding: 100px 160px;
  color: $neutral-2;
  background-color: $white;
  background-image: url(/subscribe.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  &__wrapper {
    max-width: 448px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  &__subtitle {
    color: $neutral-4;
    text-transform: uppercase;
  }

  &__text {
    color: $neutral-4;
  }

  :deep(.subscribe) {
    max-width: 352px;
  }

  @media screen and (max-width: 1200px) {
    padding: 80px 40px;
    flex-direction: column;
  }
}
</style>