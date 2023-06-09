<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / เพิ่มโรงเเรม</LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">

            <div>
              <h2 class="text-xl font-bold dark:text-white">
                ทัวร์เกาะเสม็ด เสร็จทุกราย
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>
                <li>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>
                <li>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>
              </ul>
            </div>
          </div>
          

        </UiCard>
      </div>
      <div class="col-span-2">
        <UiCard>
          <div class="my-2 grid grid-cols-2 gap-4 mt-5">
            <div class="flex">
              <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
              <div class="px-2">
                <o-button>ค้นหา</o-button>
              </div>
            </div>
            <div class="flex justify-end">
              <NuxtLink href="/adduser">
                <o-button>+ เพิ่มโรงแรม</o-button>
              </NuxtLink>
            </div>
          </div>

          <o-table :data="data">
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
import { initFlowbite } from "flowbite";


onMounted(() => {
  initFlowbite();
});

const columns = ref([
  {
    field: "id",
    label: "ID",
    width: "40",
    numeric: true,
  },
  {
    field: "name",
    label: "Name",
  },
  {
    field: "last_name",
    label: "Last Name",
  },
  {
    field: "date",
    label: "Date",
    position: "centered",
  },
  {
    field: "manage",
    label: "Manage",
    position: "centered",
  },
]);

const tableData = [
  {
    id: 1,
    name: "Jesse",
    last_name: "Simmons",
    date: "2016-10-15 - 2016-10-16",
    manage: ". . .",
  },
  {
    id: 2,
    name: "John",
    last_name: "Jacobs",
    date: "2016-10-15 - 2016-10-16",
    manage: ". . .",
  },
  {
    id: 3,
    name: "Tina",
    last_name: "Gilbert",
    date: "2016-10-15 - 2016-10-16",
    manage: ". . .",
  },
  {
    id: 4,
    name: "Clarence",
    last_name: "Flores",
    date: "2016-10-15 - 2016-10-16",
    manage: ". . .",
  },
  {
    id: 5,
    name: "Anne",
    last_name: "Lee",
    date: "2016-10-15 - 2016-10-16",
    manage: ". . .",

  },
];
const data = ref(tableData);


</script>
