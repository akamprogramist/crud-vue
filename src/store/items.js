import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const ItemsStore = defineStore("Items", {
  state: () => {
    return {
      items: useStorage("items", []),
    };
  },
  actions: {
    addTodo(item) {
      this.items.push({
        ...item,
      });
    },
  },
  removeItem(item) {
    this.item = this.item.filter((t) => t !== item);
  },
});
