<template>
  <section class="reviews">
    <div class="reviews__header">
      <h3 class="body-1-bold">Add a review</h3>
      <div class="caption reviews__text">
        <p>Be the first to review <span class="reviews__accent caption-bold ">Spectacular views of Venice, Rome & Milan</span></p>
        <UiRating :rating="0" />
      </div>
    </div>
    <TourReviewForm />
    <div class="reviews__list">
      <div class="reviews__total">
        <span class="body-1-bold "> {{ list.length }} comments</span>
        <UiSelectInput  :options="sortCommentsOptions" />
      </div>
      <UiCommentCard 
        v-for="(item, idx) in list"
        :key="idx"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { sortCommentsOptions } from '~/constants';

const list = [
  {
    author: {
      avatar: '',
      name: 'Samson Heathcote'
    },
    rating: 3,
    text: 'We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.',
    createdAt: 'May 15, 2024'
  },
  {
    author: {
      avatar: '',
      name: 'Samson Heathcote'
    },
    rating: 3,
    text: 'We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.',
    createdAt: 'May 15, 2024'
  },
  {
    author: {
      avatar: '',
      name: 'Samson Heathcote'
    },
    rating: 3,
    text: 'We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.',
    createdAt: 'May 15, 2024'
  },
]
</script>

<style scoped lang="scss">
.reviews {
  padding: 100px 160px;
  background-color: $neutral-7;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__text {
    color: $neutral-4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__accent {
    color: $neutral-2;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1200px) {
    padding: 100px 40px;
  }
}
</style>