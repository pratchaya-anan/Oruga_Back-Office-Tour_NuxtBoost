<template>
  <LayoutPageTitle> Disbursement Estimate / ใบเบิกเงินสดย่อย</LayoutPageTitle>
  <o-steps v-model="stepnext" variant="success">
    <o-step-item step="1" label="เลือกทัวร์" :clickable="true" icon="user-plus">
      <UiCard>
        <div class="flex items-center">
          <div class="relative w-full">
            <o-input placeholder="ค้นหา ชื่อลูกค้า , รหัสลูกค้า" class="w-full"></o-input>
          </div>
          <div class="ml-2">
            <o-button @click="showListTour = true">ค้นหา</o-button>
          </div>
        </div>

        <div v-if="showListTour">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class=" py-3">ชื่อทริปทัวร์</th>
                  <th scope="col" class="py-3">
                    ชื่อโปรแกรม
                  </th>
                  <th scope="col" class="py-3">
                    วันที่เดินทาง
                  </th>
                  <th scope="col" class="py-3">วันที่สิ้นสุด</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  v-for="i in tableDatatour" @click="stepnext = 4">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ i.id }}
                  </th>
                  <td class="py-4">
                    {{ i.nametour }}
                  </td>
                  <td class="py-4">
                    {{ i.triptour }}
                  </td>
                  <td> {{ i.datetours }}</td>
                  <td> {{ i.datetourend }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiCard>
    </o-step-item>
    <o-step-item step="2" label="ข้อมูล" :clickable="true" icon="user-lock">
      <UiCard class="mb-3">
        <div class="p-5">
          <div>
            <label class="text-2xl font-medium">ข้อมูลลูกค้า</label>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div>
                  <o-field label="ชื่อผู้ขอเบิก">
                    <o-select placeholder="ชื่อผู้ขอเบิก">
                      <option value="นายกอไก่ ขอไข่">นายกอไก่ ขอไข่</option>
                      <option value="นายคอควาย งองู">นายคอควาย งองู</option>
                      <option value="นางสวยสด งดงาม">นางสวยสด งดงาม</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="ฝ่าย/แผนก">
                    <o-select placeholder="เลือกฝ่าย/แผนก">
                      <option value="บัญชี">บัญชี</option>
                      <option value="การเงิน">การเงิน</option>
                      <option value="??">??</option>
                    </o-select>
                  </o-field>
                </div>
            <div>
              <o-field label="วัตถุประสงค์การยืม">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="เงินทดลองจ่าย">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="วันที่ต้องการใช้เงิน">
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
              <o-field label="โครงการ">
                <o-input></o-input>
              </o-field>
            </div>
          </div>
        </div>
      </UiCard>
      <!-- <UiCard class="mb-3">
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
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd"
                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                              clip-rule="evenodd"></path>
                                      </svg>
                                  </div>
                                  <input datepicker type="text"
                                      class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Select date" />
                              </div>
                          </o-field>
                      </div>
                      <div>
                          <o-field label="วันที่ส่งของ">
                              <div class="relative">
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd"
                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                              clip-rule="evenodd"></path>
                                      </svg>
                                  </div>
                                  <input datepicker type="text"
                                      class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Select date" />
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
                              <o-radio v-model="showcheck" name="name" native-value="persen" class="mr-3">
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
                           <section>
                              <o-button @click="showcheck = false" class="mt-4">Save</o-button>
                          </section> -->
      <!-- </section>
                  </div>
                  <div class="grid grid-cols-2 gap-4 mt-3">
                      <div>
                          <o-field label="วันที่ออกใบ">
                              <div class="relative">
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd"
                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                              clip-rule="evenodd"></path>
                                      </svg>
                                  </div>
                                  <input datepicker type="text"
                                      class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Select date" />
                              </div>
                          </o-field>
                      </div>
                      <div class="flex space-x-5">
                          <o-radio v-model="branch" name="branchcheck" native-value="MainBranch">
                              สำนักงานใหญ่
                          </o-radio>
                          <o-radio v-model="branch" name="branchcheck" native-value="SubBranch">
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
              <div class="flex justify-end">
                  <a href="/paper_edit/taxinvoice_item">
                      <o-button> บันทึก </o-button>
                  </a>
              </div> -->
      <!-- </UiCard>  -->
      <div class="flex justify-end">
        <NuxtLink to="/paper_edit/disbursement_item">
          <o-button> บันทึก </o-button>
        </NuxtLink>
      </div>
    </o-step-item>
  </o-steps>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";
const steps = ref(1);
const branch = ref("MainBranch");
const showItemslist = ref(false);
const isImageModalActive = ref(false);
const showcheck = ref("");
const selected = ref();
const showListItem = ref(false);
const showListTour = ref(false);
const stepnext = ref();

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
const tableDatalistitem = [
  {
    id: 1,
    productcode: "Q-4636653086	",
    productlist: "เที่ยวเกาะ เลาะรัก",
    quantity: "10",
    unitprice: "5,000",
    discount: "0",
    tax: "7%",
    amount: "5,350",
  },
  {
    id: 2,
    productcode: "p-463665875	",
    productlist: "ภาษีสนามบิน",
    quantity: "1",
    unitprice: "2,000",
    sale: "0",
    tax: "7%",
    amount: "2,140",
  },
];
const tableDatatour = [
  {
    id: 1,
    nametour: "เกาะล้าน",
    triptour: "ซื้อ 10 จ่าย 8",
    datetours: "05-06-2566",
    datetourend: "07-06-2566",
  },
  {
    id: 2,
    nametour: "เที่ยวเกาะเลาะรัก",
    triptour: "กาญจนบุรี-พัทยา",
    datetours: "20-06-2566",
    datetourend: "24-06-2566",
  },
];

const data = ref(tableData);
</script>

