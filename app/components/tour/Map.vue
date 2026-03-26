<template>
  <div class="map">
    <h6 class="body-2-bold">Tour Map</h6>
    <div class="map__wrapper">
      <iframe
        :src="mapUrl"
        allowfullscreen
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const lat = 47.0105
const lng = 28.8638

const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`
</script>

<style scoped lang="scss">
.map {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;

  &__wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 24px;
    overflow: hidden;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>