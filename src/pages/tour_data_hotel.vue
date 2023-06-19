<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการโรงแรม </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto">
        <UiCard class="mb-4">
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <h2 class="text-xl font-bold dark:text-white mt-2">
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
          </div>
        </UiCard>
        <UiCard>
          <div class="mt-2 flex justify-between">
            <h2 class="text-xl font-bold dark:text-white">
              โรงแรม
            </h2>
            <div class="flex">
              <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
              <div class="px-2">
                <o-button>ค้นหา</o-button>
              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-2 py-3">ชื่อโรงแรม</th>
                  <th scope="col" class="px-2 py-3 ">วันเข้าพัก
                  </th>
                  <th scope="col" class="px-2 py-3">
                    วันออก
                  </th>
                  <th scope="col" class="px-2 py-3 text-center items-center">คอมเมนต์</th>
                  <th scope="col" class="px-2 py-3 text-center items-center">..</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  @click="isItemModalUserData = true">
                  <th class="px-2 py-2">
                    โรงแรมกล้วยไม้สีขาว
                  </th>
                  <td class="px-2 py-3">
                      25/06/2532
                  </td>
                  <td class="px-2 py-3">
                      25/06/2566
                  </td>
                  <td class="px-2 py-3 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-2 py-3 text-center items-center">
                    <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th class="px-2 py-3">

                    โรงแรมกุหลาบสีแดง
                  </th>
                  <td class="px-2 py-3">
                    20/06/2566
                  </td>
                  <td class="px-2 py-3">
                      25/06/2566
                  </td>
                  <td class="px-2 py-3 text-center items-center">
                    ดี
                  </td>
                  <td class="px-2 py-3 text-center items-center">
                    <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-2 flex justify-end">
            <o-button>เสร็จสิ้น</o-button>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalUserData">
          <UiCard>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 border-r">
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  โรงแรมกล้วยไม้สีขาว
                </h2>
                <p class="mb-2 text-base font-semibold leading-none text-gray-900 dark:text-white">
                  เวลา
                </p>
                <div class="grid grid-cols-2">
                  <p class="mb-4 text-sm col-span-2">
                    <Icon class="w-6 h-6 text-gray-600 mr-2" name="uiw:time-o"></Icon>
                    25/06/2532 - 25/06/2566
                  </p>
                </div>
                <p class="mb-2 text-base font-semibold leading-none text-gray-900 dark:text-white">
                  ข้อมูลโรงแรม
                </p>
                <div class="grid grid-cols-2">
                  <p class="mb-4 text-sm">
                    <Icon class="w-6 h-6 text-gray-600 mr-2" name="carbon:phone-filled"></Icon>0428976765
                  </p>
                  <p class="mb-4 text-sm col-span-2">
                    <Icon class="w-6 h-6 text-gray-600 mr-2" name="entypo:address"></Icon>132 ม.1 บ้านไม้ ตำบนกล้วย
                    อำเภอเมือง
                    จังหวัดดินแดง
                  </p>
                </div>
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <ul class="p-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li class="grid grid-cols-3 gap-4 border-l ">
                    <div class="w-full ml-1">ปานกลาง</div>
                    <div class="w-full">20/06/66</div>
                    <div class="flex w-full justify-end">
                      <Icon class="w-5 h-5" name="mdi:comment-edit"></Icon>
                      <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                    </div>
                  </li>
                  <li class="grid grid-cols-3 gap-4 border-l ">
                    <div class="w-full ml-1">ดี</div>
                    <div class="w-full">20/06/66</div>
                    <div class="flex w-full justify-end">
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
          <div class="my-2 grid grid-cols-2 gap-2 mt-2">
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
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อโรงแรม
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ที่อยู่
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เบอร์ติดต่อ
                  </th>
                  <th scope="col" class="px-6 py-3 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th scope="col" class="px-6 py-3 text-center items-center">
                    
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
        <o-modal v-model:active="add">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกวันเข้าพัก
                </h2>
            </div>
            <div>
              <o-field label="วันเข้าพัก">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="วันออก">
                <o-input></o-input>
              </o-field>
            </div>
            <div class="col-span-2">
              <o-field label="จำนวนห้องพัก">
                <o-input type="number"></o-input>
              </o-field>
            </div>
            <div class="col-span-2">
              <div class="flex justify-end">
                <o-button size="medium" variant="primary" @click="add = false"> บันทึก </o-button>
              </div>
            </div>
          </div>

        </o-modal>
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