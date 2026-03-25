<template>
  <form class="subscribe">
    <input
      class="caption subscribe__input"
      v-model="email"
      placeholder="Enter your email"
      type="email"
    />
    <button 
      type="button" 
      class="subscribe__button" 
      :disabled="!email"
      @click="submit"
    >
      <Icon
        name="arrow-right"
        width="24px"
        height="24px"
        fill="currentColor"
      />
    </button>
  </form>
</template>

<script setup lang="ts">

const email = ref('')

const submit = (e: Event) => {
  console.log(email.value)
}
</script>

<style scoped lang="scss">
.subscribe {
  position: relative;
  width: 100%;
  max-width: 255px;
 
  &__input {
    width: 100%;
    padding: 8px 48px 8px 24px;
    height: 48px;
    border: 2px solid $neutral-6;
    border-radius: 40px;
    background-color: transparent;
    outline: none;
    color: $neutral-2;

    &:focus, &:focus-visible {
      border-color: $primary-blue;
    }

    &::placeholder {
      color: $neutral-4;
      font-size: 14px;
      line-height: 24px;
    }
  }

  &__button {
    position: absolute;
    background-color: transparent;
    outline: none;
    border: none;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: $primary-green;
    color: $neutral-8;
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
}
</style>