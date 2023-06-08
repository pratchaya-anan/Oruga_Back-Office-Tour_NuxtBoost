<template>
  <section>
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

    <o-tabs v-model="activeTab" :multiline="multiline">
      <o-tab-item :value="1" label="วัน">
        <div class="grid grid-cols-4 gap-2">
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
          <div>
            <a href="#"
              class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="ph:plus-fill"></Icon>
                490,093
              </h5>
              <h1 class="text-3 font-bold tracking-tight text-green-600 dark:text-white">
                +10% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h1>
            </a>

            <a href="#"
              class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="ph:minus-fill"></Icon>
                385,872
              </h5>
              <h5 class=" mb-2 text-3 font-bold tracking-tight text-red-600 dark:text-red">
                -5% <Icon class="w-6 h-6" name="ph:arrow-down-bold"></Icon>
              </h5>
            </a>

            <a href="#"
              class="flex justify-between block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Icon class="w-6 h-6" name="icon-park-solid:add-subtract"></Icon>
                104,221
              </h5>
              <h5 class="text-3 font-bold tracking-tight text-green-600 dark:text-red">
                +23% <Icon class="w-6 h-6" name="ph:arrow-up-bold"></Icon>
              </h5>
            </a>
          </div>
        </div>
      </o-tab-item>

      <o-tab-item :value="2" label="เดือน">
        Lorem <br />
        ipsum <br />
        dolor <br />
        sit <br />
        amet.
      </o-tab-item>

      <o-tab-item :value="3" label="ปี">
        Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
        luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
        pulvinar tellus, id sodales felis lobortis eget.
      </o-tab-item>
    </o-tabs>

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
</script>