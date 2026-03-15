<template>
  <div class="notification">
    <button type="button" class="notification__button">
      <Icon
        name="bell"
        width="24px"
        height="24px"
        fill="currentColor"
      />
      <span v-if="showDot" class="notification__dot" />
    </button>
  </div>
</template>

<script setup lang="ts">
const showDot = ref(true)
</script>

<style scoped lang="scss">
.notification {

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: none;
    color: $neutral-4;
    position: relative;
    width: 40px;
    height: 40px;
  }

  &__dot {
    display: flex;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: $primary-green;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }
}
</style>