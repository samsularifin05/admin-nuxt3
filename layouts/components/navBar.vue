<script setup>
import { IconMenu2 } from "@tabler/icons-vue";
import { useThemeStore } from "~/store/theme";

const themeStore = useThemeStore();
const { sidebar } = storeToRefs(themeStore);
const { setActiveSideBar } = themeStore;
</script>
<template>
  <header
    class="transition-content sticky top-0 z-20 ml-0 lg:ml-[17.5rem] flex h-[65px] items-center gap-1 border-b border-gray-200 bg-white/80 px-[15px] backdrop-blur backdrop-saturate-150 dark:border-dark-600 max-sm:justify-between"
  >
    <div class="flex items-center gap-2 flex-1">
      <div class="flex-1">
        <IconMenu2
          class="lg:hidden flex cursor-pointer"
          @click="setActiveSideBar(!sidebar)"
        />
      </div>
      <div>
        <div
          class="rounded-full bg-gray-200 w-8 h-8 items-center flex justify-center cursor-pointer"
        >
          H
        </div>
      </div>
    </div>
  </header>
</template>
