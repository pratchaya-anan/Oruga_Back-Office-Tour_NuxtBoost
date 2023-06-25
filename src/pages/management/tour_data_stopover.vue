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
          <div class="w-full relative inline-flex items-center">
            <h2 class="mb-2 text-xl font-bold dark:text-white">
              จุดแวะพัก
            </h2>
          </div>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white"><a href="#" @click="add = true" >บ้านหนองผือ</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">05.00 น. 
                อ.ชานุมาน อำนาจเจริญ ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ตม.มุขดาหาร</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น.รับประทานอาหารเที่ยง
                หน้าด่านลาวบาว ระหว่างรอเอกสารข้านแดน จากนั้นเดินทางต่อไปยังเมือง เว้-ตานัง</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้-ตานัง</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น /
                เที่ยวชมสะพานมังกร / สะพานแห่งความรัก / เข้าที่พัก</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้-ตานัง</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เช้า รับประทานอาหารเช้าที่โรงแรม /
                เดินทางไปเมืองฮอยอัน </p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ฮอยอัน</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">สาย นั่งเรือกระด้ง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เที่ยง รับประทานอาหารเที่ยง /
                เดินทางขึ้นไปบาน่าฮิลล์</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บาน่าฮิว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">บ่าย นั่งกระเช้าลอยฟ้า / สะพานเมืองทอง / สวนดอกไม้</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น / เข้าที่พัก</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บาน่าฮิว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางลงจากบาน่าฮิลล์สู่เมืองเว้</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เที่ยง รับประทานอาหารเที่ยง / ชมพระราชวังได๋โหน๋ย / ตลาดดงบา / วัดเทียนมู๋ / ล่องเรือมังกร / รับประทานอาหารเย็น / เข้าที่พัก</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น / เข้าที่พัก</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้</h3>ด่านลาวบาว
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางกลับประเทศไทย</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ด่านลาวบาว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เทียง ทำพิธีการข้ามด่าน / รับประทานอาหารเที่ยง / เดินทางต่อมายังด่านสะหวันนะเขต</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ด่านสะหวันนะเขต</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">20.00 น.เดินทางถึงจุดหมายปลายทางโดยสวัสดิภาพ</p>
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
              <tbody >
                <tr @click="add = true" class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
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
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
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
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
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
        <o-modal v-model:active="add">
          <div class="w-full grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกจุดแวะพัก
              </h2>
              <div class="flex items-center mb-4 p-4 border shadow-md">
                <dev class="w-full relative inline-flex items-center">
                  <div class="mx-5">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">บ้านหนองผือ</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ประเภท จุดนัดหมาย</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ บ้านหนองผือ ตำบลหนองผือ
                      อำเภอชานุมาน อำนาจเจริญ 37000</p>
                  </div>
                </dev>
              </div>
            </div>
            <div>
              <o-field label="วันที่">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <div class="flex gap-3">
                <o-radio v-model="time" name="time" native-value="time">เวลา</o-radio>
                <o-radio v-model="time" name="time" native-value="duration">ช่วงเวลา</o-radio>
              </div>
              <o-input v-if="time == 'time'"></o-input>
              <select v-if="time == 'duration'" id="countries"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>เลือกช่วงเวลา</option>
                <option value="US">เช้า</option>
                <option value="CA">เที่ยง</option>
                <option value="FR">บ่าย</option>
                <option value="DE">เย็น</option>
              </select>
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

onMounted(() => { initFlowbite() });

const add = ref(false);
const edit = ref(false);
const time = ref('time');
</script>