<template>
  <section class="min-h-screen">
    <LayoutPageTitle> Calendar</LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-4 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <div class="grid grid-cols-2 xl:grid-cols-2 xl:gap-4">
          <div class="col-span-full mb-4">
            <UiCard>
              <div class="grid grid-cols-3 gap-4">
                <div class="w-full">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="w-full flex justify-center text-xl">June 2023</div>
                <div class="w-full flex justify-end">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <div class="col-span-3 relative overflow-x-auto">
                  <table
                    class="w-full text-center text-sm text-gray-500 dark:text-gray-400 border shadow-mb"
                  >
                    <thead
                      class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col" class="px-3 py-4">SUN</th>
                        <th scope="col" class="px-3 py-4">MON</th>
                        <th scope="col" class="px-3 py-4">TUE</th>
                        <th scope="col" class="px-3 py-4">WED</th>
                        <th scope="col" class="px-3 py-4">THU</th>
                        <th scope="col" class="px-3 py-4">FRI</th>
                        <th scope="col" class="px-3 py-4">SAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4 relative inline-flex items-center">
                          1
                          <div
                            class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900"
                          ></div>
                        </td>
                        <td class="px-3 py-4">2</td>
                        <td class="px-3 py-4">3</td>
                        <td class="px-3 py-4">4</td>
                        <td class="px-3 py-4">5</td>
                        <td class="px-3 py-4">6</td>
                        <td class="px-3 py-4">7</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">8</td>
                        <td class="px-3 py-4">9</td>
                        <td class="px-3 py-4">10</td>
                        <td class="px-3 py-4">11</td>
                        <td class="px-3 py-4">12</td>
                        <td class="px-3 py-4">13</td>
                        <td class="px-3 py-4 relative inline-flex items-center">
                          14
                          <div
                            class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900"
                          ></div>
                        </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">15</td>
                        <td class="px-3 py-4">16</td>
                        <td class="px-3 py-4">17</td>
                        <td class="px-3 py-4">18</td>
                        <td class="px-3 py-4">19</td>
                        <td class="px-3 py-4">20</td>
                        <td class="px-3 py-4 relative inline-flex items-center">
                          21
                          <div
                            class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900"
                          ></div>
                        </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">22</td>
                        <td class="px-3 py-4">23</td>
                        <td class="px-3 py-4">24</td>
                        <td class="px-3 py-4">25</td>
                        <td class="px-3 py-4">26</td>
                        <td class="px-3 py-4">27</td>
                        <td class="px-3 py-4">28</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">30</td>
                        <td class="px-3 py-4">31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 2 -->
                <div class="col-span-3 flex justify-center text-xl">
                  Juyl 2023
                </div>

                <div class="col-span-3 relative overflow-x-auto">
                  <table
                    class="w-full text-center text-sm text-left text-gray-500 dark:text-gray-400 border shadow-mb"
                  >
                    <thead
                      class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col" class="px-3 py-4">SUN</th>
                        <th scope="col" class="px-3 py-4">MON</th>
                        <th scope="col" class="px-3 py-4">TUE</th>
                        <th scope="col" class="px-3 py-4">WED</th>
                        <th scope="col" class="px-3 py-4">THU</th>
                        <th scope="col" class="px-3 py-4">FRI</th>
                        <th scope="col" class="px-3 py-4">SAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4"></td>
                        <td class="px-3 py-4"></td>
                        <td class="px-3 py-4">1</td>
                        <td class="px-3 py-4 relative inline-flex items-center">
                          2
                          <div
                            class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900"
                          ></div>
                        </td>
                        <td class="px-3 py-4">3</td>
                        <td class="px-3 py-4">4</td>
                        <td class="px-3 py-4">5</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">6</td>
                        <td class="px-3 py-4">7</td>
                        <td class="px-3 py-4">8</td>
                        <td class="px-3 py-4">9</td>
                        <td class="px-3 py-4">10</td>
                        <td class="px-3 py-4">11</td>
                        <td class="px-3 py-4">12</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">13</td>
                        <td class="px-3 py-4">14</td>
                        <td class="px-3 py-4">15</td>
                        <td class="px-3 py-4">16</td>
                        <td class="px-3 py-4">17</td>
                        <td class="px-3 py-4">18</td>
                        <td class="px-3 py-4">19</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">20</td>
                        <td class="px-3 py-4">21</td>
                        <td class="px-3 py-4">22</td>
                        <td class="px-3 py-4">23</td>
                        <td class="px-3 py-4">24</td>
                        <td class="px-3 py-4">25</td>
                        <td class="px-3 py-4">26</td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <td class="px-3 py-4">27</td>
                        <td class="px-3 py-4">28</td>
                        <td class="px-3 py-4">29</td>
                        <td class="px-3 py-4">30</td>
                        <td class="px-3 py-4">31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
      <!-- ลูกทัวร์ -->
      <div class="grid grid-cols-1 col-span-1 gap-4">
        <div class="flex flex-wrap gap-4">
          <div class="w-full">
            <div>
              <h2 class="text-xl font-bold dark:text-white">พาสปอร์ต</h2>
            </div>

            <div id="passport" data-accordion="collapse" class="bg-white">
              <h2 id="passport-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#passport-body-1"
                  aria-expanded="true"
                  aria-controls="passport-body-1"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-7 h-7 text-xl font-medium text-gray-500 dark:text-white"
                          name="fa6-solid:passport"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-5 -mt-2 w-3 h-3 rounded-full border border-white bg-red-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >02-09-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >สมหมาย ใจดี</span
                          >
                          Passport กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            300 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="passport-body-1"
                class="hidden"
                aria-labelledby="passport-heading-1"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="passport-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#passport-body-2"
                  aria-expanded="false"
                  aria-controls="passport-body-2"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-7 h-7 text-xl font-medium text-gray-500 dark:text-white"
                          name="fa6-solid:passport"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-5 -mt-2 w-3 h-3 rounded-full border border-white bg-red-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >02-09-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >สมหมาย ใจดี</span
                          >
                          Passport กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            300 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="passport-body-2"
                class="hidden"
                aria-labelledby="passport-heading-2"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="passport-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#passport-body-3"
                  aria-expanded="false"
                  aria-controls="passport-body-3"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-7 h-7 text-xl font-medium text-gray-500 dark:text-white"
                          name="fa6-solid:passport"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-5 -mt-2 w-3 h-3 rounded-full border border-white bg-yellow-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >02-09-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >สมหมาย ใจดี</span
                          >
                          Passport กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            600 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="passport-body-3"
                class="hidden"
                aria-labelledby="passport-heading-3"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ใบอนุญาต -->
      <div class="grid grid-cols-1 col-span-1 gap-4">
        <div class="flex flex-wrap gap-4">
          <div class="w-full">
            <div>
              <h2 class="text-xl font-bold dark:text-white">ใบอนุญาต</h2>
            </div>
            <div id="permit" data-accordion="collapse" class="bg-white">
              <h2 id="permit-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#permit-body-1"
                  aria-expanded="true"
                  aria-controls="permit-body-1"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="bxs:file"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-red-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >05-12-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >น้ำหวาน พาวี
                          </span>
                          ใบอนุญาต กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            100 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="permit-body-1"
                class="hidden"
                aria-labelledby="permit-heading-1"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>

                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="permit-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#permit-body-2"
                  aria-expanded="false"
                  aria-controls="permit-body-2"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="bxs:file"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-red-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >05-12-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >น้ำหวาน พาวี
                          </span>
                          ใบอนุญาต กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            100 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="permit-body-2"
                class="hidden"
                aria-labelledby="permit-heading-2"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="permit-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#permit-body-3"
                  aria-expanded="false"
                  aria-controls="permit-body-3"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="bxs:file"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-red-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >05-12-2023 </span
                          ><br />
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >น้ำหวาน พาวี
                          </span>
                          ใบอนุญาต กำลังจะหมดอายุในอีก
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                          >
                            100 วัน</span
                          >
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="permit-body-3"
                class="hidden"
                aria-labelledby="permit-heading-3"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- วันเกิด -->
      <div class="grid grid-cols-1 col-span-1 gap-4">
        <div class="flex flex-wrap gap-4">
          <div class="w-full">
            <div>
              <h2 class="text-xl font-bold dark:text-white">วันเกิด</h2>
            </div>
            <div id="birthday" data-accordion="collapse" class="bg-white">
              <h2 id="birthday-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#birthday-body-1"
                  aria-expanded="true"
                  aria-controls="birthday-body-1"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="mingcute:cake-fill"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-blue-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          02-06-2023 <br />
                          เป็นวันเกิดของ
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >สมหมาย ใจดี
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="birthday-body-1"
                class="hidden"
                aria-labelledby="birthday-heading-1"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันเกิด</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>

                        <div class="field mt-3 border-b mb-3">
                          <o-checkbox
                            :value="true"
                            checkClass="w-4 h-4"
                            labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            โทรแจ้งเรียบร้อย
                          </o-checkbox>
                        </div>

                        <o-button>บันทึก</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="birthday-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#birthday-body-2"
                  aria-expanded="false"
                  aria-controls="birthday-body-2"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="mingcute:cake-fill"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-blue-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          02-09-2023 <br />
                          เป็นวันเกิดของ
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >สายใย ใบบัว
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="birthday-body-2"
                class="hidden"
                aria-labelledby="birthday-heading-2"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="birthday-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#birthday-body-3"
                  aria-expanded="false"
                  aria-controls="birthday-body-3"
                >
                  <span>
                    <div class="flex">
                      <div>
                        <Icon
                          class="w-9 h-9 rounded-full text-xl font-medium text-gray-500 dark:text-white"
                          name="mingcute:cake-fill"
                        >
                        </Icon>
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-3 w-3 h-3 rounded-full border border-white bg-blue-500 dark:border-gray-700"
                        ></div>
                      </div>
                      <div class="ml-3">
                        <p>
                          15-06-2023 <br />
                          เป็นวันเกิดของ
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >นที ยอมใจ
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="birthday-body-3"
                class="hidden"
                aria-labelledby="birthday-heading-3"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                      <address
                        class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                      >
                        <div class="mt-4">ชื่อ-สกุล</div>
                        <a
                          class="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com"
                          >นายสมชาย ใจดี</a
                        >
                        <div class="mt-4">วันหมดอายุพาสปอร์ต</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          02-05-2023
                        </div>
                        <div class="mt-4">เบอร์ติดต่อ</div>
                        <div
                          class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          093-587-3658
                        </div>
                        <o-button>จัดการ</o-button>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
