<template>
  <div class="comment">
    <div class="comment__wrapper">
      <UiAvatar size="s" :name="item.author.name" />
      <div class="comment__info">
        <p class="caption-bold">{{ item.author.name }}</p>
        <p class="caption">{{ item.text }}</p>
        <p class="caption-2 comment__date">{{ item.createdAt }}</p>
      </div>
    </div>
    <UiRating :rating="item.rating" readonly />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    author: {
      avatar: string;
      name: string;
    },
    rating: number,
    text: string;
    createdAt: string;
  }
}>()
</script>

<style scoped lang="scss">
.comment {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid $neutral-6;

  &__wrapper {
    display: flex;
    gap: 16px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__date {
    color: $neutral-4;
  }
}
</style>