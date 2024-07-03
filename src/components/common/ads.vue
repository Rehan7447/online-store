<template>
  <div class="adContainer">
    <div class="top">
      <div class="text">FS - Nike Air Max 270 React...</div>
      <div class="price">399,43 le</div>
    </div>
    <div class="img">
      <img src="../../assets/ad.png" alt="ad" />
    </div>
    <div class="bottomprice"><s>534,33 le</s> <span>24% Off</span></div>
  </div>
</template>

<style scoped>
.adContainer {
  width: 100%;
  height: 100%;
  max-height: 356px;
  background: rgba(251, 249, 249, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 27px 50px;
}

.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.text {
  font-size: 20px;
  max-width: 45%;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
}

.price {
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0.5px;
  color: rgba(64, 191, 255, 1);
}

.img {
  width: 100%;
  height: 100%;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottomprice {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: rgba(144, 152, 177, 1);
  margin-top: 10px;
}

span {
  font-weight: 700;
  color: rgba(250, 162, 54, 1);
  margin-left: 9px;
}
</style>
