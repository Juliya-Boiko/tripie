<template>
  <div class="accordion">
    <button 
      type="button"
      class="accordion__toggle"
      @click="isOpen = !isOpen"
    >
      <div 
        class="accordion__badge body-3"
        :class="{ open: isOpen }"
      >
        Day {{ String(index).padStart(2, '0') }}
      </div>
      <div class="accordion__title">
        <p class="body-3">{{ title }}</p>
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
      </div>
    </button>
    <div v-if="isOpen" class="caption accordion__description">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  title: string
  description: string
}>()

const isOpen = ref(false)
</script>


<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__toggle {
    display: flex;
    align-items: center;
    gap: 24px;
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  &__badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    background-color: $neutral-7;
    color: $neutral-4;
    border-radius: 40px;
    flex-shrink: 0;
    transition: all 250ms ease-in-out;

    &.open {
      background-color: $neutral-1;
      color: $neutral-8;
    }
  }

  &__title {
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
  }

  &__chevron {
    color: $neutral-4;
    transition: all 250ms ease-in-out;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  &__description {
    padding-left: 128px;
    color: $neutral-4;
  }
}
</style>