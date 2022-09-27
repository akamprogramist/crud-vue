import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "mainCounter",
  state: () => ({
    counter: 0,
    name: "Akam",
  }),
  getters: {
    doubleCounter: (state) => {
      state.counter * 2;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    },
  },
});
