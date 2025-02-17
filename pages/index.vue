<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
  title : "Dashboard"
});


</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p>Daftar pengguna akan ditampilkan di sini.</p>
  </div>
</template>
