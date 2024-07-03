<template>
  <div class="custom_header">
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
</template>

<script setup>
import { ref } from "vue";
import { Setting } from "@element-plus/icons-vue";

const searchInput = ref("");
</script>

<style scoped>
.custom_header {
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
</style>
