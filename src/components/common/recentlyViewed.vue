<template>
  <div class="recentlyViewed">
    <h2>Recently Viewed</h2>
    <div class="recentlyViewed-list">
      <ItemCard v-for="item in products" :key="item.id" :item="item" />
    </div>
    <div class="loadMore" @click="itemLength += 4">
      <p>Load More</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import ItemCard from "./itemCard.vue";
import { getAllProducts } from "@/service/requests";

const products = ref([]);
const itemLength = ref(4);

const fetchData = () => {
  getAllProducts()
    .then((response) => {
      products.value = response.data.data.products;
      products.value = products.value.slice(0, itemLength.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

watch(itemLength, () => {
  fetchData();
});

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.recentlyViewed {
  margin: 0 50px;
  text-align: center;
}

.recentlyViewed h2 {
  background: #fbf9f9;
  padding: 20px;
  width: max-content;
  margin: 20px auto;
}

.recentlyViewed-list {
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
