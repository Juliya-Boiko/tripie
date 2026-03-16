<template>
  <div class="card">
    <div class="card__image">
      <button type="button" class="card__button">
        <Icon 
          name="heart-outlined" 
          width="20px" 
          height="20px" 
          fill="currentColor" 
        />
      </button>
      <div to="/" class="card__link">Explore</div>
    </div>
    <div class="card__info">
      <div>
        <p class="body-3-medium card__title">Venice, Rome & Milan</p>
        <div class="card__block">
          <span class="caption-2 ">Karineside</span>
          <div class="hairline-small">
            <span class="card__price">$699</span>
            <span class="card__discount">$548</span>
          </div>
        </div>
      </div>
      <div class="card__line" />
      <div class="card__descr">
        <div class="caption-2 card__dates">
          <span>Tue, Jul 20</span><span>-</span><span>Fri, Jul 23</span>
        </div>
        <div class="card__rate caption-2-bold">
          <Icon 
            name="star-filled" 
            width="12px" 
            height="12px" 
            fill="currentColor" 
          />
        4.9</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;

  &__image {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;
    background: #23262F;
    border-radius: 16px 16px 0px 0px;
  }

  &__link {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 107px;
    height: 48px;
    background-color: $neutral-8;
    border-radius: 90px;
    color: $neutral-2;
    opacity: 0;
    transition: all 250ms ease-in-out;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 32px;
    height: 32px;
    right: 16px;
    top: 16px;
    background-color: $neutral-8;
    box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.1);
    border-radius: 50%;
    outline: none;
    color: $neutral-5;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 20px 8px;
    gap: 16px;
  }

  &__title {
    color: $neutral-1;
  }

  &__line {
    min-height: 1px;
    width: 100%;
    background-color: $neutral-6;
  }

  &__block {
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $neutral-3;
  }

  &__price {
    margin-right: 6px;
    color: $neutral-5;
  } 

  &__discount {
    color: $primary-green;
  }

  &__descr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $neutral-4;
  }

  &__dates {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__rate {
    display: flex;
    align-items: center;
    gap: 4px;
    color: $neutral-2;
  }

  &:hover {
    .card__link {
      display: flex;
      opacity: 1;
    }
  }
}
</style>