<template>
  <LayoutPageTitle> Taxinvoice / สร้างใบกำกับภาษี </LayoutPageTitle>
  <o-steps v-model="steps" variant="success">
    <o-step-item step="1" label="เลือก" :clickable="true" icon="user-plus">
      <UiCard>
        <div class="flex items-center">
          <div class="relative w-full">
            <o-input
              placeholder="ค้นหา ชื่อลูกค้า , รหัสลูกค้า"
              class="w-full"
            ></o-input>
          </div>
          <div class="ml-2">
            <o-button @click="showListItem = true">ค้นหา</o-button>
          </div>
        </div>

        <div v-if="showListItem">
          <o-table :data="data" v-model:selected="selected">
            <o-table-column
              @click="isImageModalActive = true"
              v-for="column in columns"
              v-bind="column"
              #default="{ row }"
            >
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </div>
      </UiCard>
    </o-step-item>
    <o-step-item
      step="2"
      label="เลือกรายการ"
      :clickable="true"
      icon="user-lock"
    >
      <UiCard class="mb-3">
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
      </UiCard>
    </o-step-item>
    <o-step-item step="3" label="เลือกทัวร์" :clickable="true" icon="user-plus">
      <UiCard>
        <div class="flex items-center">
          <div class="relative w-full">
            <o-input
              placeholder="ค้นหา ชื่อลูกค้า , รหัสลูกค้า"
              class="w-full"
            ></o-input>
          </div>
          <div class="ml-2">
            <o-button @click="showListTour = true">ค้นหา</o-button>
          </div>
        </div>

        <div v-if="showListTour">
          <o-table :data="data" v-model:selected="selected">
            <o-table-column
              @click="isImageModalActive = true"
              v-for="column in columns"
              v-bind="column"
              #default="{ row }"
            >
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </div>
      </UiCard>
    </o-step-item>
    <o-step-item step="4" label="ข้อมูล" :clickable="true" icon="user-lock">
      <UiCard class="mb-3">
        <div class="p-5">
          <div>
            <label class="text-2xl font-medium">ข้อมูลลูกค้า</label>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div>
              <o-field label="ชื่อลูกค้า">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="เลขประจำตัวผู้เสียภาษี">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ชื่อผู้ติดต่อ">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="เบอร์โทรศัพท์">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="อีเมล">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ที่อยู่">
                <o-input></o-input>
              </o-field>
            </div>
          </div>
        </div>
      </UiCard>
      <UiCard class="mb-3">
        <div class="p-5">
          <div>
            <label class="text-2xl font-medium">ข้อมูลฝ่ายขาย</label>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <o-field label="รหัสลูกค้า">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ยืนยันราคาภายใน">
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
              <o-field label="วันที่ส่งของ">
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
              <o-field label="ผู้เสนอขาย">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <div>
                <o-field label="ฝ่ายขาย">
                  <o-select placeholder="การตลาด">
                    <option value="free">การตลาด</option>
                    <option value="1%">xxxx</option>
                    <option value="3%">xxxx</option>
                  </o-select>
                </o-field>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <o-field label="กำหนดราคามัดจำ">
              <div class="flex mt-3">
                <o-radio
                  v-model="showcheck"
                  name="name"
                  native-value="persen"
                  class="mr-3"
                >
                  เปอร์เซ็น
                </o-radio>
                <o-radio v-model="showcheck" name="name" native-value="custom">
                  จำนวนเงิน
                </o-radio>
              </div>
            </o-field>
            <section class="my-4">
              <o-field v-if="showcheck == 'persen'">
                <o-input modelValue=""></o-input>
              </o-field>
              <o-field v-if="showcheck == 'custom'">
                <o-input modelValue=""></o-input>
              </o-field>
              <!-- <section>
                                <o-button @click="showcheck = false" class="mt-4">Save</o-button>
                            </section> -->
            </section>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div>
              <o-field label="วันที่ออกใบ">
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
            <div class="flex space-x-5">
              <o-radio
                v-model="branch"
                name="branchcheck"
                native-value="MainBranch"
              >
                สำนักงานใหญ่
              </o-radio>
              <o-radio
                v-model="branch"
                name="branchcheck"
                native-value="SubBranch"
              >
                สาขาย่อย
              </o-radio>
            </div>
            <div v-if="branch == 'SubBranch'">
              <o-field label="ชื่อสาขาย่อย">
                <o-input></o-input>
              </o-field>
            </div>
          </div>
        </div>
      </UiCard>
    </o-step-item>
  </o-steps>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
const steps = ref(1);
const branch = ref("MainBranch");
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showItemslist = ref(false);
const isImageModalActive = ref(false);
const showcheck = ref("");
const selected = ref();
const showListItem = ref(false);
const showListTour = ref(false);

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

<!-- <style>
    
    // function print() {
    //     const printableContent = document.getElementById('papertax');
    //     const printWindow = window.open('', '', 'height=1000,width=1000');
    //     printWindow.document.write(printableContent.innerHTML);
    //     printWindow.print();
    // }
@media print {
  /* header {
    display: none;
  }

  footer {
    display: none;
  } */

  .navbar {
    display: none !important;
  }

  #page {
    margin: 0;
    border: initial;
    border-radius: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
    print-color-adjust: exact;
  }
}
</style> -->
