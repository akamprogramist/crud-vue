<script setup>
import { ref, onMounted, watch } from "vue";
const items = ref([]);
const changeItem = ref(false);
watch(
  items,
  (newVal) => {
    localStorage.setItem("items", JSON.stringify(newVal));
  },
  { deep: true }
);
const removeItem = (item) => {
  items.value = items.value.filter((t) => t !== item);
};
const updateItem = (item) => {
  items,
    (newVal) => {
      localStorage.setItem("items", JSON.stringify(newVal));
    };
};
onMounted(() => {
  items.value = JSON.parse(localStorage.getItem("items")) || [];
});
</script>

<template>
  <div v-for="(item, index) in items" :key="index" class="items">
    <div v-if="!changeItem">
      <h1>{{ item.name }}</h1>
      <p>{{ item.description }}</p>
      <p>#{{ item.tags }}</p>
    </div>
    <div v-else>
      <input v-model="item.name" id="name" type="text" name="name" />
      <input
        v-model="item.description"
        id="description"
        type="text"
        name="description"
      />
      <input v-model="item.tags" id="tags" type="text" name="tags" />
    </div>
    <button @click="removeItem(item)">remove</button>
    <div v-if="changeItem">
      <button
        @click="
          updateItem(item);
          changeItem = !changeItem;
        "
      >
        update
      </button>
    </div>
    <div v-else>
      <button @click="changeItem = !changeItem">change</button>
    </div>
  </div>
</template>
