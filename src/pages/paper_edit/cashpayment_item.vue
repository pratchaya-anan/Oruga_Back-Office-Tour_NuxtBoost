<template>
  <LayoutPageTitle> Cashpayment / ใบสำคัญจ่าย </LayoutPageTitle>
  <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full xl:col-auto mb-4">
      <UiCard class="mb-4">
        <section>
          <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
            <div>
              <div class="grid grid-cols-6">
                <div class="col-span-5">
                  <h2 class="text-xl font-bold dark:text-white">ใบสำคัญจ่าย</h2>
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
                  เลขที่: CP230430-0001
                </li>
              </ul>
            </div>
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
          <span>รายละเอียดใบสำคัญจ่าย</span>
          <div class="sm:flex xl:block xl:space-y-4">
            <div class="sm:flex-1">
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">ชื่อผู้เบิกจ่าย</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  นายสวยสด งดงาม
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">ฝ่าย/แผนก</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  การเงิน
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-4">จ่ายให้</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  นายภาคภูมิ ภูเขียว
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">เลขประจำตัวผู้เสียภาษี</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  0105556128421
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
                  156 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">จ่ายผ่าน</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  เช็ดธนาคาร
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">เลขที่</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  5962154
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ลงวันที่</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  30/03/2566
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">เพื่อชำระ</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ค่าใช้จ่ายของมัคคุเทศ
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ตั้งแต่วันที่</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  16/07/2566
                </div>
              </div>
              <div
                class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
              >
                <div class="mt-2">ถึงวันที่</div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  17/07/2566
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
              <th scope="col" class="py-3 px-1">รายการ</th>
              <th scope="col" class="py-3 px-1">
                <p>จำนวนเงิน</p>
                <p>(บาท)</p>
              </th>
              <th scope="col" class="px-6 py-3">
                <p>หักภาษี ณ ที่จ่าย</p>
                <p>(%)</p>
              </th>
              <th scope="col" class="px-6 py-3">
                <p>เงินได้สุทธิ</p>
                <p>บาท</p>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, idx) in datapaper"
              :key="idx"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ idx + 1 }}
              </th>
              <td class="px-6 py-4">
                {{ i.datepayment }}
              </td>
              <td class="py-4 px-1">
                {{ i.list }}
              </td>
              <td class="py-4 px-1">
                {{ i.price }}
              </td>
              <td class="px-6 py-4">
                {{ i.taxpayment }}
              </td>
              <td class="px-6 py-4">
                {{ i.total }}
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

      <section v-if="!showItemsPanel">
        <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
      </section>

      <UiCard v-if="showItemsPanel">
        <div class="flex gap-4">
          <o-field class="flex-1" label="วัน เดือน ปี">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="รายการ">
            <o-input></o-input>
          </o-field>
        </div>
        <div class="flex gap-4">
          <o-field class="flex-1" label="จำนวนเงิน">
            <o-input></o-input>
          </o-field>
          <o-field class="flex-1" label="หักภาษี ณ ที่จ่าย">
            <o-select v-model="typeselected" placeholder="ยกเว้นภาษี/0%">
              <option value="ยกเว้นภาษี/0%">ยกเว้นภาษี/0%</option>
              <option value="7%">7%</option>
              <option value="9%">9%</option>
            </o-select>
          </o-field>
        </div>
        <div class="flex gap-4">
          <o-field class="basis-1/2 pr-2" label="เงินได้สุทธิ">
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
    <a href="/paper/cashpayment_paper">
      <o-button>
        <Icon class="mr-2 -mt-1 w-6 h-6" name="ic:round-print"></Icon>
        พิมพ์
      </o-button>
    </a>
    <a href="/paper_list/cashcashpayment_list">
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
const showItemscomment = ref(false);
const isItemModalUserData = ref(false);
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

const datapaper = ref([
  {
    datepayment: "05/07/2566",
    list: "ค่ามัคคุเทศ",
    price: "10,000",
    taxpayment: "7",
    total: "9,300",
  },
  {
    datepayment: "08/07/2566",
    list: "เบี้ยเลี้ยง",
    price: "5,000",
    taxpayment: "7",
    total: "4,650",
  },
]);

const data = ref(tableData);
</script>
