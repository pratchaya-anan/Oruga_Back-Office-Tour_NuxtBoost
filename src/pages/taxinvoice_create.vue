<template>
    <LayoutPageTitle>Taxinvoice/สร้างใบกำกับภาษี</LayoutPageTitle>
    <o-steps v-model="steps" variant="success">
        <o-step-item step="1" label="ข้อมูล" :clickable="true" icon="user-plus">
            <UiCard class="mb-3">
                <o-button @click="showItemsPanel ? showItemsPanel = false : showItemsPanel = true" class="ml-4">นำเข้าข้อมูล
                </o-button>
                <div v-if="showItemsPanel">

                    <div class="flex">
                        <o-input placeholder="ค้นหา ชื่อลูกค้า , รหัสลูกค้า"></o-input>
                        <div class="px-2">
                            <o-button>ค้นหา</o-button>
                        </div>
                    </div>
                    <o-table :data="data" v-model:selected="selected">
                        <o-table-column @click="isImageModalActive = true" v-for="column in columns" v-bind="column"
                            #default="{ row }">
                            {{ row[column.field] }}
                        </o-table-column>
                    </o-table>
                    <p>
                        {{ selected }}
                    </p>
                    <!-- <section v-if="!showItemslist" class="mt-4">
                    <o-button @click="showItemslist = false">บันทึก</o-button>
                    <o-button @click="showItemsPanel = false">ยกเลิก</o-button>
                </section> -->
                    <!-- <o-button size="medium" variant="primary" @click="isImageModalActive = true">
                    Open modal
                </o-button> -->
                    <div class="flex justify-end">
                        <o-button @click="setnull">ยกเลิก</o-button>
                    </div>
                </div>

                <!-- <o-modal v-model:active="isImageModalActive">

                    <div class="relative w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="popup-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-6 text-center">
                                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you
                                    want to delete this product?</h3>
                                <button data-modal-hide="popup-modal" type="button"
                                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-hide="popup-modal" type="button"
                                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                    cancel</button>
                            </div>
                        </div>
                    </div>
                </o-modal> -->

            </UiCard>
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
                                <div class="relative ">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input datepicker type="text"
                                        class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date">
                                </div>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="วันที่ส่งของ">
                                <div class="relative ">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input datepicker type="text"
                                        class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date">
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
                    <div class="grid grid-cols-3">
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
                    </div>
                    <section class="my-4 ">
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
            </UiCard>
        </o-step-item>
        <!-- <o-step-item step="2" label="พนักงาน" :clickable="true" icon="user-plus">
        </o-step-item> -->
        <o-step-item step="2" label="ใบกำกับภาษี" :clickable="true" icon="user-lock">
            <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
                <div class="col-span-full xl:col-auto mb-4">
                    <UiCard class="mb-4">
                        <section>
                            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                                <div>
                                    <div class="grid grid-cols-6">
                                        <div class="col-span-5">
                                            <h2 class="text-xl font-bold dark:text-white">ใบกำกับภาษี</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-edit"
                                                @click="showOrderPanel = true">
                                            </Icon>
                                        </div>
                                    </div>
                                    <ul class="mt-2 space-y-1">
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Tax Invoice/Delivery Order
                                        </li>
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            เลขที่: 0841142174178
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section v-if="showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                            <o-field label="ชื่อผู้ขอเบิก">
                                <o-input modelValue="ศศิศ วิรัตน์จินดา"></o-input>
                            </o-field>
                            <o-field label="ชื่อผู้ติดต่อ">
                                <o-input modelValue="มะนาว หวานจังเลย"></o-input>
                            </o-field>
                            <o-field label="ที่อยู่">
                                <o-input modelValue="111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100"></o-input>
                            </o-field>
                            <o-field label="วัตถุประสงค์การยืมเงินทดลองจ่าย">
                                <o-input modelValue="เพื่อจ่ายเงิน"></o-input>
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
                                        <div class="mt-4">
                                            ชื่อผู้ขอเบิก
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ศศิศ วิรัตน์จินดา
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ชื่อผู้ติดต่อ
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            มะนาว หวานจังเลย
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ID TAX
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ที่อยู่
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            4585695214526
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            วัตถุประสงค์การยืมเงินทดลองจ่าย
                                        </div>
                                        <div class="border-b mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            เพื่อจ่ายเงิน
                                        </div>
                                    </div>
                                    <div class="mt-3 text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            รหัสลูกค้า
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            C-58015259
                                        </div>
                                    </div>
                                    <div class="mt-3 text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ผู้ขาย
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            สมชัย ใจเกินร้อย
                                        </div>
                                    </div>
                                    <div class="mt-3 text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ฝ่าย
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            การตลาด
                                        </div>
                                    </div>
                                    <div class="mt-3 text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ยืนยันราคาวันที่
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            31/03/2566
                                        </div>
                                    </div>
                                    <div class="mt-3 text-sm not-italic  font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            กำหนดชำระ
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            31/03/2566
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </UiCard>
                </div>
                <div class="col-span-2">
                    <div class=" overflow-x-auto shadow-md sm:rounded-lg mb-4">
                        <UiCard class="mt-3">
                            <div class="p-5">
                                <div>
                                    <label class="text-2xl font-medium">ใบกำกับภาษี</label>
                                </div>
                                <div class="grid grid-cols-2 gap-4 mt-3">
                                    <div>
                                        <o-field label="วันที่">
                                            <div class="relative ">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input datepicker type="text"
                                                    class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Select date">
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
                            <o-field class="mb-5" label="รายการที่เลือก">
                                <o-table :data="data">
                                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                                        {{ row[column] }}
                                    </o-table-column>
                                </o-table>
                            </o-field>
                            <o-field class="mb-5" label="รายการที่ไม่ได้เลือก">
                                <o-table :data="data">
                                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                                        {{ row[column] }}
                                    </o-table-column>
                                </o-table>
                            </o-field>

                            <section v-if="!showItemslist" class="mt-4">
                                <o-button @click="showItemsPanel = true">เพิ่มรายการ</o-button>
                            </section>

                            <div v-if="showItemslist" class="mt-5">
                                <o-table :data="data" v-model:checked-rows="checkedRows" checkable
                                    :checkbox-position="checkboxPosition">
                                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                                        {{ row[column.field] }}
                                    </o-table-column>
                                </o-table>
                                <section>
                                    <o-button class="mt-4">บันทึก</o-button>
                                    <o-button @click="showItemslist = false" class="ml-4">ยกเลิก</o-button>
                                </section>
                            </div>
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
                                    <o-field class="flex-1" label="จำนวนเงิน">
                                        <o-input></o-input>
                                    </o-field>
                                </div>
                                <section>
                                    <o-button class="mt-4" @click="showItemsPanel = false">บันทึก</o-button>
                                    <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
                                </section>
                            </UiCard>
                        </UiCard>
                    </div>

                </div>
            </div>
        </o-step-item>
        <o-step-item step="3" label="ยืนยัน" :clickable="true" icon="user-lock">
            <PaperTaxinvoicePaper id="papertax"></PaperTaxinvoicePaper>
            <div class="flex justify-center mt-3">
                <o-button @click="print" variant="info">
                    <Icon class="mr-3 -ml-1 w-5 h-5" name="material-symbols:print"></Icon>
                    พิมพ์
                </o-button>
                <NuxtLink to="quotation_list">
                    <o-button>
                        บันทึก
                    </o-button>
                </NuxtLink>
            </div>
        </o-step-item>
    </o-steps>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
const steps = ref(1);
const branch = ref('MainBranch');
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showItemslist = ref(false);
const isImageModalActive = ref(false);
const showcheck = ref('');
const selected = ref();

function setnull() {
    selected.value = null;
}

function print() {
    window.print();
}
onMounted(() => { initFlowbite() });
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