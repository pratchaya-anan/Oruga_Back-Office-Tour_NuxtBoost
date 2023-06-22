<template>
  <LayoutPageTitle>
    Cashcertificate / แบบฟอร์มใบรับรองแทนใบเสร็จรับเงิน
  </LayoutPageTitle>
  <o-steps v-model="steps" variant="success">
    <o-step-item
      step="1"
      label="ข้อมูลผู้ซื้อ/ผู้รับบริการ"
      :clickable="true"
      icon="user-plus"
    >
      <UiCard class="mb-3">
        <div class="p-5">
          <div>
            <label class="text-2xl font-medium">ข้อมูลทำรายการ</label>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div>
              <o-field label="ชื่อผู้เบิกจ่าย">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ตำแหน่ง">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="หน่วยงาน (ผู้ซื้อ/ผู้รับบริการ)">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="เลขประจำตัวผู้เสียภาษี">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ใช้ตั้งแต่วันที่">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </o-field>
            </div>
            <div>
              <o-field label="ถึงวันที่">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </o-field>
            </div>
            <div>
              <o-field label="ที่อยู่">
                <o-input type="textarea"></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ผู้อนุมัติ">
                <o-input></o-input>
              </o-field>
            </div>
          </div>
        </div>
      </UiCard>
    </o-step-item>
    <o-step-item step="2" label="รายการเบิก" :clickable="true" icon="user-plus">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <div>
                  <div class="grid grid-cols-6">
                    <div class="col-span-5">
                      <h2 class="text-xl font-bold dark:text-white">
                        ใบรับรองแทนใบเสร็จรับเงิน
                      </h2>
                    </div>
                    <div class="flex justify-end">
                      <Icon
                        class="mr-3 -ml-1 w-5 h-5"
                        name="ic:round-edit"
                        @click="showOrderPanel = true"
                      >
                      </Icon>
                    </div>
                  </div>
                  <ul class="mt-2 space-y-1">
                    <li
                      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                    >
                      ----------
                    </li>
                    <li
                      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
                    >
                      เลขที่: 0841142174178
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section
              v-if="showOrderPanel"
              class="my-4 border-t border-gray-200 dark:border-gray-700"
            >
              <o-field label="หน่วยงาน (ผู้ซื้อ/ผู้รับบริการ)">
                <o-input modelValue="องค์การบริหารส่วนตำบลโพนงาม"></o-input>
              </o-field>
              <o-field label="แผนก">
                <o-input modelValue="บัญชี"></o-input>
              </o-field>
              <o-field label="วันที่ต้องการใช้เงิน">
                <o-input modelValue="05-05-2566"></o-input>
              </o-field>
              <o-field label="วัตถุประสงค์การยืมเงินทดลองจ่าย">
                <o-input modelValue="เพื่อจ่ายเงิน"></o-input>
              </o-field>
              <section>
                <o-button @click="showOrderPanel = false" class="mt-4"
                  >บันทึก</o-button
                >
                <o-button @click="showOrderPanel = false" class="mt-4"
                  >ยกเลิก</o-button
                >
              </section>
            </section>
            <section
              v-if="!showOrderPanel"
              class="my-4 border-t border-gray-200 dark:border-gray-700"
            >
              <span>ข้อมูลทำรายการ</span>
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">ชื่อผู้เบิกจ่าย</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ศศิศ วิรัตน์จินดา
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">ตำแหน่ง</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ฝ่ายขาย
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">หน่วยงาน (ผู้ซื้อ/ผู้รับบริการ)</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      องค์การบริหารส่วนตำบลโพนงาม
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">เลขประจำตัวผู้เสียภาษี</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      1023456789123
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">ที่อยู่</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">ตั้งแต่วันที่ - ถึงวันที่</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      21 เมษายน 2566 ถึง 24 เมษายน 2566
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">ผู้อนุมัติ</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      สรสิริ สายบุตร
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
        </div>
        <div class="col-span-2">
          <div class="overflow-x-auto shadow-md sm:rounded-lg mb-4">
            <UiCard>
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">ลำดับ</th>
                    <th scope="col" class="px-6 py-3">วัน เดือน ปี</th>
                    <th scope="col" class="px-6 py-3">รายละเอียดค่าใช้จ่าย</th>
                    <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
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
                      1
                    </th>
                    <td class="px-6 py-4">21/04/66</td>
                    <td class="px-6 py-4">
                      ซื้อเครื่องดื่มต่างๆมาแจกจ่ายให้กับทีมงานและลูกทัวร์
                    </td>
                    <td class="px-6 py-4">800</td>
                    <td class="px-6 py-4 text-right">
                      <button
                        id="dropdownMenuIconButton"
                        data-dropdown-toggle="dropdownDots"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          class="w-6 h-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      2
                    </th>
                    <td class="px-6 py-4">22/04/66</td>
                    <td class="px-6 py-4">
                      จ่ายค่าน้ำแข็งเพิ่ม เนื่องจากที่ซื้อมาเตียมไว้ไม่เพียงพอ
                    </td>
                    <td class="px-6 py-4">500</td>
                    <td class="px-6 py-4 text-right">
                      <button
                        id="dropdownMenuIconButton"
                        data-dropdown-toggle="dropdownDots"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          class="w-6 h-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </UiCard>

            <!-- Dropdown menu -->
            <div
              id="dropdownDots"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="py-2">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  ลบ</a
                >
              </div>
              <div class="py-2">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  แก้ไข</a
                >
              </div>
            </div>
          </div>
          <section v-if="!showItemsPanel">
            <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
          </section>
          <UiCard v-if="showItemsPanel">
            <div class="grid grid-cols-3 gap-4">
              <o-field label="ใช้ตั้งแต่วันที่">
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </o-field>
              <o-field class="flex-1" label="รายละเอียดค่าใช้จ่าย">
                <o-input></o-input>
              </o-field>
              <o-field class="flex-1" label="จำนวนเงิน">
                <o-input></o-input>
              </o-field>
            </div>

            <section>
              <o-button class="mt-4">เพิ่มรายการ</o-button>
              <o-button @click="showItemsPanel = false" class="ml-4"
                >ยกเลิก</o-button
              >
            </section>
          </UiCard>
        </div>
      </div>
    </o-step-item>
    <o-step-item step="3" label="ยืนยัน" :clickable="true" icon="user-plus">
      <div
        class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow"
      >
        <div class="grid grid-rows-2 m-5">
          <img class="w-[100px]" src="../assets/images/ll-01.png" alt="Logo" />
          <div class="grid grid-cols-3 text-sm">
            <div class="col-span-2">
              <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
              <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
              <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
              <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
            </div>

            <!-- ชื่อใบ/ข้อมูลใบ -->
            <div class="grid grid-cols-3">
              <div class="col-span-3 font-bold text-center text-base">
                ใบรับรองแทนใบเสร็จรับเงิน
              </div>
              <div class="font-bold">เลขที่:</div>
              <div class="col-span-2 text-right">0841142174178</div>
              <div class="font-bold">วันที่:</div>
              <div class="col-span-2 text-right">24/04/2566</div>
            </div>
          </div>
        </div>
        <hr class="col-span-3 mx-5" />

        <!-- ข้อมูลฝั่งซ้าย -->
        <div class="col-span-2 grid grid-cols-3 m-5 w-full text-xs">
          <div class="col-span-1 font-bold">
            ชื่อน่วยงาน (ผู้ซื้อ/ผู้รับบริการ):
          </div>
          <div class="col-span-2">องค์การบริหารส่วนตำบลโพนงาม</div>
          <div class="col-span-1 font-bold">เลขประจำตัวผู้เสียภาษี:</div>
          <div class="col-span-2">1023456789123</div>
          <div class="col-span-1 font-bold">ที่อยู่:</div>
          <div class="col-span-2">
            111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
          </div>
        </div>

        <!-- ตาราง -->
        <div class="min-h-[400px] border-b border-black">
          <table class="w-full text-center">
            <tr class="h-8 border-y border-black text-center text-sm">
              <th>วัน เดือน ปี</th>
              <th>รายละเอียดรายจ่าย</th>
              <th>จำนวนเงิน (บาท)</th>
            </tr>
            <tr class="h-10 text-xs">
              <td>21/04/66</td>
              <td>ซื้อเครื่องดื่มต่างๆมาแจกจ่ายให้กับทีมงานและลูกทัวร์</td>
              <td>800</td>
            </tr>
            <tr class="h-10 text-xs">
              <td>22/04/66</td>
              <td>จ่ายค่าน้ำแข็งเพิ่ม เนื่องจากที่ซื้อมาเตียมไว้ไม่เพียงพอ</td>
              <td>500</td>
            </tr>
          </table>
        </div>

        <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
        <div
          class="grid grid-cols-3 content-center gap-5 py-2 text-xs border-b border-black"
        >
          <div class="col-span-2 flex">
            <div class="mr-[15px]">รวมทั้งสิ้น(ตัวอักษร):</div>
            <div class="text-right">หนึ่งพนสามร้อยบาทถ้วน</div>
          </div>
          <div class="flex">
            <div class="mr-[15px]">รวมทั้งสิ้น:</div>
            <div class="text-right">1300 บาท</div>
          </div>
        </div>

        <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
          <div class="col-span-3 indent-8">
            ข้าพเจ้า ศศิศ วิรัตน์จินดา (ผู้เบิกจ่าย) ตำแหน่ง บัญชี ขอรับรองว่า
            รายจ่ายข้างต้นนี้ไม่อาจเรียกเก็บใบเสร็จรับเงินจากผู้รับเงินได้และข้าพเจ้าได้จ่ายไปในงาน
            ของทางบริษัท ศรีดาราทัวร์จำกัด โดยแท้จริง ตั้งแต่วันที่ 21 เมษายน
            2566 ถึงวันที่ 24 เมษายน 2566
          </div>
        </div>

        <div class="grid grid-cols-2 mt-[100px] text-xs">
          <div class="text-center border-b border-black mx-5">
            <div>ผู้เบิกจ่าย</div>
            <div class="mb-5">วันที่</div>
          </div>
          <div class="text-center border-b border-black mx-5">
            <div>ผู้อนุมัติ</div>
            <div class="mb-5">วันที่</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-3">
        <o-button @click="print" variant="info">
          <Icon class="mr-3 -ml-1 w-5 h-5" name="material-symbols:print"></Icon>
          พิมพ์
        </o-button>
        <NuxtLink to="quotation_list">
          <o-button> บันทึก </o-button>
        </NuxtLink>
      </div>
    </o-step-item>
  </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showcheck = ref("");
const steps = ref(1);
</script>
