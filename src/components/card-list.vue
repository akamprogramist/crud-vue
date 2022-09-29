<script setup>
import { ref } from "vue";
import { ItemsStore } from "../store/items";
const ItemStore = ItemsStore();
const changeItem = ref(false);
const removeItem = (item) => {
  ItemStore.delete(item);
};
const updateItem = (item) => {
  ItemStore.update(item);
};
</script>

<template>
  <div v-for="item in ItemStore.items" class="items">
    <div v-if="!changeItem">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <p>#{{ item.tags }}</p>
    </div>
    <div v-else>
      <input v-model="item.title" id="name" type="text" name="name" />
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
