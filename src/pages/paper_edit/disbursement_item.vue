<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full xl:col-auto mb-4">
      <UiCard>
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div class="grid grid-cols-6">
              <div class="col-span-5">
                <h2 class="text-xl font-bold dark:text-white">
                  ใบเบิกเงินสดย่อย
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
                Disbursement Estimate
              </li>
              <li
                class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                เลขที่: D230627-0001
              </li>
            </ul>
          </div>
        </section>
        <section
          v-if="showOrderPanel"
          class="my-4 border-t border-gray-200 dark:border-gray-700"
        >
          <o-field label="ชื่อผู้ขอเบิก">
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
          <span>รายละเอียดผู้ขอเบิก</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">ชื่อผู้ขอเบิก</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  นายสรณ์สิริ สายบุตร
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">แผนก</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  บริการลูกค้า
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">วัตถุประสงค์การยืมเงินทดลองจ่าย</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ค่าใช้จ่ายในทัวร์
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">วันที่ต้องการใช้เงิน</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  03/07/2566
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">โครงการ</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  องค์การบริหารส่วนตำบลโพนงาม
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">รายละเอียดโครงการ/กิจกรรม</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  นำสมาชิกเข้าร่วมการอบรมณ์
                </div>
              </div>
            </div>
          </div>
        </section>
      </UiCard>
    </div>
    <div class="col-span-2">
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
                <th scope="col" class="px-6 py-3">ประเภทค่าใช้จ่าย</th>
                <th scope="col" class="px-6 py-3">ราคา</th>
                <th scope="col" class="px-6 py-3">จำนวน</th>
                <th scope="col" class="px-6 py-3">ยอดสุทธิ</th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(i, idx) in datapaper"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ idx + 1 }}
                </th>
                <td class="px-6 py-4">
                  {{ i.type }}
                </td>
                <td class="px-6 py-4">
                  {{ i.price }}
                </td>
                <td class="px-6 py-4">
                  {{ i.unit }}
                </td>
                <td class="px-6 py-4">
                  {{ i.price * i.unit }}
                </td>
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
      </div>

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

      <section v-if="!showItemsPanel">
        <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
      </section>

      <UiCard v-if="showItemsPanel">
        <div class="flex gap-4">
          <o-field class="flex-1" label="รายละเอียดค่าใช้จ่าย">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="ประเภทค่าใช้จ่าย">
            <o-select v-model="typeselected" placeholder="ประเภทค่าใช้จ่าย">
              <option value="flint">เบี้ยเลี้ยง</option>
              <option value="silver">ค่าที่พัก</option>
              <option value="silver">ค่ายานพาหนะ</option>
              <option value="silver">ค่าน้ำมัน</option>
              <option value="silver">ไกด์</option>
              <option value="other">อื่น ๆ</option>
            </o-select>
          </o-field>
        </div>
        <o-field
          v-if="typeselected == 'other'"
          class="flex-1"
          label="ประเภทอื่น ๆ"
        >
          <o-input></o-input>
        </o-field>
        <div class="flex gap-4">
          <o-field class="flex-1" label="ราคา">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="จำนวน">
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
    <a href="/paper/disbursement_paper">
      <o-button>
        <Icon class="mr-2 -mt-1 w-6 h-6" name="ic:round-print"></Icon>
        พิมพ์
      </o-button>
    </a>
    <a href="/paper_list/disbursement_list">
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
const typeselected = ref();

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

const datapaper = ref([
  {
    type: "ค่าน้ำมัน",
    price: 5600,
    unit: 3,
  },
  {
    type: "ค่าไกด์",
    price: 2000,
    unit: 2,
  },
  {
    type: "ค่าเช่าเหมายานพาหนะท้องถิ่น",
    price: 52000,
    unit: 1,
  },
  {
    type: "ค่าอารหาร",
    price: 10000,
    unit: 1,
  },
]);

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
    quantity: "05/06/2566",
    unitprice: "5,000",
  },
  {
    id: 2,
    productcode: "Lo-2586957",
    productlist: "นายสายแสง ส่องไฟ",
    quantity: "05/06/2566",
    unitprice: "6,000",
  },
];

const data = ref(tableData);
</script>
