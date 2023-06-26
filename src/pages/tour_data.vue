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
                  <NuxtLink href="paper/guideorder_paper">
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
                  <Icon class="w-6 h-6 mr-2" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  4 วัน 3 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-2" name="line-md:calendar"></Icon>
                  21/04/2566
                  <Icon class="mx-1 w-5 h-5" name="line-md:arrow-right"></Icon>
                  24/04/2566
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6 mr-2" name="fluent:people-audience-24-filled"></Icon>
                  23 คน
                  <Icon class="w-6 h-6 ml-4" name="el:person"></Icon>
                  19 คน
                  <Icon class="w-6 h-6 ml-2" name="material-symbols:child-care"></Icon>
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
              <Icon class="w-6 h-6" name="mdi:bed" @click="
                showItems != 'hotel'
                  ? (showItems = 'hotel')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <!-- มัคคุเทศก์ -->
              <Icon class="w-6 h-6" name="mdi:face-woman-shimmer" @click="
                showItems != 'guide'
                  ? (showItems = 'guide')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <!-- พาหนะ -->
              <Icon class="w-6 h-6" name="mdi:van-utility" @click="
                showItems != 'vehicle'
                  ? (showItems = 'vehicle')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <!-- สถานที่ -->
              <Icon class="w-6 h-6" name="mdi:store-marker" @click="
                showItems != 'checkpoin'
                  ? (showItems = 'checkpoin')
                  : (showItems = '');
              showComment = false;
              "></Icon>
              <!-- ร้านอาหาร -->
              <Icon class="w-6 h-6" @click="
                showItems != 'restaurant'
                  ? (showItems = 'restaurant')
                  : (showItems = '');
              showComment = false;
              " name="mdi:food-fork-drink"></Icon>
            </div>
          </div>
        </UiCard>
        <!-- โรงแรม -->
        <UiCard v-if="showItems == 'hotel'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_hotel">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            โรงแรม
          </h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">21 เมษายน
                2566 - 22 เมษายน 2566</time>
              <h3 class="text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white">โรงแรม NHU MINH PLAZA
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6 mr-2" name="material-symbols:meeting-room"></Icon>จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6 mr-2" name="solar:phone-bold"></Icon>T. 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400"><Icon class="w-6 h-6 mr-2" name="fluent:comment-error-16-filled"></Icon>เป็นโรงแรมที่ดีมาก
              <Icon class="w-6 h-6" name="iconamoon:edit-fill" @click="
                  showComment != true
                    ? (showComment = true)
                    : (showComment = false)
                  "></Icon>
              </p>

              <div v-if="showComment" class="w-full p-4 border shadow-md">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  คอมเมนต์
                </h2>
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
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566 - 23 เมษายน 2566</time>
              <h3 class="text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white">โรงแรม Mercure Bana
                hills</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 08978677867</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566 - 24 เมษายน 2566</time>
              <h3 class="text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white">โรงแรม Century hotel
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">จำนวน 12 ห้อง</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 04989712356</p>
            </li>
          </ol>
        </UiCard>
        <!-- มัคคุเทศก์ -->
        <UiCard v-if="showItems == 'guide'">
          <div class="p-2 w-full relative">
            <NuxtLink href="/management/tour_data_hotel">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            ไกด์
          </h2>
          <div class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <img class="w-10 h-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese Leos" />
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ต่างประเทศ</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ให้บริการดีมาก
                  <Icon class="w-6 h-6" name="majesticons:comment-text" @click="
                    showComment != true
                      ? (showComment = true)
                      : (showComment = false)
                    "></Icon>
                </p>
              </div>
            </dev>
          </div>
          <div v-if="showComment" class="w-full p-4 border shadow-md">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li class="flex justify-between">
                <div>ให้บริการดีมาก</div>
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
          <div class="mt-4 flex justify-end">
            <o-button>เสร็จสิ้น</o-button>
          </div>
        </UiCard>
        <!-- พาหนะ -->
        <UiCard v-if="showItems == 'vehicle'">
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_vehicle">
              <o-button>
                <Icon class="w-6 h-6" name="ic:baseline-plus"></Icon>
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 class="mb-2 text-xl font-bold dark:text-white">
              รถประจำทัวร์
            </h2>
            <div class="flex items-center mb-4 p-4 border shadow-md">
              <dev class="w-full relative inline-flex items-center">
                <Icon class="w-10 h-10 rounded-full bg-gray-300" name="mdi:bus"></Icon>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">21/04/2566 ถึง 24/04/2566</p>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
                </div>
                <Icon class="absolute inline-flex w-5 h-5 text-xs -top-1 -right-1 dark:border-gray-900" name="uil:x">
                </Icon>
              </dev>
            </div>
            <div class="mt-2 flex justify-end">
              <o-button>เสร็จสิ้น</o-button>
            </div>

            <Icon class="w-6 h-6" name="majesticons:comment-text" @click="
              showComment != true
                ? (showComment = true)
                : (showComment = false)
              "></Icon>
          </div>

          <div v-if="showComment">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              คอมเมนต์
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li class="flex justify-between">
                <div>คนขับรถขับไวนิดหน่อย</div>
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
        <!-- จุดแวะพัก -->
        <UiCard v-if="showItems == 'checkpoin'">
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_stopover">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon>จัดการ/เพิ่มสถานที่
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">สถานที่</th>
                  <th scope="col" class="px-6 py-3">วันที่</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ตม.มุขดาหาร
                  </th>
                  <td class="px-6 py-4">
                    <div>25/06/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon class="w-6 h-6" name="majesticons:comment-text" @click="
                      showComment != true
                        ? (showComment = true)
                        : (showComment = false)
                      "></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_restaurant">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon>จัดการ/เพิ่มร้านอาหาร
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">ร้านอาหาร</th>
                  <th scope="col" class="px-6 py-3">วัน</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    รับประทานอาหารเที่ยง หน้าด่านลาวบาว
                  </th>
                  <td class="px-6 py-4">
                    <div>25/06/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4">
                    <Icon class="w-6 h-6" name="majesticons:comment-text" @click="
                      showComment != true
                        ? (showComment = true)
                        : (showComment = false)
                      "></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
import * as XLSX from "xlsx";

const showItems = ref("");
const showComment = ref(false);

const showItemsListCommentUser = ref(false);
const isItemModalUserData = ref(false);

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
