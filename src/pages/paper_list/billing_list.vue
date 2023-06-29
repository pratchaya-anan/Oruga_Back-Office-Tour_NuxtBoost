<template>
  <section>
    <LayoutPageTitle> Billing / รายการใบวางบิล </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink to="/paper_create/billing_create" type="button"
        class="text-white bg-blue-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างใบวางบิล
      </NuxtLink>
    </UiManageBar>

    <UiSectionTabs></UiSectionTabs>

    <section class="grid grid-cols-5 gap-4">
      <UiCard v-for="(it, idx) in tableDatatour" :key="idx" @click="openmodal = true"
        class="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700">
        <a href="#">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right">
            {{ it.idpaper }}
          </p>
        </a>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="map:travel-agency"></Icon>
            {{ it.agency }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h5" name="eva:people-fill"></Icon>
            {{ it.name }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="ri:phone-fill"></Icon>
            {{ it.phone }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:baseline-date-range"></Icon>
            {{ it.date }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="majesticons:money-line"></Icon>
            {{ it.price }}
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

    <o-modal v-model:active="openmodal">
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              รายละเอียด
            </h3>
            <button @click="openmodal = false" type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div>
            <div class="p-6 font-normal text-gray-700 dark:text-gray-400 mb-3">
              <div class="font-semibold text-gray-900 dark:text-white">
                หน่วยงาน / ลูกค้า
              </div>
              <div>เทศบาลขอนแก่น</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                รหัสลูกค้า
              </div>
              <div>
                1552555214
              </div>
              <div class="font-semibold text-gray-900 dark:text-white">
                ชื่อผู้ติดต่อ
              </div>
              <div>นายภาคภูมิ ภูเขียว</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                เบอร์ติดต่อ
              </div>
              <div>0625584785</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                เลขประจำตัวผู้เสียภาษี
              </div>
              <div>1522236</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                Email
              </div>
              <div>somchai@gmail.com</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                ที่อยู่
              </div>
              <div>175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น</div>
              <hr class="my-5 border-1.5" />
              <div class="font-semibold text-gray-900 dark:text-white">
                ผู้เสนอขาย
              </div>
              <div>สมชัย ใจเกินร้อย</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                ฝ่าย/แผนก
              </div>
              <div>ฝ่ายขาย</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                ยืนยันราคาภายในวันที่
              </div>
              <div>16/07/2566</div>
              <div class="font-semibold text-gray-900 dark:text-white">
                วันส่งของ
              </div>
              <div>17/07/2566</div>
              <div class="mt-5 flex justify-center">
                <a href="/paper_edit/billing_item">
                  <o-button
                    class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon>
                    แก้ไข
                  </o-button>
                </a>
                <a href="/paper/billing_paper">
                  <o-button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print">
                    </Icon>
                    พิมพ์
                  </o-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </o-modal>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const openmodal = ref(false);
const sec23 = Array.from(Array(6).keys()).map((x) => x + 1);
console.log(sec23);

const tableDatatour = [
  {
    idpaper: 'Q230430-0001',
    agency: "เทศบาลขอนแก่น",
    name: "นายสรณ์สิริ สายบุตร",
    phone: "0625584785",
    date: "03/07/2566",
    price: 6420,
  },
];

onMounted(() => {
  initFlowbite();
});
</script>
