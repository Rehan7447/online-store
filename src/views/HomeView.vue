<script setup>
import Header from "../components/common/header.vue";
import Banner from "../components/home/banner.vue";
import Explore from "../components/common/explore.vue";
import BestSellers from "../components/common/bestSeller.vue";
import SellBanner from "../components/home/sellBanner.vue";
import RecentlyViewed from "../components/common/recentlyViewed.vue";
import AdBanner from "../components/home/adBanner.vue";
import ContactForm from "../components/home/contactForm.vue";
</script>

<template>
  <div>
    <Header />
    <Banner />
    <Explore />
    <BestSellers />
    <SellBanner />
    <RecentlyViewed />
    <AdBanner />
    <ContactForm />
  </div>
</template>
