<template>
  <section class="min-h-screen">
    <LayoutPageTitle>Guide Management / จัดการไกด์</LayoutPageTitle>
    <UiManageBar>
      <NuxtLink
        href="/create_tour/createtour"
        type="button"
        class="text-white bg-primary-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
      >
        <Icon class="mr-1 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        เพิ่มไกด์
      </NuxtLink>
    </UiManageBar>
    <UiSectionTabs></UiSectionTabs>
    <div
      class="grid gap-2 lg:gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
    >
      <UiCard v-for="item in 10" key="item">
        <div class="text-center text-gray-500 dark:text-gray-400">
          <div class="flex justify-end">
            <div
              class="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full"
            ></div>
          </div>
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Bonnie Avatar"
          />
          <Icon
            class="text-xl font-medium text-green-600 dark:text-white"
            name="mdi:gender-male"
          >
          </Icon>
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">สมชาย ใจหาญ</a>
          </h3>
          <p>ภาคกลาง</p>
          <ul class="flex justify-center mt-4 space-x-4">
            <li>
              <a
                data-tooltip-target="tooltip-facebook"
                href="#"
                class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon
                  class="w-6 h-6"
                  name="mingcute:facebook-fill"
                  color="#4267B2"
                ></Icon>
              </a>
              <div
                id="tooltip-facebook"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Finsoft
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a
                data-tooltip-target="tooltip-line"
                href="#"
                class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon
                  class="w-6 h-6"
                  name="ri:line-fill"
                  color="#06c755"
                ></Icon>
              </a>
              <div
                id="tooltip-line"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                finsoft2023
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li>
              <a
                data-tooltip-target="tooltip-email"
                href="#"
                class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon class="w-6 h-6" name="ic:round-email"></Icon>
              </a>
              <div
                id="tooltip-email"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                finsoft2023@finsoft.co.th
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <a
                data-tooltip-target="tooltip-phone"
                href="#"
                class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
              >
                <Icon class="w-6 h-6" name="icomoon-free:phone"></Icon>
              </a>
              <div
                id="tooltip-phone"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                096-365-6958
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
          </ul>
        </div>
      </UiCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
