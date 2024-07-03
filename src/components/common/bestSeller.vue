<template>
  <div class="best-seller">
    <h2>Best Seller</h2>
    <div class="best-seller-list">
      <ItemCard v-for="i in 8" :key="i" />
    </div>
    <div class="loadMore">
      <p>Load More</p>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "./itemCard.vue";
</script>

<style scoped>
.best-seller {
  margin: 0 50px;
  text-align: center;
}

.best-seller h2 {
  background: #fbf9f9;
  padding: 20px;
  width: max-content;
  margin: 20px auto;
}

.best-seller-list {
  display: flex;
  justify-content: center;
  gap: 34px;
  flex-wrap: wrap;
}

.loadMore {
  margin-top: 20px;
}

.loadMore p {
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  cursor: pointer;
  width: max-content;
  margin: 50px auto 20px;
}
</style>
