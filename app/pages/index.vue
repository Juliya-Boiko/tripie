<template>
  <div>
    <h1>Тури:</h1>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()

onMounted(async () => {
  try {
    const test = await $client.user.test.query()
    console.log('Test result ======>', { test })
  } catch (err) {
    console.error(err)
  }
})
</script>