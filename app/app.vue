<template>
  <header>Header</header>
    <main><NuxtPage /></main>
  <footer>Footer</footer>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()

onMounted(async () => {
  try {
    const test = await $client.user.test.query()
    console.log('HEllo', { test })
  } catch (err) {
    console.error(err)
  }
})
</script>