<template>
  <LayoutPageTitle> Quotation / สร้างใบเสนอราคา </LayoutPageTitle>
  <o-steps v-model="stepnext">
    <o-step-item
      step="1"
      label="เลือกลูกค้า"
      :clickable="true"
      icon="user-plus"
    >
      <div class="space-y-4">
        <UiCard>
          <h2 class="text-xl font-bold dark:text-white mb-2">
            ค้นหาหน่วยงาน/ลูกค้า
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
              เลือกหน่วยงาน/ลูกค้า ที่ต้องการนำไปออกใบเสนอราคา
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
                    <th scope="col" class="px-6 py-4">หน่วยงาน / ลูกค้า</th>
                    <th scope="col" class="px-6 py-4">รหัสลูกค้า</th>
                    <th scope="col" class="px-6 py-4">ชื่อผู้ติดต่อ</th>
                    <th scope="col" class="px-6 py-4">
                      เลขประจำตัวผู้เสียภาษี
                    </th>
                    <th scope="col" class="px-6 py-4">เบอร์ติดต่อ</th>
                    <th scope="col" class="px-6 py-4">ที่อยู่</th>
                    <th></th>
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
                    <td class="px-6 py-4">
                      {{ i.nameagency }}
                    </td>
                    <td class="px-6 py-4">
                      {{ i.idagency }}
                    </td>
                    <td class="px-6 py-4">{{ i.namecontact }}</td>
                    <td class="px-6 py-4">{{ i.taxagency }}</td>
                    <td class="px-6 py-4">{{ i.phoneagency }}</td>
                    <td class="px-6 py-4">{{ i.addressagency }}</td>
                    <td class="px-6 py-4">
                      <div
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        เลือก
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UiCard>
        </div>
        <section v-if="!showAddAgency">
          <o-button @click="showAddAgency = true"
            >เพิ่มหน่วยงาน/ลูกค้า</o-button
          >
        </section>
        <UiCard v-if="showAddAgency">
          <div>
            <h2 class="text-xl font-bold dark:text-white mb-2">
              เพิ่มหน่วยงาน/ลูกค้า
            </h2>
            <div class="grid grid-cols-2 gap-4 mt-3">
              <div>
                <o-field label="รหัสลูกค้า">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="หน่วยงาน / ลูกค้า">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="ชื่อผู้ติดต่อ">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="เลขประจำตัวผู้เสียภาษี">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="โทร">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="ที่อยู่">
                  <o-input></o-input>
                </o-field>
              </div>
              <div>
                <o-field label="Email">
                  <o-input></o-input>
                </o-field>
              </div>
            </div>
            <div class="flex justify-end">
              <div>
                <o-button @click="showAddAgency = false">ยกเลิก</o-button>
              </div>
              <div>
                <o-button @click="stepnext = 5">ตกลง</o-button>
              </div>
            </div>
          </div>
        </UiCard>
      </div>
    </o-step-item>
    <o-step-item step="2" label="เลือกทัวร์" :clickable="true" icon="user-plus">
      <div class="space-y-4">
        <UiCard>
          <h2 class="text-xl font-bold dark:text-white mb-2">
            ค้นหารายการทัวร์
          </h2>
          <div class="flex items-center">
            <div class="relative w-full">
              <o-input placeholder="ค้นหา ชื่อทัวร์" class="w-full"></o-input>
            </div>
            <div class="ml-2">
              <o-button @click="showListTour = true">ค้นหา</o-button>
            </div>
          </div>
        </UiCard>
        <div>
          <UiCard v-if="showListTour">
            <h2 class="text-xl font-bold dark:text-white mb-2">
              เลือกทัวร์ที่ต้องการนำไปออกใบเสนอราคา
            </h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">ลำดับ</th>
                    <th scope="col" class="py-3">ชื่อทริปทัวร์</th>
                    <th scope="col" class="py-3">ชื่อโปรแกรม</th>
                    <th scope="col" class="py-3">วันที่เดินทาง</th>
                    <th scope="col" class="py-3">วันที่สิ้นสุด</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="i in tableDatatour"
                    @click="stepnext = 3"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ i.id }}
                    </th>
                    <td class="py-4">
                      {{ i.nametour }}
                    </td>
                    <td class="py-4">
                      {{ i.triptour }}
                    </td>
                    <td>{{ i.datetours }}</td>
                    <td>{{ i.datetourend }}</td>
                    <td>
                      <div
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        เลือก
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UiCard>
        </div>
        <div class="flex justify-end">
          <o-button @click="stepnext = 3">ข้าม</o-button>
        </div>
      </div>
    </o-step-item>
    <o-step-item step="3" label="ข้อมูล" :clickable="true" icon="user-lock">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <div>
                  <div class="grid grid-cols-6">
                    <div class="col-span-5">
                      <h2 class="text-xl font-bold dark:text-white">
                        ข้อมูลหน่วยงาน/ลูกค้า
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">หน่วยงาน/ลูกค้า</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      เทศบาลขอนแก่น
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">รหัสลูกค้า</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      1552555214
                    </div>
                    <div class="mt-2">ชื่อผู้ติดต่อ</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      นายภาคภูมิ ภูเขียว
                    </div>
                    <div class="mt-2">เบอร์ติดต่อ</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      0625584785
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
                    <div class="mt-2">ที่อยู่</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <div>
                  <div class="grid grid-cols-6">
                    <div class="col-span-5">
                      <h2 class="text-xl font-bold dark:text-white">
                        ข้อมูลทัวร์
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-4">ชื่อทริปทัวร์</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      เที่ยวเกาะเลาะรัก
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">ชื่อโปรแกรมทัวร์</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      กาญจนบุรี-พัทยา
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">วันที่เดินทาง</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      05/06/2566
                    </div>
                  </div>
                  <div
                    class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div class="mt-2">วันที่สิ้นสุด</div>
                    <div
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      07/06/2566
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
                  <o-field label="ผู้ขาย">
                    <o-select placeholder="เลือกผู้ขาย">
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
                  <o-field label="ยืนยันราคาภายในวันที่">
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
                  <o-field label="วันส่งของ">
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
                  <o-field label="กำหนดราคามัดจำ">
                    <div class="flex mt-2">
                      <o-radio
                        v-model="showcheck"
                        name="name"
                        native-value="persen"
                        class="mr-3"
                      >
                        เปอร์เซ็น
                      </o-radio>
                      <o-radio
                        v-model="showcheck"
                        name="name"
                        native-value="custom"
                      >
                        จำนวนเงิน
                      </o-radio>
                    </div>
                    <o-input modelValue=""></o-input>
                  </o-field>
                </div>
                <div>
                  <o-field label="วันที่ออกใบ" class="mt-8">
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
              </div>
            </div>
            <div class="flex justify-end">
              <a href="/paper_edit/quotation_item">
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
    nameagency: "เทศบาลขอนแก่น",
    idagency: "1552555214",
    namecontact: "นายภาคภูมิ ภูเขียว ",
    taxagency: "1522236",
    phoneagency: "0625584785",
    addressagency: "156 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
  },
  {
    id: 2,
    nameagency: "สรสิริ สายบุตร",
    idagency: "1547896524",
    namecontact: "นางสาวดวงจันทร์ พันดาว ",
    taxagency: "13524569",
    phoneagency: "0925584785",
    addressagency: "175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
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
