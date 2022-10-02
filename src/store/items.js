import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const ItemsStore = defineStore("Items", {
  state: () => {
    return {
      items: useStorage("items", []),
      selectedCategory: "All",
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
        useStorage("items", item);
      };
    },
  },

  getters: {
    filteredItems() {
      var picked = this.selectedCategory;

      if (picked === "All") {
        return this.items;
      } else {
        return this.items.filter((item) => {
          return item.picked === picked;
        });
      }
    },
  },
});
