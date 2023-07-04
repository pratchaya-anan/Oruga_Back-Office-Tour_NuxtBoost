<template>
  <section class="min-h-screen">
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="col-span-full xl:col-auto mb-4">
        <UiCard class="mb-4">
          <section>
            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
              <div class="grid grid-cols-6">
                <div class="col-span-5">
                  <h2 class="text-xl font-bold dark:text-white">
                    คำขอกู้เงินสามัญทั่วไป
                  </h2>
                </div>
              </div>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  เขียนที่
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  วันที่
                </li>
              </ul>
            </div>
          </section>
          <section class="my-4 border-t border-gray-200 dark:border-gray-700">
            <span>ข้อมูลผู้กู้</span>
            <div class="sm:flex xl:block xl:space-y-4">
              <div class="sm:flex-1">
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">ชื่อ-สกุล</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นายภาคภูมิ ภูเขียว
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">เลขทะเบียนสมาชิก</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      1552555214
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">อายุ</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      30
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">หน้าที่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      พนักงานราชการ
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      -----
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">สังกัด</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      -----
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ที่อยู่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:flex-1 border-t pt-2">
                <span>ข้อมูลคู่สมรส</span>
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-4">ชื่อ-สกุล</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    นายภาคภูมิ ภูเขียว
                  </div>
                </div>
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-4">อายุ</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    30
                  </div>
                </div>
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-2">ที่อยู่</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
                  </div>
                </div>
              </div>
            </div>
          </section>
        </UiCard>
      </div>
      <div class="col-span-2 grid grid-cols-3 gap-5">
        <div class="w-full items-center">
          <UiCard class="flex flex-col items-center gap-2 min-h-[170px]">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <!-- เอกสารผู้กู้ -->
              <h2 class="text-xl font-bold dark:text-white">เอกสารผู้กู้</h2>
            </div>
            <!-- <p>หมายเหตุ: ขาดสำเนาทะเบียนบ้าน</p> -->
            <NuxtLink to="/coop/loanrequest_rightsPage">
              <o-button>
                ตรวจสอบ
              </o-button>
            </NuxtLink>
          </UiCard>
        </div>
        <div class="w-full items-center">
          <UiCard class="flex flex-col items-center gap-2 min-h-[170px]">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <!-- เอกสารผู้กู้ -->
              <h2 class="text-xl font-bold dark:text-white">เอกสารสินทรัพย์</h2>
            </div>
            <!-- <p>หมายเหตุ: ขาดสำเนาทะเบียนบ้าน</p> -->
            <NuxtLink to="/coop/loanrequest_securities">
              <o-button>
                ตรวจสอบ
              </o-button>
            </NuxtLink>
          </UiCard>
        </div>
        <div class="w-full items-center">
          <UiCard class="flex flex-col items-center gap-2 min-h-[170px]">
            <h2 class="text-xl font-bold dark:text-white">เอกสารผู้ค้ำ</h2>
            <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                <div class="flex flex-col">
                  <div class="flex">
                    <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-red-500 dark:text-green-400 flex-shrink-0"
                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8zm4.789 11.461L13.06 14.79L10 11.729l-3.061 3.06L5.21 13.06L8.272 10L5.211 6.939L6.94 5.211L10 8.271l3.061-3.061l1.729 1.729L11.728 10l3.061 3.061z"
                        clip-rule="evenodd"></path>
                    </svg>
                    เอกสารผู้ค้ำคนที่ 1
                  </div>
                  <p>หมายเหตุ: ขาดสำเนาทะเบียนบ้าน</p>
                </div>
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                เอกสารผู้ค้ำคนที่ 2
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-gray-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                เอกสารผู้ค้ำคนที่ 3
              </li>
            </ul>
            <NuxtLink to="/coop/loanrequest_guarantor">
              <o-button>
                ตรวจสอบ
              </o-button>
            </NuxtLink>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>
