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
              <h2 class="text-xl font-bold dark:text-white mt-3">
                โรงแรม
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="ri:hotel-fill"></Icon>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>

                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="ri:hotel-fill"></Icon>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="ri:hotel-fill"></Icon>
                  โรงแรมมาดี เวลา : 2016-10-15 - 2016-10-16
                </li>
              </ul>
              <div class="mt-2 flex justify-end">
                <o-button>เสรร็จสื้น</o-button>
              </div>
            </div>
          </div>


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
    field: "address",
    label: "Address",
  },
  {
    field: "phone",
    label: "Phone",
  },
  {
    field: "comment",
    label: "Comment",
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
    address: "1 S. Simmons",
    phone: "0428976765",
    comment: "ปานกลาง",
    manage: ". . .",
  }, 
  {
    id: 2,
    name: "Pesse",
    address: "92/4 mimons",
    phone: "08978677867",
    comment: "ดี",
    manage: ". . .",
  },
  {
    id: 3,
    name: "Pesse",
    address: "92/4 mimons",
    phone: "08978677867",
    comment: "ดี",
    manage: ". . .",
  },
  {
    id: 4,
    name: "Pesse",
    address: "92/4 mimons",
    phone: "08978677867",
    comment: "ดี",
    manage: ". . .",
  },
  {
    id: 5,
    name: "Pesse",
    address: "92/4 mimons",
    phone: "08978677867",
    comment: "ดี",
    manage: ". . .",
  },
];
const data = ref(tableData);


</script>
