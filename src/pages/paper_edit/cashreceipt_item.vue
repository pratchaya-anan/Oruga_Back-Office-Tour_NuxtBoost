<template>
  <LayoutPageTitle> Cashreceipt / ใบสำคัญรับเงิน </LayoutPageTitle>
  <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full xl:col-auto mb-4">
      <UiCard class="mb-4">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="grid grid-cols-6">
              <div class="col-span-5">
                <h2 class="text-xl font-bold dark:text-white">
                  ใบสำคัญรับเงิน
                </h2>
              </div>
              <div class="flex justify-end">
                <Icon
                  class="mr-3 -ml-1 w-5 h-5"
                  name="ic:round-edit"
                  @click="
                    showOrderPanel != true
                      ? (showOrderPanel = true)
                      : (showOrderPanel = false)
                  "
                >
                </Icon>
              </div>
            </div>
            <ul class="mt-2 space-y-1">
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                Receipt
              </li>
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                เลขที่: CR230430-0001
              </li>
            </ul>
          </div>
        </section>
        <section
          v-if="showOrderPanel"
          class="my-4 border-t border-gray-200 dark:border-gray-700"
        >
          <o-field label="ชื่อ (ผู้ขายสินค้า/ให้บริการ)">
            <o-input modelValue="เทศบาลขอนแก่น"></o-input>
          </o-field>
          <o-field label="เลขประจำตัวผู้เสียภาษี">
            <o-input modelValue="1522236"></o-input>
          </o-field>
          <o-field label="เบอร์โทร">
            <o-input modelValue="0625584785"></o-input>
          </o-field>
          <o-field label="ที่อยู่">
            <o-input
              modelValue="175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000"
            ></o-input>
          </o-field>
          <o-field label="ได้รับเงินจาก (ผู้ซื้อ/ผู้รับบริการ)">
            <o-input modelValue="นายนที บุญมา"></o-input>
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
          <span>รายละเอียดการทำรายการ</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-4">ชื่อ (ผู้ขายสินค้า/ให้บริการ)</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    เทศบาลขอนแก่น
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">เลขประจำตัวผู้เสียภาษี</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    1522236
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">เบอร์โทร</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    0625584785
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">ที่อยู่</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
                  </div>
                </div>
                <div
                  class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                >
                  <div class="mt-2">ได้รับเงินจาก (ผู้ซื้อ/ผู้รับบริการ)</div>
                  <div
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    นายนที บุญมา
                  </div>
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
              <th scope="col" class="px-6 py-3">ลำดับ</th>
              <th scope="col" class="px-6 py-3">วัน เดือน ปี</th>
              <th scope="col" class="px-6 py-3">รายการ</th>
              <th scope="col" class="px-6 py-3">จำนวนเงิน (บาท)</th>
              <th scope="col" class="px-6 py-3"></th>
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
              <td class="px-6 py-4">30/03/2566</td>
              <td class="px-6 py-4">ค่าตั๋วเครื่องบิน</td>
              <td class="px-6 py-4">3,210</td>
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
              <td class="px-6 py-4">30/03/2566</td>
              <td class="px-6 py-4">ค่าโรงแรม</td>
              <td class="px-6 py-4">3,210</td>
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
        <ul
          id="dropdownDots"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <MenuDropItem>แก้ไข</MenuDropItem>
          <MenuDropItem>ลบ</MenuDropItem>
        </ul>
      </div>
      <section v-if="!showItemsPanel">
        <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
      </section>

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

      <div v-if="showItemslist" class="mt-5">
        <o-table
          :data="data"
          v-model:checked-rows="checkedRows"
          checkable
          :checkbox-position="checkboxPosition"
        >
          <o-table-column
            v-for="column in columns"
            v-bind="column"
            #default="{ row }"
            :key="column"
          >
            {{ row[column.field] }}
          </o-table-column>
        </o-table>
        <section>
          <o-button class="mt-4">บันทึก</o-button>
          <o-button @click="showItemslist = false" class="ml-4"
            >ยกเลิก</o-button
          >
        </section>
      </div>
      <UiCard v-if="showItemsPanel">
        <div class="flex flex-1 gap-4">
          <o-field class="flex-1" label="วัน เดือน ปี">
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
          <o-field class="flex-1" label="รายการ">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="จำนวนเงิน (บาท)">
            <o-input></o-input>
          </o-field>
        </div>
        <section>
          <o-button class="mt-4" @click="showItemsPanel = false"
            >บันทึก</o-button
          >
          <o-button @click="showItemsPanel = false" class="ml-4"
            >ยกเลิก</o-button
          >
        </section>
      </UiCard>
    </div>
  </div>
  <div class="flex justify-end">
    <a href="/paper/cashreceipt_paper">
      <o-button>
        <Icon class="mr-2 -mt-1 w-6 h-6" name="ic:round-print"></Icon>
        พิมพ์
      </o-button>
    </a>
    <a href="/paper_list/cashreceipt_list">
      <o-button variant="info">
        <Icon class="mr-2 -mt-1 w-6 h-6" name="iconamoon:close-bold"></Icon>
        ปิด
      </o-button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showItemslist = ref(false);
const selected = ref();

function setnull() {
  selected.value = null;
}

function print() {
  window.print();
}
onMounted(() => {
  initFlowbite();
});
const showItemscomment = ref(false);
const isItemModalUserData = ref(false);

const columns = ref([
  {
    field: "id",
    label: "ลำดับ",
    width: "40",
    numeric: true,
  },
  {
    field: "productcode",
    label: "รหัสลูกค้า",
  },
  {
    field: "productlist",
    label: "ชื่อลูกค้า",
  },
  {
    field: "quantity",
    label: "วันที่",
  },
  {
    field: "unitprice",
    label: "ยอดสุทธิ",
    position: "centered",
  },
]);

const tableData = [
  {
    id: 1,
    productcode: "Lo-2586957",
    productlist: "นายสายแสง ส่องไฟ",
    quantity: "05-06-2566",
    unitprice: "5,000",
  },
  {
    id: 2,
    productcode: "Lo-2586957",
    productlist: "นายสายแสง ส่องไฟ",
    quantity: "05-06-2566",
    unitprice: "6,000",
  },
];

const data = ref(tableData);
</script>
