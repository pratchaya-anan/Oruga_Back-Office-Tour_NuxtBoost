<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour Management / จัดทัวร์ / จัดการยานพาหนะ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
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
                <Icon class="w-6 h-6 " name="mdi:face-woman-shimmer"></Icon>
              </NuxtLink>
              <!-- พาหนะ -->
              <NuxtLink href="/management/tour_data_vehicle">
                <Icon class="w-6 h-6 text-blue-700" name="mdi:van-utility"></Icon>
              </NuxtLink>
              <!-- สถานที่ -->
              <NuxtLink href="/management/tour_data_stopover">
                <Icon class="w-6 h-6 " name="mdi:store-marker"></Icon>
              </NuxtLink>
              <!-- ร้านอาหาร -->
              <NuxtLink href="/management/tour_data_restaurant">
                <Icon class="w-6 h-6" name="mdi:food-fork-drink"></Icon>
              </NuxtLink>
            </div>
          </div>
        </UiCard>


        <UiCard class="mt-4">
          <div class="p-2 w-full relative">
            <NuxtLink href="/tour_data">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-minus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            ยานพาหนะ
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566 - 22 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white">
                รถบัสลาว <a href="#" @click="isItemModalHotelData3 = true"
                  class=" text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a></h3>

              <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16" @click="
                  showComment != true
                    ? (showComment = true)
                    : (showComment = false)
                  "></Icon> ปานกลาง
              </p>
            </li>
          </ol>
        </UiCard>
      </div>

      <o-modal v-model:active="isItemModalHotelData3">
        <UiCard>
          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            เลือกรถ
          </h2>
          <div class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <div class="mx-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์โทร 0428976765</p>
              </div>
            </dev>
          </div>
          <div class="w-full ml-2">
            <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <div class="px-2 mb-2 grid grid-cols-4 gap-0">
              <div v-if="editcomment" class="col-span-2">
                <o-input type="text" modelValue="ปานกลาง"></o-input>
              </div>
              <p v-if="!editcomment" class="col-span-2">ปานกลาง</p>
              <p class="w-full text-end">20/06/66</p>

              <p class="w-full text-end">
                <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                  ? (editcomment = true)
                  : (editcomment = false)">
                </Icon>
              </p>

            </div>
            <o-button v-if="!showComment" @click="showComment = true" class="mb-5">เขียนคอมเมนต์</o-button>
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
          <div class="w-full ">
            <div class="px-2">
              <p class="text-lg font-semibold  dark:text-white">วันที่ไป</p>
              <o-input type="text" modelValue="21 เมษายน 2566"></o-input>
              <p class="text-lg font-semibold  dark:text-white">วันที่กลับ</p>
              <p class="ml-2 text-lg font-normal  dark:text-white"></p>
              <o-input type="text" modelValue="22 เมษายน 2566"></o-input>
              <p class="text-lg font-semibold  dark:text-white">หมายเหตุ</p>
              <o-input type="text" modelValue=""></o-input>
            </div>

            <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบยานพาหนะ</o-button>
              <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
            </div>
          </div>
        </UiCard>
      </o-modal>

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
              <tbody>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th @click="add = true" class="px-3 py-3">
                    1
                  </th>
                  <td @click="add = true" class="px-3 py-3">
                    รถบัสลาว
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    8989 ประเทศเวียงจันน์
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    0428976765
                  </td>
                  <td @click="add = true" class="px-3 py-3 text-center items-center">
                    30
                  </td>
                  <td @click="add = true" class="px-3 py-3 text-center items-center">
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

            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  รถประจำทัวร์ <Icon class="mb-2 w-6 h-6" name="ic:round-edit" @click="editHotel != true
                    ? (editHotel = true)
                    : (editHotel = false)">
                  </Icon>
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
                <div class="px-2 grid grid-cols-2 gap-4" v-if="editHotel">
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ชื่อยานพาหนะ</p>
                    <o-input class=" text-base font-normal  dark:text-white " modelValue="รถบัสลาว"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ทะเบียน</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="8989 ประเทศเวียงจันน์"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">จำนวนที่นั่ง</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="30"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="0428976765"></o-input>
                  </div>
                  <div class="col-span-2">
                    <p class="text-base font-semibold  dark:text-white">ที่อยู่ติดต่อ</p>
                    <o-input class=" text-base font-normal  dark:text-white"
                      modelValue="9 ถ. ราชปรารภ แขวงมักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400"> </o-input>
                  </div>
                </div>

              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                    <o-input type="text" modelValue="ปานกลาง"></o-input>
                  </div>
                  <p v-if="!editcomment" class="col-span-2">ปานกลาง</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                      ? (editcomment = true)
                      : (editcomment = false)">
                    </Icon>
                  </p>

                </div>
                <o-button v-if="!showComment" @click="showComment = true" class="mb-5">เขียนคอมเมนต์</o-button>
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
              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบรถประจำทัวร์</o-button>
                <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
              </div>
            </div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="add">
          <div class="w-full grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกรถ
              </h2>
              <div class="flex items-center mb-4 p-4 border shadow-md">
                <dev class="w-full relative inline-flex items-center">
                  <div class="mx-5">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์โทร 0428976765</p>
                  </div>
                </dev>
              </div>
              <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="ปานกลาง"></o-input>
                </div>
                <p v-if="!editcomment" class="col-span-2">ปานกลาง</p>
                <p class="w-full text-end">20/06/66</p>

                <p class="w-full text-end">
                  <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                    ? (editcomment = true)
                    : (editcomment = false)">
                  </Icon>
                </p>

              </div>
              <o-button v-if="!showComment" @click="showComment = true" class="mb-5">เขียนคอมเมนต์</o-button>
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

            <div>
              <o-field label="วันที่ไป">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="วันที่กลับ">
                <o-input></o-input>
              </o-field>
            </div>

            <div class="col-span-2">
              <o-field label="หมายเหตุ">
                <o-input type="textarea"></o-input>
              </o-field>
            </div>

            <div class="col-span-2">
              <div class="flex justify-end">
                <o-button size="medium" variant="primary" @click="add = false"> เพิ่ม </o-button>
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

const showItems = ref("");

onMounted(() => { initFlowbite() });

const add = ref(false);
const showComment = ref(false);
const isItemModalVehicleData = ref(false);
const isItemModalHotelData3 = ref(false);
const editHotel = ref(false);
const editcomment = ref(false);
const delete1 = ref(false);
const time = ref('time');
</script>
