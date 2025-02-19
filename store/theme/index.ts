import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    sidebar: false
  }),
  actions: {
    setActiveSideBar(value: boolean) {
      this.sidebar = value;
    }
  }
});
