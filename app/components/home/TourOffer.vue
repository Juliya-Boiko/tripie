<template>
  <section class="section">
    <div class="section__wrapper">
      <p class="hairline-small section__subtitle">Take A Tour</p>
      <h2 class="heading-h2">Discover Our Travel Guideline</h2>
      <p class="body-3 section__text">An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
      <ul class="section__list caption-bold ">
        <li
          v-for="(item, idx) in list"
          :key="idx"
          class="section__item"
        >
          <div class="section__icon"> 
            <Icon
              name="check-filled"
              width="24px"
              height="24px"
              fill="currentColor"
            />
          </div>
          {{ item }}
        </li>
      </ul>
      <UiButton variant="neutral" size="m">Learn more</UiButton>
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
  padding: 0 0 100px 160px;
  color: $neutral-2;
  background-color: $white;
  background-image: url(/tour-offer.png);
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: $neutral-4;
  }

  &__item {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__icon {
    color: $primary-green;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 40px 80px 40px;
    flex-direction: column;
  }
}
</style>