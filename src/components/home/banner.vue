<template>
  <el-carousel>
    <el-carousel-item v-for="item in banners" :key="item">
      <img :src="item" class="bannerImg" />
    </el-carousel-item>
  </el-carousel>
  <div class="ads">
    <Ad />
    <Ad />
    <Ad />
  </div>
</template>

<script setup>
import Ad from "../common/ads.vue";
import bannerImg from "../../assets/offer.png";

const banners = [bannerImg];
</script>

<style scoped>
:deep(.el-carousel__container) {
  height: 654px;
}

:deep(.el-carousel__indicators) {
  display: none !important;
}

.bannerImg {
  width: 100%;
  height: 654px;
  border-radius: 5px;
}
.ads {
  display: flex;
  justify-content: space-between;
  margin: -50px 50px 20px;
  gap: 10px;
  position: relative;
}
</style>
