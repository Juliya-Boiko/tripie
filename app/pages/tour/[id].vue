<template>
  <div class="tour">
    <div class="tour__header">
      <div>
        <h1 class="heading-h2">Venice, Rome & Milan</h1>
        <div class="tour__details">
          <div class="tour__block"> 
            <Icon 
              name="star-filled" 
              width="20px" 
              height="20px" 
              fill="currentColor" 
            />
            <span>4.8</span>
            <span>(256 reviews)</span>
          </div>
          <div class="tour__block">
            <Icon 
              name="flag" 
              width="20px" 
              height="20px" 
              fill="currentColor" 
            />
            <span>Queenstown, Otago, New Zealand</span>
          </div>
        </div>
      </div>

      <div class="tour__actions">
        <button type="button" class="tour__action-btn">
          <Icon 
            name="location" 
            width="24px" 
            height="24px" 
            fill="currentColor" 
          />
        </button>
        <button type="button" class="tour__action-btn">
          <Icon 
            name="share" 
            width="24px" 
            height="24px" 
            fill="currentColor" 
          />
        </button>
        <button type="button" class="tour__action-btn">
          <Icon 
            name="heart-outlined" 
            width="24px" 
            height="24px" 
            fill="currentColor" 
          />
        </button>
      </div>
    </div>
    <TourGallery />
    <div class="tour__info">info</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.tour {
  padding: 40px 160px 100px 160px;

  &__header {
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__details {
    display: flex;
    align-items: center;
    gap: 20px;
    color: $neutral-4;
    padding-top: 16px;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__action-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 2px solid $neutral-6;
    border-radius: 50%;
    outline: none;
    color: $neutral-4;
  }
  /* 
  @media screen and (max-width: 1200px) {
    &__filters {
      width: calc(100% - 80px);
    }

    &__sorters {
      padding: 0 40px 48px 40px;
    }

    &__grid {
      padding: 0 40px 100px 40px;
      grid-template-columns: repeat(3, 1fr);
    }
  } */
}
</style>