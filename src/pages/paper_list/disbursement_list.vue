<template>
  <section>
    <LayoutPageTitle> Disbursement Estimate / รายการใบขอเบิก </LayoutPageTitle>

    <UiManageBar>
      <NuxtLink
        to="/paper_create/disbursement_create"
        type="button"
        class="text-white bg-blue-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
      >
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างใบเบิกค่าใช้จ่าย
      </NuxtLink>
    </UiManageBar>

    <UiSectionTabs></UiSectionTabs>

    <section class="grid grid-cols-5 gap-4">
      <UiCard
        v-for="(it, idx) in tableDatatour"
        :key="idx"
        @click="openmodal = true"
        class="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <a href="#">
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right"
          >
            {{ it.idpaper }}
          </p>
        </a>
        <div>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon class="mr-3 -ml-1 w-5 h-5" name="eva:people-fill"></Icon>
            {{ it.name }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h5"
              name="mingcute:department-fill"
            ></Icon>
            {{ it.type }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="ic:baseline-date-range"
            ></Icon>
            {{ it.date }}
          </p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            <Icon
              class="mr-3 -ml-1 w-5 h-5"
              name="majesticons:money-line"
            ></Icon>
            {{ it.objective }}
          </p>
        </div>
      </UiCard>
    </section>

    <o-modal v-model:active="openmodal">
      <div class="relative w-full min-w-[400px] max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <ul class="mt-2 space-y-1">
              <li class="text-xl font-semibold text-gray-900 dark:text-white">
                ใบเบิกค่าใช้จ่าย
              </li>
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                เลขที่: D230627-0001
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
            <div class="font-semibold text-gray-900 dark:text-white">
              ชื่อผู้ขอเบิก
            </div>
            <div>นายสรณ์สิริ สายบุตร</div>
            <div class="font-semibold text-gray-900 dark:text-white">แผนก</div>
            <div>บริการลูกค้า</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              วัตถุประสงค์การยืมเงินทดลองจ่าย
            </div>
            <div>ค่าใช้จ่ายในทัวร์</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              วันที่ต้องการใช้เงิน
            </div>
            <div>03/07/2566</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              โครงการ
            </div>
            <div>องค์การบริหารส่วนตำบลโพนงาม</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              รายละเอียดโครงการ/กิจกรรม
            </div>
            <div>นำสมาชิกเข้าร่วมการอบรมณ์</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ยอดเงินประมาณการ
            </div>
            <div>82,800</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ยอดสุทธิ
            </div>
            <div>49,300</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ยอดเงินเบิกเพิ่ม
            </div>
            <div>0</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ยอดเงินส่งคืน
            </div>
            <div>33,500</div>
            <hr class="my-2" />
            <div class="mt-5 flex justify-center">
              <a href="/paper_edit/disbursement_item">
                <o-button>
                  <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon>
                  แก้ไข
                </o-button>
              </a>
              <a href="/paper/disbursement_paper">
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
const sec23 = Array.from(Array(4).keys()).map((x) => x + 1);
// console.log(sec23);

const tableDatatour = [
  {
    idpaper: "D230627-0001",
    name: "นายสรณ์สิริ สายบุตร",
    type: "ฝ่ายบริการลูกค้า",
    date: "03/07/2566",
    objective: "ค่าใช้จ่ายในทัวร์",
  },
  {
    idpaper: "D230627-0002",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    date: "30/06/2566",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
  },
  {
    idpaper: "D230627-0003",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    date: "30/06/2566",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
  },
  {
    idpaper: "D230627-0004",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    date: "30/06/2566",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
  },
  {
    idpaper: "D230627-0005",
    name: "นางสาวรินดา จุตตะโน",
    type: "การเงิน",
    date: "30/06/2566",
    objective: "ใช้จ่ายทั่วไปในบริษัทย์",
  },
];

onMounted(() => {
  initFlowbite();
});
</script>
