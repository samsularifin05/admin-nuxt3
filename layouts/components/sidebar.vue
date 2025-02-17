<script setup>
import Simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import sidelinks from "./menu.tsx";
import { ref } from "vue";
import { IconChevronRight, IconChevronDown } from "@tabler/icons-vue";

const activeIndex = ref(null); // null berarti tidak ada item yang aktif

const setActive = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index; // Toggle active state berdasarkan index
};
</script>
<template>
  <div
    class="w-[17rem] dark:border-dark-600/80 ltr:border-r rtl:border-l border-gray-200 h-full"
  >
    <div class="flex grow relative flex-col bg-white dark:bg-dark-900">
      <header
        class="flex h-[61px] shrink-0 items-center justify-between ltr:pl-6 ltr:pr-3 rtl:pl-3 rtl:pr-6"
      >
        <div
          class="flex items-center justify-start gap-4 pt-3 sticky top-0 z-20"
        >
          <a href="/" data-discover="true"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="200.39"
              height="112.97"
              viewBox="0 0 200.39 112.97"
              class="size-10 text-primary-600 dark:text-primary-400"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M199.54,103.9l-60.27-101a6,6,0,0,0-8.87-1.64L2.3,102.26A6,6,0,0,0,6,113H28.33a6,6,0,0,0,3.72-1.29l91.24-71.9a6,6,0,0,1,8.86,1.64L154,78.06a6,6,0,0,1-5.16,9.08H121.13a6,6,0,0,0-3.69,1.26L99.68,102.24A6,6,0,0,0,103.37,113h91A6,6,0,0,0,199.54,103.9Z"
                    style="fill: currentcolor"
                  ></path>
                </g>
              </g></svg></a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="118"
            height="31"
            fill="none"
            viewBox="0 0 118 31"
            class="h-5 w-auto text-gray-800 dark:text-dark-50"
          >
            <path
              fill="currentColor"
              d="M.76 6.28v-5.2H23.9v5.2h-8.54V30H9.5V6.28H.76ZM31.087 30.4c-1.32 0-2.506-.247-3.56-.74-1.053-.493-1.886-1.207-2.5-2.14-.613-.947-.92-2.093-.92-3.44 0-2.267.847-3.987 2.54-5.16 1.694-1.187 4.367-1.8 8.02-1.84l2.58-.04V15.8c0-.947-.28-1.673-.84-2.18-.546-.52-1.4-.773-2.56-.76a5.585 5.585 0 0 0-2.44.6c-.76.387-1.28 1.06-1.56 2.02h-4.86c.08-1.493.514-2.72 1.3-3.68.787-.973 1.854-1.693 3.2-2.16 1.36-.48 2.9-.72 4.62-.72 2.12 0 3.82.267 5.1.8 1.28.52 2.207 1.273 2.78 2.26.574.973.86 2.133.86 3.48V30h-4.88l-.48-3.56c-.706 1.493-1.593 2.527-2.66 3.1-1.053.573-2.3.86-3.74.86Zm1.96-3.84c.534 0 1.047-.093 1.54-.28.507-.2.954-.46 1.34-.78.4-.333.72-.707.96-1.12.24-.413.36-.84.36-1.28v-3.06l-2.1.04a10.99 10.99 0 0 0-2.72.36c-.84.213-1.52.567-2.04 1.06-.506.493-.76 1.16-.76 2 0 .96.334 1.713 1 2.26.667.533 1.474.8 2.42.8Zm21.25-17.24V30h-5.58V9.32h5.58Zm.06-8.22v5.26h-5.68V1.1h5.68Zm12.35 29.26c-1.52 0-2.727-.18-3.62-.54-.894-.36-1.554-.833-1.98-1.42-.427-.6-.7-1.26-.82-1.98-.12-.733-.18-1.473-.18-2.22V.28h5.72v23.2c0 .76.16 1.38.48 1.86.333.467.953.753 1.86.86l.98.06v3.6c-.4.133-.807.247-1.22.34-.414.107-.82.16-1.22.16Z"
            ></path>
            <path
              fill="currentColor"
              fill-opacity="0.7"
              d="M80.822 30.4a9.43 9.43 0 0 1-2.84-.44 8.379 8.379 0 0 1-2.52-1.3 6.7 6.7 0 0 1-1.84-2.12c-.454-.84-.68-1.813-.68-2.92V9.32h5.84v13.56c0 .96.313 1.747.94 2.36.626.613 1.546.92 2.76.92 1.146 0 2.053-.293 2.72-.88.68-.6 1.02-1.433 1.02-2.5V9.32h5.78V30h-4.4l-.68-4.1c-.24 1.213-.694 2.147-1.36 2.8a5.2 5.2 0 0 1-2.26 1.32c-.84.253-1.667.38-2.48.38Zm36.634-.4h-6.1l-4.94-6.74-4.96 6.74h-6.12l7.96-10.78-7.26-9.9h6.1l4.3 5.8 4.28-5.8h6.12l-7.32 9.9 7.94 10.78Z"
            ></path>
          </svg>
        </div>
      </header>
    </div>

    <div class="relative break-words print:border space-y-1">
      <div class="pt-2">
        <Simplebar class="h-screen">
          <div v-for="(item, index) in sidelinks" :key="index">
            <div
              v-if="item.header"
              class="sticky top-0 z-10 bg-white px-6 dark:bg-dark-900"
            >
              <button
                class="flex items-center gap-3 pt-2 mb-2 text-xs font-medium uppercase tracking-wider text-gray-500 outline-none hover:text-gray-900 focus:text-gray-900 dark:text-dark-300 dark:hover:text-dark-50 dark:focus:text-dark-50"
              >
                <span>{{ item.header }}</span>
              </button>
            </div>
            <div class="flex flex-col space-y-1.5">
              <div
                class="relative flex px-3"
                :class="{
                  'relative break-words print:border flex flex-1 flex-col px-3':
                    item.sub
                }"
              >
                <div
                  v-if="!item.sub"
                  class="group min-w-0 flex-1 rounded-md px-3 py-2 font-medium outline-none transition-colors ease-in-out text-primary-600 dark:text-primary-400"
                >
                  <div
                    data-menu-active="true"
                    class="flex min-w-0 items-center justify-between gap-2 text-[12px] tracking-wide"
                  >
                    <div class="flex min-w-0 items-center gap-3">
                      <component :is="item.icon" size="18" />
                      <span> {{ item.title }} </span>
                    </div>
                  </div>
                </div>

                <button
                  v-if="item.sub"
                  data-accordion-control="true"
                  class="group flex flex-1 items-center cursor-pointer justify-between rounded-lg px-3 py-2 font-medium outline-none transition-colors duration-300 ease-in-out text-gray-800 hover:bg-gray-100 hover:text-gray-950 focus:bg-gray-100 focus:text-gray-950 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:hover:text-dark-50 dark:focus:bg-dark-300/10 text-xs"
                  type="button"
                  @click="setActive(index)"
                >
                  <div class="flex min-w-0 items-center gap-3">
                    <component :is="item.icon" size="18" />
                    <span> {{ item.title }} </span>
                  </div>
                  <IconChevronRight
                    class="transition-transform duration-300 transform"
                    v-if="activeIndex !== index"
                    size="18"
                  />
                  <IconChevronDown
                    v-if="activeIndex === index"
                    size="18"
                    class="transition-transform duration-300 transform rotate-360"
                  />
                </button>
              </div>
            </div>
          </div>
        </Simplebar>
      </div>
    </div>
  </div>
</template>
