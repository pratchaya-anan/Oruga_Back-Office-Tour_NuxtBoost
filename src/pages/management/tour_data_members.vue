<template>
  <section class="h-m-screen">
    <div class="flex justify-between">
      <LayoutPageTitle> Tour / จัดทัวร์ / จัดการลูกทัวร์</LayoutPageTitle>
      <!-- <div id="toast-default"
        class="flex items-center w-full max-w-sm px-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert">
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div class="ml-3 text-sm font-normal">
          <span class="text-lg font-bold">Passport หมดอายุ !
          </span> นายสมหมาย ใจดี
        </div>
        <button type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div> -->
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard class="mb-4">
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <h2 class="text-xl font-bold dark:text-white">
                องค์การบริหารส่วนตำบลโพนงาม
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="ri:treasure-map-fill"></Icon>
                  อำนาจเจริญ-เว้ดานัง (ประเทศเวียดนาม)
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  4 วัน 3 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="line-md:calendar"></Icon>
                  21/04/2566
                  <Icon class="mx-1 w-5 h-5" name="line-md:arrow-right"></Icon>
                  24/04/2566
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="fluent:people-audience-24-filled"></Icon>
                  23 คน
                  <Icon class="w-6 h-6 ml-4" name="el:person"></Icon>
                  19 คน
                  <Icon class="w-6 h-6 ml-2" name="material-symbols:child-care"></Icon>
                  3 คน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="fluent:comment-error-16-filled"></Icon>
                  ทัวร์นี้มีวันเกิดลูกค้า 1 คนที่ต้องทำเซอร์ไพร์
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 class="mt-2 text-base font-bold text-gray-900 dark:text-white">
              จัดการเพิ่มเติม
            </h3>
            <div class="flex space-x-3">
              <!-- โรงแรม -->
              <NuxtLink href="/management/tour_data_hotel">
                <Icon class="w-6 h-6" name="mdi:bed"></Icon>
              </NuxtLink>
              <!-- มัคคุเทศก์ -->
              <NuxtLink href="/management/tour_data_guide">
                <Icon class="w-6 h-6" name="mdi:face-woman-shimmer"></Icon>
              </NuxtLink>
              <!-- พาหนะ -->
              <NuxtLink href="/management/tour_data_vehicle">
                <Icon class="w-6 h-6" name="mdi:van-utility"></Icon>
              </NuxtLink>
              <!-- สถานที่ -->
              <NuxtLink href="/management/tour_data_stopover">
                <Icon class="w-6 h-6" name="mdi:store-marker"></Icon>
              </NuxtLink>
              <!-- ร้านอาหาร -->
              <NuxtLink href="/management/tour_data_restaurant">
                <Icon class="w-6 h-6" name="mdi:food-fork-drink"></Icon>
              </NuxtLink>
            </div>
          </div>
        </UiCard>
        <!-- ลูกทัวร์ -->

        <UiCard>
          <div class="p-2 w-full relative">
            <NuxtLink href="/tour_data">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-minus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            ลูกทัวร์
          </h2>
          <div @click="showItems = true" class="items-center mt-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <div
                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900">
              </div>
              <Icon class="w-12 h-12" name="mdi:face-male"></Icon>
              <div class="w-full ml-5">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">นายสมหมาย ใจดี
                </h3>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">วันเกิด </span>20/06/2566</p>
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">พาสปอร์ต </span>20/06/2566</p>
                </dev>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">เบอร์ติดต่อ </span>092-5364869</p>
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">ประเภทห้อง </span>เตียงเดี่ยว</p>
                </dev>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">คอมเมนต์ </span>no comment</p>
                </dev>
              </div>
            </dev>
          </div>
          <div v-for="(item, index) in 19" @click="isItemModalUserData = true"
            class="items-center mt-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <Icon class="w-12 h-12" name="mdi:face-female"></Icon>
              <div class="w-full ml-5">
                <h3 class="flex justify-between text-lg font-bold text-gray-900 dark:text-white">นายสายใย มีใจ
                </h3>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">วันเกิด </span>20/06/2566</p>
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">พาสปอร์ต </span>20/06/2566</p>
                </dev>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">เบอร์ติดต่อ </span>092-5364869</p>
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">ประเภทห้อง </span>เตียงเดี่ยว</p>
                </dev>
                <dev class="w-full relative grid grid-cols-2 gap-8 items-center">
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span
                      class="text-sm font-semibold">คอมเมนต์ </span>no comment</p>
                </dev>
              </div>
            </dev>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalUserData">
          <UiCard>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-3 border-r">
                <div class="flex items-center justify-start mb-2">
                  <a href="#">
                    <img class="w-10 h-10 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      alt="Jese Leos" />
                  </a>
                </div>
                <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#">สมหมาย ใจดี</a>
                  <Icon class="text-xl font-medium text-green-600 dark:text-white" name="mdi:gender-male">
                  </Icon>
                </p>
                <p class="mb-3 text-sm font-normal">
                  <a href="#" class="hover:underline">sommai jaidee</a>
                </p>
                <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  ข้อมูลส่วนตัว
                </p>
                <div class="grid grid-cols-2">
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="carbon:phone-filled"></Icon>098-158-4478
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="mingcute:cake-fill"></Icon>20/04/2000
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="fa-solid:id-card"></Icon>1-7399-01893-76-5
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="gis:search-country"></Icon>Thai
                  </p>
                  <p class="mb-4 text-sm col-span-2">
                    <Icon class="w-6 h-6 text-gray-600" name="ant-design:home-twotone"></Icon>20-22 หมู่13 ตำบลบ้านเป็ด
                    อำเภอเมือง จังหวัดขอนแก่น 40000
                  </p>
                </div>
                <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  พาสปอร์ต
                </p>
                <div class="grid grid-cols-2">
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="fontisto:passport"></Icon>1635501893
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="fluent-mdl2:number-field"></Icon>1478/63
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:calendar-check"></Icon>
                    25/01/2566
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:calendar-xmark"></Icon>
                    25/01/2570
                  </p>
                </div>
                <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  ข้อมูลเดินทาง
                </p>
                <div class="grid grid-cols-2">
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="tabler:number"></Icon>3
                  </p>
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600" name="mingcute:bed-fill"></Icon>คู่
                  </p>
                </div>
              </div>
              <div>
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li class="flex justify-between">
                    <div>แพ้อาหารทะเล</div>
                    <div>20/06/66</div>
                    <div class="flex justify-end mt-3">
                      <Icon class="w-5 h-5" name="mdi:comment-edit"></Icon>
                      <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                    </div>
                  </li>
                </ul>
                <div>
                  <o-field label="เขียนคอมเมนต์">
                    <o-input type="textarea"></o-input>
                  </o-field>
                  <div class="flex">
                    <o-field label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)">
                      <o-input></o-input>
                    </o-field>
                    <section class="flex-1 shrink flex items-center justify-end">
                      <o-button class="ml-4 mt-5" @click="isItemModalUserData = false">ปิด
                      </o-button>
                      <o-button class="mt-5" @click="isItemModalUserData = false">เพิ่ม</o-button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div data-popper-arrow></div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="showItems">
          <div class="p-6">
            <h2 class="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              ลูกทัวร์
            </h2>
            <div class="flex items-center mt-2 p-4 border shadow-md">
              <dev class="p-2 w-full">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ข้อมูลส่วนตัว</h3>
                <div class="p-2 grid grid-cols-2 gap-2">
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">ชื่อภาษาไทย </span>สมหมาย ใจดี
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">ชื่อภาษาอังกฤษ </span>sommai jaidee
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">เบอร์ติดต่อ </span>098-158-4478
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">วัน เดือน ปีเกิด </span>20/04/2000
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">เลขบัตรประชาชน </span>1-7399-01893-76-5
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">สัญชาติ </span>ไทย
                  </p>
                  <p class="text-sm font-normal col-span-2">
                    <span class="text-sm font-semibold">ที่อยู่ </span>20-22 หมู่13
                    ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000
                  </p>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">พาสปอร์ต</h3>
                <div class="p-2 grid grid-cols-2 gap-2">
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">หมายเลขพาสปอต </span>1635501893
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">ตรวจลงตราเลขที่ </span>1478/63
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">วันออกพาสปอร์ต </span>25/01/2566
                  </p>
                  <p class="text-sm font-normal">
                    <span class="text-sm font-semibold">วันหมดอายุพาสปอร์ต </span>25/01/2570
                  </p>
                </div>
              </dev>
            </div>
            <h2 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <div class="mt-2 w-full p-4 border shadow-md">
              <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                <p class="col-span-2">no comment..</p>
              </div>
              <o-button v-if="!showComment" @click="showComment = true">เขียนคอมเมนต์</o-button>
              <div v-if="showComment">
                <o-field label="เขียนคอมเมนต์">
                  <o-input type="textarea"></o-input>
                </o-field>
                <div class="flex">
                  <o-field class="flex-1" label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)">
                    <o-input></o-input>
                  </o-field>
                  <section class="flex-1 shrink flex items-center justify-end">
                    <o-button @click="showComment = false" class="ml-4 mt-5">ปิด
                    </o-button>
                    <o-button class="mt-5">เพิ่ม</o-button>
                  </section>
                </div>
              </div>
            </div>
            <h2 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              ข้อมูลเดินทาง
            </h2>
            <div class="mt-2 w-full ">
              <o-field label="ประเภทห้อง">
                <select  id="countries"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>เลือกประเภทห้อง</option>
                <option value="US">เตียงเดี่ยว</option>
                <option value="CA">เตียงคู่</option>
                <option value="FR">รวม</option>
              </select>
              </o-field>
              
            </div>
            <div class="flex justify-end mt-4">
              <o-button size="medium" variant="danger"> ลบ </o-button>
              <o-button size="medium" variant="primary" @click="showItems = false"> บันทึก </o-button>
            </div>

          </div>
        </o-modal>
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
              <NuxtLink to="/adduser">
                <o-button>+ เพิ่มลูกทัวร์ใหม่</o-button>
              </NuxtLink>
            </div>
          </div>
          <o-table :data="data">
            <o-table-column v-for="column in columns" v-bind="column" :key="column" #default="{ row }">
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

const showItems = ref(false);
const showComment = ref(false);
const isItemModalUserData = ref(false);

const columns = ref([
  {
    field: "id",
    label: "ลำดับ",
    width: "40",
    numeric: true,
  },
  {
    field: "name",
    label: "ชื่อ-สกุล",
  },
  {
    field: "bday",
    label: "วันเกิด",
  },
  {
    field: "passport",
    label: "วันหมดอายุพาสปอต",
  },
  {
    field: "phone",
    label: "เบอร์ติดต่อ",
    position: "centered",
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
    name: "นายสมหมาย ใจดี",
    bday: "20/06/2566",
    passport: "20/06/2566 ",
    phone: "092-5364869",
    comment: "no comment",
    manage: ". . .",
    status: 1,
  },
  {
    id: 2,
    name: "นายสายใย มีใจ",
    bday: "20/06/2566",
    passport: "20/06/2566 ",
    phone: "092-5364869",
    comment: "แพ้อาหารทะเล..",
    manage: ". . .",
  },
  {
    id: 3,
    name: "นางสาวดวงดาว หมายมอง",
    bday: "20/06/2566",
    passport: "20/06/2566 ",
    phone: "092-5364869",
    comment: "แพ้ถั่ว",
    manage: ". . .",
  },
];

const data = ref(tableData);
</script>
