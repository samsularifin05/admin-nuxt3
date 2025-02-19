<script setup lang="ts">
import Sidebar from "./components/sidebar.vue";
import Navbar from "./components/navBar.vue";
import MainContent from "./components/mainContent.vue";
const route = useRoute();

useHead({
  title: () => route.meta.title || "Admin Panel",
  titleTemplate: (title) => (title ? `${title} - Admin Panel` : "Admin Panel")
});
</script>
<template>
  <div class="flex">
    <Sidebar />
    <!-- <div
      class="fixed inset-0 z-20 bg-gray-900/50 backdrop-blur transition-opacity dark:bg-black/40"
    ></div> -->
    <div class="flex-1">
      <Navbar />
      <MainContent>
        <slot />
      </MainContent>
    </div>
  </div>
</template>
