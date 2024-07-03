<template>
  <div class="explore">
    <div class="exploreHeader">
      <h1>Explore</h1>
    </div>
    <div class="exploreCategories">
      <div class="category">
        <img src="../../assets/explore/shipping.svg" alt="shipping" />
        <p>Free Shipping</p>
      </div>
      <div class="category">
        <img src="../../assets/explore/sales.svg" alt="Flash Sales" />
        <p>Flash Sales</p>
      </div>
      <div class="category">
        <img src="../../assets/explore/bills.svg" alt="Recharging and Bills" />
        <p>Recharging and Bills</p>
      </div>
      <div class="category">
        <img src="../../assets/explore/points.svg" alt="Points" />
        <p>Points</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.explore {
  margin-top: 50px;
  text-align: center;
}

.exploreHeader {
  background: #fbf9f9;
  padding: 20px;
  width: min-content;
  margin: 0 auto;
}

.exploreCategories {
  background-image: url("../../assets/explore/explore-des.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  min-height: 320px;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24.3%;
}
</style>
