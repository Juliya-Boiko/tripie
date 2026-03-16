<template>
  <section class="section">
    <div
      v-for="(item, idx) in cards"
      :key="idx"
      class="section__card"
    >
       <Icon
        :name="item.icon"
        width="32px"
        height="32px"
        fill="currentColor"
      />
      <div class="section__value heading-h3" :style="{ backgroundColor: item.color }">{{ item.value }}</div>
      <div class="body-3-medium">{{ item.label }}</div>
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
  padding: 100px 40px;
  background-color: $neutral-7;
  color: $neutral-2;
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  &__card {
    min-width: 248px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 24px;
    background-color: $neutral-8;
    border: 2px solid $neutral-7;
    border-radius: 24px;
    color: $neutral-2;
  }

  &__value {
    width: 140px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
  }

  @media screen and (max-width: 1200px) {
  }
}
</style>