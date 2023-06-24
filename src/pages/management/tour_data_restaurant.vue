<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการร้านอาหาร </LayoutPageTitle>
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
            ร้านอาหาร
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านเลียจาน</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเที่ยง เวลา 12.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">โครตอร่อย!</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเย็น เวลา 18.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านอาหารอาโนะเนะ</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเที่ยง เวลา 12.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">กินไหมจร๊ะ</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเย็น เวลา 18.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านอาหาร อัลไล</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเที่ยง เวลา 12.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">วงวารอาหาร</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเย็น เวลา 18.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
                <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">โครตอร่อย!</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเที่ยง เวลา 12.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านเลียจาน</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารเย็น เวลา 18.00 น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
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
                    ชื่อร้าน
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ประเภทร้าน
                  </th>
                  <th scope="col" class="px-3 py-3">
                    ที่อยู่
                  </th>
                  <th scope="col" class="px-3 py-3">
                    เบอร์ติดต่อ
                  </th>
                  <th scope="col" class="px-3 py-3">
                    จำนวนโต๊ะ
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
                    โครตอร่อย!
                  </td>
                  <td class="px-3 py-3">
                    อาหารทะเล
                  </td>
                  <td class="px-3 py-3">
                    132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
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
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">Edit</a>
                  </td>
                </tr>
                <tr>
                  <th class="px-3 py-3">
                    2
                  </th>
                  <td class="px-3 py-3">
                    ร้านเลียจาน
                  </td>
                  <td class="px-3 py-3">
                    อาหารทะเล
                  </td>
                  <td class="px-3 py-3">
                    132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
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
                <tr>
                  <th class="px-3 py-3">
                    3
                  </th>
                  <td class="px-3 py-3">
                    ร้านอาหารอาโนะเนะ
                  </td>
                  <td class="px-3 py-3">
                    อาหารญี่ปุ่น
                  </td>
                  <td class="px-3 py-3">
                    132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
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
                    4
                  </th>
                  <td class="px-3 py-3">
                    ร้านหอยคราง
                  </td>
                  <td class="px-3 py-3">
                    อาหารทะเล
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    5
                  </th>
                  <td class="px-3 py-3">
                    แอ๊บขายอาหาร
                  </td>
                  <td class="px-3 py-3">
                    อาหารเหนือ
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    6
                  </th>
                  <td class="px-3 py-3">
                    กินไหมจร๊ะ
                  </td>
                  <td class="px-3 py-3">
                    อาหารไทย
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    7
                  </th>
                  <td class="px-3 py-3">
                    ร้านอาหาร อัลไล
                  </td>
                  <td class="px-3 py-3">
                    อาหารไทย
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    8
                  </th>
                  <td class="px-3 py-3">
                    วงวารอาหาร
                  </td>
                  <td class="px-3 py-3">
                    อาหารทะเล
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    9
                  </th>
                  <td class="px-3 py-3">
                    ข้าวจ้าว
                  </td>
                  <td class="px-3 py-3">
                    อาหารไทย
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    10
                  </th>
                  <td class="px-3 py-3">
                    ในรู
                  </td>
                  <td class="px-3 py-3">
                    อาหารอีสาน
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                    11
                  </th>
                  <td class="px-3 py-3">
                    โต๋วโภชนา
                  </td>
                  <td class="px-3 py-3">
                    อาหารจีน
                  </td>
                  <td class="px-3 py-3">
                    33 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td class="px-3 py-3">
                    08978677867
                  </td>
                  <td class="px-3 py-3 text-center items-center">
                    40
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
                  โครตอร่อย!
                </h2>
                <div class="px-2" v-if="!editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง</p>
                  <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">0428976765</p>
                  <p class="text-base font-semibold  dark:text-white">ประเภทร้านอาหาร</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">อาหารทะเล</p>
                </div>
                <div class="px-2" v-if="editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <o-input type="text" modelValue="132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง"></o-input>
                  <p class="text-base font-semibold  dark:text-white">เบอร์ติดต่อ</p>
                  <p class="ml-2 text-base font-normal  dark:text-white"></p>
                  <o-input type="text" modelValue="0428976765"></o-input>
                  <p class="text-base font-semibold  dark:text-white">ประเภทร้านอาหาร</p>
                  <o-input type="text" modelValue="อาหารทะเล"></o-input>

                </div>
              </div>
              <div class="w-full ml-4">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
                <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                  <p class="col-span-2">เป็นอาหารที่ดีที่สุดที่เคยทานมา</p>
                  <p class="w-full text-end">20/06/66</p>
                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                  </p>
                  <p class="col-span-2">กุ้งสดมากครับ</p>
                  <p class="w-full text-end">20/06/65</p>
                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                  </p>
                  <p class="col-span-2">กุ้งหมดอดล้างตูด</p>
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
              <o-field label="เวลาเข้าร้านอาหาร">
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