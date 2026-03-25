<template>
  <footer class="footer">
    <div class="footer__wrapper">
       <div class="footer__logo"> 
        <UiLogo />
        <p class="caption footer__text">There are many variations of passages of available but it is the majority of suffered that a alteration in that some dummy text.</p>
      </div>
      <div class="footer__column">
        <h6 class="hairline">About</h6>
        <div class="footer__links caption-bold">
          <NuxtLink
            v-for="route in aboutRoutes"
            :key="route.label"
            :to="route.path"
          >
            {{ route.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="footer__column">
        <h6 class="hairline">Support</h6>
        <div class="footer__links caption-bold">
          <NuxtLink
            v-for="route in supportRoutes"
            :key="route.label"
            :to="route.path"
          >
            {{ route.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="footer__column">
        <h6 class="hairline">Join our community 🔥</h6>
        <SubscribeForm />
      </div>
    </div>
   <div class="caption-bold footer__info">
    Copyright © Tripie. All rights reserved
   </div>
  </footer>
</template>

<script setup lang="ts">
import { aboutRoutes, supportRoutes } from '~/constants';

</script>

<style scoped lang="scss">
.footer {
  padding: 80px 160px 24px 160px;
  border-top: 1px solid $neutral-6;
  background: $neutral-8;

  &__logo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid $neutral-6;
    gap: 10px;
    padding-bottom: 48px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: $neutral-4;
  }

  &__text {
    max-width: 256px;
    color: $neutral-4;
  }

  &__info {
    padding: 24px 0 0 0;
    text-align: center;
    color: $neutral-3;
  }

  @media screen and (max-width: 1200px) { 
    padding: 40px;

    &__wrapper {
      flex-direction: column;
      align-items: center;
      gap: 48px;
      padding-bottom: 40px;
    }

    &__text {
      max-width: unset;
      text-align: center;
    }

    &__column, &__links, &__logo {
      align-items: center;
    }
  }
}
</style>