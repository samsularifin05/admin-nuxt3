<script setup lang="ts">
import { IconLock, IconMail } from "@tabler/icons-vue";
import type { ILoginResponse } from "~/interface/ILoginResponse";

const user = useCookie<ILoginResponse>("user");
const username = ref("");
const password = ref("");

definePageMeta({
  middleware: "auth"
});
useHead({
  title: () => "Login - Admin Panel"
});

const login = () => {
  if (username.value === "admin" && password.value === "admin") {
    user.value = {
      token: "123",
      user: {
        id: 1,
        name: "Samsul",
        email: "samsul026@gmail.com",
        role: "ADMIN"
      }
    };
    navigateTo("/");
  } else {
    alert("Login gagal!");
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="w-full max-w-[26rem] p-4 sm:px-5">
      <div
        class="relative break-words card border border-gray-200 dark:border-dark-600 print:border-0 mt-5 rounded-lg p-5 lg:p-7"
      >
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <form @submit.prevent="login">
          <div class="space-y-4">
            <div class="">
              <label><span>Username</span></label>
              <div class="relative mt-1.5">
                <input
                  v-model="username"
                  class="pl-9 w-full p-1 outline-none rounded border peer border-gray-300 hover:border-gray-400 focus:border-primary-600"
                  id="tl-:r1r:-input"
                  placeholder="Enter Username"
                  type="text"
                />
                <div
                  class="absolute top-0 flex h-full w-9 items-center justify-center transition-colors text-gray-400 peer-focus:text-primary-600"
                >
                  <IconMail />
                </div>
              </div>
            </div>
            <div class="input-root">
              <label><span>Password</span></label>
              <div class="relative mt-1.5">
                <input
                  v-model="password"
                  class="pl-9 w-full p-1 outline-none rounded border peer border-gray-300 hover:border-gray-400 focus:border-primary-600"
                  placeholder="Enter Password"
                  type="password"
                />
                <div
                  class="absolute top-0 flex h-full w-9 items-center justify-center transition-colors text-gray-400 peer-focus:text-primary-600"
                >
                  <IconLock />
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between space-x-2">
              <label class="inline-flex items-center gap-2"
                ><input type="checkbox" /><span class="label"
                  >Remember me</span
                ></label
              ><a
                href="##"
                class="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                >Forgot Password?</a
              >
            </div>
          </div>

          <button
            type="submit"
            class="w-full py-2 mt-4 px-4 bg-black text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
