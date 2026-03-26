<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const is404 = props.error?.statusCode === 404

const goHome = () => {
  navigateTo('/')
}
</script>

<template>
  <div class="layout">
    <LayoutHeader />
    <main class="main">
      <div class="wrapper">
        <h1 class="heading-hero">{{ is404 ? '404' : 'Error' }}</h1>
        <p class="heading-h3">{{ is404 ? 'PAGE NOT FOUND' : error.message }}</p>
        <p v-if="is404" class="body-3 text">Sorry, the page you are looking for does not exist <br /> or has been moved.</p>
        <UiButton 
          variant="neutral" 
          size="m" 
          @click="goHome"
        >
          Back To Home
        </UiButton>
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px;
  }

  .wrapper {
    background-image: url('/error.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    max-width: 700px;
    height: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
  }

  .text {
   color: $neutral-4;
  }

  @media screen and (max-width: 1200px) {
    .main {
      padding: 40px;
    }
  }
}
</style>