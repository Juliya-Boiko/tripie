<template>
  <section class="faq">
    <div class="faq__header">
      <p class="faq__subtitle hairline-small">LEARN HOW TO GET STARTED</p>
      <h2 class="heading-h2">Do you have some Questions?</h2>
      <p class="body-3 faq__subtitle">Welcome to your new go-to source for aftermarket auto parts and accessories.</p>
    </div>
    
    <div class="faq__list">
      <UiFaqAccordion 
        v-for="(item, idx) in list"
        :key="idx"
        :title="item.title"
        :text="item.text"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  {
    title: 'When will my order ship?',
    text: "We're always working to get your orders on their way to you as quickly as we can. Most orders will be dispatched within 2-4 business days, though there may be some delays around sales and peak periods. You'll get a notification when your order has started its journey."
  },
  {
    title: 'When will my order ship?',
    text: "We're always working to get your orders on their way to you as quickly as we can. Most orders will be dispatched within 2-4 business days, though there may be some delays around sales and peak periods. You'll get a notification when your order has started its journey."
  },
  {
    title: 'When will my order ship?',
    text: "We're always working to get your orders on their way to you as quickly as we can. Most orders will be dispatched within 2-4 business days, though there may be some delays around sales and peak periods. You'll get a notification when your order has started its journey."
  },
  {
    title: 'When will my order ship?',
    text: "We're always working to get your orders on their way to you as quickly as we can. Most orders will be dispatched within 2-4 business days, though there may be some delays around sales and peak periods. You'll get a notification when your order has started its journey."
  },
]
</script>

<style scoped lang="scss">
.faq {
  padding: 100px 160px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 32px;  
    text-align: center;
  }

  &__subtitle {
    color: $neutral-4;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;  
  }

  @media screen and (max-width: 1200px) {
    padding: 80px 40px;
  }
}
</style>