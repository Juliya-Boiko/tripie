<template>
  <div class="slider-wrapper">

   <div class="track">
    <div
      class="progress"
      :style="{ width: percent + '%' }"
    />
  </div>

    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="onInput"
      class="slider"
    />

  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    step?: number
  }>(),
  {
    min: 1000,
    max: 5000,
    step: 100
  }
)

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void
}>()

const percent = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", Number(target.value))
}
</script>

<style scoped lang="scss">
.slider-wrapper {
  position: relative;
  height: 26px;
}

/* base track */

.track {
  position: absolute;
  width: 100%;
  height: 12px;
  background: #ddd;
  border-radius: 20px;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}

.progress {
  position: absolute;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    black 40%,
    black 100%
  );

  border-radius: 20px;
}

/* invisible input */

.slider {
  position: absolute;
  width: 100%;
  height: 26px;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

/* thumb */

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: black;
}

.slider::-moz-range-thumb {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: black;
}
</style>