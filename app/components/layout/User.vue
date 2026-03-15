<template>
  <div class="user">
    <template v-if="isAuth">
      <UiButton size="s" variant="light">Wishlist</UiButton>
      <LayoutNotification />
      <UiAvatar size="s" />
    </template>
    <template v-else>
      <UiButton size="s" variant="light">Login</UiButton>
      <UiButton size="s" variant="neutral">Sign up</UiButton>
    </template>
  </div>
</template>

<script setup lang="ts">
const isAuth = true
</script>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>