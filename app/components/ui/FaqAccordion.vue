<template>
  <div class="accordion">
    <button 
      type="button"
      class="accordion__toggle"
      @click="isOpen = !isOpen"
    >
      <p class="body-3-medium">{{ title }}</p>
      <div 
        class="accordion__chevron"
        :class="{ rotate: isOpen }"
      >
        <Icon 
          name="small-chevron-down" 
          width="24px" 
          height="24px" 
          fill="currentColor" 
        />
      </div>
    </button>
    <div v-if="isOpen" class="body-3 accordion__description">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()

const isOpen = ref(false)
</script>


<style scoped lang="scss">
.accordion {
  border-top: 1px solid $neutral-6; 
  display: flex;
  flex-direction: column;
  gap: 32px;  

  &__toggle {
    padding-top: 32px;
    display: flex;
    align-items: center;
    gap: 24px;
    background-color: transparent;
    border: none;
    outline: none;
    justify-content: space-between;
    width: 100%;
    gap: 16px;

  }

  &__description {
    color: $neutral-4;
  }

  &__chevron {
    color: $neutral-4;
    transition: all 250ms ease-in-out;

    &.rotate {
      transform: rotate(180deg);
    }
  }
}
</style>