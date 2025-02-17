<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
const route = useRoute();

useHead({
  title: () => route.meta.title || 'Admin Panel',
  titleTemplate: (title) => title ? `${title} - Admin Panel` : 'Admin Panel'
});
</script>
<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <div class="p-4">
        <slot /> 
      </div>
    </div>
  </div>
</template>
