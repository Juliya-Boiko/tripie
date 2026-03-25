<script setup lang="ts">
import { ref, computed } from 'vue';

// Configuration
const min = ref(1000);
const max = ref(5000);
const price = ref(1500);

// Calculate percentage for the track gradient and tooltip position
const percentage = computed(() => {
  return ((price.value - min.value) / (max.value - min.value)) * 100;
});
</script>

<template>
  <div class="price-range-container">
    <h2 class="title">PRICE RANGE</h2>

    <div class="slider-wrapper">
      <!-- Custom Tooltip -->
      <div 
        class="tooltip" 
        :style="{ left: `calc(${percentage}% + (${8 - percentage * 0.15}px))` }"
      >
        ${{ price }}
      </div>

      <!-- Range Input -->
      <input
        v-model.number="price"
        type="range"
        :min="min"
        :max="max"
        step="100"
        class="slider"
        :style="{ '--progress': percentage + '%' }"
      />

      <!-- Labels -->
      <div class="labels">
        <span>${{ min }}</span>
        <span>${{ max }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-range-container {
  font-family: sans-serif;
  width: 100%;
  max-width: 500px;
  padding: 20px;
}

.title {
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.slider-wrapper {
  position: relative;
  padding-top: 40px;
}

/* Tooltip Styling */
.tooltip {
  position: absolute;
  top: -15px;
  transform: translateX(-50%);
  background: #1a1a1a;
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 2;
}

.tooltip::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 7px solid #1a1a1a;
}

/* Slider Base */
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 10px;
  /* Dynamic track color using linear-gradient */
  background: linear-gradient(to right, #1a1a1a var(--progress), #e5e7eb var(--progress));
  outline: none;
}

/* Thumb Styling */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: #1a1a1a;
  border-radius: 50%;
  cursor: pointer;
  border: 4px solid #fff;
  box-shadow: 0 0 0 1px #e5e7eb;
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: #1a1a1a;
  border-radius: 50%;
  cursor: pointer;
  border: 4px solid #fff;
}

/* Labels Styling */
.labels {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: 700;
  font-size: 1.2rem;
  color: #1a1a1a;
}
</style>