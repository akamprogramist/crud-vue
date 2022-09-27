<script setup>
import { ref, onMounted, watch } from "vue";
const items = ref([]);
watch(
  items,
  (newVal) => {
    localStorage.setItem("items", JSON.stringify(newVal));
  },
  { deep: true }
);
const removeTodo = (item) => {
  items.value = items.value.filter((t) => t !== item);
};
onMounted(() => {
  items.value = JSON.parse(localStorage.getItem("items")) || [];
});
</script>

<template>
  <div v-for="(item, index) in items" :key="index" class="items">
    <h1>{{ item.name }}</h1>
    <p>{{ item.description }}</p>
    <p>#{{ item.tags }}</p>
    <button @click="removeTodo(item)">remove</button>
    <button>change</button>
  </div>
</template>
