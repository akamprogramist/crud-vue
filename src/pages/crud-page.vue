<script setup>
import { ItemsStore } from "../store/items";
import { ref } from "vue";
const ItemStore = ItemsStore();
const itemsInput = ref({
  title: "",
  description: "",
  picked: null,
});

const CreateItem = () => {
  ItemStore.addTodo(itemsInput.value);
  itemsInput.value = { title: "", description: "", picked: null };
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
      <input
        type="radio"
        id="programming"
        value="programming"
        v-model="itemsInput.picked"
      />
      <label for="programming">programming</label>

      <input
        type="radio"
        id="design"
        value="design"
        v-model="itemsInput.picked"
      />
      <label for="design">design</label>
      <input
        type="radio"
        id="gaming"
        value="gaming"
        v-model="itemsInput.picked"
      />
      <label for="gaming">gaming</label>
    </div>
    <input type="submit" value="Add Todo" />
  </form>
</template>
