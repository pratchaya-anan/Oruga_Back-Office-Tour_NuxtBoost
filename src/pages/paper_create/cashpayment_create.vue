<template>
  <LayoutPageTitle> Cashpayment / สร้างใบสำคัญจ่าย </LayoutPageTitle>
  <o-steps v-model="stepnext">
    <o-step-item
      step="1"
      label="เลือกผู้รับเงิน"
      :clickable="true"
      icon="user-plus"
    >
      <div class="space-y-4">
        <UiCard>
          <h2 class="text-xl font-bold dark:text-white mb-2">
            ค้นหาผู้รับเงิน
          </h2>
          <div class="flex items-center">
            <div class="relative w-full">
              <o-input
                placeholder="ค้นหา ชื่อลูกค้า, รหัสลูกค้า"
                class="w-full"
              ></o-input>
            </div>
            <div class="ml-2">
              <o-button @click="showListAgency = true">ค้นหา</o-button>
            </div>
          </div>
        </UiCard>
        <div>
          <UiCard v-if="showListAgency">
            <h2 class="text-xl font-bold dark:text-white mb-2">
              เลือกผู้รับเงินที่ต้องการนำไปออกใบสำคัญจ่าย
            </h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-4">ลำดับ</th>
                    <th scope="col" class="px-6 py-4">ผู้รับเงิน</th>
                    <th scope="col" class="px-6 py-4">
                      เลขประจำตัวผู้เสียภาษี
                    </th>
                    <th scope="col" class="px-6 py-4">เบอร์โทร</th>
                    <th scope="col" class="px-6 py-4">ที่อยู่</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="i in tableAgency"
                    @click="stepnext = 2"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ i.id }}
                    </th>
                    <td class="px-6 py-4">{{ i.namecontact }}</td>
                    <td class="px-6 py-4">{{ i.taxagency }}</td>
                    <td class="px-6 py-4">{{ i.phoneagency }}</td>
                    <td class="px-6 py-4">{{ i.addressagency }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UiCard>
        </div>
        <section v-if="!showAddAgency">
          <o-button @click="showAddAgency = true">เพิ่มผู้รับเงิน</o-button>
        </section>
        <UiCard v-if="showAddAgency">
          <div>
            <h2 class="text-xl font-bold dark:text-white mb-2">
              เพิ่มผู้รับเงิน
            </h2>
            <div class="grid grid-cols-2 gap-4 mt-3">
              <div>
                <o-field label="ชื่อผู้รับเงิน">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="เลขประจำตัวผู้เสียภาษี">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="เบอร์โทร">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="Email">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="ที่อยู่">
                  <o-input type="textarea"></o-input>
                </o-field>
              </div>
            </div>
            <div class="flex justify-end">
              <div>
                <o-button @click="showAddAgency = false">ยกเลิก</o-button>
              </div>
              <div>
                <o-button @click="stepnext = 2">ตกลง</o-button>
              </div>
            </div>
          </div>
        </UiCard>
      </div>
    </o-step-item>
    <o-step-item step="2" label="ข้อมูล" :clickable="true" icon="user-lock">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <div>
                  <div class="grid grid-cols-6">
                    <div class="col-span-5">
                      <h2 class="text-xl font-bold dark:text-white">
                        รายละเอียดผู้รับเงิน
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="my-4 border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
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
                </div>
              </div>
            </section>
          </UiCard>
        </div>
        <div class="col-span-2">
          <UiCard class="mb-3">
            <div class="p-5">
              <div class="mb-2">
                <h2 class="text-xl font-bold dark:text-white">ข้อมูลเอกสาร</h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <o-field label="ผู้เบิกจ่าย">
                    <o-select placeholder="เลือกผู้เบิกจ่าย">
                      <option value="นายกอไก่ ขอไข่">นายกอไก่ ขอไข่</option>
                      <option value="นายคอควาย งองู">นายคอควาย งองู</option>
                      <option value="นางสวยสด งดงาม">นางสวยสด งดงาม</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="ฝ่าย/แผนก">
                    <o-select placeholder="เลือกฝ่าย">
                      <option value="บัญชี">บัญชี</option>
                      <option value="การเงิน">การเงิน</option>
                      <option value="??">??</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="จ่ายผ่าน">
                    <div class="flex mt-2">
                      <o-radio
                        v-model="showcheck"
                        name="name"
                        native-value="persen"
                        class="mr-10"
                      >
                        เงินสด
                      </o-radio>
                      <o-radio
                        v-model="showcheck"
                        name="name"
                        native-value="custom"
                      >
                        เช็ดธนาคาร
                      </o-radio>
                    </div>
                  </o-field>
                </div>
                <div>
                  <o-field label="เลขที่">
                    <o-input></o-input>
                  </o-field>
                </div>
                <div>
                  <o-field label="ตั้งแต่วันที่">
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
                <div class="col-span-2">
                  <o-field label="เพื่อชำระ">
                    <o-input></o-input>
                  </o-field>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <a href="/paper_edit/cashpayment_item">
                <o-button> บันทึก </o-button>
              </a>
            </div>
          </UiCard>
        </div>
      </div>
    </o-step-item>
  </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

const showListAgency = ref();
const stepnext = ref(1);
const showListTour = ref(false);
const showAddAgency = ref(false);

const tableAgency = [
  {
    id: 1,
    namecontact: "นายภาคภูมิ ภูเขียว",
    taxagency: "0105556128421",
    phoneagency: "0625584785",
    addressagency: "156 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000",
  },
  {
    id: 2,
    nameagency: "สรสิริ สายบุตร",
    namecontact: "นางสาวดวงจันทร์ พันดาว",
    taxagency: "0105556128421",
    phoneagency: "0925584785",
    addressagency: "175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000",
  },
];

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

const tableDatatour = [
  {
    id: 1,
    nametour: "เกาะล้าน",
    triptour: "ซื้อ 10 จ่าย 8",
    datetours: "05/06/2566",
    datetourend: "07/06/2566",
  },
  {
    id: 2,
    nametour: "เที่ยวเกาะเลาะรัก",
    triptour: "กาญจนบุรี-พัทยา",
    datetours: "20/06/2566",
    datetourend: "24/06/2566",
  },
];

onMounted(() => {
  initFlowbite();
});
const showcheck = ref("");
</script>
