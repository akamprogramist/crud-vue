<script setup>
import { ref, watch } from "vue";
const items = ref([]);
const name = ref("");
const description = ref("");
const tags = ref(null);
watch(
  items,
  (newVal) => {
    localStorage.setItem("items", JSON.stringify(newVal));
  },
  { deep: true }
);
const addTodo = () => {
  items.value.push({
    name: name.value,
    description: description.value,
    tags: tags.value,
  });

  name.value = "";
  description.value = "";
  tags.value = null;
};
</script>
<template>
  <form id="new-todo-form" @submit.prevent="addTodo">
    <div>
      <label for="name">name</label>
      <input v-model="name" id="name" type="text" name="name" />
    </div>
    <div>
      <label for="description">description</label>
      <input
        v-model="description"
        type="text"
        name="description"
        id="description"
      />
    </div>
    <div>
      <label for="tags">tags</label>
      <input v-model="tags" type="text" name="tags" id="tags" />
    </div>
    <input type="submit" value="Add Todo" />
  </form>
</template>
