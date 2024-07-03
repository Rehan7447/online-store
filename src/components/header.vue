<template>
  <div class="custom_header">
    <div class="headerUpper">
      <img src="../assets/logo.svg" alt="logo" class="headerLogo" />
      <el-input
        v-model="searchInput"
        style="max-width: 600px"
        placeholder="What do you search for?"
        class="headerSearch"
      >
        <template #append>
          <el-button class="searchButton">Search</el-button>
        </template>
      </el-input>
      <el-button type="primary" class="headerButton">Sign In</el-button>

      <div class="cartHolder">
        <el-badge :value="2" class="cartBadge">
          <img src="../assets/cart.svg" alt="cart" />
        </el-badge>
        <span>Cart</span>
      </div>
      <div class="settings">
        <el-icon><Setting /></el-icon>
      </div>
    </div>
    <div class="headerBottom">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="black"
        active-text-color="#ffd04b"
      >
        <el-sub-menu index="1">
          <template #title>Categorie</template>
          <el-menu-item index="1-1">Handmade</el-menu-item>
          <el-menu-item index="1-2">Women</el-menu-item>
          <el-menu-item index="1-3">Men</el-menu-item>
          <el-menu-item index="1-4">Kids</el-menu-item>
          <el-menu-item index="1-5">Mobile & Tablets</el-menu-item>
          <el-menu-item index="1-6">Laptops</el-menu-item>
          <el-menu-item index="1-7">Sport Equipments</el-menu-item>
          <el-menu-item index="1-8">Car Equipments</el-menu-item>
          <el-menu-item index="1-9">Games</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">Home</el-menu-item>
        <el-menu-item index="3">Offers</el-menu-item>
        <el-menu-item index="4">Contact Us</el-menu-item>
        <el-button class="sellButton">Sell on I-Shoppin</el-button>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Setting } from "@element-plus/icons-vue";

const searchInput = ref("");
</script>

<style scoped>
.headerUpper {
  background: linear-gradient(138.87deg, #233a72 1.08%, #435789 81.68%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 135px;
  padding: 25px 160px;
}
.headerLogo {
  width: 109.31px;
  height: 86.99px;
}

.headerSearch {
  width: 100%;
  height: 61px;
  margin: 0 20px;
}

:deep(.headerSearch .el-input__wrapper) {
  background: transparent;
  color: white;
  padding-left: 8%;
}

:deep(.headerSearch input) {
  color: white;
}

:deep(.headerSearch .el-input-group__append) {
  background: white;
  color: black;
  width: 117px;
  font-size: 20px;
}

.headerButton {
  width: 124px;
  height: 48px;
  border-radius: 52px;
  background: linear-gradient(132.25deg, #faa236 0%, #ffaf4c 88.96%);
  border: 2px solid rgba(250, 162, 54, 1);
}

.cartHolder {
  color: white;
  cursor: pointer;
}

:deep(.cartHolder .el-badge__content) {
  background: #faa236;
  width: 20px;
  height: 20px;
  font-size: 10px;
}

.cartHolder span {
  margin-left: 10px;
}

.settings {
  color: white;
  cursor: pointer;
  width: 28px;
  height: 28px;
}

:deep(.el-menu--horizontal) {
  justify-content: space-between;
  align-items: center;
  padding: 25px 160px;
  height: 127px;
}

.sellButton {
  background: linear-gradient(132.25deg, #faa236 0%, #ffaf4c 88.96%);
  border: 2px solid rgba(250, 162, 54, 1);
  color: white;
  width: 338px;
  height: 70px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: center;
}

.sellButton:hover {
  background: linear-gradient(132.25deg, #ffaf4c 0%, #faa236 88.96%);
  color: white;
}
</style>
