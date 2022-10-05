import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const ItemsStore = defineStore("Items", {
  state: () => ({
    items: useStorage("items", []),
    searchValue: "",
    selectedCategory: "All",
  }),
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
      if (this.selectedCategory !== "All") {
        return this.items.filter((item) => {
          return item.picked === this.selectedCategory;
        });
      }
      return this.items;
    },
    searchItems() {
      if (this.searchValue.trim().length > 0) {
        return this.items.filter((item) =>
          item.title
            .toLowerCase()
            .includes(this.searchValue.trim().toLowerCase())
        );
      }
      return this.items && this.filteredItems;
    },
  },
});
