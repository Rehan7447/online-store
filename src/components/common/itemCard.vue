<template>
  <div class="card">
    <div class="favorite-icon">
      <i class="far fa-heart"></i>
    </div>
    <img
      src="../../assets/productItem.png"
      alt="Nike Air Max 270 React"
      class="product-image"
    />
    <h2 class="product-title">Nike Air Max 270 React</h2>
    <div class="rating">
      <el-icon><Star /></el-icon>
      <el-icon><Star /></el-icon>
      <el-icon><Star /></el-icon>
      <el-icon><Star /></el-icon>
      <el-icon><Star /></el-icon>
    </div>
    <div class="price">
      <span class="current-price">299,43 le</span>
      <span class="original-price">534,33</span>
      <span class="discount">24% Off</span>
    </div>
    <button class="add-to-cart">
      <el-icon><ShoppingCart /></el-icon>
      <span>Add to Cart</span>
    </button>
  </div>
</template>

<script setup>
import { ShoppingCart, Star } from "@element-plus/icons-vue";
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  /* padding: 16px; */
  text-align: center;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.favorite-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  color: #ddd;
}

.favorite-icon:hover {
  color: red;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 8px;
}

.rating {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.rating i {
  color: #ffd700;
}

.price {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin-bottom: 16px;
}

.current-price {
  font-size: 22px;
  color: #007bff;
  font-weight: bold;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  margin: 4px 0;
}

.discount {
  color: #ff6347;
  font-weight: bold;
}

.add-to-cart {
  background-color: transparent;
  color: #ffa500;
  border: 1px solid #ffa500;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-to-cart span {
  margin-left: 8px;
}

.add-to-cart:hover {
  background-color: #ffa500;
  color: #fff;
}
</style>
