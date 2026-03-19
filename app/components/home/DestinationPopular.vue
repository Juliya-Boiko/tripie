<template>
  <section class="section">
    <p class="section__subtitle hairline-small">3 steps for the perfect trip</p>
    <h2 class="section__title heading-h2">Popular Destinations</h2>
    <div class="section__wrapper">
      <p class="section__text">An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
      <div class="section__controls">
        <button type="button" class="section__btn" @click="prev">
          <Icon
            name="arrow-left"
            width="24px"
            height="24px"
            fill="currentColor"
          />
        </button>
        <button type="button" class="section__btn" @click="next">
          <Icon
            name="arrow-right"
            width="24px"
            height="24px"
            fill="currentColor"
          />
        </button>
      </div>
    </div>

    <Carousel ref="carouselRef" v-model="currentSlide" v-bind="config">
      <Slide v-for="image in images" :key="image.id" class="slide">
        <UiDestinationCard />
      </Slide>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

const carouselRef = ref()
const currentSlide = ref(1)

const config = {
  // height: 200,
  itemsToShow: 3.5,
  gap: 32,
  wrapAround: true,
}

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
</script>


<style scoped lang="scss">
.section {
  padding: 100px 0 100px 160px;

  &__subtitle {
    color: $neutral-4;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  &__title {
    margin-bottom: 12px;
    color: $neutral-2;
  }

  &__wrapper {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    margin-bottom: 48px;
  } 

  &__text {
    color: $neutral-4;
    max-width: 734px;
  }

  &__controls {
    display: flex;
    padding-right: 160px;
    gap: 8px;
    align-items: center;
  }

  &__btn {
    width: 40px;
    height: 40px;
    background-color: transparent;
    outline: none;
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid $neutral-6;
  }

  /* 
  @media screen and (max-width: 1200px) {
    padding: 0 40px 80px 40px;
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  } */
}
</style>