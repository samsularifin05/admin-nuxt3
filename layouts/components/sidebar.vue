<script setup>
import Simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import sidelinks from "./menu.tsx";
import { ref, nextTick } from "vue";
import { IconChevronRight } from "@tabler/icons-vue";

const activeIndex = ref(null); // null berarti tidak ada item yang aktif

const setActive = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index; // Toggle active state berdasarkan index
};

const beforeEnter = (el) => {
  el.style.height = "0px";
  el.style.opacity = "0";
};

const enter = (el, done) => {
  nextTick(() => {
    el.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out";
    el.style.height = el.scrollHeight + "px";
    el.style.opacity = "1";
    setTimeout(done, 300);
  });
};

const leave = (el, done) => {
  el.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out";
  el.style.height = "0px";
  el.style.opacity = "0";
  setTimeout(done, 300);
};
</script>
<template>
  <div
    class="lg:w-[17.5rem] w-0 fixed z-30 h-full ltr:border-r rtl:border-l border-gray-200"
  >
    <div class="flex grow relative flex-col bg-white dark:bg-dark-900">
      <header
        class="lg:flex hidden h-[61px] shrink-0 items-center justify-between p-6"
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
              </g></svg
          ></a>
          MAMANG ADMIN
        </div>
      </header>
    </div>

    <Simplebar class="h-screen">
      <div class="relative break-words print:border space-y-1">
        <div class="pt-2">
          <div v-for="(item, index) in sidelinks" :key="index">
            <div v-if="item.header" class="sticky top-0 z-10 bg-white px-6">
              <button
                class="flex items-center gap-3 pt-2 mb-2 text-xs font-medium uppercase tracking-wider text-gray-500 outline-none hover:text-gray-900 focus:text-gray-900"
              >
                <span>{{ item.header }}</span>
              </button>
            </div>
            <div class="flex flex-col space-y-1.5 mt-1.5">
              <div
                class="relative flex px-3"
                :class="{
                  'relative break-words print:border flex flex-1 flex-col px-3':
                    item.sub
                }"
              >
                <div
                  v-if="!item.sub"
                  class="group min-w-0 flex-1 rounded-md px-3 py-2 font-medium outline-none transition-colors ease-in-out"
                >
                  <div
                    data-menu-active="true"
                    class="flex min-w-0 items-center justify-between gap-2 text-[14px] tracking-wide"
                  >
                    <div class="flex min-w-0 items-center gap-3">
                      <component :is="item.icon" size="20" />
                      <span> {{ item.title }} </span>
                    </div>
                  </div>
                </div>
                <button
                  v-if="item.sub"
                  data-accordion-control="true"
                  class="group flex flex-1 items-center cursor-pointer justify-between rounded-lg px-3 py-2 font-medium outline-none transition-colors duration-300 ease-in-out text-gray-800 hover:bg-gray-100 hover:text-gray-950 focus:bg-gray-100 focus:text-gray-950 text-xs"
                  :class="{
                    '!bg-transparent !text-inherit hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit':
                      activeIndex === index
                  }"
                  type="button"
                  @click="setActive(index)"
                >
                  <div class="flex min-w-0 items-center gap-3 text-[14px]">
                    <component :is="item.icon" size="20" />
                    <span> {{ item.title }} </span>
                  </div>

                  <span
                    class="transition-transform duration-300 ease-in-out"
                    :class="{ 'rotate-90': activeIndex === index }"
                  >
                    <IconChevronRight size="18" />
                  </span>
                </button>

                <!-- SUB MENU -->
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @leave="leave"
                >
                  <div
                    v-if="item.sub && activeIndex === index"
                    class="relative break-words print:border overflow-hidden"
                    ref="submenu"
                  >
                    <div
                      v-for="(sub, subIndex) in item.sub"
                      class="flex flex-col space-y-1 px-3"
                      :key="subIndex"
                    >
                      <div class="relative flex">
                        <a
                          class="group min-w-0 flex-1 rounded-md px-3 py-2 font-medium outline-none transition-colors ease-in-out text-gray-800 hover:bg-gray-100 hover:text-gray-950 focus:bg-gray-100 focus:text-gray-950 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:hover:text-dark-50 dark:focus:bg-dark-300/10"
                          href="#"
                          data-discover="true"
                        >
                          <div
                            data-menu-active="false"
                            class="flex min-w-0 items-center justify-between gap-2.5"
                          >
                            <div class="flex min-w-0 items-center gap-2">
                              <div
                                class="opacity-50 transition-all size-2 rounded-full border border-current"
                              ></div>
                              <span class="truncate text-[14px]">{{
                                sub.title
                              }}</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Simplebar>
  </div>
</template>
