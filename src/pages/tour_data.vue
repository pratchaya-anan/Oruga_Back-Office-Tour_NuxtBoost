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
                  name="ic:round-print"
                ></Icon>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownDots"
                class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <NuxtLink @click="Export">
                      <MenuDropItem
                        ><Icon
                          class="w-4 h-4 m-1"
                          name="icon-park-twotone:order"
                        ></Icon
                        >พิมพ์ใบ Order</MenuDropItem
                      >
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink>
                      <MenuDropItem
                        ><Icon
                          class="w-4 h-4 m-1"
                          name="mingcute:sticker-fill"
                        ></Icon
                        >พิมพ์ใบ Sticker</MenuDropItem
                      >
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink href="/invoice/quotation_list">
                      <MenuDropItem>
                        <Icon class="w-4 h-4 m-1" name="mdi:paper-check"> </Icon
                        >ใบเสนอราคา
                      </MenuDropItem>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink>
                      <MenuDropItem>
                        <Icon class="w-4 h-4 m-1" name="mdi:tag"></Icon>
                        พิมพ์ใบ Tag
                      </MenuDropItem>
                    </NuxtLink>
                  </li>
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
            <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">
              Other Stuff
            </h3>
            <div class="flex space-x-3">
              <Icon
                class="w-6 h-6"
                @click="
                  showItemsPanelHotel != true
                    ? (showItemsPanelHotel = true)
                    : (showItemsPanelHotel = false);
                  showItemsListCommentHotel = false;
                "
                name="mdi:bed"
              ></Icon>
              <Icon
                class="w-6 h-6"
                @click="
                  showItemsPanelGuide != true
                    ? (showItemsPanelGuide = true)
                    : (showItemsPanelGuide = false);
                  showItemsListCommentGuide = false;
                "
                name="mdi:face-woman-shimmer"
              ></Icon>
              <Icon
                class="w-6 h-6"
                @click="
                  showItemsPanelVehicle != true
                    ? (showItemsPanelVehicle = true)
                    : (showItemsPanelVehicle = false);
                  showItemsListCommentVehicle = false;
                "
                name="mdi:van-utility"
              ></Icon>
              <Icon class="w-6 h-6" name="mdi:airplane"></Icon>
              <Icon class="w-6 h-6" name="mdi:image-filter-hdr"></Icon>
              <Icon class="w-6 h-6" name="mdi:store-marker"></Icon>
              <Icon
                class="w-6 h-6"
                @click="
                  showItemsPanelRestaurant != true
                    ? (showItemsPanelRestaurant = true)
                    : (showItemsPanelRestaurant = false);
                  showItemsListCommentRestaurant = false;
                "
                name="mdi:food-fork-drink"
              ></Icon>
              <Icon class="w-6 h-6" name="mdi:calendar-time"></Icon>
            </div>
          </div>
        </UiCard>
        <!-- โรงแรม -->
        <UiCard v-if="showItemsPanelHotel">
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
                    จกตาเพลส
                  </th>
                  <td class="px-6 py-4">20/06/2566</td>
                  <td class="px-6 py-4">25/06/2566</td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      class="w-6 h-6"
                      name="majesticons:comment-text"
                      @click="
                        showItemsListCommentHotel != true
                          ? (showItemsListCommentHotel = true)
                          : (showItemsListCommentHotel = false)
                      "
                    ></Icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="showItemsListCommentHotel">
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
                  @click="showItemsListCommentHotel = false"
                  class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
        <!-- ไกด์ -->
        <UiCard v-if="showItemsPanelGuide">
          <div class="flex justify-end">
            <o-button>
              <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
              >จัดการ/เพิ่มไกด์
            </o-button>
          </div>
          <div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <div class="flex justify-beetween">
                  <div>
                    <h2
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      นายสมชาย วดี
                    </h2>
                  </div>
                  <div>
                    <Icon
                      class="w-6 h-6 mx-3"
                      name="majesticons:comment-text"
                      @click="
                        showItemsListCommentGuide != true
                          ? (showItemsListCommentGuide = true)
                          : (showItemsListCommentGuide = false)
                      "
                    ></Icon>
                  </div>
                </div>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-5 h-5 m-1" name="carbon:phone-filled"></Icon
                  >092-868552
                </p>
                <p
                  class="mb-4 text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6 m-1"
                    name="material-symbols:move-location-rounded"
                  ></Icon
                  >ทั่วไป/ภาคเหนือ
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <div class="flex justify-beetween">
                  <div>
                    <h2
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      นางสาวมณี วันดี
                    </h2>
                  </div>
                  <div>
                    <Icon
                      class="w-6 h-6 mx-3"
                      name="majesticons:comment-text"
                      @click="
                        showItemsListCommentGuide != true
                          ? (showItemsListCommentGuide = true)
                          : (showItemsListCommentGuide = false)
                      "
                    ></Icon>
                  </div>
                </div>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-5 h-5 m-1" name="carbon:phone-filled"></Icon
                  >092-868552
                </p>
                <p
                  class="mb-4 text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon
                    class="w-6 h-6 m-1"
                    name="material-symbols:move-location-rounded"
                  ></Icon
                  >ทั่วไป/ภาคเหนือ
                </p>
              </li>
            </ol>
          </div>

          <div v-if="showItemsListCommentGuide">
            <hr />
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li class="flex justify-between">
                <div>ไกด์เป็นคนตลก</div>
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
                  @click="showItemsListCommentGuide = false"
                  class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
        <!-- พาหนะ -->
        <UiCard v-if="showItemsPanelVehicle">
          <div class="flex justify-end">
            <o-button>
              <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon
              >จัดการ/เพิ่มพาหนะ
            </o-button>
          </div>
          <div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <div class="flex justify-beetween">
                  <div>
                    <h2
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      ทัวร์ VIP 1
                    </h2>
                  </div>
                  <div>
                    <Icon
                      class="w-6 h-6 mx-3"
                      name="majesticons:comment-text"
                      @click="
                        showItemsListCommentVehicle != true
                          ? (showItemsListCommentVehicle = true)
                          : (showItemsListCommentVehicle = false)
                      "
                    ></Icon>
                  </div>
                </div>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-5 h-5" name="mdi:card-text"></Icon>กข 5621
                  ขอนแก่น
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="mdi:car"></Icon>รถทัวร์
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="tabler:brand-adobe"></Icon>เบนซ์
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="mingcute:seat-fill"></Icon>20
                  ที่นั่ง
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <div class="flex justify-beetween">
                  <div>
                    <h2
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      ทัวร์ VIP 2
                    </h2>
                  </div>
                  <div>
                    <Icon
                      class="w-6 h-6 mx-3"
                      name="majesticons:comment-text"
                      @click="
                        showItemsListCommentVehicle != true
                          ? (showItemsListCommentVehicle = true)
                          : (showItemsListCommentVehicle = false)
                      "
                    ></Icon>
                  </div>
                </div>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-5 h-5" name="mdi:card-text"></Icon>กข 5621
                  ขอนแก่น
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="mdi:car"></Icon>รถทัวร์
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="tabler:brand-adobe"></Icon>เบนซ์
                </p>
                <p
                  class="text-base font-normal text-gray-900 dark:text-gray-400"
                >
                  <Icon class="w-6 h-6" name="mingcute:seat-fill"></Icon>20
                  ที่นั่ง
                </p>
              </li>
            </ol>
          </div>

          <div v-if="showItemsListCommentVehicle">
            <hr />
            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              คอมเมนต์
            </h2>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li class="flex justify-between">
                <div>ไกด์เป็นคนตลก</div>
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
                  @click="showItemsListCommentVehicle = false"
                  class="ml-4 mt-5"
                  >ปิด
                </o-button>
                <o-button class="mt-5">เพิ่ม</o-button>
              </section>
            </div>
          </div>
        </UiCard>
        <!-- ร้านอาหาร -->
      </div>
      <!-- ลูกทัวร์ -->
      <div class="grid grid-cols-1 col-span-2 gap-4">
        <div class="flex flex-wrap gap-4">
          <UiCard
            class="flex-1 hover:bg-gray-100 hover:text-blue-700 cursor-pointer"
          >
            <NuxtLink
              class="flex justify-center h-full items-center"
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
                        name="fa-solid:id-card"
                      ></Icon
                      >1-7399-01893-76-5
                    </p>
                    <p class="mb-4 text-sm">
                      <Icon
                        class="w-6 h-6 text-gray-600"
                        name="gis:search-country"
                      ></Icon
                      >Thai
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

const showItemsListCommentUser = ref(false);
const isItemModalUserData = ref(false);

const showItemsPanelHotel = ref(false);
const showItemsListCommentHotel = ref(false);

const showItemsPanelGuide = ref(false);
const showItemsListCommentGuide = ref(false);

const showItemsPanelVehicle = ref(false);
const showItemsListCommentVehicle = ref(false);

const showItemsPanelRestaurant = ref(false);
const showItemsListCommentRestaurant = ref(false);

const name = ref("Tour member");
const dataday = ref([
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
  const dataWS = XLSX.utils.json_to_sheet(dataday.value);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, dataWS);
  XLSX.writeFile(wb, name.value + ".xlsx");
}
onMounted(() => {
  initFlowbite();
});
</script>
