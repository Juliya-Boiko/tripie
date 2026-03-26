<template>
  <form class="form">
    <textarea name="" id="" class="body-3 form__input" placeholder="Share your thoughts"></textarea>
    <UiButton variant="neutral" size="s" class="form__btn">
      <span>Post it!</span>
      <Icon 
        name="arrow-right" 
        width="16px" 
        height="16px" 
        fill="currentColor" 
      />
    </UiButton>
  </form>
</template>

<style scoped lang="scss">
.form {
  position: relative;
  
  &__input {
    min-height: 180px;
    width: 100%;
    border: 2px solid $neutral-6;
    border-radius: 12px;
    background-color: transparent;
    outline: none;
    color: $neutral-2;
    padding: 16px 132px 16px 16px;
    resize: none;
    font-family: inherit;

    &::placeholder {
      color: $neutral-4;
    }
  }

  &__btn {
    position: absolute;
    bottom: 20px;
    right: 16px;
  }
}
</style>