<template>
  <section class="min-h-screen">
    <LayoutPageTitle> บริการสมาชิก </LayoutPageTitle>
    <div class="grid grid-cols-3 gap-4">
      <div class="grid gap-4">
        <UiCard>
          <div class="grid grid-cols-2">
            <div class="grid justify-items-center border-r">
              <div href="#">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
                  alt="Jese Leos"
                />
              </div>
              <div class="text-xl font-bold dark:text-white">สมหมาย ใจดี</div>
              <div>
                <section class="bg-white dark:bg-gray-900">
                  <div
                    class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
                  >
                    <dl
                      class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white"
                    >
                      <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                          5M
                        </dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">
                          ออมทรัพย์ (5 บัญชี)
                        </dd>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                          8M
                        </dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">
                          หุ้น (2 บัญชี)
                        </dd>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                          6K
                        </dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">
                          สินเชื่อ (6 รายการ)
                        </dd>
                      </div>
                    </dl>
                  </div>
                </section>
              </div>
            </div>
            <div>
              <ul class="mt-2 space-y-1">
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="mingcute:idcard-fill"></Icon>
                  เลขบัตรประชาชน: 1-339955-874-58-7
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="fa6-solid:id-card-clip"></Icon>
                  เลขข้าราชการ: 1548362568
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="heroicons-solid:cake"></Icon>
                  วันเกิด: 16/04/2566
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="ic:round-calendar-month"></Icon>
                  เป็นสมาชิกตั้งแต่: 16/04/2510
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="material-symbols:card-membership-rounded"
                  ></Icon>
                  เป็นสมาชิกมา: 5ปี 4เดือน 15วัน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6 m-1"
                    name="ic:round-account-balance"
                  ></Icon>
                  บัญชีการเงิน: 5 บัญชี<Icon
                    class="w-6 h-6 m-1 mr-2"
                    name="zondicons:view-show"
                  ></Icon>
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6 m-1" name="fa6-solid:coins"></Icon>
                  บัญชีหุ้น: 5 บัญชี
                  <Icon
                    @click="
                      showItemsPanel != true
                        ? (showItemsPanel = true)
                        : (showItemsPanel = false)
                    "
                    class="w-6 h-6 m-1 mr-2"
                    name="zondicons:view-show"
                  ></Icon>
                  <!-- <Icon class="w-6 h-6 m-1 mr-2" name="zondicons:view-hide"></Icon> -->
                </li>
              </ul>
            </div>
          </div>
        </UiCard>
        <UiCard v-if="showItemsPanel">
          <div class="flex flex-col items-center">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <caption
                class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
              >
                บัญชีเงินกู้
              </caption>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="item in 5"
                  key="item"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>บัญชีที่ 1</div>
                  </th>
                  <td class="px-6 py-4">
                    <div class="flex justify-btween">
                      <p>2.65</p>
                      <p>
                        <Icon
                          class="w-3 h-3 text-gray-500"
                          name="ic:round-percentage"
                        ></Icon>
                      </p>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >จัดการ</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
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
      <div>
        <div class="col-span-2">
          <div class="flex space-x-3">
            <button
              @click="
                showItemsPanel2 != true
                  ? (showItemsPanel2 = true)
                  : (showItemsPanel2 = false);
                showItemsPanelSelectDeposit = false;
              "
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="ic:round-account-balance"></Icon>
              <div>บัญชีการเงิน</div>
            </button>
            <button
              @click="
                showItemsPanelSelectDeposit != true
                  ? (showItemsPanelSelectDeposit = true)
                  : (showItemsPanelSelectDeposit = false);
                showItemsPanel2 = false;
              "
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="uil:money-withdraw"></Icon>ฝากเงิน
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="uil:money-insert"></Icon>
              ถอนเงิน
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon
                class="w-6 h-6 m-1"
                name="fa6-solid:money-bill-transfer"
              ></Icon
              >โอนเงิน
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="fa6-solid:coins"></Icon>
              บัญชีหุ้น
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="mdi:coins-plus"></Icon>ฝากหุ้น
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="mdi:coins-minus"></Icon>
              ถอนหุ้น
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="iconoir:coins-swap"></Icon>โอนหุ้น
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon class="w-6 h-6 m-1" name="dashicons:list-view"></Icon>
              รายการสินเชื่อ
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon
                class="w-6 h-6 m-1"
                name="ph:currency-circle-dollar-fill"
              ></Icon>
              ขอสินเชื่อ
            </button>
          </div>
          <div>
            <UiCard v-if="showItemsPanelSelectDeposit">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <caption
                  class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
                >
                  เลือกบัญชี
                </caption>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    v-for="item in 5"
                    key="item"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      บัญชีที่ 1
                    </th>
                    <td class="px-6 py-4">
                      <div>
                        xx:xx<Icon
                          class="w-4 h-4 m-2 text-gray-500"
                          name="zondicons:view-show"
                        ></Icon>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a
                        @click="
                          showItemsPanelDeposit != true
                            ? (showItemsPanelDeposit = true)
                            : (showItemsPanelDeposit = false);
                          showItemsPanel2 = false;
                        "
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >เลือก</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </UiCard>
            <UiCard v-if="showItemsPanelDeposit">
              <div>ฝากเงินบัญชี 1</div>
              <o-field label="จำนวนเงิน">
                <o-input></o-input>
              </o-field>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  @click="showItemsPanelDeposit = false"
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
            </UiCard>
            <UiCard v-if="showItemsPanel2">
              <div class="flex flex-col items-center">
                <table
                  class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <caption
                    class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
                  >
                    บัญชีเงิน
                  </caption>
                  <tbody>
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      v-for="item in 5"
                      key="item"
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div>บัญชีที่ 1</div>
                      </th>
                      <td class="px-6 py-4">
                        <div>
                          xx:xx<Icon
                            class="w-4 h-4 m-2 text-gray-500"
                            name="zondicons:view-show"
                          ></Icon>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >จัดการ</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const showItemsPanel = ref(false);
const showItemsPanel2 = ref(false);
const showItemsPanelDeposit = ref(false);
const showItemsPanelSelectDeposit = ref(false);

onMounted(() => {
  initFlowbite();
});
</script>
