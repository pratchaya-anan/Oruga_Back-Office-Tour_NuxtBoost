<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการโรงแรม </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto">
        <UiCard>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <h2 class="text-xl font-bold dark:text-white mt-3">
                ทัวร์เกาะเสม็ด เสร็จทุกราย
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="ri:treasure-map-fill"></Icon>
                  กาญจนบุรี-เพชรบุรี
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  5 วัน 4 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="line-md:calendar"></Icon>
                  16/04/2566 &#32;
                  <Icon class="w-5 h-5  mr-1" name="line-md:arrow-right"></Icon>
                  &#32; 16/04/2566
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="fluent:people-audience-24-filled"></Icon>
                  35 คน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="fluent:comment-error-16-filled"></Icon>
                  สนุกดี
                </li>
              </ul>
            </div>
            <div class="mt-2 flex justify-between">
              <h2 class="text-xl font-bold dark:text-white mt-3">
                โรงแรม
              </h2>
              <div class="flex">
                <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
                <div class="px-2">
                  <o-button>ค้นหา</o-button>
                </div>
              </div>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-2 py-3">ชื่อ-สกุล</th>
                    <th scope="col" class="py-3 ">วันเข้าพัก
                    </th>
                    <th scope="col" class="py-3">
                      วันออก
                    </th>
                    <th scope="col" class="py-3">คอมเมนต์</th>
                    <th scope="col" class="py-3">..</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    @click="isItemModalUserData = true">
                    <th scope="row" class=" px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      โรงแรมกล้วยไม้สีขาว
                    </th>
                    <td class="py-4">
                      <div class="flex items-center">
                        25/06/2532
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="flex items-center">
                        25/06/2566
                      </div>
                    </td>
                    <td class="text-center items-center">
                      ปานกลาง
                    </td>
                    <td>
                      <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                    </td>
                  </tr>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                      โรงแรมกุหลาบสีแดง
                    </th>
                    <td class="py-4">20/06/2566</td>
                    <td class="py-4 flex">
                      <div class="flex items-center">
                        25/06/2566
                      </div>
                    </td>
                    <td class="text-center items-center">
                      ดี
                    </td>
                    <td>
                      <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <NuxtLink to="/tour_data" class="mt-2 flex justify-end">
                <o-button>เสร็จสิ้น</o-button>
              </NuxtLink>
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
                    <Icon class="w-6 h-6 text-gray-600" name="ant-design:home-twotone"></Icon>20-22
                    หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000
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

              <o-button>+ เพิ่มโรงแรม</o-button>
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border shadow-mb">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    phone
                  </th>
                  <th scope="col" class="px-6 py-3 text-center items-center">
                    comment
                  </th>
                  <th scope="col" class="px-6 py-3 text-center items-center">
                    manage
                  </th>
                </tr>
              </thead>
              <tbody @click="add = true">
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-6 py-4">
                    1
                  </th>
                  <td class="px-6 py-4">
                    โรงแรมกล้วยไม้สีขาว
                  </td>
                  <td class="px-6 py-4">
                    132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-6 py-4">
                    0428976765
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-6 py-4">
                    2
                  </th>
                  <td class="px-6 py-4">
                    โรงแรมกุหลาบสีแดง
                  </td>
                  <td class="px-6 py-4">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-6 py-4">
                    08978677867
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    ดี
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 dark:bg-gray-800">
                  <th class="px-6 py-4">
                    3
                  </th>
                  <td class="px-6 py-4">
                    โรงแรมทิวลิปสีม่วง
                  </td>
                  <td class="px-6 py-4">
                    127 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-6 py-4">
                    04989712356
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    ดี
                  </td>
                  <td class="px-6 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiCard>

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const add = ref(false);
const isItemModalUserData = ref(false);
</script>