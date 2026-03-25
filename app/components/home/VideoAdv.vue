<template>
  <section class="section">
    <div class="section__header">
      <div>
        <p class="hairline-small section__subtitle">fleet travel ui kit</p>
        <h2 class="heading-h2">Book a ticket <br /> & just leave</h2>
      </div>
      <UiButton variant="neutral" size="m">Book now</UiButton>
    </div>

    <div class="section__wrapper">
      <iframe
        src="https://www.youtube.com/embed/vYhlij1WdDg"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </section>
</template>


<script setup lang="ts">
import type { IconName } from '../icon/icons-list';

const cards: {
  icon: IconName;
  value: number;
  color: string;
  label: string
}[] = [
  {
    icon: 'user',
    value: 0,
    color: '#CDEDFF',
    label: 'Total Users',
  },
  {
    icon: 'map-marker-outlined',
    value: 0,
    color: '#FFEBDF',
    label: 'Total Tours',
  },
  {
    icon: 'globe',
    value: 0,
    color: '#FFD5FB',
    label: 'Social Likes',
  },
  {
    icon: 'star-outlined',
    value: 0,
    color: '#D6F4BF',
    label: '5 Star Ratings',
  },
]
</script>

<style scoped lang="scss">
.section {
  padding: 100px 80px;
  background-color: $neutral-7;
  color: $neutral-2;
  display: flex;
  flex-direction: column;
  gap: 80px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 80px;
  }

  &__subtitle {
    color: $neutral-4;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    border-radius: 16px;
    overflow: hidden;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 100px 40px;

    &__header {
      padding: 0;
    }
  }
}
</style>