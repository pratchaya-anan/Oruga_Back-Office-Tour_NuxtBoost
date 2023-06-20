<template>
  <section class="min-h-screen">
    <LayoutPageTitle> Tour / จัดทัวร์ </LayoutPageTitle>
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
                  <NuxtLink>
                    <MenuDropItem
                      ><Icon
                        class="w-4 h-4 mr-1"
                        name="icon-park-twotone:order"
                      ></Icon
                      >พิมพ์ใบสั่งงานมัคคุเทศก์</MenuDropItem
                    >
                  </NuxtLink>
                  <NuxtLink>
                    <MenuDropItem
                      ><Icon
                        class="w-4 h-4 mr-1"
                        name="mingcute:sticker-fill"
                      ></Icon
                      >พิมพ์ใบ Sticker</MenuDropItem
                    >
                  </NuxtLink>
                  <NuxtLink>
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
                ทัวร์เกาะเสม็ด เสร็จทุกราย
              </h2>
              <ul class="mt-2 space-y-1">
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                  กาญจนบุรี-เพชรบุรี
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="line-md:moon-filled-to-sunny-filled-transition"
                  ></Icon>
                  5 วัน 4 คืน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  16/04/2566 &#32;
                  <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                  &#32; 16/04/2566
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:people-audience-24-filled"
                  ></Icon>
                  35 คน
                  <Icon class="w-6 h-6 ml-6" name="el:person"></Icon>
                  30คน
                  <Icon
                    class="w-6 h-6 ml-2"
                    name="material-symbols:child-care"
                  ></Icon>
                  5 คน
                </li>
                <li
                  class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6"
                    name="fluent:comment-error-16-filled"
                  ></Icon>
                  สนุกดี
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
                    : (showItems = ''); (showComment = false);
                "
              ></Icon>
              <!-- มัคคุเทศก์ -->
              <Icon
                class="w-6 h-6"
                name="mdi:face-woman-shimmer"
                @click="
                  showItems != 'guide'
                    ? (showItems = 'guide')
                    : (showItems = ''); (showComment = false);
                "
              ></Icon>
              <!-- พาหนะ -->
              <Icon
                class="w-6 h-6"
                name="mdi:van-utility"
                @click="
                  showItems != 'vehicle'
                    ? (showItems = 'vehicle')
                    : (showItems = ''); (showComment = false);
                "
              ></Icon>
              <!-- สถานที่ -->
              <Icon
                class="w-6 h-6"
                name="mdi:store-marker"
                @click="
                  showItems != 'checkpoin'
                    ? (showItems = 'checkpoin')
                    : (showItems = ''); (showComment = false);
                "
              ></Icon>
              <!-- ร้านอาหาร -->
              <Icon
                class="w-6 h-6"
                @click="
                  showItems != 'restaurant'
                    ? (showItems = 'restaurant')
                    : (showItems = ''); (showComment = false);
                "
                name="mdi:food-fork-drink"
              ></Icon>
            </div>
          </div>
        </UiCard>
        <!-- โรงแรม -->
        <UiCard v-if="showItems == 'hotel'">
          <div class="flex justify-end">
            <NuxtLink href="/tour_data_hotel">
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
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Century Hotel
                  </th>
                  <td class="px-6 py-4">
                    <div>20/06/2566</div>
                    <div class="text-xs">10:00 น.</div>
                  </td>
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
                <o-button
                  @click="showComment = false"
                  class="ml-4 mt-5"
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
            <NuxtLink href="/tour_data_hotel">
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
                <o-button
                  @click="showComment = false"
                  class="ml-4 mt-5"
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
            <NuxtLink href="/tour_data_hotel">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
                >จัดการ/เพิ่มพาหนะ
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
                <o-button
                  @click="showComment = false"
                  class="ml-4 mt-5"
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
            <NuxtLink href="/tour_data_hotel">
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
                <o-button
                  @click="showComment = false"
                  class="ml-4 mt-5"
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
            <NuxtLink href="/tour_data_hotel">
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
                <o-button
                  @click="showComment = false"
                  class="ml-4 mt-5"
                  >ปิด
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
          <UiCard
            class="flex-1 hover:bg-gray-100 hover:text-blue-700 cursor-pointer"
          >
            <NuxtLink
              class="h-full w-full text-center grid items-center"
              href="/tour_data_hotel"
            >
              <div>
                <Icon class="w-10 h-10" name="tabler:settings-plus"></Icon>
              </div>
              <div>จัดการ/เพิ่มลูกทัวร์</div>
            </NuxtLink>
          </UiCard>
          <UiCard
            @click="isItemModalUserData = true"
            class="flex-1 hover:bg-gray-100 cursor-pointer"
            v-for="item in 10"
            :key="item"
          >
            <div class="flex justify-end">
              <Icon
                class="text-xl font-medium text-green-600 dark:text-white"
                name="mdi:gender-male"
              >
              </Icon>
              <!-- <Icon
                class="text-xl font-medium text-pink-600 dark:text-white"
                name="ph:gender-female-bold"
              >
              </Icon> -->
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-md font-medium text-gray-900 dark:text-white">
                สมหมาย ใจดี
              </h5>
              <h5
                class="mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                sommai jaidee
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Thai</span>
              <div class="flex justify-center">
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mingcute:cake-fill"
                >
                </Icon>
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mdi:credit-card-remove-outline"
                >
                </Icon>
              </div>
              <div>
                <span
                  class="px-10 text-sm text-gray-500 dark:text-gray-400 truncate"
                  ><Icon class="w-6 h-6" name="majesticons:comment-text"></Icon
                  >แพ้กุ้ง</span
                >
              </div>
            </div>
          </UiCard>
          <o-modal v-model:active="isItemModalUserData">
            <UiCard>
              <div class="grid grid-cols-2 gap-2">
                <div class="p-3 border-r">
                  <div class="flex items-center justify-start mb-2">
                    <a href="#">
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Jese Leos"
                      />
                    </a>
                  </div>
                  <p
                    class="text-base font-semibold leading-none text-gray-900 dark:text-white"
                  >
                    <a href="#">สมหมาย ใจดี</a
                    ><Icon
                      class="text-xl font-medium text-green-600 dark:text-white"
                      name="mdi:gender-male"
                    >
                    </Icon>
                  </p>
                  <p class="mb-3 text-sm font-normal">
                    <a href="#" class="hover:underline">sommai jaidee</a>
                  </p>
                  <p
                    class="text-base font-semibold leading-none text-gray-900 dark:text-white"
                  >
                    ข้อมูลส่วนตัว
                  </p>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="carbon:phone-filled"
                      ></Icon
                      >098-158-4478
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="mingcute:cake-fill"
                      ></Icon
                      >20/04/2000
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fa6-solid:people-arrows"
                      ></Icon
                      >35 ปี
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="gis:search-country"
                      ></Icon
                      >Thai
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fa-solid:id-card"
                      ></Icon
                      >1-7399-01893-76-5
                    </p>
                    <p class="mb-4 text-sm col-span-2">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="ant-design:home-twotone"
                      ></Icon
                      >20-22 หมู่13 ตำบลบ้านเป็ด อำเภอเมือง จังหวัดขอนแก่น 40000
                    </p>
                  </div>
                  <p
                    class="text-base font-semibold leading-none text-gray-900 dark:text-white"
                  >
                    พาสปอร์ต
                  </p>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fontisto:passport"
                      ></Icon
                      >1635501893
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fluent-mdl2:number-field"
                      ></Icon
                      >1478/63
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fa6-solid:calendar-check"
                      ></Icon
                      >25/01/2566
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="fa6-solid:calendar-xmark"
                      ></Icon
                      >25/01/2570
                    </p>
                  </div>
                  <p
                    class="text-base font-semibold leading-none text-gray-900 dark:text-white"
                  >
                    ข้อมูลเดินทาง
                  </p>
                  <div class="grid grid-cols-2">
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="tabler:number"
                      ></Icon
                      >3
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="mingcute:bed-fill"
                      ></Icon
                      >คู่
                    </p>
                  </div>
                </div>
                <div>
                  <h2
                    class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    คอมเมนต์
                  </h2>
                  <ul
                    class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
                  >
                    <li class="flex justify-between">
                      <div>แพ้กุ้ง</div>
                      <div>20/06/66</div>
                      <Icon class="w-6 h-6" name="mdi:comment-edit"></Icon>
                    </li>
                  </ul>
                  <o-button @click="showItemsListCommentUser = true"
                    >เขียนคอมเมนต์</o-button
                  >

                  <div v-if="showItemsListCommentUser">
                    <o-field label="เขียนคอมเมนต์">
                      <o-input type="textarea"></o-input>
                    </o-field>
                    <div class="flex">
                      <o-field label="วันที่(ถ้าไม่ลงจะเลือกวันที่ล่าสุด)">
                        <o-input></o-input>
                      </o-field>
                      <section
                        class="flex-1 shrink flex items-center justify-end"
                      >
                        <o-button
                          @click="showItemsListCommentUser = false"
                          class="ml-4 mt-5"
                          >ปิด
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
          <UiCard
            class="flex-1 hover:bg-gray-100 cursor-pointer"
            v-for="item in 10"
            :key="item"
          >
            <div class="flex justify-end">
              <Icon
                class="text-xl font-medium text-pink-600 dark:text-white"
                name="ph:gender-female-bold"
              >
              </Icon>
            </div>
            <div class="flex flex-col items-center">
              <h5 class="text-md font-medium text-gray-900 dark:text-white">
                สมหมาย ใจดี
              </h5>
              <h5
                class="mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                sommai jaidee
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Thai</span>
              <div class="flex justify-center">
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mingcute:cake-fill"
                >
                </Icon>
                <Icon
                  class="text-xl font-medium text-gray-500 dark:text-white"
                  name="mdi:credit-card-remove-outline"
                >
                </Icon>
              </div>
              <div>
                <span
                  class="px-10 text-sm text-gray-500 dark:text-gray-400 truncate"
                  ><Icon class="w-6 h-6" name="majesticons:comment-text"></Icon
                  >แพ้นมวัว</span
                >
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
import * as XLSX from "xlsx";

const showItems = ref('');
const showComment = ref(false);

const showItemsListCommentUser = ref(false);
const isItemModalUserData = ref(false);

const memberdata = ref([
  {
    No: "",
    name_thai: "สมหมาย ",
    lastname_thai: "ใจดี",
    name_eng: "sommai",
    lastname_eng: "jaidee",

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
