<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard
          ><div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="w-full relative">
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                class="absolute top-0 right-0 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                type="button"
              >
                <Icon
                  aria-hidden="true"
                  class="w-8 h-8"
                  name="mdi:dots-vertical"
                ></Icon>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownDots"
                class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <MenuDropItem>พิมพ์ใบ Order</MenuDropItem>
                  <MenuDropItem>พิมพ์ใบ Tag</MenuDropItem>
                  <MenuDropItem>พิมพ์ใบ Sticker</MenuDropItem>
                  <MenuDropItem>ใบเสนอราคา</MenuDropItem>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Earnings</a
                    >
                  </li>
                </ul>
                <div class="py-2">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Separated link</a
                  >
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-bold dark:text-white">
                ทัวร์เกาะเสม็ด เสร็จทุกราย
              </h2>
              <ul class="mt-2 space-y-1">
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                  กาญจนบุรี-เพชรบุรี
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="line-md:moon-filled-to-sunny-filled-transition"
                  ></Icon>
                  5 วัน 4 คืน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  16/04/2566 &#32;
                  <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                  &#32; 16/04/2566
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:people-audience-24-filled"
                  ></Icon>
                  35 คน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:comment-error-16-filled"
                  ></Icon>
                  สนุกดี
                </li>
              </ul>
            </div>
          </div>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <address
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">Email address</div>
                <a
                  class="text-sm font-medium text-gray-900 dark:text-white"
                  href="mailto:webmaster@flowbite.com"
                  >yourname@flowbite.com</a
                >
                <div class="mt-4">Home address</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  92 Miles Drive, Newark, NJ 07103, California, <br />United
                  States of America
                </div>
                <div class="mt-4">Phone number</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  +00 123 456 789 / +12 345 678
                </div>
              </address>
            </div>
          </div>
          <div>
            <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">
              Other Stuff
            </h3>
            <div class="flex space-x-3">
              <svg
                class="w-6 h-6"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z"
                  fill="#DC395F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z"
                  fill="white"
                />
              </svg>
              <Icon
                class="w-6 h-6"
                v-if="!showItemsPanel"
                @click="showItemsPanel = true"
                name="mdi:bed"
              ></Icon>
              <Icon class="w-6 h-6" name="mdi:face-woman-shimmer"></Icon>
              <Icon class="w-6 h-6" name="mdi:van-utility"></Icon>
              <Icon class="w-6 h-6" name="mdi:airplane"></Icon>
              <Icon class="w-6 h-6" name="mdi:image-filter-hdr"></Icon>
              <Icon class="w-6 h-6" name="mdi:store-marker"></Icon>
              <Icon class="w-6 h-6" name="mdi:food-fork-drink"></Icon>
              <Icon class="w-6 h-6" name="mdi:calendar-time"></Icon>
            </div>
          </div>
        </UiCard>
      </div>
      <div class="grid grid-cols-1 col-span-2 gap-4">
        <div class="flex flex-wrap gap-4">
          <UiCard v-for="item in 20" key="item" class="flex-1">
            <div class="flex justify-end">
              <Icon
                class="text-xl font-medium text-green-600 dark:text-white"
                name="mdi:gender-male"
              >
              </Icon>
              <!-- <Icon
              class="text-xl font-medium text-pink-600 dark:text-white"
              name="ph:gender-female-bold"
            >
            </Icon> -->
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-md font-medium text-gray-900 dark:text-white">
                สมหมาย ใจดี
              </h5>
              <h5
                class="mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                sommai jaidee
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Thai</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Confirm</a
                >
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Manage</a
                >
              </div>
            </div>
          </UiCard>
        </div>
      </div>

      <section v-if="!showItemsPanel">
        <UiButton @click="showItemsPanel = true">Add Items</UiButton>
      </section>

      <UiCard v-if="showItemsPanel">
        <o-field label="Product">
          <o-input></o-input>
        </o-field>
        <div class="flex">
          <o-field class="flex-1" label="Quantity">
            <o-input></o-input>
          </o-field>
          <div class="mx-4 shrink flex items-center justify-center">
            <span class="align-middle">x</span>
          </div>
          <o-field class="flex-1" label="Price">
            <o-input></o-input>
          </o-field>
        </div>
        <o-field label="VAT">
          <o-input></o-input>
        </o-field>
        <o-field label="Discount">
          <o-input></o-input>
        </o-field>
        <o-field label="Remark">
          <o-input></o-input>
        </o-field>

        <section>
          <UiButton class="mt-4">Add Item</UiButton>
          <UiButton @click="showItemsPanel = false" class="ml-4"
            >Close</UiButton
          >
        </section>
      </UiCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const showItemsPanel = ref(false);

onMounted(() => {
  initFlowbite();
});
</script>
