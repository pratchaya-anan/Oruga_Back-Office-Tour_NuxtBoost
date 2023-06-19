<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการยานพาหนะ</LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">

            <div>
              <h2 class="text-xl font-bold dark:text-white">
                <Icon class="w-6 h-6" name="mdi:airplane-marker"></Icon>
                ทัวร์เกาะเสม็ด เสร็จทุกราย
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                  กาญจนบุรี-เพชรบุรี
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  5 วัน 4 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  16/04/2566 &#32;
                  <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                  &#32; 16/04/2566
                </li>
              </ul>
              <h2 class="text-xl font-bold dark:text-white mt-3">
                พาหนะ
              </h2>
              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class=" ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                  </div>
                  <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">รถบัสVIP</h2>
                  <p class="mb-1 text-xl font-normal text-gray-500 dark:text-gray-400">จำนวน </p>
                  <p class="mb-1 text-base font-normal text-gray-900 dark:text-gray-400">2 </p>
                  <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ </p>
                  <p class="mb-2 text-base font-normal text-gray-900 dark:text-gray-400">092-868552 </p>
                  <p class="mb-4 text-base font-normal text-gray-900 dark:text-gray-400">ขาไปและขากลับ</p>
                </li>
                <li class="mb-10 ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                  </div>
                  <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">นกแอร์</h2>
                  <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">จำนวน </p>
                  <p class="mb-1 text-base font-normal text-gray-900 dark:text-gray-400">30 </p>
                  <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ </p>
                  <p class="mb-2 text-base font-normal text-gray-900 dark:text-gray-400">092-868552 </p>
                  <p class="mb-4 text-base font-normal text-gray-900 dark:text-gray-400">ขาไป</p>
                </li>
              </ol>
            </div>
          </div>

          <o-modal v-model:active="newaddhotel">
            <div class=" grid grid-cols-2 gap-4 p-6">
              <div class="col-span-2">
                <label>เพิ่มโรงแรมใหม่</label>
              </div>
              <div>
                <o-field label="ชื่อโรงแรม">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="เบอร์ติดต่อ">
                  <o-input></o-input>
                </o-field>
              </div>
              <div class="col-span-2">
                <o-field label="ที่อยู่">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-button size="medium" variant="primary" @click="newaddhotel = false"> บันทึก </o-button>
                <o-button size="medium" variant="primary" @click="newaddhotel = false"> ยกเลิก </o-button>
              </div>
            </div>
          </o-modal>
          <o-modal v-model:active="newvehicle">
            <div class="grid grid-cols-2 gap-4 p-6">
              <div class="col-span-2">
                <label>เพิ่มพาหนะ</label>
              </div>
              <div>
                <o-field label="พาหนะ">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="เลขพาหนะ">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-button size="medium" variant="primary" @click="newvehicle = false"> บันทึก </o-button>
                <o-button size="medium" variant="primary" @click="newvehicle = false"> ยกเลิก </o-button>
              </div>
            </div>
          </o-modal>
        </UiCard>
      </div>
      <div class="col-span-2">
        <UiCard>
          <div class="my-2 grid grid-cols-2 gap-2 mt-5">
            <div class="flex">
              <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
              <div class="px-2">
                <o-button>ค้นหา</o-button>
              </div>
            </div>
            <div class="flex justify-end">
              <o-button @click="newaddhotel = true">+ เพิ่มยานพาหนะ</o-button>
            </div>
          </div>

          <o-table :data="data" @click="addhotel = true">
            <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </UiCard>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const addhotel = ref(false);
const newaddhotel = ref(false);
const newvehicle = ref(false);


const columns = ref([
  {
    field: "id",
    label: "ลำดับ",
    width: "40",
    numeric: true,
  },
  {
    field: "name",
    label: "พาหนะ",
  },
  {
    field: "address",
    label: "ประเภทพาหนะ",
  },
  {
    field: "phone",
    label: "เบอร์ติดต่อ",
  },
  {
    field: "comment",
    label: "คอมเมนต์",
    position: "centered",
  },
  {
    field: "manage",
    label: "จัดการ",
    position: "centered",
  },
]);

const tableData = [
  {
    id: 1,
    name: "รถทัวร์VIP",
    address: "รถ",
    phone: "0428976765",
    comment: "ปานกลาง",
    manage: ". . .",
  },
  {
    id: 2,
    name: "รถตู้",
    address: "รถตู้",
    phone: "0897867787",
    comment: "ดี",
    manage: ". . .",
  }, 
  {
    id: 3,
    name: "รถทัวร์บริษัทA",
    address: "รถทัวร์",
    phone: "0899854867",
    comment: "ดี",
    manage: ". . .",
  }, 
];


const data = ref(tableData);

</script>