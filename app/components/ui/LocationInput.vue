<template>
  <div ref="wrapperRef" class="location-input">
    <div class="location-input__wrapper">
      <div class="location-input__icon">
        <Icon
          name="location"
          width="24px"
          height="24px"
          fill="#B1B5C3"
        />
      </div>
      
      <div class="location-input__value">
        <div class="location-input__selected">
          <input 
            type="text" 
            v-model="location.city" 
            placeholder="Location" 
            class="body-2-bold location-input__input"
            @focus="isFocused = true"
            @blur="isFocused = false"
          >
          <button 
            v-if="location.city && location.country" 
            type="button" 
            class="location-input__clear"
            @mousedown.prevent="clearLocation"
          >
            <Icon
              name="cross-outlined"
              width="24px"
              height="24px"
              fill="currentColor"
            />
          </button>
        </div>
        <span class="body-3 location-input__label">Where are you going?</span>
      </div>
    </div>

    <div 
      v-if="isFocused && location && citiesList.length"
      class="location-input__dropdown"
    >
      <div 
        v-for="(item, idx) in citiesList"
        :key="idx"
        class="body-3 location-input__item"
        @mousedown.prevent="selectLocation(item)"
      >
        <div class="location-input__svg">
           <Icon
            name="map-marker-filled"
            width="16px"
            height="16px"
            fill="#777E90"
          />
        </div>
        {{ item.name }}, {{ item.country }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cities from "cities.json"
import { onClickOutside } from "@vueuse/core"

const wrapperRef = ref(null)
const isFocused = ref(false)
const location = ref({
  city: '',
  country: ''
})

const citiesList = ref<{ name: string, country: string }[]>([])


const selectLocation = (v: { name: string, country: string }) => {
  location.value.city = v.name
  location.value.country = v.country
  isFocused.value = false
}

watch(() => location.value.city, () => {
  if (location.value.city.length < 3) return
  const result = cities.filter((c) => c.name.toLowerCase().includes(location.value.city.toLowerCase()))
  citiesList.value = result
})

const clearLocation = () => {
  location.value.city = ''
  location.value.country = ''
}

onClickOutside(wrapperRef, () => {
  isFocused.value = false
  citiesList.value = []
})
</script>

<style scoped lang="scss">
.location-input {
  position: relative;

  &__wrapper {
    padding: 20px;
    display: flex;
    gap: 12px;
  }

  &__icon {
    padding: 4px;
  }

  &__value {
    display: flex;
    flex-direction: column;
  }

  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    color: $neutral-4;
  }

  &__clear {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    outline: none;
    color: $neutral-4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input {
    cursor: pointer;
    color: $neutral-2;
    height: 32px;
    border: none;
    outline: none;
    height: 32px;
    width: 100%;

    &::placeholder {
      font-size: 20px;
      line-height: 32px;
      font-weight: 700;
      color: $neutral-2;
    }
  }

  &__dropdown {
    width: 100%;
    position: absolute;
    bottom: 100px;
    max-height: 240px;
    overflow-y: auto;
    background-color: $neutral-8;
    padding: 8px;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    border-radius: 24px;
  }

  &__item {
    display: flex;
    gap: 12px;
    padding: 12px;
    align-items: center;
    color: $neutral-4;
    cursor: pointer;
    border-radius: 12px;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: $neutral-7;
      color: $neutral-2;
    }
  }

  &__svg {
    width: 32px;
    height: 32px;
    background: $neutral-8;
    border: 1px solid $neutral-6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
}
</style>