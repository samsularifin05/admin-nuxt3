<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Users</h1>
    <p>Daftar pengguna akan ditampilkan di sini.</p>
  </div>
</template>
