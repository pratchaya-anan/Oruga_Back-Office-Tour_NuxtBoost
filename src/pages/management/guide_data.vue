<template>
  <section class="min-h-screen">
    <LayoutPageTitle>Guide Management / จัดการไกด์</LayoutPageTitle>
    <UiManageBar>
    </UiManageBar>
    <UiSectionTabs></UiSectionTabs>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-2">
        <UiCard class="grid grid-cols-2 gap-4">
          <div class="border-r">
            <div class="text-center text-gray-500 dark:text-gray-400">
              <div class="flex justify-end"></div>
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3
                class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">สมชาย ใจหาญ</a>
              </h3>
              <p>somshay@gmail.com</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    data-tooltip-target="tooltip-facebook"
                    href="#"
                    class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icon
                      class="w-6 h-6"
                      name="mingcute:facebook-fill"
                      color="#4267B2"
                    ></Icon>
                  </a>
                  <div
                    id="tooltip-facebook"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Finsoft
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
                <li>
                  <a
                    data-tooltip-target="tooltip-line"
                    href="#"
                    class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icon
                      class="w-6 h-6"
                      name="ri:line-fill"
                      color="#06c755"
                    ></Icon>
                  </a>
                  <div
                    id="tooltip-line"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    finsoft2023
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>

                <li>
                  <a
                    data-tooltip-target="tooltip-email"
                    href="#"
                    class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icon class="w-6 h-6" name="ic:round-email"></Icon>
                  </a>
                  <div
                    id="tooltip-email"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    finsoft2023@finsoft.co.th
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
                <li>
                  <a
                    data-tooltip-target="tooltip-phone"
                    href="#"
                    class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icon class="w-6 h-6" name="icomoon-free:phone"></Icon>
                  </a>
                  <div
                    id="tooltip-phone"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    096-365-6958
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ชื่อเล่น
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">ขนม</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                วันเกิด
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">05/06/1995</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">อายุ</dd>
              <dt class="mb-2 text-md md:text-lg font-medium">29</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                สัญชาติ
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">ไทย</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">เพศ</dd>
              <dt class="mb-2 text-md md:text-lg font-medium">ชาย</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
               เบอร์โทรศัพท์
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">096-365-6958</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ความสามารถพิเศษ
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">พูดภาษาไทยได้</dt>
            </div>
            <div class="border-b col-span-2">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ที่อยู่
              </dd>
              <dt class="mb-10 text-sm md:text-md font-medium">
                20-22 ม.2 ต.บ้านเป็ด อ.เมือง จ.ขอนแก่น 40000
              </dt>
            </div>
          </div>
        </UiCard>
      </div>
      <UiCard>
        <img class="ml-10 h-40 w-30 rounded-lg" src="https://tonkit360.com/wp-content/uploads/2018/10/broze.jpg" alt="image description">
 <div class="mt-5 grid grid-cols-2 gap-5">
  <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ID NO.
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">0 1234 56789 001</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ใบอนุญาตเลขที่
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">5-xxxxxx</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ประเภทมัคคุเทศก์
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">เฉพาะภูมิภาค</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ประเภทเฉพาะภูมิภาค
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">เหนือ</dt>
            </div>
        <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                วันออกใบอนุญาต
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">02/02/2566</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                วันหมดใบอนุญาต
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">02/02/2570</dt>
            </div>
            
          </div> 
        </UiCard>
          <UiCard><img class="ml-10 h-40 w-30 rounded-lg" src="https://lp-cms-production.imgix.net/news/2015/01/New-Irish-passport.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800" alt="image description">
            <div class="mt-5 grid grid-cols-2 gap-5">
  <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                หมายเลขพาสปอต
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">AC1062346</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                ตรวจลงตราเลขที่
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">5-xxxxxx</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                วันออกพาสปอร์ต
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">02/02/2566</dt>
            </div>
            <div class="border-b">
              <dd class="font-light text-gray-500 dark:text-gray-400">
                วันหมดอายุพาสปอร์ต
              </dd>
              <dt class="mb-2 text-md md:text-lg font-medium">02/02/2570</dt>
            </div>
          </div></UiCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
