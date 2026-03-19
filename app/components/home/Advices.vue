<template>
  <section class="section">
    <h2 class="section__title heading-h2">Travel Tips & Advice</h2>
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

    <Carousel 
      ref="carouselRef" 
      v-model="currentSlide" 
      v-bind="config"
      breakpoint-mode="carousel"
      snap-align="start"
      :breakpoints="{
        700: {
          itemsToShow: 2,
        },
        1200: {
          itemsToShow: 3
        }        
      }"
    >
      <Slide v-for="image in images" :key="image.id" class="slide">
        <UiTipCard />
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
  itemsToShow: 1,
  gap: 32,
  wrapAround: true,
}

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
</script>


<style scoped lang="scss">
.section {
  padding: 100px 160px;

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

  
  @media screen and (max-width: 1200px) {
    padding: 100px 40px;
  }
}
</style>