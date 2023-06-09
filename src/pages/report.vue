<template>
  <section class="h-screen">
    <div class="relative max-w-sm mb-3">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input datepicker type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date">
    </div>

    <o-dropdown aria-role="list">
      <template #trigger="{ active }">
        <o-button variant="primary">
          <span>{{ name }}</span>
          <o-icon :icon="active ? 'caret-up' : 'caret-down'"></o-icon>
        </o-button>
      </template>

      <o-dropdown-item v-model="name" value="PDF" aria-role="listitem">PDF</o-dropdown-item>
      <o-dropdown-item v-model="name" value="Excel" aria-role="listitem">Excel</o-dropdown-item>
    </o-dropdown>
    <p>{{ name }}</p>

    <o-tabs v-model="activeTab" :multiline="multiline">
      <o-tab-item :value="1" label="วัน">
        <div class="grid grid-cols-4 gap-2">
          <div class="col-span-3">
            <o-table :data="dataday">
              <o-table-column field="ID" label="ID" width="40" numeric v-slot:default="props">
                {{ props.row.ID }}
              </o-table-column>
              <o-table-column field="รายการ" label="รายการ" v-slot:default="props">
                {{ props.row.รายการ }}
              </o-table-column>
              <o-table-column field="รายรับ" label="รายรับ(บาท)" position="centered" v-slot:default="props">
                {{ props.row.รายรับ }}
              </o-table-column>
              <o-table-column field="รายจ่าย" label="รายจ่าย(บาท)" position="centered" v-slot:default="props">
                {{ props.row.รายจ่าย }}
              </o-table-column>
              <o-table-column field="หมายเหตุ" label="หมายเหตุ" v-slot:default="props">
                {{ props.row.หมายเหตุ }}
              </o-table-column>
            </o-table>
          </div>
          <div>
            <a href="#"
              class="grid grid-cols-2 m-3 block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:plus-box-outline"></Icon>
                490,093
              </h5>
              <h1 class="flex flex-row-reverse text-3 font-bold tracking-tight text-green-600 dark:text-white">
                <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon> +10%
              </h1>
            </a>

            <a href="#"
              class="grid grid-cols-2 m-3 block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:minus-box-outline"></Icon>
                385,872
              </h5>
              <h5 class="flex flex-row-reverse mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
                <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon> -5%
              </h5>
            </a>

            <a href="#"
              class="grid grid-cols-2  m-3  block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="icon-park-outline:add-subtract"></Icon>
                <p>1,422</p>
              </h5>
              <h5 class="flex flex-row-reverse text-3 font-bold tracking-tight text-green-600 dark:text-red">
                <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon> +23%
              </h5>
            </a>
          </div>
        </div>
      </o-tab-item>

      <o-tab-item :value="2" label="เดือน">
        <div class="grid grid-cols-4 gap-2">
          <div class="col-span-3">
            <o-table :data="datamouth" checkable class="col-span-3">
              <o-table-column field="วัน" label="วัน" v-slot:default="props">
                {{ props.row.วัน }}
              </o-table-column>
              <o-table-column field="รายรับ" label="รายรับ (บาท)" v-slot:default="props">
                {{ props.row.รายรับ }}
              </o-table-column>
              <o-table-column field="รายจ่าย" label="รายจ่าย (บาท)" position="centered" v-slot:default="props">
                {{ props.row.รายจ่าย }}
              </o-table-column>
              <o-table-column field="หมายเหตุ" label="หมายเหตุ" position="centered" v-slot:default="props">
                {{ props.row.หมายเหตุ }}
                <o-button>เพิ่มเติม</o-button>
              </o-table-column>
            </o-table>
          </div>
          <div>
            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:plus-box-outline"></Icon>
                490,093
              </h5>
              <h1 class="text-3 font-bold tracking-tight text-green-600 dark:text-white">
                +10% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h1>
            </a>

            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:minus-box-outline"></Icon>
                385,872
              </h5>
              <h5 class=" mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
                -5% <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon>
              </h5>
            </a>

            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="icon-park-outline:add-subtract"></Icon>
                1,422
              </h5>
              <h5 class="text-3 font-bold tracking-tight text-green-600 dark:text-red">
                +23% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h5>
            </a>
          </div>
        </div>
      </o-tab-item>

      <o-tab-item :value="3" label="ปี">
        <div class="grid grid-cols-4 gap-2">
          <div class="col-span-3">
            <o-table :data="datayear" checkable>
              <o-table-column field="เดือนที่" label="เดือนที่" v-slot:default="props">
                {{ props.row.เดือนที่ }}
              </o-table-column>
              <o-table-column field="first_name" label="รายรับ (บาท)" v-slot:default="props">
                {{ props.row.รายรับ }}
              </o-table-column>
              <o-table-column field="last_name" label="รายจ่าย (บาท)" position="centered" v-slot:default="props">
                {{ props.row.รายจ่าย }}
              </o-table-column>
              <o-table-column field="date" label="หมายเหตุ" position="centered" v-slot:default="props">
                {{ props.row.หมายเหตุ }}
                <o-button>เพิ่มเติม</o-button>
              </o-table-column>
            </o-table>
          </div>
          <div>
            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:plus-box-outline"></Icon>
                490,093
              </h5>
              <h1 class="text-3 font-bold tracking-tight text-green-600 dark:text-white">
                +10% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h1>
            </a>

            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="mdi:minus-box-outline"></Icon>
                385,872
              </h5>
              <h5 class=" mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
                -5% <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon>
              </h5>
            </a>

            <a href="#"
              class="flex m-3 justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="icon-park-outline:add-subtract"></Icon>
                1,422
              </h5>
              <h5 class="text-3 font-bold tracking-tight text-green-600 dark:text-red">
                +23% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h5>
            </a>
          </div>
        </div>
      </o-tab-item>
    </o-tabs>

    <o-button @click="Export">Export</o-button>

    <!-- <ul
      class="mb-3 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li class="mr-2">
        <a href="#" aria-current="page"
          class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">วัน</a>
      </li>
      <li class="mr-2">
        <a href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">เดือน</a>
      </li>
      <li class="mr-2">
        <a href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">ปี</a>
      </li>
      <li class="mr-2">
        <a href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">รายเดือน(แบบละเอียด)</a>
      </li>
    </ul>

    <div class="grid grid-cols-4 gap-2">
      <div class="col-span-3">
        <o-table :data="data" checkable :checkbox-position="checkboxPosition">
          <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
            {{ row[column.field] }}
          </o-table-column>
        </o-table>
      </div>

      <div>
        <a href="#"
          class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Icon class="w-6 h-6" name="mdi:plus-box-outline"></Icon>
            490,093
          </h5>
          <h1 class="text-3 font-bold tracking-tight text-green-600 dark:text-white">
            +10% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
          </h1>
        </a>

        <a href="#"
          class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Icon class="w-6 h-6" name="mdi:minus-box-outline"></Icon>
            385,872
          </h5>
          <h5 class=" mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
            -5% <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon>
          </h5>
        </a>

        <a href="#"
          class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Icon class="w-6 h-6" name="icon-park-outline:add-subtract"></Icon>
            1,422
          </h5>
          <h5 class="text-3 font-bold tracking-tight text-green-600 dark:text-red">
            +23% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
          </h5>
        </a>
      </div>

      <div class="col-span-3">
        <o-table :data="dataday" checkable>
          <o-table-column field="id" label="ID" width="40" numeric v-slot:default="props">
            {{ props.row.id }}
          </o-table-column>
          <o-table-column field="first_name" label="รายการ" v-slot:default="props">
            {{ props.row.first_name }}
          </o-table-column>
          <o-table-column field="last_name" label="รายรับ(บาท)" position="centered" v-slot:default="props">
            {{ props.row.last_name }}
          </o-table-column>
          <o-table-column field="date" label="รายจ่าย(บาท)" position="centered" v-slot:default="props">
            {{ props.row.date }}
          </o-table-column>
          <o-table-column field="gender" label="หมายเหตุ" v-slot:default="props">
            {{ props.row.gender }}
          </o-table-column>
        </o-table>
      </div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">รายรับ <span
            class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">490093</span>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">รายจ่าย <span
            class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">385872</span>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">กำไร/ขาดทุน <span
            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">104221</span>
        </p>
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx';
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const activeTab = ref(1);
const name = ref("Export")


const dataday = ref([
  {
    ID: 1,
    รายการ: 'องค์การบริหารส่วนตำบลโพนงาม',
    รายรับ: '52000',
    รายจ่าย: '-',
    หมายเหตุ: ''
  },
  {
    ID: 2,
    รายการ: 'เที่ยวเกาะ เลาะรัก',
    รายรับ: '59920',
    รายจ่าย: '-',
    หมายเหตุ: ''
  },
  {
    ID: 3,
    รายการ: 'เที่ยวเกาะ เลาะรัก',
    รายรับ: '59920',
    รายจ่าย: '-',
    หมายเหตุ: ''
  },
  {
    ID: 4,
    รายการ: 'ชื้อข้าวเที่ยง',
    รายรับ: '-',
    รายจ่าย: '750',
    หมายเหตุ: ''
  },
  {
    ID: 5,
    รายการ: 'เที่ยวเกาะ เลาะรัก',
    รายรับ: '59920',
    รายจ่าย: '-',
    หมายเหตุ: ''
  },
])


const datamouth = ref([
  {
    วัน: "25/04/2566",
    รายรับ: '111920',
    รายจ่าย: '144000',
    หมายเหตุ: '',
  },
  {
    วัน: "25/04/2566",
    รายรับ: '111920',
    รายจ่าย: '144000',
    หมายเหตุ: '',
  },
  {
    วัน: "27/04/2566",
    รายรับ: '144000',
    รายจ่าย: '44000',
    หมายเหตุ: '',
  },
])

const datayear = ref([
  {
    เดือนที่: "03/2566",
    รายรับ: '85920',
    รายจ่าย: '82872',
    หมายเหตุ: '',
  },
  {
    เดือนที่: "04/2566",
    รายรับ: '114421',
    รายจ่าย: '159000',
    หมายเหตุ: '',
  },
  {
    เดือนที่: "05/2566",
    รายรับ: '163920',
    รายจ่าย: '52000',
    หมายเหตุ: '',
  },
])

function Export() 
{
  const dataWS = XLSX.utils.json_to_sheet(dataday.value)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, dataWS)
  XLSX.writeFile(wb,'export.xlsx')
}
</script>