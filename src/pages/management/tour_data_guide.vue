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
                  <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                  อำนาจเจริญ-เว้ดานัง (ประเทศเวียดนาม)
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                  4 วัน 3 คืน
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                  21/04/2566 &#32;
                  <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                  &#32; 24/04/2566
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
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_hotel">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon>จัดการ/เพิ่มโรงแรม
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">โรงแรม</th>
                  <th scope="col" class="px-6 py-3">วันเข้าพัก</th>
                  <th scope="col" class="px-6 py-3">วันออก</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate">
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
                    <Icon class="w-6 h-6" name="majesticons:comment-text" @click="
                      showComment != true
                        ? (showComment = true)
                        : (showComment = false)
                      "></Icon>
                  </td>
                </tr>

                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate">
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
        <!-- มัคคุเทศก์ -->
        <UiCard v-if="showItems == 'guide'">
          <div class="flex justify-end">

          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">ชื่อมัคคุเทศก์</th>
                  <th scope="col" class="px-6 py-3">โทรศัพท์</th>
                  <th scope="col" class="px-6 py-3">พื้นที่</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    วุฒินันท์ ศรีสุระ
                  </th>
                  <td class="px-6 py-4">026-568-4785</td>
                  <td class="px-6 py-4">ภาคกลาง</td>
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
        </UiCard>
        <!-- พาหนะ -->
        <UiCard v-if="showItems == 'vehicle'">
          <div class="flex justify-end">
            <NuxtLink href="/management/tour_data_vehicle">
              <o-button>
                <Icon class="w-6 h-6" name="tabler:settings-plus"></Icon>จัดการ/เพิ่มพาหนะ
              </o-button>
            </NuxtLink>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">พาหนะที่ใช้</th>
                  <th scope="col" class="px-6 py-3">ทะเบียน</th>
                  <th scope="col" class="px-6 py-3">โทรศัพท์</th>
                  <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    รถบัสลาว
                  </th>
                  <td class="px-6 py-4">8989 นครหลงเวียงจันทร์</td>
                  <td class="px-6 py-4">065-857-4587</td>
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

        <UiCard>
          <h2 class="mb-2 text-xl font-bold dark:text-white">
            ไกด์
          </h2>
          <div v-if="!delete1" class="flex items-center mb-4 p-4 border shadow-md">
            <dev class="w-full relative inline-flex items-center">
              <img class="w-10 h-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese Leos" />
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">วุฒินันท์ ศรีสุระ</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ต่างประเทศ</p>
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
              <tbody @click="add = true">
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    1
                  </th>
                  <td class="px-3 py-3">
                    วุฒินันท์ ศรีสุระ
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
            <div class="flex justify-end">
              <Icon class="w-6 h-6" name="ic:round-edit" @click="editHotel != true
                ? (editHotel = true)
                : (editHotel = false)">
              </Icon>
            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full border-r">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  ไกด์หหห
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
                  <p class="col-span-2">บริการดีมาก</p>
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
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">T. 0428976765</p>
                    </div>
                  </dev>
                </div>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">ต้องการเพิ่มไกด์คนนี้ ใช่ หรือ ไม่?
                </h3>
                <o-button class="ml-12" @click="add = false">
                  ใช่
                </o-button>
                <button @click="add = false" type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
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
const editHotel = ref(false);
const delete1 = ref(false);

</script>