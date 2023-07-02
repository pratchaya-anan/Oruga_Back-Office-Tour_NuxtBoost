<template>
  <section>
    <LayoutPageTitle>
      Cashcertificate / รายการใบรับรองแทนใบเสร็จ
    </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink to="/paper_create/cashcertificate_create" type="button"
        class="text-white bg-blue-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างใบรับรองแทนใบเสร็จ
      </NuxtLink>
    </UiManageBar>

    <UiSectionTabs></UiSectionTabs>

    <section class="grid xl:grid-cols-5 grid-cols-3 gap-4">
      <UiCard v-for="(it, idx) in tableDatatour" :key="idx" @click="openmodal = true"
        class="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700">
        <a href="#">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right">
            {{ it.idpaper }}
          </p>
        </a>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="eva:people-fill"></Icon>
            {{ it.name }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h5" name="mingcute:department-fill"></Icon>
            {{ it.type }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:baseline-date-range"></Icon>
            {{ it.date }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="majesticons:money-line"></Icon>
            {{ it.objective }}
          </p>
        </div>
      </UiCard>
    </section>

    <!-- <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> -->

    <o-modal v-model:active="openmodal">
      <UiCard class="relative w-full min-w-[400px] max-w-2xl max-h-full">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="col-span-5">
              <h2 class="text-xl font-bold dark:text-white">
                ใบรับรองแทนใบเสร็จรับเงิน
              </h2>
            </div>
            <div class="flex justify-end">
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
            <ul class="space-y-1">
              <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                เลขที่: CC230430-0001
              </li>
            </ul>
          </div>
        </section>
        <section class="my-4 border-t border-gray-200 dark:border-gray-700">
          <span>รายละเอียดลูกค้า</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-4">ชื่อหน่วยงาน (ผู้ซื้อ/ผู้รับบริการ)</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  นายสรณ์สิริ สายบุตร
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">อ้างอิงถึงเลขที่ใบเบิกเงินสดย่อย</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  E230628-0001
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">โครงการ</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  องค์การบริหารส่วนตำบลโพนงาม
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">รายละเอียดโครงการ/กิจกรรม</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  นำสมาชิกเข้าร่วมการอบรมณ์
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">ฝ่าย/แผนก</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  บริการ
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">ยอดเงินประมาณการ</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  82,800
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">ยอดสุทธิ:</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  49,300
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">ยอดเงินเบิกเพิ่ม</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  0
                </div>
              </div>
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-2">ยอดเงินส่งคืน</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  33,500
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="my-2" />
        <section class="mt-5 flex justify-center">
          <a href="/paper_edit/cashcertificate_item">
            <o-button>
              <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon>
              แก้ไข
            </o-button>
          </a>
          <a href="/paper/cashcertificate_paper">
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

const tableDatatour = [
  {
    idpaper: "CC230705-0001",
    name: "นายสรณ์สิริ สายบุตร",
    type: "ฝ่ายบริการลูกค้า",
    objective: "ค่าใช้จ่ายในทัวร์",
    date: "03/07/2566",
  },
  {
    idpaper: "CC230705-0002",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
    date: "30/06/2566",
  },
  {
    idpaper: "CC230705-0003",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
    date: "30/06/2566",
  },
  {
    idpaper: "CC230705-0004",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
    date: "30/06/2566",
  },
  {
    idpaper: "CC230705-0005",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
    date: "30/06/2566",
  },
];

onMounted(() => {
  initFlowbite();
});
</script>
