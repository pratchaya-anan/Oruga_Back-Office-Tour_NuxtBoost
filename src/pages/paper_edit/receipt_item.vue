<template>
  <LayoutPageTitle> Receipt / ใบเสร็จรับเงิน </LayoutPageTitle>
  <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full xl:col-auto mb-4">
      <UiCard class="mb-4">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <div class="grid grid-cols-6">
                <div class="col-span-5">
                  <h2 class="text-xl font-bold dark:text-white">
                    ใบเสร็จรับเงิน
                  </h2>
                </div>
                <div class="flex justify-end">
                  <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-edit" @click="
                    showOrderPanel != true
                      ? (showOrderPanel = true)
                      : (showOrderPanel = false)
                    ">
                  </Icon>
                </div>
              </div>
              <ul class="mt-2 space-y-1">
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  Receipt
                </li>
                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  เลขที่: 0841142174178
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section v-if="showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
          <o-field label="ชื่อลูกค้า">
            <o-input modelValue="เทศบาลขอนแก่น"></o-input>
          </o-field>
          <o-field label="ที่อยู่">
            <o-input modelValue="175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น"></o-input>
          </o-field>
          <section>
            <o-button @click="showOrderPanel = false" class="mt-4">บันทึก</o-button>
            <o-button @click="showOrderPanel = false" class="mt-4">ยกเลิก</o-button>
          </section>
        </section>
        <section v-if="!showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
          <span>รายละเอียดใบกำกับภาษี</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-4">หน่วยงาน / ลูกค้า</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    เทศบาลขอนแก่น
                  </div>
                </div>
                <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-2">ที่อยู่</div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
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
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">ลำดับ</th>
              <th scope="col" class="py-3">วันที่</th>
              <th scope="col" class="py-3">เลขที่ใบกำกับภาษี</th>
              <th scope="col" class="py-3">รายละเอียด</th>
              <th scope="col" class="py-3">จำนวนเงิน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              v-for="i in tableData">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ i.id }}
              </th>
              <td class="py-4">
                {{ i.productcode }}
              </td>
              <td class="py-4">
                {{ i.productlist }}
              </td>
              <td>{{ i.quantity }}</td>
              <td>{{ i.unitprice }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Dropdown menu -->
        <ul id="dropdownDots"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <MenuDropItem>แก้ไข</MenuDropItem>
          <MenuDropItem>ลบ</MenuDropItem>
        </ul>
      </div>

      <section v-if="!showItemsPanel">
        <o-button @click="showItemsPanel = true">เพิ่มรายการ</o-button>
      </section>

      <UiCard v-if="showItemsPanel">
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
          <o-field class="flex-1" label="ภาษี">
            <o-select placeholder="ยกเว้นภาษี">
              <option value="flint">ยกเว้นภาษี/0%</option>
              <option value="silver">7%</option>
              <option value="silver">9%</option>
            </o-select>
          </o-field>
        </div>
        <section>
          <o-button class="mt-4" @click="showItemsPanel = false">บันทึก</o-button>
          <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
        </section>
      </UiCard>
    </div>
  </div>
  <div class="flex justify-end">
    <a href="/paper/receipt_paper">
      <o-button>
        <Icon class="mr-2 -mt-1 w-6 h-6" name="ic:round-print"></Icon>
        พิมพ์
      </o-button>
    </a>
    <a href="/paper_list/receipt_list">
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
    productcode: "24/03/2566",
    productlist: "1522236",
    quantity: "เทศบาลขอนแก่น 175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
    unitprice: "6,420",
  },
  {
    id: 2,
    productcode: "24/03/2566",
    productlist: "1522236",
    quantity: "เทศบาลขอนแก่น 175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
    unitprice: "6,420",
  },  
];

const data = ref(tableData);
</script>
