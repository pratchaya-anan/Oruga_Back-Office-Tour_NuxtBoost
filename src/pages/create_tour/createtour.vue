<template>
  <section class="min-h-screen">
    <LayoutPageTitle> สร้างทัวร์ / จัดทัวร์ </LayoutPageTitle>
    <o-steps variant="success">
      <o-step-item step="1" label="ข้อมูลทัวร์" :clickable="true" icon="user-lock">
        <!-- 1 ทัวร์ -->
        <section>
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
                        92 Miles Drive, Newark, NJ 07103, California,
                        <br />United States of America
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
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <o-field label="ชื่อทริป">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="ชื่อโปรแกรม">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="จำนวนวัน">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="จำนวนคืน">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="วันเริ่มต้น">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="วันจบทริป">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="ราคาต่อหน่วย">
                      <o-input></o-input>
                    </o-field>
                  </div>
                  <div>
                    <o-field label="ภาษี">
                      <o-select placeholder="กำหนดภาษี">
                        <option value="free">ยกเว้นภาษี</option>
                        <option value="1%">1%</option>
                        <option value="3%">3%</option>
                        <option value="5%">5%</option>
                        <option value="7%">7%</option>
                        <option value="9%">9%</option>
                      </o-select>
                    </o-field>
                  </div>
                </div>
              </UiCard>
            </div>
          </div>
        </section>
      </o-step-item>
      <o-step-item step="2" label="ข้อมูลไกด์" :clickable="true" icon="user"></o-step-item>
      <o-step-item step="3" label="ข้อมูลโรงแรม" :clickable="true" icon="user-plus">
        <!-- 3 โรงแรม -->
        <section class="h-m-screen">
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
                <o-modal v-model:active="addhotel">
                  <div class="grid grid-cols-2 gap-4 p-6">
                    <div class="col-span-2">
                      <label>เลือกวันเข้าพัก</label>
                    </div>
                    <div>
                      <o-field label="วันเข้าพัก">
                        <o-input></o-input>
                      </o-field>
                    </div>
                    <div>
                      <o-field label="วันสิ้นสุด">
                        <o-input></o-input>
                      </o-field>
                    </div>
                    <div class="col-span-2">
                      <o-field label="จำนวนห้องพัก">
                        <o-input></o-input>
                      </o-field>
                    </div>
                    <div>
                      <o-button size="medium" variant="primary" @click="addhotel = false">
                        บันทึก
                      </o-button>
                      <o-button size="medium" variant="primary" @click="addhotel = false">
                        ยกเลิก
                      </o-button>
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

                    <o-button @click="newaddhotel = true">+ เพิ่มโรงแรม</o-button>

                  </div>

                  <o-table :data="data" @click="addhotel = true">
                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                      {{ row[column.field] }}
                    </o-table-column>
                  </o-table>
                </div>
              </UiCard>
            </div>
          </div>
        </section>
      </o-step-item>
      <o-step-item step="4" label="ข้อมูลพหนะ" :clickable="true" icon="user-plus"></o-step-item>
    </o-steps>
  </section>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const addhotel = ref(false);
const newaddhotel = ref(false);
const newvehicle = ref(false);

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
