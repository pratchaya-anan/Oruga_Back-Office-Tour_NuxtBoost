<template>
    <section class="min-h-screen">
      <LayoutPageTitle>ตรวจสอบเอกสารค้ำประกัน</LayoutPageTitle>
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
                  <li
                    class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    เขียนที่
                  </li>
                  <li
                    class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    วันที่
                  </li>
                </ul>
              </div>
            </section>
            <section class="my-4 border-t border-gray-200 dark:border-gray-700">
              <span>ข้อมูลผู้กู้</span>
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-4">ชื่อ-สกุล</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        นายภาคภูมิ ภูเขียว
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-4">เลขทะเบียนสมาชิก</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        1552555214
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-4">อายุ</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        30
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-2">หน้าที่</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        พนักงานราชการ
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-2">ตำแหน่ง</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        -----
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-2">สังกัด</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        -----
                      </div>
                    </div>
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <div class="mt-2">ที่อยู่</div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sm:flex-1 border-t pt-2">
                  <span>ข้อมูลคู่สมรส</span>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">ชื่อ-สกุล</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      นายภาคภูมิ ภูเขียว
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">อายุ</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      30
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">ที่อยู่</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
        </div>
  
        <!-- รายการเอกสาร -->
        <div class="col-span-2 gap-4">
          <div class="flex flex-col gap-4">
            <UiCard class="flex-1">
              <div class="my-2">
                <h2 class="text-xl font-bold dark:text-white">นายบลาๆ  บลาๆ</h2>
              </div>
              <div class="space-y-2">
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรประชาชน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  >
                </UiCard>
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรทะเบียนบ้าน</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สลิปเงินเดือน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สำเนาทะเบียนสมรส</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between">
                  <div>สำเนาใบเปลี่ยนชื่อ</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
              </div>
              <div class="my-2">
                <h2 class="text-xl font-bold dark:text-white">นางสาวบลาๆ  บลาๆ</h2>
              </div>
              <div class="my-2">
                <span>เอกสารคู่สมรส</span>
              </div>
              <div class="space-y-2">
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรประชาชน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  >
                </UiCard>
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรทะเบียนบ้าน</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สำเนาทะเบียนสมรส</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between">
                  <div>สำเนาใบเปลี่ยนชื่อ</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
              </div>
              <div class="grid grid-cols-2 w-full mt-2">
                <o-field label="เอกสารที่มี">
                  <div class="flex space-x-5 mt-2">
                    <o-radio native-value="เอกสารถูกต้อง" name="check"
                      >เอกสารถูกต้อง</o-radio
                    >
                    <o-radio native-value="เอกสารไม่ถูกต้อง" name="check"
                      >เอกสารไม่ถูกต้อง</o-radio
                    >
                  </div>
                </o-field>
                <o-field label="คอมเมนต์">
                  <o-input></o-input>
                </o-field>
              </div>
            </UiCard>           
            <UiCard class="flex-1">
              <div class="my-2">
                <h2 class="text-xl font-bold dark:text-white">นายบลาๆ  บลาๆ</h2>
              </div>
              <div class="space-y-2">
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรประชาชน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  >
                </UiCard>
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรทะเบียนบ้าน</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สลิปเงินเดือน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สำเนาทะเบียนสมรส</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between">
                  <div>สำเนาใบเปลี่ยนชื่อ</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
              </div>
              <div class="my-2">
                <h2 class="text-xl font-bold dark:text-white">นางสาวบลาๆ  บลาๆ</h2>
              </div>
              <div class="my-2">
                <span>เอกสารคู่สมรส</span>
              </div>
              <div class="space-y-2">
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรประชาชน</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  >
                </UiCard>
                <UiCard class="flex justify-between"
                  ><div>สำเนาบัตรทะเบียนบ้าน</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between"
                  ><div>สำเนาทะเบียนสมรส</div>
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:text-blue-500 hover:underline"
                    >ไม่มีไฟล์แนบ</a
                  ></UiCard
                >
                <UiCard class="flex justify-between">
                  <div>สำเนาใบเปลี่ยนชื่อ</div>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >ตรวจสอบ</a
                  ></UiCard
                >
              </div>
              <div class="grid grid-cols-2 w-full mt-2">
                <o-field label="เอกสารที่มี">
                  <div class="flex space-x-5 mt-2">
                    <o-radio native-value="เอกสารถูกต้อง" name="check"
                      >เอกสารถูกต้อง</o-radio
                    >
                    <o-radio native-value="เอกสารไม่ถูกต้อง" name="check"
                      >เอกสารไม่ถูกต้อง</o-radio
                    >
                  </div>
                </o-field>
                <o-field label="คอมเมนต์">
                  <o-input></o-input>
                </o-field>
              </div>
            </UiCard>           
          </div>
          <!-- <div class="col-span-2 gap-4">
            <h5
              class="mt-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white"
            >
              หลักค้ำประกัน
            </h5>
            <div class="flex flex-wrap gap-4">
              <UiCard class="flex-1 mt-3">
                <div class="sm:flex xl:block xl:space-y-4">
                  <div class="sm:flex-1">
                    <div
                      class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                    >
                      <a
                        class="text-sm font-medium text-gray-900 dark:text-white"
                        href="mailto:webmaster@flowbite.com"
                        >นายกล้วยหอม หวี</a
                      >
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ผู้ช่วย
                      </div>
                      <div
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        35,000
                      </div>
                    </div>
                  </div>
                </div>
              </UiCard>
            </div>
          </div> -->
          <!-- <div class="flex justify-end">
            <o-button href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              บันทึก</o-button>
          </div> -->
        </div>
      </div>
      <div class="flex justify-end space-x-5 mt-5">
        <a href="#">
          <o-button> บันทึก </o-button>
        </a>
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
  