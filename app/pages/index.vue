<template>
  <div class="test">
   index page
  </div>
</template>

<script setup lang="ts">
const input = ref('')
const price = ref(1500)
</script>

<style scoped lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>