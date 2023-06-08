<template>
    <section>      
<ul class="mb-3 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">วัน</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">เดือน</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">ปี</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">รายเดือน(แบบละเอียด)</a>
    </li>
</ul>
<div class="relative max-w-sm mb-3">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
        <o-table :data="data">
    <o-table-column
        v-for="column in columns"
        v-bind="column"
        #default="{ row }">
        {{ row[column.field]}}
    </o-table-column>
  </o-table>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        first_name: 'Jesse',
        last_name: 'Simmons',
        date: '2016-10-15 13:43:27',
        gender: 'Male'
      },
      {
        id: 2,
        first_name: 'John',
        last_name: 'Jacobs',
        date: '2016-12-15 06:00:53',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Tina',
        last_name: 'Gilbert',
        date: '2016-04-26 06:26:28',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Clarence',
        last_name: 'Flores',
        date: '2016-04-10 10:28:46',
        gender: 'Male'
      },
      {
        id: 5,
        first_name: 'Anne',
        last_name: 'Lee',
        date: '2016-12-06 14:38:38',
        gender: 'Female'
      }
    ])

    const columns = ref([
      {
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true
      },
      {
        field: 'first_name',
        label: 'First Name'
      },
      {
        field: 'last_name',
        label: 'Last Name'
      },
      {
        field: 'date',
        label: 'Date',
        position: 'centered'
      },
      {
        field: 'gender',
        label: 'Gender'
      }
    ])

    return {
      data,
      columns
    }
  }
})
</script>