<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    min?: number
    max?: number
    modelValue: number
  }>(),
  {
    min: 0,
    max: 5000,
  }
)

const percentage = computed(() => ((props.modelValue - props.min) / (props.max - props.min)) * 100);


const fillPercentage = computed(() => {
  const offset = 3.5; 
  return Math.max(0, percentage.value - offset);
});

const conePath = "M 2,48 C 1,48 1,52 2,52 L 96,62 C 99,62 99,38 96,38 L 2,48 Z";

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void
}>()

const onInput = (e: Event) => {
  const value = Number((e.target as HTMLInputElement).value)
  emit("update:modelValue", value)
}

const localValue = computed({
  get: () => props.modelValue,
  set: (v: number) => emit("update:modelValue", v)
})
</script>

<template>
  <div class="range">
    <div 
      class="range__tooltip caption-2-bold"
      :style="{ left: `calc(${percentage}% + (${12 - percentage * 0.24}px))` }"
    >
      <span>${{ props.modelValue }}</span>
      <svg class="range__arrow" width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.17157 3.17157L0 0H12L8.82843 3.17157C7.26633 4.73367 4.73367 4.73367 3.17157 3.17157Z" fill="#141416"/>
      </svg>
    </div>

    <div class="range__track">
      <!-- SVG Track -->
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="range__cone">
        <defs>
          <!-- Clip path to cut the black fill before the dot -->
          <clipPath id="coneClip">
            <rect x="0" y="0" :width="fillPercentage" height="100" />
          </clipPath>
        </defs>
        
        <!-- Background (Grey) -->
        <path :d="conePath" fill="#EDEEF2" />
        
        <!-- Active Fill (Black) -->
        <path :d="conePath" fill="#1A1A1A" clip-path="url(#coneClip)" />
      </svg>

      <input 
        v-model="localValue"
        type="range" 
        :min="min" 
        :max="max" 
        step="1" 
        class="range__input"
      />
    </div>

    <div class="range__labels caption-bold">
      <span>${{ min }}</span>
      <span>${{ max }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.range {
  position: relative;
  width: 256px;

  &__tooltip {
    position: absolute;
    top: -34px;
    display: inline-flex;
    align-items: flex-start;
    padding: 4px 8px;
    height: 28px;
    background: $neutral-1;
    border-radius: 8px;
    color: $neutral-8;
    z-index: 2;
    transform: translateX(-50%); 
  }
  
  &__arrow {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__track {
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
  }

  &__labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__input {
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    z-index: 5;
    margin: 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 24px;
      width: 24px;
      background-color: $neutral-1;
      border-radius: 50%;
      border: 4px solid $neutral-8;
      cursor: pointer;
    }
  }
 
  &__cone {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
}
</style>
