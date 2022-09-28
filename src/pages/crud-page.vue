<script setup>
import { ItemsStore } from "../store/items";
import { ref } from "vue";
const ItemStore = ItemsStore();

const itemsInput = ref({
  title: "",
  description: "",
  tags: null,
});
const CreateItem = () => {
  ItemStore.addTodo(itemsInput.value);
  itemsInput.value = { title: "", description: "", tags: null };
};
</script>
<template>
  <form id="new-todo-form" @submit.prevent="CreateItem">
    <div>
      <label for="name">name</label>
      <input v-model="itemsInput.title" id="name" type="text" name="name" />
    </div>
    <div>
      <label for="description">description</label>
      <input
        v-model="itemsInput.description"
        type="text"
        name="description"
        id="description"
      />
    </div>
    <div>
      <label for="tags">tags</label>
      <input v-model="itemsInput.tags" type="text" name="tags" id="tags" />
    </div>
    <input type="submit" value="Add Todo" />
  </form>
</template>
