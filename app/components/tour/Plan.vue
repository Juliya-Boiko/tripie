<template>
  <div class="plan">
    <h6 class="body-2-bold">Tour Plan</h6>
    <div class="plan__list">
      <UiPlanAccordion 
        v-for="(item, idx) in plan"
        :index="idx + 1"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const plan = [
  {
    title: 'Departure',
    description: 'Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.'
  },
  {
    title: 'The South Coast',
    description: 'Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.'
  },
  {
    title: ' Optional Activities',
    description: 'Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.'
  },
]
</script>

<style scoped lang="scss">
.plan {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 0;
  border-bottom: 1px solid $neutral-6;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>