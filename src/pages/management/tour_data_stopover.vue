<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการจุดแวะพัก </LayoutPageTitle>
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
            จุดแวะพัก
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บ้านหนองผือ</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จุดนัดหมาย เวลา 05:00 น.</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ตม.มุขดาหาร</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">หน้าด่านข้ามประเทศ เวลา 12:00 น.</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บาน่าฮิว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จุดชมวิว เวลา 12:00 น.</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">สะพานมือทอง</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จุดชมวิว เวลา 14:00 น.</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">สวนดอกไม้</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จุดชมวิว เวลา 16:00 น.</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">พระราชวังได๋โหน๋ย</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">สถานที่ท่องเทียว เวลา 9:00 น.</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ตลาดดงบา</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">ตลาด เวลา 13:00 น.</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ด่านสะหวันนะเขต</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">หน้าด่านข้ามประเทศ เวลา 14:00 น.</p>
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

              <o-button>+ เพิ่มยานพาหนะ</o-button>
            </div>
          </div>
          <div class="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-3 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-3 py-3">
                    จุดแวะพัก
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ประเภทจุดแวะพัก
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ที่อยู่
                  </th>
                  <th scope="col" class="px-3 py-3 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th scope="col" class="px-3 py-3 text-center items-center">

                  </th>
                </tr>
              </thead>
              <tbody @click="add = true">
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    1
                  </th>
                  <td class="px-3 py-3">
                    บ้านหนองผือ
                  </td>
                  <td class="px-3 py-3">
                    จุดนัดหมาย
                  </td>
                  <td class="px-3 py-3">
                    บ้านหนองผือ ตำบลหนองผือ อำเภอชานุมาน อำนาจเจริญ 37000
                  </td>

                  <td class="px-3 py-3 text-center items-center">
                    เช็คความพร้อม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    2
                  </th>
                  <td class="px-3 py-3">
                    ตม.มุขดาหาร
                  </td>
                  <td class="px-3 py-3">
                    หน้าด่านข้ามประเทศ
                  </td>
                  <td class="px-3 py-3">
                    บ้านคำผักหนอก ตำบลบางทรายใหญ่ อำเภอเมืองมุกดาหาร มุกดาหาร 49000
                  </td>

                  <td class="px-3 py-3 text-center items-center">
                    เช็คความพร้อม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    3
                  </th>
                  <td class="px-3 py-3">
                    เขาบ้านจิบ
                  </td>
                  <td class="px-3 py-3">
                    จุดถ่ายภาพ
                  </td>
                  <td class="px-3 py-3">
                    81 หมู่ 18 อาคาร บริเวณสถานีรถไฟเชียงรากใหญ่ ถนน เชียงรากใหญ่ ปทุมธานี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
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
                    ตลาดน้ำทุ่งบัวชม
                  </td>
                  <td class="px-3 py-3">
                    จุดพักรถ
                  </td>
                  <td class="px-3 py-3">
                    80 หมู่ 2 ทางคู่ขนานทางหลวงแผ่นดินหมายเลข 1 พระนครศรีอยุธยา อ่านต่อได้ที่
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    5
                  </th>
                  <td class="px-3 py-3">
                    Wisdom farm
                  </td>
                  <td class="px-3 py-3">
                    จุดถ่ายภาพ
                  </td>
                  <td class="px-3 py-3">
                    ซอย เทพกุญชร 40 (ซอยหมู่บ้านแหลมทอง) ถนน พหลโยธิน ปทุมธานี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    6
                  </th>
                  <td class="px-3 py-3">
                    บาน่าฮิว
                  </td>
                  <td class="px-3 py-3">
                    จุดชมวิว
                  </td>
                  <td class="px-3 py-3">
                    เมืองฮอยอัน เวียดนาม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    7
                  </th>
                  <td class="px-3 py-3">
                    สะพานมือทอง
                  </td>
                  <td class="px-3 py-3">
                    จุดชมวิว
                  </td>
                  <td class="px-3 py-3">
                    เมืองฮอยอัน เวียดนาม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    8
                  </th>
                  <td class="px-3 py-3">
                    สวนดอกไม้
                  </td>
                  <td class="px-3 py-3">
                    จุดชมวิว
                  </td>
                  <td class="px-3 py-3">
                    เมืองฮอยอัน เวียดนาม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    9
                  </th>
                  <td class="px-3 py-3">
                    พระราชวังได๋โหน๋ย
                  </td>
                  <td class="px-3 py-3">
                    สถานที่ท่องเทียว
                  </td>
                  <td class="px-3 py-3">
                    เมืองฮอยอัน เวียดนาม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    10
                  </th>
                  <td class="px-3 py-3">
                    ตลาดดงบา
                  </td>
                  <td class="px-3 py-3">
                    ตลาด
                  </td>
                  <td class="px-3 py-3">
                    เมืองฮอยอัน เวียดนาม
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    11
                  </th>
                  <td class="px-3 py-3">
                    ด่านสะหวันนะเขต
                  </td>
                  <td class="px-3 py-3">
                    หน้าด่านข้ามประเทศ
                  </td>
                  <td class="px-3 py-3">
                    ด่าน
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    ไม่มี
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalHotelData">
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
                  บ้านหนองผือ
                </h2>
                <div class="px-2" v-if="!editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">บ้านหนองผือ ตำบลหนองผือ อำเภอชานุมาน อำนาจเจริญ 37000</p>
                  <p class="text-base font-semibold  dark:text-white">ประเภทจุดแวะพัก</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">จุดนัดหมาย</p>
                  <p class="text-base font-semibold  dark:text-white">ชื่อผู้ติดต่อ</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">นายธงไทย ธาตุทอง</p>
                  <p class="text-base font-semibold  dark:text-white">เบอร์โทร</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">0652224747</p>
                </div>
                <div class="px-2" v-if="editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <o-input type="text" modelValue="บ้านหนองผือ ตำบลหนองผือ อำเภอชานุมาน อำนาจเจริญ 37000"></o-input>
                  <p class="text-base font-semibold  dark:text-white">ประเภทจุดแวะพัก</p>
                  <p class="ml-2 text-base font-normal  dark:text-white"></p>
                  <o-input type="text" modelValue="จุดนัดหมาย"></o-input>
                  <p class="text-base font-semibold  dark:text-white">ชื่อผู้ติดต่อ</p>
                  <o-input type="text" modelValue="นายธงไทย ธาตุทอง"></o-input>
                  <p class="text-base font-semibold  dark:text-white">เบอร์โทร</p>
                  <o-input type="text" modelValue="0652224747"></o-input>

                </div>
              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <p class="col-span-2">อากาศดีมาก </p>
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
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกวันเข้าพัก
              </h2>
            </div>
            <div>
              <o-field label="วันที่เดินทาง">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="เวลาจุดนัดหมาย">
                <o-input></o-input>
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

const showComment = ref(false);
const isItemModalHotelData = ref(false);
const add = ref(false);
const editHotel = ref(false);
const delete1 = ref(false);
const delete2 = ref(false);
const delete3= ref(false);
</script>