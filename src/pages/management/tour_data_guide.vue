<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการไกด์ </LayoutPageTitle>
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
                <Icon class="w-6 h-6 text-blue-700" name="mdi:face-woman-shimmer"></Icon>
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
            ไกด์
          </h2>
          <div class="items-center my-2 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <img class="w-10 h-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese Leos" />
              <div class="ml-5 w-full">
                <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ <a
                    href="#" @click="isItemModalHotelData3 = true"
                    class=" text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a></h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ประเภทไกด์ ต่างประเทศ</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="octicon:comment-16"></Icon> บริการดีมาก
                </p>
              </div>
            </dev>
          </div>
        </UiCard>
      </div>

      <o-modal v-model:active="isItemModalHotelData3">
        <UiCard>
          <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">แก้ไขข้อมูลไกด์</h3>
          <div class="flex justify-end">
          </div>
          <div class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <img class="w-10 h-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese Leos" />
              <div class="ml-5 w-full">
                <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ประเภทไกด์ ต่างประเทศ</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
              </div>
            </dev>
          </div>
          <div class="w-full ml-2">
            <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <div class="px-2 mb-2 grid grid-cols-4 gap-0">
              <div v-if="editcomment" class="col-span-2">
                <o-input type="text" modelValue="บริการดีมาก"></o-input>
              </div>
              <p v-if="!editcomment" class="col-span-2">บริการดีมาก</p>
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


            <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบไกด์</o-button>
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

              <o-button>+ เพิ่มไกด์</o-button>
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
                    ชื่อไกด์
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ประเภทไกด์
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ความสามาถพิเศษ
                  </th>
                  <th scope="col" class="px-3 py-3">
                    เบอร์ติดต่อ
                  </th>
                  <th scope="col" class="px-3 py-3 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th scope="col" class="px-3 py-3 text-center items-center">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th @click="add = true" class="px-3 py-3">
                    1
                  </th>
                  <td @click="add = true" class="px-3 py-3">
                    วุฒินันท์ ศรีสุระ
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    ต่างประเทศ
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    ภาษาอังกฤษ
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    0428976765
                  </td>
                  <td @click="add = true" class="px-3 py-3 text-center items-center">
                    บริการดีมาก
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" @click="isItemModalGuideData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    2
                  </th>
                  <td class="px-3 py-3">
                    รินดา จุตโน
                  </td>
                  <td class="px-3 py-3">
                    ในประเทศ
                  </td>
                  <td class="px-3 py-3">
                    ภาษาอังกฤษ
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    บริการดีมาก
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
                    นพรุจ ชูทำสิทธกุล
                  </td>
                  <td class="px-3 py-3">
                    ต่างประเทศ
                  </td>
                  <td class="px-3 py-3">
                    ภาษาอังกฤษ
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    บริการดีมาก
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
                    กิตติพิชญ์ เสนานุช
                  </td>
                  <td class="px-3 py-3">
                    ต่างประเทศ
                  </td>
                  <td class="px-3 py-3">
                    ภาษาอังกฤษ
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    บริการดีมาก
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
                    ดี ทำใจ
                  </td>
                  <td class="px-3 py-3">
                    ต่างประเทศ
                  </td>
                  <td class="px-3 py-3">
                    ภาษาอังกฤษ
                  </td>
                  <td class="px-3 py-3">
                    0428976765
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    บริการดีมาก
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiCard>
        <o-modal v-model:active="isItemModalGuideData">
          <UiCard>
            <div class="mr-10  flex justify-center">
            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full border-r">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  แก้ไขไกด์ <Icon class="w-6 h-6" name="ic:round-edit" @click="editHotel != true
                ? (editHotel = true)
                : (editHotel = false)">
              </Icon>
                </h2>
                <div class="px-2 grid grid-cols-2 gap-4" v-if="!editHotel">
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ชื่อไกด์</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">วุฒินันท์ ศรีสุระ</p>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ประเภทไกด์</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">ต่างประเทศ</p>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ความสามาถพิเศษ</p>
                    <p class="ml-2 text-base font-normal  dark:text-white">ภาษาอังกฤษ</p>
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
                    <p class="text-base font-semibold  dark:text-white">ชื่อไกด์</p>
                    <o-input class=" text-base font-normal  dark:text-white " modelValue="วุฒินันท์ ศรีสุระ"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ประเภทไกด์</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="ต่างประเทศ"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">ความสามาถพิเศษ</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="ภาษาอังกฤษ"></o-input>
                  </div>
                  <div>
                    <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="0428976765"></o-input>
                  </div>
                  <div class="col-span-2">
                    <p class="text-base font-semibold  dark:text-white">ที่อยู่ติดต่อ</p>
                    <o-input class=" text-base font-normal  dark:text-white" modelValue="9 ถ. ราชปรารภ แขวงมักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400"> </o-input>
                  </div>
                </div>
              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                    <o-input type="text" modelValue="บริการดีมาก"></o-input>
                  </div>
                  <p v-if="!editcomment" class="col-span-2">บริการดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                      ? (editcomment = true)
                      : (editcomment = false)">
                    </Icon>
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
              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบไกด์</o-button>
              <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
            </div>
            </div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="add">
          <div class="px-5 relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="p-6 mx-5">
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  เลือกไกด์
                </h2>
                <div class="flex items-center mb-4 p-4 border shadow-md">
                  <dev class="w-full relative inline-flex items-center">
                    <div class="mx-5">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ</h3>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">ประเภทไกด์ ต่างประเทศ</p>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
                    </div>
                  </dev>
                </div>
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="mb-5 w-full p-4 border shadow-md">

                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="บริการดีมาก"></o-input>
                </div>
                  <p v-if="!editcomment" class="ml-15 col-span-2">บริการดีมาก</p>
                  <p class="mr-15  text-end">20/06/66</p>

                  <p class="w-20 text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                ? (editcomment = true)
                : (editcomment = false)">
              </Icon>
                  </p>
                  </div>
                  </div>
                <h3 class="ml-10 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">ต้องการเพิ่มไกด์คนนี้ ใช่ หรือ ไม่?
                </h3>
                <o-button class="ml-12" @click="add = false">
                  ใช่
                </o-button>
                <button @click="add = false" type="button"
                  class="ml-12 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  ยกเลิก</button>
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
const isItemModalGuideData = ref(false);
const isItemModalHotelData3 = ref(false);
const editHotel = ref(false);
const delete1 = ref(false);
const editcomment = ref(false);
const editcomment2 = ref(false);
const editcomment3 = ref(false);

</script>