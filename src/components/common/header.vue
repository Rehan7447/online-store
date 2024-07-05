<template>
  <div class="custom_header">
    <div class="headerUpper">
      <RouterLink to="/">
        <img src="../../assets/logo.svg" alt="logo" class="headerLogo" />
      </RouterLink>
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
      <RouterLink class="headerButton" to="/login" v-if="!isLoggedIn"
        >Sign In</RouterLink
      >
      <RouterLink class="headerButton" to="/login" v-else @click="logout"
        >Logout</RouterLink
      >
      <div class="cartHolder">
        <el-badge :value="0" class="cartBadge">
          <img src="../../assets/cart.svg" alt="cart" />
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
          <template #title>Categories</template>
          <el-menu v-if="categories.length > 0">
            <el-menu-item
              v-for="category in categories"
              :key="category.id"
              :index="category.id"
            >
              <RouterLink :to="'/category/' + category.id" class="sub-category">
                <img :src="category.thumbnail" :alt="category.name" />
                <span>{{ category.name }}</span>
              </RouterLink>
            </el-menu-item>
          </el-menu>
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
import { onBeforeMount, onMounted, ref } from "vue";
import { Setting } from "@element-plus/icons-vue";
import { RouterLink } from "vue-router";
import { getAllCategories } from "@/service/requests";
import { ElMessage } from "element-plus";

const searchInput = ref("");
const categories = ref([]);
const isLoggedIn = ref(true);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  isLoggedIn.value = false;
  ElMessage.success("Logged out successfully");
};

onBeforeMount(() => {
  if (localStorage.getItem("token")) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

onMounted(() => {
  getAllCategories()
    .then((response) => {
      categories.value = response.data.data.categories;
    })
    .catch((error) => {
      console.log(error);
    });
});
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
  color: white;
  text-align: center;
  line-height: 48px;
  text-decoration: none;
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

.sub-category {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  text-decoration: none;
}

.sub-category img {
  width: 20px;
  height: 20px;
}

.sub-category span {
  font-size: 18px;
  font-weight: 500;
  color: black;
}
</style>
