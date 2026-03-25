<template>
  <div class="layout">
    <LayoutHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
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

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  
  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>