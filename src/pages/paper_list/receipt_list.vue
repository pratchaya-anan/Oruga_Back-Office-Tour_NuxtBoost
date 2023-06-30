<template>
  <section>
    <LayoutPageTitle> Receipt / รายการใบเสร็จรับเงิน </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink
        to="/paper_create/receipt_create"
        type="button"
        class="text-white bg-blue-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
      >
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างใบเสร็จรับเงิน
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
            R230430-0001
          </p>
        </a>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="map:travel-agency"></Icon>
            เทศบาลขอนแก่น
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="ic:baseline-date-range"
            ></Icon>
            24/03/2566
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="majesticons:money-line"
            ></Icon>
            12,840 บาท
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
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <ul class="mt-2 space-y-1">
              <li class="text-xl font-semibold text-gray-900 dark:text-white">
                ใบเสร็จรับเงิน
              </li>
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                เลขที่: R230430-0001
              </li>
            </ul>
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
          <!-- Modal body -->
          <div class="p-4 font-normal text-gray-700 dark:text-gray-400">
            <div>รายละเอียดใบเสร็จ</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              หน่วยงาน/ลูกค้า
            </div>
            <div class="flex justify-between">
              <div>เทศบาลขอนแก่น</div>
            </div>
            <div class="font-semibold text-gray-900 dark:text-white">สาขา</div>
            <div>สำนักงานใหญ่</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ที่อยู่
            </div>
            <div>175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              รวมทั้งสิ้น
            </div>
            <div>12,840 บาท</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              รวมทั้งสิ้น ตัวอักษร
            </div>
            <div>หนึ่งหมื่นสองพันแปดร้อยสี่สิบบาทถ้วน</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ชำระผ่าน
            </div>
            <div>เช็คธนาคาร</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              หักภาษี ณ ที่จ่าย
            </div>
            <div>898.80 บาท</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              เลขที่เช็ค
            </div>
            <div>7842744</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              วันที่เช็ค
            </div>
            <div>24/03/2566</div>
            <hr class="my-2" />
            <div class="mt-5 flex justify-center">
              <a href="/paper_edit/receipt_item">
                <o-button>
                  <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon>
                  แก้ไข
                </o-button>
              </a>
              <a href="/paper/receipt_paper">
                <o-button>
                  <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print">
                  </Icon>
                  พิมพ์
                </o-button>
              </a>
            </div>
          </div>
        </div>
      </div>
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
