<template>
  <div class="hairline avatar" :class="[size]">
    <img v-if="image" :src="image" :alt="name" class="avatar__image" />
    <span v-if="displayedName">{{ displayedName }}</span>
    <Icon
      v-else
      name="user"
      :width="size === 's' ? '16px' : '20px'"
      :height="size === 's' ? '16px' : '20px'"
      fill="currentColor"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: 's' | 'm'
  image?: string
  name?: string
}>()

const displayedName = computed(() => {
  if (!props.name) return ''
  return props.name.split(' ').map((w) => w[0]).join('')
})
</script>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  background-color: $primary-blue;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $neutral-8;

  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  &.s {
    width: 40px;
    height: 40px;
  }

  &.m {
    width: 64px;
    height: 64px;
  } 
}
</style>