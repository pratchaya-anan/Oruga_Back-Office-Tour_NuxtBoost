<template>
  <section class="min-h-screen">
    <LayoutPageTitle> บริการสมาชิก </LayoutPageTitle>
    <div>
      <UiCard
        ><div>
          <a href="#">
            <img
              class="w-10 h-10 rounded-full"
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
              alt="Jese Leos"
            />
          </a>
          <h2 class="text-xl font-bold dark:text-white">สมหมาย ใจดี</h2>
          <ul class="mt-2 space-y-1">
            <li
              class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
              เลขบัตรประชาชน: 1-339955-874-58-7
            </li>
            <li
              class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              <Icon
                class="w-6 h-6"
                name="line-md:moon-filled-to-sunny-filled-transition"
              ></Icon>
              เลขข้าราชการ: 1548362568
            </li>
            <li
              class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
              วันเกิด: 16/04/2566
            </li>
            <li
              class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              <Icon
                class="w-6 h-6"
                name="fluent:people-audience-24-filled"
              ></Icon>
              เป็นสมาชิกตั้งแต่: 16/04/2510
            </li>
            <li
              class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
            >
              <Icon
                class="w-6 h-6"
                name="fluent:comment-error-16-filled"
              ></Icon>
              เป็นสมาชิกมา: 5ปี 4เดือน 15วัน
            </li>
          </ul>
        </div>
      </UiCard>
      <div>
        <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">
          Other Stuff
        </h3>
        <div class="flex space-x-3">
          <button
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <Icon class="w-6 h-6 m-1" name="ic:round-account-balance"></Icon>
            บัญชีการเงิน
            <div
              class="inline-block w-3 h-3 ml-4 bg-red-500 rounded-full"
            ></div>
          </button>
          <div
            id="dropdownDots"
            class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul>
              <MenuDropItem>
                <Icon
                  class="w-6 h-6 m-1"
                  name="ic:round-account-balance"
                ></Icon>
                บัญชีการเงิน
              </MenuDropItem>
            </ul>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconButton"
            >
              <MenuDropItem
                @click="
                  showItemsPanel != true
                    ? (showItemsPanel = true)
                    : (showItemsPanel = false);
                  showItemsListComment = false;
                "
                ><Icon class="w-6 h-6 m-1" name="uil:money-withdraw"></Icon
                >ฝากเงิน
                <div
                  class="inline-block w-3 h-3 ml-4 bg-red-500 rounded-full"
                ></div>
              </MenuDropItem>
              <MenuDropItem
                ><Icon class="w-6 h-6 m-1" name="uil:money-insert"></Icon>
                ถอนเงิน
              </MenuDropItem>
              <MenuDropItem
                ><Icon
                  class="w-6 h-6 m-1"
                  name="fa6-solid:money-bill-transfer"
                ></Icon
                >โอนเงิน
              </MenuDropItem>
            </ul>
          </div>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <Icon
              class="w-6 h-6 m-1"
              name="streamline:money-graph-analytics-business-product-graph-data-chart-analysis"
            ></Icon>
            บัญชีหุ้น
          </button>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <Icon
              class="w-6 h-6 m-1"
              name="streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money"
            ></Icon>
            สินเชื่อ
          </button>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <Icon
              class="w-6 h-6 m-1"
              name="icon-park-solid:people-safe-one"
            ></Icon>
            สวัสดิการ
          </button>
        </div>
      </div>
      <UiCard v-if="showItemsPanel">
        <Icon
          class="w-6 h-6"
          name="majesticons:comment-text"
          @click="showItemsListComment = true"
        ></Icon>
        <o-field class="flex-1" label="เลขบัญชี">
          <o-input></o-input>
        </o-field>
        <div class="flex justify-end">
          <o-button>
            <Icon class="w-6 h-6" name="bi:plus"></Icon>เพิ่มโรงแรม</o-button
          >
        </div>

        <div v-if="showItemsListComment">
          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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
            <o-field class="flex-1" label="เลขบัญชี">
              <o-input></o-input>
            </o-field>
            <section class="flex-1 shrink flex items-center justify-end">
              <o-button @click="showItemsListComment = false" class="ml-4 mt-5"
                >ปิด
              </o-button>
              <o-button class="mt-5">เพิ่ม</o-button>
            </section>
          </div>
        </div>
      </UiCard>
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
