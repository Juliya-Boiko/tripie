<template>
  <header class="header">
    <UiLogo />
    <nav class="header__nav">
      <nuxt-link 
        v-for="route in navRoutes"
        :key="route.label"
        :to="route.path"
        class="caption header__link"
      >
        {{ route.label }}
      </nuxt-link>
    </nav>
    <LayoutUser />
  </header>
</template>

<script setup lang="ts">
import { navRoutes } from '~/constants';
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
  }

  &__link.router-link-active {
    color: $primary-green;
    font-weight: 700;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 40px;

    &__nav {
      gap: 16px;
    }
  }
}
</style>