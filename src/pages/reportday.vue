<template>
  <section class="h-screen">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
              </path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <a href="/report"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">รายงาน</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <a href="/reportyear"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">ปี
              2566</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <a href="/reportmouth"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">มกราคม</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">วันที่ 25</span>
          </div>
        </li>
      </ol>
    </nav>

    <div class="mt-2 flex justify-between">
      <div class="flex justify-start">
        <div class="relative max-w-sm mb-3">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input datepicker type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date">

        </div>
        <div class="ml-5 mt-2.5">
          ถึง
        </div>
        <div class="relative max-w-sm mb-3 ml-5">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input datepicker type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date">
        </div>
        <div class="ml-5">
          <o-button>ค้นหา</o-button>
        </div>
      </div>
      <div>
        <o-button variant="info" @click="Export"> Export</o-button>
      </div>
    </div>


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
            50,093
          </h5>
          <h1 class="flex flex-row-reverse text-3 font-bold tracking-tight text-green-600 dark:text-white">
            <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon> +10%
          </h1>
        </a>

        <a href="#"
          class="grid grid-cols-2 m-3 block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Icon class="w-6 h-6" name="mdi:minus-box-outline"></Icon>
            12,640
          </h5>
          <h5 class="flex flex-row-reverse mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
            <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon> -5%
          </h5>
        </a>

        <a href="#"
          class="grid grid-cols-2  m-3  block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Icon class="w-6 h-6" name="icon-park-outline:add-subtract"></Icon>
            <p>37,453</p>
          </h5>
          <h5 class="flex flex-row-reverse text-3 font-bold tracking-tight text-green-600 dark:text-red">
            <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon> +23%
          </h5>
        </a>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import * as XLSX from 'xlsx';

const name = ref("Export report day")

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

function Export() {
  const dataWS = XLSX.utils.json_to_sheet(dataday.value)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, dataWS)
  XLSX.writeFile(wb, name.value+'.xlsx')
}

onMounted(() => { 
  initFlowbite() });
</script>