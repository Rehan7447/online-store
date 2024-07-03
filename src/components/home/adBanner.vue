<template>
  <el-carousel>
    <el-carousel-item v-for="item in banners" :key="item">
      <img :src="item" class="bannerImg" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import adBanner from "../../assets/advsTemp.png";

const banners = [adBanner, adBanner];
</script>

<style scoped>
:deep(.el-carousel__container) {
  height: 366px;
}

.bannerImg {
  width: 100%;
  height: 366px;
  border-radius: 5px;
}
</style>
