<template>
  <section>
    <LayoutPageTitle> Receipt / รายการใบเสร็จรับเงิน </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink
        to="quotation_create"
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
            QUTT0001
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
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              รายละเอียด
            </h3>
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
          <div>
            <div>
              <div>
                <div
                  class="p-6 font-normal text-gray-700 dark:text-gray-400 mb-3"
                >
                  <diV>
                    <div class="flex justify-between">
                      <div>ศศิศ วิรัตน์จินดา</div>
                      <div>
                        <button
                          id="dropdownMenuIconButton"
                          data-dropdown-toggle="dropdownDots"
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <!-- Dropdown menu -->
                    <div
                      id="dropdownDots"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <div class="py-2">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          แก้ไข</a
                        >
                      </div>
                      <div class="py-2">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          ลบ</a
                        >
                      </div>
                    </div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ชื่อผู้ติดต่อ
                    </div>
                    <div>มะนาว หวานจังเลย</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ที่อยู่
                    </div>
                    <div>
                      111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
                    </div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ID TAX
                    </div>
                    <div>4585695214526</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      โทร
                    </div>
                    <div>0254875858</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      Email
                    </div>
                    <div>somchai@gmail.com</div>
                  </diV>
                  <hr class="my-5 border-1.5" />
                  <diV>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      รหัสลูกค้า
                    </div>
                    <div>C-58015259</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ผู้เสนอขาย
                    </div>
                    <div>สมชัย ใจเกินร้อย</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ฝ่าย:
                    </div>
                    <div>การตลาด</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ยืนยันราคาภายใน
                    </div>
                    <div>31-03-2566</div>
                    <div class="font-semibold text-gray-900 dark:text-white">
                      วันส่งของ:
                    </div>
                    <div>02-04-2566</div>
                  </diV>
                  <div class="mt-5 flex justify-center">
                    <a href="/receipt_create">
                      <o-button
                        class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <Icon
                          class="mr-3 -ml-1 w-5 h-5"
                          name="mdi:paper-edit"
                        ></Icon>
                        แก้ไขใบเสร็จ
                      </o-button>
                    </a>
                    <a href="/paper/receipt_paper">
                      <o-button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print">
                        </Icon>
                        พิมพ์ใบเสร็จ
                      </o-button>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
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
