<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ / จัดการยานพาหนะ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="w-full relative">
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                class="absolute top-0 right-0 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                type="button"
              >
                <Icon
                  aria-hidden="true"
                  class="w-8 h-8"
                  name="mingcute:more-2-fill"
                ></Icon>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownDots"
                class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <NuxtLink @click="Export">
                    <MenuDropItem
                      ><Icon
                        class="w-4 h-4 mr-1"
                        name="icon-park-twotone:order"
                      ></Icon
                      >พิมพ์ใบ NAMELISTGROUP</MenuDropItem
                    >
                  </NuxtLink>
                  <NuxtLink href="paper/guideorder_paper">
                    <MenuDropItem
                      ><Icon
                        class="w-4 h-4 mr-1"
                        name="icon-park-twotone:order"
                      ></Icon
                      >พิมพ์ใบสั่งงานมัคคุเทศก์</MenuDropItem
                    >
                  </NuxtLink>
                  <NuxtLink href="/paper/tag_paper">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="mdi:tag"></Icon>
                      พิมพ์ใบ Tag
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="/quotation_list">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="mdi:paper-check"> </Icon
                      >ใบเสนอราคา
                    </MenuDropItem>
                  </NuxtLink>
                  <NuxtLink href="#">
                    <MenuDropItem>
                      <Icon class="w-4 h-4 mr-1" name="uil:bill"> </Icon
                      >ใบเบิกค่าใช้จ่าย
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
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                  อำนาจเจริญ-เว้ดานัง (ประเทศเวียดนาม)
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="line-md:moon-filled-to-sunny-filled-transition"
                  ></Icon>
                  4 วัน 3 คืน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  21/04/2566 &#32;
                  <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                  &#32; 24/04/2566
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:people-audience-24-filled"
                  ></Icon>
                  23 คน
                  <Icon class="w-6 h-6 ml-6" name="el:person"></Icon>
                  19 คน
                  <Icon
                    class="w-6 h-6 ml-2"
                    name="material-symbols:child-care"
                  ></Icon>
                  3 คน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:comment-error-16-filled"
                  ></Icon>
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
              <Icon
                class="w-6 h-6"
                name="mdi:bed"
                @click="
                  showItems != 'hotel'
                    ? (showItems = 'hotel')
                    : (showItems = '');
                  showComment = false;
                "
              ></Icon>
              <!-- มัคคุเทศก์ -->
              <Icon
                class="w-6 h-6"
                name="mdi:face-woman-shimmer"
                @click="
                  showItems != 'guide'
                    ? (showItems = 'guide')
                    : (showItems = '');
                  showComment = false;
                "
              ></Icon>
              <!-- พาหนะ -->
              <Icon
                class="w-6 h-6"
                name="mdi:van-utility"
                @click="
                  showItems != 'vehicle'
                    ? (showItems = 'vehicle')
                    : (showItems = '');
                  showComment = false;
                "
              ></Icon>
              <!-- สถานที่ -->
              <Icon
                class="w-6 h-6"
                name="mdi:store-marker"
                @click="
                  showItems != 'checkpoin'
                    ? (showItems = 'checkpoin')
                    : (showItems = '');
                  showComment = false;
                "
              ></Icon>
              <!-- ร้านอาหาร -->
              <Icon
                class="w-6 h-6"
                @click="
                  showItems != 'restaurant'
                    ? (showItems = 'restaurant')
                    : (showItems = '');
                  showComment = false;
                "
                name="mdi:food-fork-drink"
              ></Icon>
            </div>
          </div>
        </UiCard>
        <!-- โรงแรม -->
        <UiCard v-if="showItems == 'hotel'">
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_hotel">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
                >จัดการ/เพิ่มโรงแรม
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">โรงแรม</th>
                  <th scope="col" class="px-6 py-3">วันเข้าพัก</th>
                  <th scope="col" class="px-6 py-3">วันออก</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate"
                  >
                    NHU MINH...
                  </th>
                  <td class="px-6 py-4">
                    <div>21/04/2566</div>
                    <div class="text-xs">16:00 น.</div>
                  </td>
                  <td class="px-6 py-4">
                    <div>22/04/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>

                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate"
                  >
                    Mercure Bana...
                  </th>
                  <td class="px-6 py-4">
                    <div>21/04/2566</div>
                    <div class="text-xs">16:00 น.</div>
                  </td>
                  <td class="px-6 py-4">
                    <div>22/04/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li class="flex justify-between">
                <div>เป็นโรงแรมที่ดีมาก</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
              <li class="flex justify-between">
                <div>ที่ไปครั้งนี้ไม่ค่อยดีเท่าไหร่</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
              <li class="flex justify-between">
                <div>ปรับปรุงครั้งล่าสุดดีขึ้นแล้ว</div>
                <div>20/06/66</div>
                <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
              </li>
            </ul>

            <o-field label="เขียนคอมเมนต์">
              <o-input type="textarea"></o-input>
            </o-field>
            <div class="flex">
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button @click="showComment = false" class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
        <!-- มัคคุเทศก์ -->
        <UiCard v-if="showItems == 'guide'">
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_guide">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
                >จัดการ/เพิ่มมัคคุเทศก์
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ชื่อมัคคุเทศก์</th>
                  <th scope="col" class="px-6 py-3">โทรศัพท์</th>
                  <th scope="col" class="px-6 py-3">พื้นที่</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    วุฒินันท์ ศรีสุระ
                  </th>
                  <td class="px-6 py-4">026-568-4785</td>
                  <td class="px-6 py-4">ภาคกลาง</td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
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
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button @click="showComment = false" class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
        <!-- พาหนะ -->
        <UiCard v-if="showItems == 'vehicle'">
          <div class="flex justify-end">
           
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">พาหนะที่ใช้</th>
                  <th scope="col" class="px-6 py-3">ทะเบียน</th>
                  <th scope="col" class="px-6 py-3">โทรศัพท์</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    รถบัสลาว
                  </th>
                  <td class="px-6 py-4">8989 นครหลงเวียงจันทร์</td>
                  <td class="px-6 py-4">065-857-4587</td>
                  <td class="px-6 py-4">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
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
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button @click="showComment = false" class="ml-4 mt-5"
                  >ปิด
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
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
                >จัดการ/เพิ่มสถานที่
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">สถานที่</th>
                  <th scope="col" class="px-6 py-3">วันที่</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ตม.มุขดาหาร
                  </th>
                  <td class="px-6 py-4">
                    <div>25/06/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
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
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button @click="showComment = false" class="ml-4 mt-5"
                  >ปิด
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
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
                >จัดการ/เพิ่มร้านอาหาร
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ร้านอาหาร</th>
                  <th scope="col" class="px-6 py-3">วัน</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    รับประทานอาหารเที่ยง หน้าด่านลาวบาว
                  </th>
                  <td class="px-6 py-4">
                    <div>25/06/2566</div>
                    <div class="text-xs">10:20 น.</div>
                  </td>
                  <td class="px-6 py-4">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showComment != true
                          ? (showComment = true)
                          : (showComment = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showComment">
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
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
              <o-field
                class="flex-1"
                label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)"
              >
                <o-input></o-input>
              </o-field>
              <section class="flex-1 shrink flex items-center justify-end">
                <o-button @click="showComment = false" class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
   
        <UiCard>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            รถประจำทัวร์
          </h2>
          <div v-if="!delete1" class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <Icon class="w-10 h-10 rounded-full bg-gray-300" name="mdi:bus"></Icon>
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">รถบัสลาว</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ทะเบียน 8989 ประเทศเวียงจันน์</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">21/04/2566 ถึง 24/04/2566</p>
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
                  รถประจำทัวร์
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
const editHotel = ref(false);
const delete1 = ref(false);
const time = ref('time');
</script>