<template>
  <div class="links">
    <input type="search" name="search" id="search" placeholder="search" />
  </div>

<div id="items">
    <label
      ><input type="radio" v-model="ItemStore.selectedCategory" value="All" />
      All</label
    >
    <label
      ><input
        type="radio"
        v-model="ItemStore.selectedCategory"
        value="gaming"
      />
      gaming</label
    >
    <label
      ><input
        type="radio"
        v-model="ItemStore.selectedCategory"
        value="design"
      />
      design</label
    >
    <label
      ><input
        type="radio"
        v-model="ItemStore.selectedCategory"
        value="programming"
      />
      programming</label
    >
  </div>
  <cardList />
</template>

<script setup>
import cardList from "../components/card-list.vue";
import { ItemsStore } from "../store/items";
const ItemStore = ItemsStore();
</script>
