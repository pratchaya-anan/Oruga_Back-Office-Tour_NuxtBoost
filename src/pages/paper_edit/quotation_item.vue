<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full xl:col-auto mb-4">
      <UiCard class="mb-4">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <div class="grid grid-cols-6">
                <div class="col-span-5">
                  <h2 class="text-xl font-bold dark:text-white">
                    ใบเสนอราคา/ยืนยันการสั่งซื้อ
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
                  Quatation
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
          <o-field label="ชื่อลูกค้า">
            <o-input modelValue="ศศิศ วิรัตน์จินดา"></o-input>
          </o-field>
          <o-field label="ชื่อผู้ติดต่อ">
            <o-input modelValue="มะนาว หวานจังเลย"></o-input>
          </o-field>
          <o-field label="ที่อยู่">
            <o-input
              modelValue="111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100"
            ></o-input>
          </o-field>
          <o-field label="ID TAX">
            <o-input modelValue="4585695214526"></o-input>
          </o-field>
          <o-field label="โทร">
            <o-input modelValue="0254875858"></o-input>
          </o-field>
          <o-field label="Email">
            <o-input modelValue="somchai@gmail.com"></o-input>
          </o-field>
          <o-field label="รหัสลูกค้า">
            <o-input modelValue="C-58015259"></o-input>
          </o-field>
          <o-field label="ผู้เสนอขาย">
            <o-input modelValue="สมชัย ใจเกินร้อย"></o-input>
          </o-field>
          <o-field label="ฝ่าย">
            <o-input modelValue="การตลาด"></o-input>
          </o-field>
          <o-field label="ยืนยันราคาภายใน">
            <o-input modelValue="31-03-2566"></o-input>
          </o-field>
          <o-field label="วันส่งของ">
            <o-input modelValue="02-04-2566"></o-input>
          </o-field>
          <o-field label="ค่ามัดจำ">
            <o-input modelValue="20%"></o-input>
          </o-field>
          <section>
            <o-button @click="showOrderPanel = false" class="mt-4"
              >บันทึก</o-button
            >
            <o-button @click="showOrderPanel = false" class="ml-4"
              >ยกเลิก</o-button
            >
          </section>
        </section>
        <section
          v-if="!showOrderPanel"
          class="my-4 border-t border-gray-200 dark:border-gray-700"
        >
          <span>รายละเอียดลูกค้า</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">ชื่อลูกค้า</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ศศิศ วิรัตน์จินดา
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ชื่อผู้ติดต่อ</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  มะนาว หวานจังเลย
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ที่อยู่</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ID TAX</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  4585695214526
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">โทร</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  0254875858
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">Email</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  somchai@gmail.com
                </div>
              </div>
            </div>
            <div class="sm:flex-1">
              <div
                class="my-4 border-t border-gray-200 dark:border-gray-700"
              ></div>
              <span>รายละเอียดฝ่ายขาย</span>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">รหัสลูกค้า</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  C-58015259
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ผู้เสนอขาย</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  สมชัย ใจเกินร้อย
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ฝ่าย:</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  การตลาด
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ยืนยันราคาภายใน</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  31-03-2566
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">วันส่งของ:</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  02-04-2566
                </div>
              </div>
            </div>
          </div>
        </section>
      </UiCard>
    </div>
    <div class="col-span-2">
      <div class="overflow-x-auto shadow-md sm:rounded-lg mb-4">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
              <th scope="col" class="px-6 py-3">จำนวน</th>
              <th scope="col" class="px-6 py-3">ราคาต่อหน่วย</th>
              <th scope="col" class="px-6 py-3">ส่วนลด</th>
              <th scope="col" class="px-6 py-3">ภาษี (0% 7% 9%)</th>
              <th scope="col" class="px-6 py-3">รายการสินค้า</th>
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
                Qu-285455
              </th>
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">10,000</td>
              <td class="px-6 py-4">10 %</td>
              <td class="px-6 py-4">0%</td>
              <td class="px-6 py-4">ห้องพักโรงแรม</td>
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
        <div class="flex gap-4">
          <o-field class="flex-1" label="รหัสสินค้า">
            <o-input></o-input>
          </o-field>
        </div>
        <o-field class="flex-1" label="รายการสินค้า">
          <o-input></o-input>
        </o-field>
        <div class="flex gap-4">
          <o-field class="flex-1" label="จำนวน">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="ราคาต่อหน่วย">
            <o-input></o-input>
          </o-field>
        </div>
        <div class="flex gap-4">
          <o-field class="flex-1" label="ส่วนลด">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="ภาษี (0% 7% 9%)">
            <o-select placeholder="0 %">
              <option value="flint">0 %</option>
              <option value="silver">7 %</option>
              <option value="silver">9 %</option>
            </o-select>
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
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
</script>
