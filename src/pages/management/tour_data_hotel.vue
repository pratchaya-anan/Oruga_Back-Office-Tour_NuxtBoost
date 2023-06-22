<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการโรงแรม </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto">
        <UiCard class="mb-4">
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <h2 class="text-xl font-bold dark:text-white mt-2">
                ทัวร์เว้ ดานัง ประเทศเวียดนาม
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-1" name="ri:treasure-map-fill"></Icon>
                  อำนาจเจริญ - เว้ ดานัง ประเทศเวียดนาม
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  4 วัน 3 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="line-md:calendar"></Icon>
                  21/04/2566
                  <Icon class="w-5 h-5  mx-1" name="line-md:arrow-right"></Icon>
                  24/04/2566
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6  mr-1" name="fluent:people-audience-24-filled"></Icon>
                  23 คน
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
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            โรงแรม
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Mercure Bana hills</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 08978677867</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Century hotel</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
            </li>
          </ol>
          <div class="mt-2 flex justify-end">
            <o-button>เสร็จสิ้น</o-button>
          </div>
        </UiCard>
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
          <div class="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-3 py-4">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-3 py-4">
                    ชื่อโรงแรม
                  </th>
                  <th scope="col" class="px-3 py-4">
                    ที่อยู่
                  </th>
                  <th scope="col" class="px-3 py-4">
                    เบอร์ติดต่อ
                  </th>
                  <th scope="col" class="px-3 py-4 text-center items-center">
                    จำนวนห้องพัก
                  </th>
                  <th scope="col" class="px-3 py-4 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th scope="col" class="px-3 py-4 text-center items-center">

                  </th>
                </tr>
              </thead>
              <tbody @click="isItemModalUserData = true">
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-4">
                    1
                  </th>
                  <td class="px-3 py-4">
                    โรงแรม NHU MINH PLAZA
                  </td>
                  <td class="px-3 py-4">
                    Lot 2 - A2 - KH, Phạm Văn Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม
                  </td>
                  <td class="px-3 py-4">
                    0428976765
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    120
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-4">
                    2
                  </th>
                  <td class="px-3 py-4">
                    โรงแรม Mercure Bana hills
                  </td>
                  <td class="px-3 py-4">
                    An Son Hoa Son Commune, Hòa Vang, ดานัง 550000 เวียดนาม
                  </td>
                  <td class="px-3 py-4">
                    08978677867
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    50
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    ดี
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800">
                  <th class="px-3 py-4">
                    3
                  </th>
                  <td class="px-3 py-4">
                    โรงแรม Century hotel
                  </td>
                  <td class="px-3 py-4">
                    9 ถ. ราชปรารภ แขวงมักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400
                  </td>
                  <td class="px-3 py-4">
                    04989712356
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    90
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    ดี
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800">
                  <th class="px-3 py-4">
                    4
                  </th>
                  <td class="px-3 py-4">
                    โรงแรมทิวลิปสีส้ม
                  </td>
                  <td class="px-3 py-4">
                    127 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-4">
                    04989712356
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    80
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    ดี
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800">
                  <th class="px-3 py-4">
                    5
                  </th>
                  <td class="px-3 py-4">
                    โรงแรมทิวลิปสีเหลือง
                  </td>
                  <td class="px-3 py-4">
                    12 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-4">
                    04989712356
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    40
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalUserData">
          <UiCard>
            <div class="grid grid-cols-2">
              <div class="p-2 border-r">
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  โรงแรม NHU MINH PLAZA
                </h2>
                <p></p>
              </div>
              <div>
                <div class="p-2 border-r">
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    คอมเมนต์
                  </h2>
                  <ul class="mt-2 space-y-1">
                    <li class="flex text-sm font-normal text-gray-500 dark:text-gray-400">
                      <Icon class="w-6 h-6  mr-2" name="fluent:comment-error-16-filled"></Icon>
                      สนุกดี
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-popper-arrow></div>
          </UiCard>
        </o-modal>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const isItemModalUserData = ref(false);
</script>