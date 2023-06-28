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
                องค์การบริหารส่วนตำบลโพนงาม
              </h2>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-2" name="ri:treasure-map-fill"></Icon>
                  อำนาจเจริญ-เว้ดานัง (ประเทศเวียดนาม)
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  4 วัน 3 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  21/04/2566
                  <Icon class="mx-1 w-5 h-5" name="line-md:arrow-right"></Icon>
                  24/04/2566
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="fluent:people-audience-24-filled"></Icon>
                  23 คน
                  <Icon class="w-6 h-6 ml-6" name="el:person"></Icon>
                  19 คน
                  <Icon class="w-6 h-6 ml-2" name="material-symbols:child-care"></Icon>
                  3 คน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="fluent:comment-error-16-filled"></Icon>
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

                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ต่างประเทศ</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
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
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">โรถบัสลาว
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                ปานกลาง
              </p>
            </li>
          </ol>
        </UiCard>
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
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">บ้านหนองผือ</h3>
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
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">ร้านเลียจาน</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเทียง ร้านเลียจาน</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">โครตอร่อย!</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น โครตอร่อย!</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
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
      </div>
      <!-- ลูกทัวร์ -->
      <div class="grid grid-cols-1 col-span-2 gap-4">
        <div class="flex flex-wrap gap-4">
          <div>
            <UiCard class="flex-1 hover:bg-gray-100 hover:text-blue-700 cursor-pointer">
              <NuxtLink class="h-full w-full text-center grid items-center" href="/management/tour_data_members">
                <div>
                  <Icon class="w-10 h-10" name="tabler:settings-plus"></Icon>
                </div>
                <div>จัดการ/เพิ่มลูกทัวร์</div>
              </NuxtLink>
            </UiCard>
          </div>
          <div v-for="(item, index) in memberdata" :key="index">
            <UiCard class="flex-1 hover:bg-gray-100 cursor-pointer" @click="isItemModalUserData = true">
              <div class="flex justify-end">
                <Icon v-if="item.gender == 'male'" class="text-xl font-medium text-green-600 dark:text-white"
                  name="mdi:gender-male">
                </Icon>
                <Icon v-else class="text-xl font-medium text-pink-600 dark:text-white" name="ph:gender-female-bold">
                </Icon>
              </div>
              <div class="flex flex-col items-center">
                <h5 class="text-md font-medium text-gray-900 dark:text-white">
                  {{ item.name_thai }} {{ item.lastname_thai }}
                </h5>
                <h5 class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  {{ item.name_eng }} {{ item.lastname_eng }}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Thai</span>
                <!-- แจ้งเตือนลูกทัวร์ -->
                <div class="flex justify-center">
                  <div>
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
                    <Icon class="w-4 h-4" name="majesticons:comment-text"></Icon>แพ้กุ้ง
                  </span>
                </div>
              </div>
            </UiCard>
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
                      <a href="#">{{ item.name_thai }} {{ item.lastname_thai }}</a>
                      <Icon class="text-xl font-medium text-green-600 dark:text-white" name="mdi:gender-male">
                      </Icon>
                    </p>
                    <p class="mb-3 text-sm font-normal">
                      <a href="#" class="hover:underline">{{ item.name_eng }} {{ item.lastname_eng }}</a>
                    </p>
                    <div class="flex">
                      <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        ข้อมูลส่วนตัว
                      </p>
                      <div class="flex text-sm text-blue-500" role="alert">
                        <Icon class="w-5 h-5 mr-1" name="mingcute:warning-line"></Icon>
                        <p>วันเกิด</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="carbon:phone-filled"></Icon>098-158-4478
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="mingcute:cake-fill"></Icon>20/04/2000
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:people-arrows"></Icon>35 ปี
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="gis:search-country"></Icon>Thai
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fa-solid:id-card"></Icon>1-7399-01893-76-5
                      </p>
                      <p class="mb-4 text-sm col-span-2">
                        <Icon class="w-6 h-6 text-gray-600" name="ant-design:home-twotone"></Icon>20-22 หมู่13
                        ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น
                        40000
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        พาสปอร์ต
                      </p>
                      <div class="flex text-sm text-red-500" role="alert">
                        <Icon class="w-5 h-5 mr-1" name="mingcute:warning-line"></Icon>
                        <p>พาสปอร์ตจะหมดอายุภายใน 120 วัน</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:passport"></Icon>1635501893
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fluent-mdl2:number-field"></Icon>1478/63
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:calendar-check"></Icon>25/01/2566
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="fa6-solid:calendar-xmark"></Icon>25/01/2570
                      </p>
                    </div>
                    <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                      ข้อมูลเดินทาง
                    </p>
                    <div class="grid grid-cols-2">
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="tabler:number"></Icon>
                        {{ index + 1 }}
                      </p>
                      <p class="mb-4 text-sm">
                        <Icon class="w-6 h-6 text-gray-600" name="mingcute:bed-fill"></Icon>คู่
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      คอมเมนต์
                    </h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li class="flex justify-between">
                        <div>แพ้กุ้ง</div>
                        <div>20/06/66</div>
                        <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                      </li>
                    </ul>
                    <o-button @click="showItemsListCommentUser = true">เขียนคอมเมนต์</o-button>

                    <div v-if="showItemsListCommentUser">
                      <o-field label="เขียนคอมเมนต์">
                        <o-input type="textarea"></o-input>
                      </o-field>
                      <div class="flex">
                        <o-field label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)">
                          <o-input></o-input>
                        </o-field>
                        <section class="flex-1 shrink flex items-center justify-end">
                          <o-button @click="showItemsListCommentUser = false" class="ml-4 mt-5">ปิด
                          </o-button>
                          <o-button class="mt-5">เพิ่ม</o-button>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-popper-arrow></div>
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
                <h3 class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ </h3>
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
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">ที่อยู่ Lot 2 - A2 - KH, Phạm
                          Văn
                          Đồng, Street, Sơn Trà, Đà Nẵng 550000 เวียดนาม</p>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวนห้องพัก 120</p>
                      </div>
                    </dev>
                  </div>
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    คอมเมนต์
                  </h2>
                  <div class="w-full mb-4 p-4 border shadow-md">
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
                    <o-button size="medium" variant="primary" @click="add = false"> บันทึก </o-button>
                  </div>
                </div>
              </div>
            </o-modal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
import * as XLSX from "xlsx";

const add = ref(false);

const showItems = ref("");
const showComment = ref(false);

const showItemsListCommentUser = ref(false);
const isItemModalUserData = ref(false);
const isItemModalHotelData2 = ref(false);
const isItemModalHotelData3 = ref(false);
const editcomment = ref(false);
const editcomment2 = ref(false);
const editcomment3 = ref(false);

const items = ref([{ message: "Foo" }, { message: "Bar" }]);
const memberdata = ref([
  {
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
    region: "Thai",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
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
    region: "Thai",
    address: "20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000",

    passport: "1635501893",
    no_passport: "1478/63",
    date_issue: "20 Aug 2022",
    date_exp: "20 Aug 2026",
    bed: "คู่",
  },
]);

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
