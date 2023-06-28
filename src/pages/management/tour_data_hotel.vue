<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour Management / จัดทัวร์ / จัดการโรงแรม </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto">
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
                <Icon class="w-6 h-6 text-blue-700" name="mdi:bed"></Icon>
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
        <UiCard>
          <div class="p-2 w-full relative">
            <NuxtLink href="/tour_data">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-minus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="text-xl font-bold dark:text-white">
            โรงแรม
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li v-if="!delete1" class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566 - 22 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                โรงแรม NHU MINH PLAZA
                <a href="#" @click="isItemModalHotelData2 = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6" name="octicon:comment-16"></Icon> เป็นโรงแรมที่ดีมาก </p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566 - 23 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Mercure Bana
                hills
                <a href="#" @click="isItemModalHotelData2 = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 08978677867</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6" name="octicon:comment-16"></Icon> </p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566 - 24 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Century hotel
                <a href="#" @click="isItemModalHotelData2 = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 04989712356</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6" name="octicon:comment-16"></Icon> </p>
            </li>
          </ol>

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
              <tbody>
                <tr  class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th @click="add = true" class="px-3 py-4">
                    1
                  </th>
                  <td @click="add = true" class="px-3 py-4">
                    โรงแรม NHU MINH PLAZA
                  </td>
                  <td @click="add = true" class="px-3 py-4">
                    Lot 2 - A2 - KH, Phạm Văn Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม
                  </td>
                  <td @click="add = true" class="px-3 py-4">
                    0428976765
                  </td>
                  <td @click="add = true" class="px-3 py-4 text-center items-center">
                    120
                  </td>
                  <td @click="add = true" class="px-3 py-4 text-center items-center">
                    เป็นโรงแรมที่ดีมาก
                  </td>
                  <td class="px-3 py-4 text-center items-center">
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
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
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
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
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
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

        <!-- แก้ไขข้อมูลหลัก -->

        <o-modal v-model:active="isItemModalHotelData">
          <UiCard>
            <div class="mr-10 flex justify-center">
              
            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full border-r">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  โรงแรม NHU MINH PLAZA <Icon class="w-6 h-6" name="ic:round-edit" @click="editHotel != true
                ? (editHotel = true)
                : (editHotel = false)">
              </Icon>
                </h2>
                <div class="px-2" v-if="!editHotel">
                  <p class="text-lg font-semibold  dark:text-white">ที่อยู่</p>
                  <p class="ml-2 text-lg font-normal  dark:text-white">Lot 2 - A2 - KH, Phạm Văn Đồng, Street, Sơn Trà,
                    Đà
                    Nẵng
                    550000 เวียดนาม</p>
                  <p class="text-lg font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                  <p class="ml-2 text-lg font-normal  dark:text-white">0428976765</p>
                  <p class="text-lg font-semibold  dark:text-white">จำนวนห้องพัก</p>
                  <p class="ml-2 text-lg font-normal  dark:text-white">120</p>
                </div>
                <div class="px-2" v-if="editHotel">
                  <p class="text-lg font-semibold  dark:text-white">ที่อยู่</p>
                  <o-input type="text" modelValue="Lot 2 - A2 - KH, Phạm Văn Đồng, Street, Sơn Trà,
                    Đà
                    Nẵng
                    550000 เวียดนาม"></o-input>
                  <p class="text-lg font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                  <p class="ml-2 text-lg font-normal  dark:text-white"></p>
                  <o-input type="text" modelValue="0428976765"></o-input>
                  <p class="text-lg font-semibold  dark:text-white">จำนวนห้องพัก</p>
                  <o-input type="text" modelValue="120"></o-input>
                </div>
              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เป็นโรงแรมที่ดีมาก"></o-input>
                </div>
                  <p v-if="!editcomment" class="col-span-2">เป็นโรงแรมที่ดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                ? (editcomment = true)
                : (editcomment = false)">
              </Icon>
                  </p>
                  
                  <div v-if="editcomment2" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment2" class="col-span-2">ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</p>
                  <p class="w-full text-end">20/06/65</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment2 != true
                ? (editcomment2 = true)
                : (editcomment2 = false)">
              </Icon>
                  </p>

                  <div v-if="editcomment3" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment3" class="col-span-2">ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</p>
                  <p class="w-full text-end">20/06/64</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment3 != true
                ? (editcomment3 = true)
                : (editcomment3 = false)">
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
              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบโรงแรม</o-button>
              <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
            </div>
            </div>
          </UiCard>
        </o-modal>

        
        <o-modal v-model:active="isItemModalHotelData2">
          <UiCard>
            <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">แก้ไขข้อมูล</h3>
            <div class="flex justify-end">
             
            </div>
            
            <div class="flex items-center mb-4 p-4 border shadow-md">
              
              <dev class="w-full relative inline-flex items-center">
                <div class="mx-5">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ Lot 2 - A2 - KH, Phạm Văn
                    Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 120</p>
                </div>
              </dev>
            </div>
            <div class="w-full ml-2">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เป็นโรงแรมที่ดีมาก"></o-input>
                </div>
                  <p v-if="!editcomment" class="col-span-2">เป็นโรงแรมที่ดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                ? (editcomment = true)
                : (editcomment = false)">
              </Icon>
                  </p>
                  
                  <div v-if="editcomment2" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment2" class="col-span-2">ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</p>
                  <p class="w-full text-end">20/06/65</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment2 != true
                ? (editcomment2 = true)
                : (editcomment2 = false)">
              </Icon>
                  </p>

                  <div v-if="editcomment3" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment3" class="col-span-2">ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</p>
                  <p class="w-full text-end">20/06/64</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment3 != true
                ? (editcomment3 = true)
                : (editcomment3 = false)">
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
            <div class="w-full border-r">
              <div class="px-2">
                <p class="text-lg font-semibold  dark:text-white">วันเข้าพัก</p>
                <o-input type="text" modelValue="21 เมษายน 2566"></o-input>
                <p class="text-lg font-semibold  dark:text-white">วันออก</p>
                <p class="ml-2 text-lg font-normal  dark:text-white"></p>
                <o-input type="text" modelValue="22 เมษายน 2566"></o-input>
                <p class="text-lg font-semibold  dark:text-white">จำนวนห้องพัก</p>
                <o-input type="text" modelValue="120"></o-input>
              </div>
              
              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบโรงแรม</o-button>
                <o-button size="medium" variant="primary" @click="isItemModalHotelData2 = false"> บันทึก </o-button></div>
            </div>
          </UiCard>
        </o-modal>



        <!-- เลือกโรงแรม -->

        <o-modal v-model:active="add">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกโรงแรมเข้าพัก
              </h2>
              <div class="flex items-center mb-4 p-4 border shadow-md">
                <dev class="w-full relative inline-flex items-center">
                  <div class="mx-5">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ Lot 2 - A2 - KH, Phạm Văn
                      Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 120</p>
                  </div>
                </dev>
              </div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="w-full p-4 border shadow-md">

                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เป็นโรงแรมที่ดีมาก"></o-input>
                </div>
                  <p v-if="!editcomment" class="col-span-2">เป็นโรงแรมที่ดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment != true
                ? (editcomment = true)
                : (editcomment = false)">
              </Icon>
                  </p>
                  
                  <div v-if="editcomment2" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment2" class="col-span-2">ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</p>
                  <p class="w-full text-end">20/06/65</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment2 != true
                ? (editcomment2 = true)
                : (editcomment2 = false)">
              </Icon>
                  </p>

                  <div v-if="editcomment3" class="col-span-2">
                  <o-input type="text" modelValue="ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว"></o-input>
                </div>
                  <p v-if="!editcomment3" class="col-span-2">ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</p>
                  <p class="w-full text-end">20/06/64</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="ic:round-edit" @click="editcomment3 != true
                ? (editcomment3 = true)
                : (editcomment3 = false)">
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
        <!-- แก้ไข -->
        <o-modal v-model:active="add2">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                แก้ไขโรงแรมเข้าพักและคอมเมนต์
              </h2>
              <div class="flex items-center mb-4 p-4 border shadow-md">
                <dev class="w-full relative inline-flex items-center">
                  <div class="mx-5">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ Lot 2 - A2 - KH, Phạm Văn
                      Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 120</p>
                  </div>
                </dev>
              </div>
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="w-full p-4 border shadow-md">

                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <p class="col-span-2">เป็นโรงแรมที่ดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>
                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                  </p>
                  <p class="col-span-2">ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</p>
                  <p class="w-full text-end">20/06/65</p>
                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                  </p>
                  <p class="col-span-2">ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</p>
                  <p class="w-full text-end">20/06/64</p>
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
                <o-button size="medium" variant="primary" @click="add2 = false"> บันทึก </o-button>
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
const showItems = ref('');
const isItemModalHotelData = ref(false);
const isItemModalHotelData2 = ref(false);
const isItemModalHotelData3 = ref(false);
const add = ref(false);
const add2 = ref(false);
const editHotel = ref(false);
const editHotel2 = ref(false);
const editcomment = ref(false);
const editcomment2 = ref(false);
const editcomment3 = ref(false);
const delete1 = ref(false);
const delete2 = ref(false);
const delete3 = ref(false);
</script>