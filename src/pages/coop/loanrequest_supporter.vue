<template>
    <section class="min-h-screen">
      <LayoutPageTitle>ตรวจสอบเอกสาร</LayoutPageTitle>
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4 ">
          <UiCard>
            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
              <div>
                <a href="#">
                  <img class="w-10 h-10 rounded-full"
                    src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
                    alt="Jese Leos" />
                </a>
                <div class="flex justify-btween">
                  <h2 class="text-xl font-bold ">ข้อมูลผู้ขอกู้</h2>
                  <h2 class="text-xl font-bold ">กู้สามัญ</h2>
                </div>
                <h2 class="text-sm font-bold dark:text-white">สมหมาย ใจดี</h2>
                <ul class="mt-2 space-y-1">
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                    เลขบัตรประชาชน: 1-339955-874-58-7
                  </li>
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon class="w-6 h-6" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                    เลขข้าราชการ: 1548362568
                  </li>
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                    วันเกิด: 16/04/2566
                  </li>
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon class="w-6 h-6" name="fluent:people-audience-24-filled"></Icon>
                    เป็นสมาชิกตั้งแต่: 16/04/2510
                  </li>
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon class="w-6 h-6" name="fluent:comment-error-16-filled"></Icon>
                    เป็นสมาชิกมา: 5ปี 4เดือน 15วัน
                  </li>
                </ul>
              </div>
            </div>
            <div class="sm:flex xl:block xl:space-y-4">
              <div class="sm:flex-1">
                <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-4">Email address</div>
                  <a class="text-sm font-medium text-gray-900 dark:text-white"
                    href="mailto:webmaster@flowbite.com">yourname@flowbite.com</a>
                  <div class="mt-4">Home address</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    92 Miles Drive, Newark, NJ 07103, California, <br />United
                    States of America
                  </div>
                  <div class="mt-4">Phone number</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    +00 123 456 789 / +12 345 678
                  </div>
                </address>
              </div>
            </div>
          </UiCard>
  
        </div>
        <div class="col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <UiCard class="flex-1">
  
              <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                หลักค้ำประกัน
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet
                providers or create a new one.</p>
              <div class="flex flex-col items-center">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <caption class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    หลักฐานผู้กู้
                  </caption>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        สำเนาบัตรประชาชน
                      </th>
                      <td class="px-6 py-4">
                        <div>
                          <Icon class="w-4 h-4 m-2 text-gray-500" name="zondicons:view-show"></Icon>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <o-checkbox class="flex justify-end"></o-checkbox>
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        สำเนาบัตรทะเบียนบ้าน
                      </th>
                      <td class="px-6 py-4">
                        <div>
                          <Icon class="w-4 h-4 m-2 text-gray-500" name="zondicons:view-show"></Icon>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <o-checkbox class="flex justify-end"></o-checkbox>
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        สลิปเงินเดือน
                      </th>
                      <td class="px-6 py-4">
                        <div>
                          <Icon class="w-4 h-4 m-2 text-gray-500" name="zondicons:view-show"></Icon>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <o-checkbox class="flex justify-end"></o-checkbox>
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        สินทรัพย์
                      </th>
                      <td class="px-6 py-4">
                        <div>
                          <Icon class="w-4 h-4 m-2 text-gray-500" name="zondicons:view-show"></Icon>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <o-checkbox class="flex justify-end"></o-checkbox>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="w-full mt-2">
                  <o-field label="คอมเมนต์">
                    <o-input></o-input>
                  </o-field>
                </div>
              </div>
            </UiCard>
          </div>
          <div class="col-span-2 gap-4">
            <h5 class="mt-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              หลักค้ำประกัน
            </h5>
            <div class="flex flex-wrap gap-4">
                <UiCard class="flex-1 mt-3">
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                        <a class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com">นายกล้วยหอม หวี</a>
                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                         ผู้ช่วย
                        </div>
                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          35,000 
                        </div>
                      </div>
                    </div>
                  </div>
                </UiCard>              
                             
            </div>
          </div>
          <!-- <div class="flex justify-end">
            <o-button href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              บันทึก</o-button>
          </div> -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { initFlowbite } from "flowbite";
  
  const showItemsPanel = ref(false);
  const showItemsListComment = ref(false);
  
  onMounted(() => {
    initFlowbite();
  });
  </script>
  
  
  
  