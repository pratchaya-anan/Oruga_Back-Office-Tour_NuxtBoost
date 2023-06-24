<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการยานพาหนะ </LayoutPageTitle>
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
            ไกด์
          </h2>
          <div v-if="!delete1" class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <Icon class="w-10 h-10 rounded-full bg-gray-300" name="mdi:bus"></Icon>
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              </div>
              <Icon @click="delete1 = true"
                class="absolute inline-flex w-5 h-5 text-xs -top-1 -right-1 dark:border-gray-900" name="uil:x"></Icon>
            </dev>
          </div>
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

              <o-button>+ เพิ่มยานพาหนะ</o-button>
            </div>
          </div>
          <div class="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th class="px-3 py-3">
                    ลำดับ
                  </th>
                  <th class="px-3 py-3">
                    ชื่อยานพาหนะ
                  </th>
                  <th class="px-3 py-3">
                    ทะเบียน
                  </th>
                  <th class="px-3 py-3">
                    เบอร์ติดต่อ
                  </th>
                  <th class="px-3 py-3 text-center items-center">
                    จำนวนที่นั่ง
                  </th>
                  <th class="px-3 py-3 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th class="px-3 py-3 text-center items-center">

                  </th>
                </tr>
              </thead>
              <tbody @click="add = true">
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    1
                  </th>
                  <td class="px-3 py-3">
                    รถบัสลาว
                  </td>
                  <td class="px-3 py-3">
                    8989 ประเทศเวียงจันน์
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    30
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" @click="isItemModalVehicleData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    2
                  </th>
                  <td class="px-3 py-3">
                    รถบัส vip
                  </td>
                  <td class="px-3 py-3">
                    123 อำนาจเจริญ
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ปานกลาง
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    3
                  </th>
                  <td class="px-3 py-3">
                    นกแอร์
                  </td>
                  <td class="px-3 py-3">
                    HS-TV3
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    100
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ดี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    4
                  </th>
                  <td class="px-3 py-3">
                    โตโยต้า veloz 2022
                  </td>
                  <td class="px-3 py-3">
                    6754 อำนาจเจริญ
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    7
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ดี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalVehicleData">
          <UiCard>
            <div class="flex justify-end">
              <Icon class="w-6 h-6" name="ic:round-edit" @click="editHotel != true
                ? (editHotel = true)
                : (editHotel = false)">
              </Icon>
            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full border-r">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  ไกด์
                </h2>
                <div class="px-2 grid grid-cols-2 gap-4" v-if="!editHotel">
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ชื่อยานพาหนะ</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">รถบัสลาว</p>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white"> ทะเบียน</p>
                    <p class="ml-2 text-base font-normal  dark:text-white"> 8989 ประเทศเวียงจันน์</p>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">จำนวนที่นั่ง</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">30</p>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">0428976765</p>
                  </div>
                  <div class="col-span-2">
                    <p class="text-base font-semibold  dark:text-white">ที่อยู่ติดต่อ</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">9 ถ. ราชปรารภ แขวงมักกะสัน เขตราชเทวี
                      กรุงเทพมหานคร 10400</p>
                  </div>
                </div>
                <div class="px-2" v-if="editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <o-input type="text" modelValue="Lot 2 - A2 - KH, Phạm Văn Đồng, Street, Sơn Trà,
                    Đà
                    Nẵng
                    550000 เวียดนาม"></o-input>
                  <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                  <p class="ml-2 text-base font-normal  dark:text-white"></p>
                  <o-input type="text" modelValue="0428976765"></o-input>
                  <p class="text-base font-semibold  dark:text-white">จำนวนห้องพัก</p>
                  <o-input type="text" modelValue="120"></o-input>

                </div>
              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <p class="col-span-2">ปานกลาง</p>
                  <p class="w-full text-end">20/06/66</p>
                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                  </p>
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
            </div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="add">
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="p-6 mx-5 text-center">
                <div class="flex items-center mb-4 p-4 border shadow-md">
                  <dev class="w-full relative inline-flex items-center">
                    <div class="mx-5">
                      <Icon class="w-10 h-10 rounded-full bg-gray-300" name="mdi:bus"></Icon>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
                    </div>
                  </dev>
                </div>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">ต้องการเพิ่มรถคันนี้ ใช่ หรือ ไม่?
                </h3>
                <o-button @click="add = false" 
                 >
                  Yes, I'm sure
                </o-button>
                <button @click="add = false" type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                  cancel</button>
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
const showComment = ref(false);
const isItemModalVehicleData = ref(false);
const editHotel = ref(false);
const delete1 = ref(false);
</script>