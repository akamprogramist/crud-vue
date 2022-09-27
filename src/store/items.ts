import { defineStore } from "pinia";

export const ItemsStore = defineStore({
  id: "Items",
  state: () => ({
    items: [],
    name: "",
    description: "",
    tags: null,
  }),
  // start from the watchers
});
