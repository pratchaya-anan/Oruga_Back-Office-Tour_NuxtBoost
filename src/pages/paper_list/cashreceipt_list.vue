<template>
  <section>
    <LayoutPageTitle> Cashreceipt / รายการใบสำคัญรับเงิน </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink
        to="/paper_create/cashreceipt_create"
        type="button"
        class="text-white bg-blue-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
      >
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างใบสำคัญรับเงิน
      </NuxtLink>
    </UiManageBar>

    <UiSectionTabs></UiSectionTabs>

    <section class="flex flex-wrap gap-4">
      <UiCard
        v-for="(it, idx) in sec23"
        :key="idx"
        @click="openmodal = true"
        class="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <a href="#">
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right"
          >
            CR230430-0001
          </p>
        </a>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="eva:people-fill"></Icon>
            ศศิศ วิรัตน์จินดา
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h5" name="ri:phone-fill"></Icon>
            มะนาว หวานจังเลย
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="ic:baseline-date-range"
            ></Icon>
            4585695214526
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="majesticons:money-line"
            ></Icon>
            0254875858
          </p>
        </div>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"></p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"></p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"></p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"></p>
        </div>
      </UiCard>
    </section>

    <!-- <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> -->

    <o-modal v-model:active="openmodal">
      <UiCard class="relative w-full min-w-[400px] max-w-2xl max-h-full">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="grid grid-cols-6">
              <div class="col-span-5">
                <h2 class="text-xl font-bold dark:text-white">
                  ใบสำคัญรับเงิน
                </h2>
              </div>
              <div class="flex justify-end">
                <button
                  @click="openmodal = false"
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="staticModal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul class="space-y-1">
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                เลขที่: CR230430-0001
              </li>
            </ul>
          </div>
        </section>
        <section class="my-4 border-t border-gray-200 dark:border-gray-700">
          <span>รายละเอียดการทำรายการ</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-4">ชื่อ (ผู้ขายสินค้า/ให้บริการ)</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    เทศบาลขอนแก่น
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">เลขประจำตัวผู้เสียภาษี</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    1522236
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">เบอร์โทร</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    0625584785
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">ที่อยู่</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">ได้รับเงินจาก (ผู้ซื้อ/ผู้รับบริการ)</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    นายนที บุญมา
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="my-2" />
        <section class="mt-5 flex justify-center">
          <a href="/paper_edit/cashreceipt_item">
            <o-button>
              <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon>
              แก้ไข
            </o-button>
          </a>
          <a href="/paper/cashreceipt_paper">
            <o-button>
              <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"> </Icon>
              พิมพ์
            </o-button>
          </a>
        </section>
      </UiCard>
    </o-modal>
    <!-- </div> -->
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const openmodal = ref(false);
const sec23 = Array.from(Array(6).keys()).map((x) => x + 1);
console.log(sec23);

onMounted(() => {
  initFlowbite();
});
</script>
