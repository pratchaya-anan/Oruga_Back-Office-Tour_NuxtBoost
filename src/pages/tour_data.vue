<template>
  <section class="min-h-screen">
    <LayoutPageTitle> Tour Management / จัดทัวร์ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard class="mb-4">
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="w-full relative">
              <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                class="absolute top-0 right-0 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                type="button">
                <Icon aria-hidden="true" class="w-8 h-8" name="mingcute:more-2-fill"></Icon>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownDots"
                class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
                  aria-labelledby="dropdownMenuIconButton">
                  <NuxtLink @click="Export">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="icon-park-twotone:order"></Icon>พิมพ์ใบ NAMELISTGROUP
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="/guide_order">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="icon-park-twotone:order"></Icon>พิมพ์ใบสั่งงานมัคคุเทศก์
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="/paper/tag_paper">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="mdi:tag"></Icon>
                      พิมพ์ใบ Tag
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="/quotation_list">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="mdi:paper-check"> </Icon>ใบเสนอราคา
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="#">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="uil:bill"> </Icon>ใบเบิกค่าใช้จ่าย
                    </MenuDropItem>
                  </NuxtLink>
                </ul>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-bold dark:text-white">
                ทัวร์เว้ ดานัง ประเทศเวียดนาม
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
                  <Icon class="w-6 h-6 mr-1 ml-6" name="el:person"></Icon>
                  19 คน
                  <Icon class="w-6 h-6 mr-1 ml-2" name="material-symbols:child-care"></Icon>
                  3 คน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-2" name="fluent:comment-error-16-filled"></Icon>
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
              <Icon v-if="showItems != 'hotel'" class="w-6 h-6" name="mdi:bed" @click="
                showItems != 'hotel'
                  ? (showItems = 'hotel')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <Icon v-if="showItems == 'hotel'" class="w-6 h-6 text-blue-700" name="mdi:bed" @click="
                showItems != 'hotel'
                  ? (showItems = 'hotel')
                  : (showItems = '');
              showComment = false;
              "></Icon>

              <!-- มัคคุเทศก์ -->
              <Icon v-if="showItems != 'guide'" class="w-6 h-6" name="mdi:face-woman-shimmer" @click="
                showItems != 'guide'
                  ? (showItems = 'guide')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <Icon v-if="showItems == 'guide'" class="w-6 h-6 text-blue-700" name="mdi:face-woman-shimmer" @click="
                showItems != 'guide'
                  ? (showItems = 'guide')
                  : (showItems = '');
              showComment = false;
              "></Icon>

              <!-- พาหนะ -->
              <Icon v-if="showItems != 'vehicle'" class="w-6 h-6" name="mdi:van-utility" @click="
                showItems != 'vehicle'
                  ? (showItems = 'vehicle')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <Icon v-if="showItems == 'vehicle'" class="w-6 h-6 text-blue-700" name="mdi:van-utility" @click="
                showItems != 'vehicle'
                  ? (showItems = 'vehicle')
                  : (showItems = '');
              showComment = false;
              "></Icon>

              <!-- สถานที่ -->
              <Icon v-if="showItems != 'checkpoin'" class="w-6 h-6" name="mdi:store-marker" @click="
                showItems != 'checkpoin'
                  ? (showItems = 'checkpoin')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <Icon v-if="showItems == 'checkpoin'" class="w-6 h-6 text-blue-700" name="mdi:store-marker" @click="
                showItems != 'checkpoin'
                  ? (showItems = 'checkpoin')
                  : (showItems = '');
              showComment = false;
              "></Icon>

              <!-- ร้านอาหาร -->
              <Icon v-if="showItems != 'restaurant'" class="w-6 h-6" @click="
                showItems != 'restaurant'
                  ? (showItems = 'restaurant')
                  : (showItems = '');
              showComment = false;
              " name="mdi:food-fork-drink"></Icon>
              <Icon v-if="showItems == 'restaurant'" class="w-6 h-6 text-blue-700" @click="
                showItems != 'restaurant'
                  ? (showItems = 'restaurant')
                  : (showItems = '');
              showComment = false;
              " name="mdi:food-fork-drink"></Icon>
            </div>
          </div>
        </UiCard>
        <!-- โรงแรม -->
        <UiCard class="mt-4" v-if="showItems == 'hotel'">
          <div class="w-full relative">
            <NuxtLink href="/management/tour_data_hotel">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="mt-2 text-xl font-bold dark:text-white">
            โรงแรม
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566 - 22 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA
                <a href="#" @click="isItemModalHotelData2 = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16"></Icon> เป็นโรงแรมที่ดีมาก
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566 - 23 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Mercure Bana
                hills
                <a href="#" @click="add = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 08978677867</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16"></Icon>
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566 - 24 เมษายน 2566</time>
              <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">โรงแรม Century hotel
                <a href="#" @click="add = true"
                  class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16"></Icon>
              </p>
            </li>
          </ol>
        </UiCard>
        <!-- มัคคุเทศก์ -->
        <UiCard v-if="showItems == 'guide'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_guide">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="text-xl font-bold dark:text-white">
            ไกด์
          </h2>
          <div class="w-full items-center my-2 p-4 border shadow-md">
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
                  <Icon class="w-6 h-6" name="octicon:comment-16"></Icon> ให้บริการดีมาก
                </p>
              </div>
            </dev>
          </div>

        </UiCard>
        <!-- พาหนะ -->
        <UiCard v-if="showItems == 'vehicle'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_vehicle">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
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
                รถบัสลาว <a href="#" @click="isItemModalHotelData4 = true"
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

        <o-modal v-model:active="isItemModalHotelData4">
          <UiCard>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              แก้ไขรถ
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
        <!-- จุดแวะพัก -->
        <UiCard v-if="showItems == 'checkpoin'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_stopover">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
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
              <h3 class="mt-1 flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                <a>บ้านหนองผือ</a><a href="#" @click="isItemModalHotelData5 = true"
                  class=" text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">05.00 น.
                อ.ชานุมาน อำนาจเจริญ ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16" @click="
                  showComment != true
                    ? (showComment = true)
                    : (showComment = false)
                  "></Icon> เช็คความพร้อม
              </p>
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
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">บ่าย นั่งกระเช้าลอยฟ้า / สะพานเมืองทอง /
                สวนดอกไม้</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น / เข้าที่พัก</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บาน่าฮิว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เช้า รับประทานอาหารเช้าที่โรงแรม /
                เดินทางลงจากบาน่าฮิลล์สู่เมืองเว้</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เที่ยง รับประทานอาหารเที่ยง /
                ชมพระราชวังได๋โหน๋ย / ตลาดดงบา / วัดเทียนมู๋ / ล่องเรือมังกร / รับประทานอาหารเย็น / เข้าที่พัก</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น / เข้าที่พัก</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">เว้</h3>ด่านลาวบาว
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เช้า รับประทานอาหารเช้าที่โรงแรม /
                เดินทางกลับประเทศไทย</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ด่านลาวบาว</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เทียง ทำพิธีการข้ามด่าน /
                รับประทานอาหารเที่ยง / เดินทางต่อมายังด่านสะหวันนะเขต</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ด่านสะหวันนะเขต</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เย็น รับประทานอาหารเย็น</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">20.00
                น.เดินทางถึงจุดหมายปลายทางโดยสวัสดิภาพ</p>
            </li>
          </ol>

          <div v-if="showComment">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li class="flex justify-between">
                <div>ตม.ให้บริการดี</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
            </ul>

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
        </UiCard>

        <o-modal v-model:active="isItemModalHotelData5">
          <UiCard>
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                แก้ไขจุดแวะพัก
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
            <div class="w-full ml-2">
              <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เช็คความพร้อม"></o-input>
                </div>
                <p v-if="!editcomment" class="col-span-2">เช็คความพร้อม</p>
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
              <p class="text-lg font-semibold  dark:text-white">วันที่</p>
              <o-input type="text" modelValue="21 เมษายน 2566"></o-input>
            </div>
            <div>
              <div class="flex gap-3">
                <o-radio v-model="time" name="time" native-value="time">เวลา</o-radio>
                <o-radio v-model="time" name="time" native-value="duration">ช่วงเวลา</o-radio>
              </div>
              <o-input type="text" modelValue="05.00 น." v-if="time == 'time'"></o-input>
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
              <p class="text-lg font-semibold  dark:text-white">หมายเหตุ</p>
              <o-input type="text"
                modelValue="05.00 น. อ.ชานุมาน อำนาจเจริญ ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว"></o-input>
            </div>
            <div class="w-full ">


              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบจุดแวะพัก</o-button>
                <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
              </div>
            </div>
          </UiCard>
        </o-modal>

        <!-- ร้านอาหาร -->
        <UiCard v-if="showItems == 'restaurant'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_restaurant">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
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
              <h3
                class="mt-1 flex justify-between text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white">
                <a href="#">ร้านเลียจาน</a><a href="#" @click="isItemModalHotelData6 = true"
                  class=" text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a>
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเทียง ร้านเลียจาน</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16" @click="
                  showComment != true
                    ? (showComment = true)
                    : (showComment = false)
                  "></Icon> เป็นอาหารที่ดีที่สุดที่เคยทานมา
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านอาหารอาโนะเนะ</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเี่ยง ร้านอาหารอาโนะเนะ
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">กินไหมจร๊ะ</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น กินไหมจร๊ะ</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านอาหาร อัลไล</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเที่ยง ร้านอาหาร อัลไล
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">วงวารอาหาร</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น วงวารอาหาร</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ในรู</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเที่ยง ในรู</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">โต๋วโภชนา</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น โต๋วโภชนา</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
            </li>
          </ol>
          <div v-if="showComment">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li class="flex justify-between">
                <div>รสชาติอาหารดี</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
            </ul>
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
        </UiCard>

        <o-modal v-model:active="isItemModalHotelData6">
          <UiCard>
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                แก้ไขร้านอาหาร
              </h2>
              <div class="flex items-center mb-4 p-4 border shadow-md">
                <dev class="w-full relative inline-flex items-center">
                  <div class="mx-9">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โครตอร่อย!</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">อาหารทะเล</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง
                      จังหวัดดินแดง</p>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
                  </div>
                </dev>
              </div>
            </div>
            <div class="w-full ml-2">
              <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เป็นอาหารที่ดีที่สุดที่เคยทานมา

"></o-input>
                </div>
                <p v-if="!editcomment" class="col-span-2">เป็นอาหารที่ดีที่สุดที่เคยทานมา

                </p>
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
              <p class="text-lg font-semibold  dark:text-white">วันที่</p>
              <o-input type="text" modelValue="21 เมษายน 2566"></o-input>
            </div>
            <div>
              <div class="flex gap-3">
                <o-radio v-model="time" name="time" native-value="time">เวลา</o-radio>
                <o-radio v-model="time" name="time" native-value="duration">ช่วงเวลา</o-radio>
              </div>
              <o-input type="text" modelValue="12.00 น." v-if="time == 'time'"></o-input>
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
              <p class="text-lg font-semibold  dark:text-white">หมายเหตุ</p>
              <o-input type="text" modelValue="ทานอาหารเทียง ร้านเลียจาน"></o-input>
            </div>
            <div class="w-full ">


              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบจุดแวะพัก</o-button>
                <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
              </div>
            </div>
          </UiCard>
        </o-modal>


        <!-- แก้ไขโรงแรม -->
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
            <div class="w-full">
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
                <o-button size="medium" variant="primary" @click="isItemModalHotelData2 = false"> บันทึก </o-button>
              </div>
            </div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="add">
          <div class="p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              แก้ไขข้อมูล
            </h2>
            <div class="flex items-center mb-2 p-4 border shadow-md">
              <dev class="w-full relative inline-flex items-center">
                <div class="mx-5">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรงแรม NHU MINH PLAZA</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ Lot 2 - A2 - KH, Phạm
                    Văn
                    Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 120</p>
                </div>
              </dev>
            </div>
            <div class="w-full mb-2 p-4 border shadow-md">
              <div class="mx-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">คอมเมนต์</h3>
                <div class="mb-2 grid grid-cols-4 gap-0">
                  <div v-if="editcomment" class="col-span-2">
                    <o-input type="text" modelValue="เป็นโรงแรมที่ดีมาก"></o-input>
                  </div>
                  <p v-if="!editcomment" class="col-span-2">เป็นโรงแรมที่ดีมาก</p>
                  <p class="w-full text-end">20/06/66</p>

                  <p class="w-full text-end">
                    <Icon class="w-6 h-6" name="mdi:comment-edit" @click="editcomment != true
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
                    <Icon class="w-6 h-6" name="mdi:comment-edit" @click="editcomment2 != true
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
                    <Icon class="w-6 h-6" name="mdi:comment-edit" @click="editcomment3 != true
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
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              ข้อมูลเดินทาง
            </h2>
            <div class="grid grid-cols-2 gap-4 w-full mb-4 p-4 border shadow-md">
              <div>
                <o-field label="วันเข้าพัก">
                  <o-input modelValue="21 เมษายน 2566"></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="วันออก">
                  <o-input modelValue="24 เมษายน 2566"></o-input>
                </o-field>
              </div>
              <div class="col-span-2">
                <o-field label="จำนวนห้องพัก">
                  <o-input type="number" modelValue="12"></o-input>
                </o-field>
              </div>
            </div>
            <div class="col-span-2">
              <div class="ml-2 flex justify-between">
                <o-button size="medium" variant="danger" @click="add = false"> ลบโรงแรม </o-button>
                <o-button size="medium" variant="primary" @click="add = false"> บันทึก </o-button>
              </div>
            </div>
          </div>
        </o-modal>
        <!-- แก้ไข้ไกด์ -->
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
                  <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์
                    ศรีสุระ </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">ต่างประเทศ</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
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
                  <o-input type="text" modelValue="เป็นโรงแรมที่ดีมาก"></o-input>
                </div>
                <p v-if="!editcomment" class="col-span-2">ให้บริการดีมาก</p>
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
      </div>
      <!-- ลูกทัวร์ -->
      <div class="col-span-2">
        <div class="grid grid-cols-3 gap-3">
          <div class="w-full items-center">
            <UiCard @click="isItemModalAddUser = true"
              class="px-14 py-14 hover:bg-gray-100 hover:text-blue-700 cursor-pointer">
              <div class="w-full h-full text-center items-center">
                <Icon class="w-12 h-12" name="wpf:adduser"></Icon>
                <div>เพิ่มลูกทัวร์</div>
              </div>
            </UiCard>
          </div>
          <div v-for="(item, index) in memberdata" :key="index">
            <UiCard class="p-2 hover:bg-gray-100 cursor-pointer" @click="isItemModalUserData = true">
              <div class="flex justify-end">
                <Icon v-if="item.gender == 'male'" class="text-xl font-medium text-green-600 dark:text-white"
                  name="mdi:gender-male">
                </Icon>
                <Icon v-else class="text-xl font-medium text-pink-600 dark:text-white" name="ph:gender-female-bold">
                </Icon>
              </div>
              <div class="w-full flex flex-col items-center">
                <h5 class="text-md font-medium text-gray-900 dark:text-white">
                  {{ item.name_thai }} {{ item.lastname_thai }}
                </h5>
                <h5 class=" text-sm font-medium text-gray-900 dark:text-white">
                  {{ item.name_eng }} {{ item.lastname_eng }}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400"> {{ item.region }}</span>
                <!-- แจ้งเตือนลูกทัวร์ -->
                <div class="flex justify-center">
                  <div class="mr-1">
                    <Icon class="w-6 h-6 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                      name="mingcute:cake-fill">
                    </Icon>
                    <div
                      class="flex absolute justify-center items-center ml-4 -mt-2 w-2 h-2 rounded-full border border-white bg-blue-500 dark:border-gray-700">
                    </div>
                  </div>
                  <div>
                    <Icon class="w-5 h-5 text-xl font-medium text-gray-500 dark:text-white" name="fa6-solid:passport">
                    </Icon>
                    <div
                      class="flex absolute justify-center items-center ml-4 -mt-1 w-2 h-2 rounded-full border border-white bg-red-500 dark:border-gray-700">
                    </div>
                  </div>
                </div>
                <div>
                  <span class="px-10 text-sm text-gray-500 dark:text-gray-400 truncate">
                    <Icon class="w-4 h-4 mr-1" name="majesticons:comment-text"></Icon>{{ item.comment }}
                  </span>
                </div>
              </div>
            </UiCard>
          </div>
          <!-- รายละเอียดข้อมูลลูกทัวร์ -->
          <o-modal v-model:active="isItemModalUserData">
            <UiCard>
              <div class="grid grid-cols-2 gap-2">
                <div class="p-3 border-r">
                  <div class="flex items-center justify-start mb-2">
                    <a href="#">
                      <img class="w-10 h-10 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Jese Leos" />
                    </a>
                  </div>
                  <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                    <a href="#">สมหมาย ใจดี</a>
                    <Icon class="ml-2 text-xl font-medium text-green-600 dark:text-white" name="mdi:gender-male">
                    </Icon>
                  </p>
                  <p class="mb-3 text-sm font-normal">
                    <a href="#" class="hover:underline">sommai jaidee</a>
                  </p>
                  <div class="flex">
                    <p class="mb-2 text-base font-semibold leading-none text-gray-900 dark:text-white">
                      ข้อมูลส่วนตัว
                    </p>
                    <div class="flex text-sm text-blue-500" role="alert">
                      <Icon class="w-5 h-5 mx-2" name="mingcute:warning-line"></Icon>
                      <p>วันเกิด</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="carbon:phone-filled"></Icon>098-158-4478
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="mingcute:cake-fill"></Icon>20/04/2000
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fa6-solid:people-arrows"></Icon>35 ปี
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="gis:search-country"></Icon>Thai
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fa-solid:id-card"></Icon>1-7399-01893-76-5
                    </p>
                    <p class="mb-4 text-sm col-span-2">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="ant-design:home-twotone"></Icon>20-22 หมู่13
                      ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น
                      40000
                    </p>
                  </div>
                  <div class="flex">
                    <p class="mb-2 text-base font-semibold leading-none text-gray-900 dark:text-white">
                      พาสปอร์ต
                    </p>
                    <div class="flex text-sm text-red-500" role="alert">
                      <Icon class="mx-2 w-5 h-5" name="mingcute:warning-line"></Icon>
                      <p>พาสปอร์ตจะหมดอายุภายใน 120 วัน</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fa6-solid:passport"></Icon>1635501893
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fluent-mdl2:number-field"></Icon>1478/63
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fa6-solid:calendar-check"></Icon>25/01/2566
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="fa6-solid:calendar-xmark"></Icon>25/01/2570
                    </p>
                  </div>
                  <p class="mb-2 text-base font-semibold leading-none text-gray-900 dark:text-white">
                    ข้อมูลเดินทาง
                  </p>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="tabler:number"></Icon>
                      1
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon class="mr-2 w-6 h-6 text-gray-600" name="mingcute:bed-fill"></Icon>คู่
                    </p>
                  </div>
                </div>
                <div class="p-3">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">คอมเมนต์</h3>
                  <div class="p-2 grid grid-cols-4 gap-0">
                    <p class="col-span-2">แพ้กุ้ง</p>
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
              <div class="p-2 flex justify-between border-t">
                <o-button size="medium" variant="danger" @click="add = false"> ลบลูกทัวร์ </o-button>
                <o-button size="medium" variant="primary" @click="add = false"> บันทึก </o-button>
              </div>
            </UiCard>
          </o-modal>
          <!-- เพิ่มข้อมูลลูกทัวร์ -->
          <o-modal v-model:active="isItemModalAddUser">
            <UiCard>
              <div class="my-2 grid grid-cols-2 gap-2 mt-5">
                <div class="flex">
                  <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
                  <div class="px-2">
                    <o-button>ค้นหา</o-button>
                  </div>
                </div>
                <div class="flex justify-end">
                  <NuxtLink to="/adduser">
                    <o-button>+ เพิ่มลูกทัวร์ใหม่</o-button>
                  </NuxtLink>
                </div>
              </div>
              <o-table :data="memberdata" checkable>
                <o-table-column v-for="column in columns" v-bind="column" :key="column" #default="{ row }">
                  {{ row[column.field] || '' }} {{ row[column.field2] || '' }}
                </o-table-column>
              </o-table>
              <div @click="isItemModalAddUser = false"  class="flex justify-end my-2">
                <o-button>บันทึก</o-button>
              </div>
            </UiCard>
          </o-modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
import * as XLSX from "xlsx";

const add = ref(false);
const time = ref('');
const showItems = ref("");
const showComment = ref(false);

const isItemModalAddUser = ref(false);
const isItemModalUserData = ref(false);
const isItemModalHotelData2 = ref(false);
const isItemModalHotelData3 = ref(false);
const isItemModalHotelData4 = ref(false);
const isItemModalHotelData5 = ref(false);
const isItemModalHotelData6 = ref(false);
const editcomment = ref(false);
const editcomment2 = ref(false);
const editcomment3 = ref(false);

const items = ref([{ message: "Foo" }, { message: "Bar" }]);

const columns = ref([

  {
    field: "name_thai",
    field2: "lastname_thai",
    label: "ชื่อ-สกุล",
  },
  {
    field: "birthday",
    label: "วันเกิด",
    position: 'centered',
  },
  {
    field: "date_exp",
    label: "วันหมดอายุพาสปอต",
    position: 'centered',
  },
  {
    field: "phone",
    label: "เบอร์ติดต่อ",
  },
  {
    field: "comment",
    label: "คอมเมนต์",
    position: 'centered',
  },
  {
    field: "management",
    label: "จัดการ",
    position: "centered",
  },
]);
const memberdata = ref([
  {
    name_thai: "สมหมาย",
    lastname_thai: "ใจดี",
    name_eng: "sommai",
    lastname_eng: "jaidee",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "35",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "แพ้กุ้ง",
    management: '...',
  },
  {
    name_thai: "สมศรี ",
    lastname_thai: "มีใจ",
    name_eng: "somsri",
    lastname_eng: "meejai",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "กนกนันทร์ ",
    lastname_thai: "สุเชาว์อินทร์",
    name_eng: "Kanoknan",
    lastname_eng: "Suchao-in",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จาริยา ",
    lastname_thai: "รัชตาธิวัฒน์",
    name_eng: "Jariya",
    lastname_eng: "Ratchatathiwat",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จารุนันท์ ",
    lastname_thai: "พันธ์งามตา",
    name_eng: "Jarunan",
    lastname_eng: "Phanggamta",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จิตราพร ",
    lastname_thai: "ทองคง",
    name_eng: "Chittraporn",
    lastname_eng: "Thongkong",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "เฉลิมเดช ",
    lastname_thai: "ประพิณไพโรจน์",
    name_eng: "Chalermdej",
    lastname_eng: "Prapinpairoj",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณภัทร ",
    lastname_thai: "เครือทิวา",
    name_eng: "Naphat",
    lastname_eng: "Kruatiwa",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฏฐา ",
    lastname_thai: "สุภาสนันท",
    name_eng: "Nattha",
    lastname_eng: "Suphasanan",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฐดา ",
    lastname_thai: "ฟักทอง",
    name_eng: "Nuttida",
    lastname_eng: "Fangthong",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฐพงษ์",
    lastname_thai: "ธนโชติเจริญ",
    name_eng: "Natthapong",
    lastname_eng: "Thanachotcharoen",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ทวีภรณ์",
    lastname_thai: "ศรีสุขคํา",
    name_eng: "Thaweeporn",
    lastname_eng: "Srisukkham",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  }, {
    name_thai: "สมหมาย ",
    lastname_thai: "ใจดี",
    name_eng: "sommai",
    lastname_eng: "jaidee",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "35",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "สมศรี ",
    lastname_thai: "มีใจ",
    name_eng: "somsri",
    lastname_eng: "meejai",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "กนกนันทร์ ",
    lastname_thai: "สุเชาว์อินทร์",
    name_eng: "Kanoknan",
    lastname_eng: "Suchao-in",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จาริยา ",
    lastname_thai: "รัชตาธิวัฒน์",
    name_eng: "Jariya",
    lastname_eng: "Ratchatathiwat",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จารุนันท์ ",
    lastname_thai: "พันธ์งามตา",
    name_eng: "Jarunan",
    lastname_eng: "Phanggamta",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "จิตราพร ",
    lastname_thai: "ทองคง",
    name_eng: "Chittraporn",
    lastname_eng: "Thongkong",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "เฉลิมเดช ",
    lastname_thai: "ประพิณไพโรจน์",
    name_eng: "Chalermdej",
    lastname_eng: "Prapinpairoj",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณภัทร ",
    lastname_thai: "เครือทิวา",
    name_eng: "Naphat",
    lastname_eng: "Kruatiwa",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฏฐา ",
    lastname_thai: "สุภาสนันท",
    name_eng: "Nattha",
    lastname_eng: "Suphasanan",
    gender: "female",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฐดา ",
    lastname_thai: "ฟักทอง",
    name_eng: "Nuttida",
    lastname_eng: "Fangthong",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },
  {
    name_thai: "ณัฐพงษ์",
    lastname_thai: "ธนโชติเจริญ",
    name_eng: "Natthapong",
    lastname_eng: "Thanachotcharoen",
    gender: "male",

    phone: "098-158-4478",
    birthday: "20 Aug 2000",
    age: "27",
    religion: "พุธ",
    IDCard: "1-7399-01893-76-5",
    region: "ไทย",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
    comment: "ไม่มี",
    management: '...',
  },

]);
const data = ref(memberdata);
const name = ref("Tour member");

const datamember = ref([
  ["Program", "Hotel", "สะบายดี", "Checkon"],
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
  {
    ลำดับ: 1,
    ชื่อภาษาไทย: "นายเอ บี",
    Name: "Mr.A B",
    NoPassport: "AC1234567",
    วันที่ออก: "22/9/23",
    วันที่หมด: "21/9/33",
    วันเดือนปีดกิด: "15/7/2549",
    สถานที่เกิด: "UBON",
    ห้อง: "-",
    หมายเหตุ: "-",
  },
]);

function Export() {
  const dataWS = XLSX.utils.json_to_sheet(datamember.value);
  const merge = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } },
    { s: { r: 0, c: 3 }, e: { r: 0, c: 5 } },
    { s: { r: 0, c: 6 }, e: { r: 0, c: 9 } },
    { s: { r: 1, c: 2 }, e: { r: 2, c: 2 } },
    { s: { r: 1, c: 3 }, e: { r: 2, c: 5 } },
    { s: { r: 1, c: 6 }, e: { r: 1, c: 9 } },
    { s: { r: 2, c: 6 }, e: { r: 2, c: 9 } },
  ];
  dataWS["!merges"] = merge;
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, dataWS);
  XLSX.writeFile(wb, name.value + ".xlsx");
}
onMounted(() => {
  initFlowbite();
});
</script>
