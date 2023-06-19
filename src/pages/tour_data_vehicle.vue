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
              <h2 class="text-xl font-bold dark:text-white mt-3">
                โรงแรม
              </h2>
              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                  </div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">02 February
                    2022 - 03 February
                    2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรมกล้วยไม้สีขาว</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 15 ห้อง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง
                    จังหวัดดินแดง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
                </li>
                <li class="mb-10 ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                  </div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">04 February
                    2022 - 05 February
                    2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรมกุหลาบสีแดง</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 15 ห้อง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง
                    จังหวัดดินแดง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
                </li>
                <li class="mb-10 ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                  </div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">06 February
                    2022 - 07 February
                    2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรมทิวลิปสีม่วง</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 15 ห้อง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">127 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง
                    จังหวัดดินแดง</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
                </li>
              </ol>
            </div>
            <div class="flex justify-end">
              <o-button>เสร็จสิ้น</o-button>
            </div>
          </div>
          <o-modal v-model:active="add">
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
                <o-button size="medium" variant="primary" @click="add = false"> บันทึก </o-button>
                <o-button size="medium" variant="primary" @click="add = false"> ยกเลิก </o-button>
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

</script>