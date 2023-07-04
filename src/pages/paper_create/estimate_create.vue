<template>
  <LayoutPageTitle> Estimate Clearing/ใบเคลียร์เงินสดย่อย </LayoutPageTitle>
  <o-steps v-model="stepnext" variant="success">
    <o-step-item step="1" label="เลือก" :clickable="true" icon="user-plus">
      <div class="space-y-4">
        <UiCard>
          <h2 class="text-xl font-bold dark:text-white mb-2">
            ค้นหาใบเบิกเงินสดย่อย
          </h2>
          <div class="flex items-center">
            <div class="relative w-full">
              <o-input placeholder="ค้นหา ชื่อลูกค้า, รหัสลูกค้า" class="w-full"></o-input>
            </div>
            <div class="ml-2">
              <o-button @click="showListItem = true">ค้นหา</o-button>
            </div>
          </div>
        </UiCard>
        <UiCard v-if="showListItem">
          <h2 class="text-xl font-bold dark:text-white mb-2">
            เลือกใบเบิกเงินสดย่อยที่นำไปทำรายการ
          </h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-4 px-4">วัตถุประสงค์การยืมเงินทดลองจ่าย</th>
                  <th scope="col" class="py-4">ชื่อผู้ขอเบิก</th>
                  <th scope="col" class="py-4">โครงการ</th>
                  <th scope="col" class="py-4">รายละเอียดโครงการ/กิจกรรม</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  v-for="i in tableData" @click="stepnext = 2">
                  <td class="py-4 px-4">
                    {{ i.productcode }}
                  </td>
                  <td class="py-4">
                    {{ i.productlist }}
                  </td>
                  <td class="py-4">{{ i.quantity }}</td>
                  <td class="py-4">{{ i.unitprice }}</td>
                  <td class="py-4">
                    <div class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      เลือก
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
                        ใบเบิกเงินสดย่อย
                      </h2>
                    </div>
                  </div>
                  <ul class="mt-2 space-y-1">
                    <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      Disbursement Estimate
                    </li>
                    <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      เลขที่: D230705-0001
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">
                      ชื่อผู้ขอเบิก
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นายสรณ์สิริ สายบุตร
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">
                      แผนก
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      บริการลูกค้า
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">
                      วัตถุประสงค์การยืมเงินทดลองจ่าย
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ค่าใช้จ่ายในทัวร์
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">
                      วันที่ต้องการใช้เงิน
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      03/07/2566
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">
                      โครงการ
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      องค์การบริหารส่วนตำบลโพนงาม
                    </div>
                  </div>
                  <div class="text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">
                      รายละเอียดโครงการ/กิจกรรม
                    </div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นำสมาชิกเข้าร่วมการอบรมณ์
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
                <h2 class="text-xl font-bold dark:text-white">ข้อมูลผู้ขอเคลียร์</h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <o-field label="ผู้ขอเคลียร์">
                    <o-select placeholder="เลือกผู้ขอเคลียร์">
                      <option value="นายกอไก่ ขอไข่">นายกอไก่ ขอไข่</option>
                      <option value="นายคอควาย งองู">นายคอควาย งองู</option>
                      <option value="นางสวยสด งดงาม">นางสวยสด งดงาม</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="ฝ่าย/แผนก ผู้ขอเคลียร์">
                    <o-select placeholder="เลือกฝ่าย/แผนก">
                      <option value="บัญชี">บัญชี</option>
                      <option value="การเงิน">การเงิน</option>
                      <option value="ผู้บริหาร">ผู้บริหาร</option>
                      <option value="ฝ่ายบริการ">บริการลูกค้า</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="ผู้อนุมัติ">
                    <o-select placeholder="เลือกผู้ขอเคลียร์">
                      <option value="นายกอไก่ ขอไข่">นายกอไก่ ขอไข่</option>
                      <option value="นายคอควาย งองู">นายคอควาย งองู</option>
                      <option value="นางสวยสด งดงาม">นางสวยสด งดงาม</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="ฝ่าย/แผนก ผู้อนุมัติ">
                    <o-select placeholder="เลือกฝ่าย/แผนก">
                      <option value="บัญชี">บัญชี</option>
                      <option value="การเงิน">การเงิน</option>
                      <option value="ผู้บริหาร">ผู้บริหาร</option>
                      <option value="ฝ่ายบริการ">บริการลูกค้า</option>
                    </o-select>
                  </o-field>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <a href="/paper_edit/estimate_item">
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
const selected = ref();
const stepnext = ref(1);
const showListItem = ref(false);

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
    productcode: "ค่าใช้จ่ายในทัวร์",
    productlist: "นายสรณ์สิริ สายบุตร",
    quantity: "องค์การบริหารส่วนตำบลโพนงาม",
    unitprice: "นำสมาชิกเข้าร่วมการอบรมณ์",
  },
  {
    productcode: "เพื่อนำจ่ายเงินเดือนให้กับพนักงาน",
    productlist: "นายสาวรินดา จุตตะโน",
    quantity: "เงินเดือนพนักงาน",
    unitprice: "นำจ่ายพนักงานจำนวน 6 คน",
  },
];

const data = ref(tableData);

function setnull() {
  selected.value = null;
}

onMounted(() => {
  initFlowbite();
});
</script>
  
  