<template>
  <div class="aside">
    <div class="aside__header">
      <div class="heading-h4 aside__price">
        <span class="aside__full-price">$699</span>
        <span class="aside__discount">$548</span>
        <span class="body-3 aside__text">/person</span>
      </div>
      <div class="aside__reviews">
        <Icon 
          name="star-filled" 
          width="20px" 
          height="20px" 
          fill="#F6C92D" 
        />
        <span class="caption-bold">4.8</span>
        <span class="caption aside__text">(256 reviews)</span>
      </div>
    </div>

    <div class="aside__dates">
      <div class="aside__date">
        <Icon 
          name="calendar" 
          width="24px" 
          height="24px" 
          fill="#B1B5C3" 
        />
        <div>
          <p class="caption-2 aside__text">From</p>
          <p class="body-3-medium">May 15, 2024</p>
        </div>
      </div>
      <div class="aside__line" />
      <div class="aside__date">
        <Icon 
          name="calendar" 
          width="24px" 
          height="24px" 
          fill="#B1B5C3" 
        />
        <div>
          <p class="caption-2 aside__text">To</p>
          <p class="body-3-medium">May 15, 2024</p>
        </div>
      </div>

    </div>
    <div>
      <p class="hairline-small aside__subtitle">Activity</p>
      <UiSelectInput :options="options" value="Car" disabled />
    </div>
    <div>
      <p class="hairline-small aside__subtitle">Promo code</p>
      <UiTextInput :model-value="promoCode" select-view />
    </div>

    <div>
      <p class="hairline-small aside__subtitle">Guests (Adults)</p>
      <UiCounter 
        outlined
        :amount="guests.adults" 
        @update="(v) => guests.adults = v" 
      />
    </div>

    <div>
      <p class="hairline-small aside__subtitle">Guests (Children)</p>
      <UiCounter 
        outlined
        :amount="guests.children"
        @update="(v) => guests.children = v" 
      />
    </div>
    <div class="aside__total">
      <span class="caption">Total</span>
      <span class="heading-h4">$183.6</span>
    </div>
    <div class="aside__footer">
      <UiButton variant="neutral" size="m">
        Book now
        <Icon 
          name="bag" 
          width="16px" 
          height="16px" 
          fill="currentColor" 
        />
      </UiButton>
    </div>
  </div>
</template>


<script setup lang="ts">
import { activityOptions } from '~/constants';
const options = activityOptions.map((el) => ({ label: el.value, value: el.value }))
const promoCode = ref('')
const guests = ref({
  adults: 0,
  children: 0
})
</script>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  background: $neutral-8;
  border: 1px solid $neutral-6;
  box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.08);
  border-radius: 24px;
  max-height: fit-content;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__price {
    display: flex;
    gap: 12px;
    align-items: baseline;
  }

  &__full-price {
    position: relative;
    margin-right: 6px;
    color: $neutral-5;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: $neutral-5;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  } 

  &__discount {
    color: $neutral-1;
  }

  &__text {
    color: $neutral-4;
  }

  &__reviews {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__dates {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 8px;
    background: $neutral-7;
    border-radius: 16px;
    justify-content: space-between;
  }

  &__line {
    width: 1px;
    height: 48px;
    background-color: $neutral-6;
  }

  &__date {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 0;
  }

  :deep(.select-input) {
    max-width: unset;
  }

  &__subtitle {
    color: $neutral-5;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid $neutral-7;
    border-top: 1px solid $neutral-7;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }
}
</style>