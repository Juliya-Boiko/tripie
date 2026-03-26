<template>
  <div class="benefits">
    <h6 class="body-2-bold">Included/Excluded</h6>
    <div class="body-3 benefits__wrapper">
      <ul class="benefits__list">
        <li
          v-for="(item, idx) in included"
          :key="idx"
          class="benefits__item"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="30" rx="15" stroke="#F6C92D" stroke-width="2"/>
            <path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="#F6C92D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>
      <ul class="benefits__list">
       <li
          v-for="(item, idx) in excluded"
          :key="idx"
          class="benefits__item"
       >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="30" height="30" rx="15" stroke="#FD7FE9" stroke-width="2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1309 10.717C11.7404 10.3264 11.1072 10.3264 10.7167 10.717C10.3262 11.1075 10.3262 11.7407 10.7167 12.1312L14.2976 15.7121L10.7168 19.2929C10.3263 19.6834 10.3263 20.3166 10.7168 20.7071C11.1073 21.0976 11.7405 21.0976 12.131 20.7071L15.7118 17.1263L19.2926 20.7071C19.6832 21.0976 20.3163 21.0976 20.7069 20.7071C21.0974 20.3166 21.0974 19.6834 20.7069 19.2929L17.126 15.7121L20.7069 12.1312C21.0975 11.7407 21.0975 11.1075 20.7069 10.717C20.3164 10.3264 19.6833 10.3264 19.2927 10.717L15.7118 14.2979L12.1309 10.717Z" fill="#FD7FE9"/>
        </svg>
        <span>{{ item }}</span>
       </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const included = [
  'Specialized bilingual guide',
  'Private Transport',
  'Entrance fees (Cable and car and Moon Valley)',
  'Box lunch water, banana apple and chocolate'
]

const excluded = [
  'Departure Taxes',
  'Private Transport',
  '5 Star Accommodation',
  'Airport Transfers'
]
</script>

<style scoped lang="scss">
.benefits {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 0;
  border-bottom: 1px solid $neutral-6;

  &__wrapper {
    display: flex;
    gap: 32px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
    color: $neutral-3;
    max-width: 50%;
  }

  &__item {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>