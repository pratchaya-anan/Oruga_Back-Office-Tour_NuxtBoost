<template>
  <section class="h-m-screen">
    <LayoutPageTitle> Tour Management / จัดทัวร์ / จัดการร้านอาหาร </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard>
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
              <h2 class="text-xl font-bold dark:text-white ">
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
                <Icon class="w-6 h-6 " name="mdi:face-woman-shimmer"></Icon>
              </NuxtLink>
              <!-- พาหนะ -->
              <NuxtLink href="/management/tour_data_vehicle">
                <Icon class="w-6 h-6 " name="mdi:van-utility"></Icon>
              </NuxtLink>
              <!-- สถานที่ -->
              <NuxtLink href="/management/tour_data_stopover">
                <Icon class="w-6 h-6 " name="mdi:store-marker"></Icon>
              </NuxtLink>
              <!-- ร้านอาหาร -->
              <NuxtLink href="/management/tour_data_restaurant">
                <Icon class="w-6 h-6 text-blue-700" name="mdi:food-fork-drink"></Icon>
              </NuxtLink>
            </div>
          </div>
        </UiCard>
        <UiCard class="mt-4">
          <div class="p-2 w-full relative">
            <NuxtLink href="/tour_data">
              <o-button
                class="absolute -top-2 -right-2 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <Icon class="w-6 h-6" name="ic:baseline-minus"></Icon>
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
                <a href="#">ร้านเลียจาน</a><a href="#" @click="isItemModalHotelData3 = true"
                  class=" text-base font-normal text-gray-500 dark:text-gray-400">แก้ไข</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเทียง ร้านเลียจาน</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <Icon class="w-6 h-6" name="octicon:comment-16" @click="
                  showComment != true
                    ? (showComment = true)
                    : (showComment = false)
                  "></Icon> เป็นอาหารที่ดีที่สุดที่เคยทานมา
              </p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">โครตอร่อย!</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น โครตอร่อย!</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>

            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">ร้านอาหารอาโนะเนะ</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเี่ยง ร้านอาหารอาโนะเนะ
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">กินไหมจร๊ะ</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น กินไหมจร๊ะ</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">23 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">ร้านอาหาร อัลไล</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเที่ยง ร้านอาหาร อัลไล
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">วงวารอาหาร</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น วงวารอาหาร</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
            </li>
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24 เมษายน
                2566</time>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">ในรู</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">12.00 น. ทานอาหารเที่ยง ในรู</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
              <h3 class="mt-1 text-lg font-semibold text-gray-900 hover:text-gray-500 dark:text-white"><a
                  href="#">โต๋วโภชนา</a></h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">18.00 น. ทานอาหารเย็น โต๋วโภชนา</p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">เบอร์ติดต่อ 0428976765</p>
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

      <o-modal v-model:active="isItemModalHotelData3">
        <UiCard>
          <div class="col-span-2">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              เลือกร้านอาหาร
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
                  <th scope="col" class="px-3 py-3 text-center items-center">
                    คอมเมนต์
                  </th>
                  <th scope="col" class="px-3 py-3 text-center items-center">

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-3 py-3">
                    1
                  </th>
                  <td @click="add = true" lass="px-3 py-3">
                    โครตอร่อย!
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    อาหารทะเล
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง จังหวัดดินแดง
                  </td>
                  <td @click="add = true" class="px-3 py-3">
                    0428976765
                  </td>
                  <td @click="add = true" class="px-3 py-3 text-center items-center">
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

            </div>
            <div class="p-2 grid grid-cols-2 gap-0">
              <div class="w-full border-r">
                <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  โครตอร่อย! <Icon class="w-6 h-6" name="ic:round-edit" @click="editHotel != true
                    ? (editHotel = true)
                    : (editHotel = false)">
                  </Icon>
                </h2>
                <div class="px-2" v-if="!editHotel">
                  <p class="text-base font-semibold  dark:text-white">ที่อยู่</p>
                  <p class="ml-2 text-base font-normal  dark:text-white">132 ม.1 บ้านไม้ ตำบนกล้วย อำเภอเมือง
                    จังหวัดดินแดง</p>
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
                  <div v-if="editcomment" class="col-span-2">
                    <o-input type="text" modelValue="เป็นอาหารที่ดีที่สุดที่เคยทานมา"></o-input>
                  </div>
                  <p v-if="!editcomment" class="col-span-2">เป็นอาหารที่ดีที่สุดที่เคยทานมา</p>
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
              <div class="mt-5 flex justify-between"><o-button variant="danger" class="ml-2">ลบร้านอาหาร</o-button>
                <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก </o-button>
              </div>
            </div>
          </UiCard>
        </o-modal>
        <o-modal v-model:active="add">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="col-span-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                เลือกร้านอาหาร
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
              <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                คอมเมนต์
              </h2>
              <div class="px-2 mb-2 grid grid-cols-4 gap-0">
                <div v-if="editcomment" class="col-span-2">
                  <o-input type="text" modelValue="เป็นอาหารที่ดีที่สุดที่เคยทานมา"></o-input>
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
              <o-field label="วันที่">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <div class="flex gap-3">
                <o-radio v-model="time" name="time" native-value="time">เวลา</o-radio>
                <o-radio v-model="time" name="time" native-value="duration">ช่วงเวลา</o-radio>
              </div>
              <o-input v-if="time == 'time'"></o-input>
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
              <o-field label="หมายเหตุ">
                <o-input type="textarea"></o-input>
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
const isItemModalHotelData3 = ref(false);
const editcomment = ref(false);
const add = ref(false);
const editHotel = ref(false);
const time = ref('time');
</script>
