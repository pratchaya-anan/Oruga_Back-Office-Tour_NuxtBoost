<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">

            <div>
              <h2 class="text-xl font-bold dark:text-white">
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
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="fluent:people-audience-24-filled"></Icon>
                  35 คน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="fluent:comment-error-16-filled"></Icon>
                  สนุกดี
                </li>
              </ul>
            </div>
          </div>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="mt-4">Email address</div>
                <a class="text-sm font-medium text-gray-900 dark:text-white"
                  href="mailto:webmaster@flowbite.com">yourname@flowbite.com</a>
                <div class="mt-4">Home address</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  92 Miles Drive, Newark, NJ 07103, California, <br />United
                  States of America
                </div>
                <div class="mt-4">Phone number</div>
                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  +00 123 456 789 / +12 345 678
                </div>
              </address>
            </div>
          </div>

        </UiCard>
      </div>
      <div class="col-span-2">
        <UiCard>
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

const showItemsPanel = ref(false);

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
    field: "first_name",
    label: "First Name",
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
    field: "gender",
    label: "Gender",
  },
]);

const tableData = [
  {
    id: 1,
    first_name: "Jesse",
    last_name: "Simmons",
    date: "2016-10-15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "John",
    last_name: "Jacobs",
    date: "2016-12-15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Tina",
    last_name: "Gilbert",
    date: "2016-04-26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Clarence",
    last_name: "Flores",
    date: "2016-04-10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Anne",
    last_name: "Lee",
    date: "2016-12-06 14:38:38",
    gender: "Female",
  },
];
const data = ref(tableData);


</script>
