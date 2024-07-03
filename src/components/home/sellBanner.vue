<template>
  <el-carousel>
    <el-carousel-item v-for="item in banners" :key="item">
      <img :src="item" class="bannerImg" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import sellerBanner from "../../assets/sellbanner.png";

const banners = [sellerBanner, sellerBanner];
</script>

<style scoped>
:deep(.el-carousel__container) {
  height: 600px;
}

.bannerImg {
  width: 100%;
  height: 600px;
  border-radius: 5px;
}
</style>
