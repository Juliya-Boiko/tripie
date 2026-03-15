<template>
  <header class="header">
    <UiLogo />
    <nav class="header__nav">
      <nuxt-link 
        v-for="route in appRoutes"
        :key="route.label"
        :to="route.path"
        class="caption"
      >
        {{ route.label }}
      </nuxt-link>
    </nav>
    <LayoutUser />
  </header>
</template>

<script setup lang="ts">
import { appRoutes } from '~/constants';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  background: $neutral-8;
  border-bottom: 1px solid $neutral-6;
  padding: 0 160px;

  &__nav {
    display: flex;
    align-items: center;
    gap: 32px;
    color: $neutral-4;
    font-family: "DM Sans", sans-serif;
  }
}
</style>