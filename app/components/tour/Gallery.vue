<template>
  <section class="gallery">
    <div class="gallery__div1">
      <button type="button" class="button-2 gallery__btn">
        <Icon
          name="image"
          width="16px"
          height="16px"
          fill="currentColor"
        />
        <span>Show all photos</span>
      </button>
    </div>
    <div class="gallery__div2"></div>
    <div class="gallery__div3"></div>
    <div class="gallery__div4"></div>
    <div class="gallery__div5"></div>
    <div class="gallery__div6"></div>
    <div class="gallery__div7"></div>
  </section>
</template>


<style scoped lang="scss">
.gallery {
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  
  div {
    background-color: $neutral-2;
    border-radius: 16px;
  } 

  &__div1 { 
    height: 344px;
    grid-area: 1 / 1 / 3 / 2; 
    position: relative;
  }

  &__div2 { 
    grid-area: 1 / 2 / 2 / 3; 
  }

  &__div3 { 
    grid-area: 2 / 2 / 3 / 3; 
  }

  &__div4 { 
    grid-area: 1 / 3 / 2 / 4; 
  }

  &__div5 { 
    grid-area: 2 / 3 / 3 / 4; 
  }

  &__div6 { 
    grid-area: 1 / 4 / 2 / 5; 
  }
  
  &__div7 { 
    grid-area: 2 / 4 / 3 / 5; 
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    position: absolute;
    height: 40px;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    background: $neutral-8;
    border-radius: 90px;
    border: none;
    outline: none;
    color: $neutral-2;
  }
}
</style>