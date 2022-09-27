<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store/useCounter";

const mainCounter = useCounterStore();
const { addOne, reset } = mainCounter;

const { counter, name } = storeToRefs(mainCounter);
function add(value: number) {
  mainCounter.$patch((state) => (state.counter += value));
}
</script>
<template>
  <div>
    <h1>About this page</h1>
    <p>
      Lorem dolor sit amet consectetur adipisicing elit. Praesentium aut
      adipisci aliquid, consectetur
    </p>
    <router-link to="/" class="link"> Back to home </router-link>
  </div>
  <h1>{{ counter }}</h1>
  <button @click="addOne">add</button>
  <button @click="reset">reset</button>
  <button @click="add(10)">add by 10</button>
  <h1>{{ name }}</h1>
</template>
