<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { setItem,getItem } from '~/utils/localStorage'
import { ILoginResponse } from '~/interfaces/login-response.interface'

const user = useCookie('user')
const username = ref('')
const password = ref('')

definePageMeta({
  middleware: 'auth'
});

const login = () => {
  if (username.value === 'admin' && password.value === 'admin') {
    user.value = {username: username.value, role: 'admin'}
    navigateTo('/') 
  } else {
    alert('Login gagal!')
  }
}
</script>
