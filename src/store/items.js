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
    delete(item) {
      this.items = this.items.filter((t) => t !== item);
    },
    update(item) {
      this.item = () => {
        useStorage("items",  item );
      };
    },
  },
});
