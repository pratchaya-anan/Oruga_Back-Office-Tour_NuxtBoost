<template>
  <o-modal v-model:active="showModal" @close="$router.back()">
    <!-- Modal header -->
    <div class="flex justify-between mb-4 rounded-t sm:mb-5">
      <div class="flex items-center">
        <img
          class="w-12 h-12 mr-2 rounded-full sm:mr-4"
          src="/imgs/redseamin.jpg"
          alt="Helene avatar"
        />
        <div>
          <h3
            class="text-lg font-bold text-gray-900 md:text-xl dark:text-white"
          >
            บัวแดง ทะเลเสม็ด
          </h3>
          <p class="text-base font-light text-gray-500 dark:text-gray-400">
            Moderator
          </p>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
          @click="
            showModal = false;
            $router.back();
          "
        >
          <Icon
            aria-hidden="true"
            class="w-5 h-5"
            name="mdi:close-thick"
          ></Icon>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
    </div>
    <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
      <dl>
        <dt class="sr-only">Role</dt>
        <dd
          class="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400"
        >
          <svg
            class="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            ></path>
          </svg>
          Frontend Developer
        </dd>
        <dt class="sr-only">Location</dt>
        <dd
          class="flex items-center mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5"
        >
          <svg
            class="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          United States of America
        </dd>
        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">
          Email Adress
        </dt>
        <dd class="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
          helene@company.com
        </dd>
        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">
          Home Adress
        </dt>
        <dd class="mb-4 font-medium text-gray-900 sm:mb-5 dark:text-white">
          92 Miles Drive, Newark, NJ 07103, California, United States of America
        </dd>
        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">
          Phone Number
        </dt>
        <dd class="font-medium text-gray-900 dark:text-white">
          +1234 567 890 / +12 345 678
        </dd>
      </dl>
      <dl>
        <dt
          class="mb-2 font-semibold leading-none text-gray-900 dark:text-white"
        >
          Biography
        </dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
          Hello, I'm Helene Engels, USA Designer, Creating things that stand
          out, Featured by Adobe, Figma, Webflow and others, Daily design tips &
          resources, Exploring Web3.
        </dd>
        <dt
          class="mb-2 font-semibold leading-none text-gray-900 dark:text-white"
        >
          Social
        </dt>
        <dd class="inline-flex items-center space-x-1">
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:bed"></Icon>
          </NuxtLink>
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:face-woman-shimmer"></Icon>
          </NuxtLink>
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:van-utility"></Icon>
          </NuxtLink>
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:airplane"></Icon>
          </NuxtLink>
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:store-marker"></Icon>
          </NuxtLink>
          <NuxtLink
            to="."
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon class="w-6 h-6" name="mdi:food-fork-drink"></Icon>
          </NuxtLink>
        </dd>
      </dl>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3 sm:space-x-4">
        <button
          type="button"
          class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-1 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Edit
        </button>
        <button
          type="button"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Preview
        </button>
      </div>
      <button
        type="button"
        class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-1.5 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Delete
      </button>
    </div>
  </o-modal>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const showModal = ref(true);

onMounted(() => {
  initFlowbite();
});
</script>
