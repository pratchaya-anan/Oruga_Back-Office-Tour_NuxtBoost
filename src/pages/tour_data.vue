<template>
  <section class="min-h-screen">
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
                <NuxtLink to="/guide_order">
                  <MenuDropItem>พิมพ์ใบ Order</MenuDropItem>
                </NuxtLink>
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
              <Icon
                class="w-6 h-6"
                @click="
                  showItemsPanel != true
                    ? (showItemsPanel = true)
                    : (showItemsPanel = false);
                  showItemsListComment = false;
                "
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
        <!-- comment โรงแรม -->
        <UiCard v-if="showItemsPanel">
          <div class="flex justify-end">
            <o-button>
              <Icon class="w-6 h-6" name="bi:plus"></Icon>เพิ่มโรงแรม</o-button
            >
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">โรงแรม</th>
                  <th scope="col" class="px-6 py-3">วันเข้าพัก</th>
                  <th scope="col" class="px-6 py-3">วันออก</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    จกตาเพลส
                  </th>
                  <td class="px-6 py-4">20/06/2566</td>
                  <td class="px-6 py-4">25/06/2566</td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="showItemsListComment = true"
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showItemsListComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li class="flex justify-between">
                <div>เป็นโรงแรมที่ดีมาก</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
              <li class="flex justify-between">
                <div>ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
              <li class="flex justify-between">
                <div>ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
            </ul>

            <o-field label="เขียนคอมเมนต์">
              <o-input type="textarea"></o-input>
            </o-field>
            <div class="flex">
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button
                  @click="showItemsListComment = false"
                  class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
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
              <div class="flex justify-center">
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mingcute:cake-fill"
                >
                </Icon>
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mdi:credit-card-remove-outline"
                >
                </Icon>
              </div>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const showItemsPanel = ref(false);
const showItemsListComment = ref(false);

onMounted(() => {
  initFlowbite();
});
</script>
