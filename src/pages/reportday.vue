<template>
    <section class="h-screen">
      <div class="flex justify-start">
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
        <div class="ml-5 mt-2.5">
          ถึง
        </div>
        <div class="relative max-w-sm mb-3 ml-5">
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
        <div class="ml-5">
          <o-button>ค้นหา</o-button>
        </div>
      </div>
  
      <o-tabs v-model="activeTab" :multiline="multiline">
        
          <div class="grid grid-cols-4 gap-2">
            <div class="col-span-3">
              <o-table :data="dataday">
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
                  <NuxtLink href="/reportmouth"><Icon class="mr-5 w-6 h-6" name="tabler:zoom-out"></Icon></NuxtLink>
                  <NuxtLink href="/reportyear"><Icon class="w-6 h-6" name="ph:binoculars-bold"></Icon></NuxtLink>
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
                  <p>1,422</p>
                </h5>
                <h5 class="flex flex-row-reverse text-3 font-bold tracking-tight text-green-600 dark:text-red">
                  <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon> +23%
                </h5>
              </a>
            </div>
          </div>
       
      </o-tabs>
  
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
  
  const activeTab = ref(1);
  
  const dataday = ref([
    {
      id: 1,
      first_name: 'องค์การบริหารส่วนตำบลโพนงาม',
      last_name: '52000',
      date: '-',
      gender: ''
    },
    {
      id: 2,
      first_name: 'เที่ยวเกาะ เลาะรัก',
      last_name: '59920',
      date: '-',
      gender: ''
    },
    {
      id: 3,
      first_name: 'เที่ยวเกาะ เลาะรัก',
      last_name: '59920',
      date: '-',
      gender: ''
    },
    {
      id: 4,
      first_name: 'ชื้อข้าวเที่ยง',
      last_name: '-',
      date: '750',
      gender: ''
    },
    {
      id: 5,
      first_name: 'เที่ยวเกาะ เลาะรัก',
      last_name: '59920',
      date: '-',
      gender: ''
    },
  ])
  
  const datamouth = ref([
    {
      id: "25/04/2566",
      first_name: '111920',
      last_name: '144000',
      date: '',
    },
    {
      id: "25/04/2566",
      first_name: '111920',
      last_name: '144000',
      date: '',
    },
    {
      id: "27/04/2566",
      first_name: '144000',
      last_name: '44000',
      date: '',
    },
  ])
  
  const datayear = ref([
    {
      id: "03/2566",
      first_name: '85920',
      last_name: '82872',
      date: '',
    },
    {
      id: "04/2566",
      first_name: '114421',
      last_name: '159000',
      date: '',
    },
    {
      id: "05/2566",
      first_name: '163920',
      last_name: '52000',
      date: '',
    },
  ])
  </script>