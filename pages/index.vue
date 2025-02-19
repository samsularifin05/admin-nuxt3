<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  title: "Dashboard"
});
</script>

<template>
  <div
    class="main-content transition-content grid grid-cols-1 lg:ml-[17.5rem] ml-0"
  >
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p>Daftar pengguna akan ditampilkan di sini.</p>
  </div>
</template>
