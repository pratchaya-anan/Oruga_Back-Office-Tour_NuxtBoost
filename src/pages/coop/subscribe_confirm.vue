<template>
    <LayoutPageTitle> ตรวจสอบขอกู้</LayoutPageTitle>
    <o-steps v-model="stepnext">
        <o-step-item step="1" :clickable="true">
            <UiCard>
                <h2 class="text-xl font-bold dark:text-white">
                    ข้อมูลส่วนตัว
                </h2>
                <div class="mb-2">
                    <div class="grid grid-cols-6 gap-2">
                        <div class="w-full">
                            <o-field label="คำนำหน้า">
                                <select id="countries"
                                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>เลือกคำนำหน้า</option>
                                    <option value="US">นาย</option>
                                    <option value="CA">นาง</option>
                                    <option value="FR">นางสาว</option>
                                </select>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="ชื่อ">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="สกุล">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="w-full">
                            <o-field label="วัน เดือน ปีเกิด">
                                <o-input type="date"></o-input>
                            </o-field>
                        </div>
                        <div class="w-full">
                            <o-field label="บ้านเลขที่">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="w-full">
                            <o-field label="หมู่ที่">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="ถนน">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="ตำบล">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="อำเภอ">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="จังหวัด">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="รหัสไปรษณีย์">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="เบอร์โทร">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="เลขประจำตัวประชาชน">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="เลขที่บัญชีธนาคารกรุงไทย">
                                <o-input></o-input>
                            </o-field>
                        </div>
                    </div>
                </div>
                <h2 class="text-xl font-bold dark:text-white">
                    ข้อมูลสังกัด
                </h2>
                <div class="mb-2">
                    <div class="grid grid-cols-6 gap-2">
                        <div class="col-span-2">
                            <o-field label="ตำแหน่ง">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="แผนก">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-2">
                            <o-field label="เงินเดือน">
                                <o-input></o-input>
                            </o-field>
                        </div>
                    </div>
                </div>
                <h2 class="text-xl font-bold dark:text-white">
                    ข้อมูลหุ้น
                </h2>
                <div class="mb-2">
                    <div class="grid grid-cols-6 gap-2">
                        <div class="col-span-2">
                            <o-field label="ประสงค์ส่งเงินค่าหุ้นต่อเดือน จำนวน">
                                <o-input type="number" placeholder="มูลค่าหุ้นละ 10 บาท"></o-input>
                            </o-field>
                        </div>
                        <div class="col-span-4">
                            <div class="flex text-center">
                                <h2 class="text-base font-normal dark:text-white">หมายเหตุ :</h2>
                                <p class="ml-1 text-base font-normal text-red-500 text-right">
                                    หากประสงค์ส่งเงินค่าหุ้นมากกว่าที่กำหนดไว้</p>
                            </div>
                            <div class="w-full">
                                <o-input></o-input>
                            </div>
                        </div>
                    </div>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="2" :clickable="true">
            <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
                <div class="col-span-full xl:col-auto mb-4">
                    <UiCard class="mb-4">
                        <section>
                            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                                <h2 class="text-xl font-bold dark:text-white">
                                    ข้อมูลส่วนตัว
                                </h2>
                            </div>
                        </section>
                        <section class="border-t border-gray-200 dark:border-gray-700">
                            <div class="sm:flex xl:block xl:space-y-4">
                                <div class="sm:flex-1">
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-4">ชื่อ-สกุล</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            นายนพรุจ ชูธรรมสิทธิกุล
                                        </div>
                                        <div class="mt-2">วันเกิด</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            16/04/2542
                                        </div>
                                        <div class="mt-2">ที่อยู่</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            152/1 บ้านกอกน้อย-โคกฟันโปง ตำบลบ้านเป็ด อำเภอเมืองขอนแก่น ขอนแก่น 40000
                                        </div>
                                        <div class="mt-2">เบอร์โทรศัพท์</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            0895658722
                                        </div>
                                        <div class="mt-2">เลขประจำตัวประชาชน</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            1423987647
                                        </div>
                                        <div class="mt-2">เลขที่บัญชีธนาคารกรุงไทย
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            0098766577
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </UiCard>
                    <UiCard class="mb-4">
                        <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                            <h2 class="text-xl font-bold dark:text-white">
                                ข้อมูลสังกัด
                            </h2>
                        </div>
                        <section class="border-t border-gray-200 dark:border-gray-700">
                            <div class="sm:flex xl:block xl:space-y-4">
                                <div class="sm:flex-1">
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-4">ตำแหน่ง</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ข้าราชการ
                                        </div>
                                        <div class="mt-2">แผนก</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            คนไข้
                                        </div>
                                        <div class="mt-2">เงินเดือน</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            50,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </UiCard>
                    <UiCard class="mb-4">
                        <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                            <h2 class="text-xl font-bold dark:text-white">
                                ข้อมูลหุ้น
                            </h2>
                        </div>
                        <section class="border-t border-gray-200 dark:border-gray-700">
                            <div class="sm:flex xl:block xl:space-y-4">
                                <div class="sm:flex-1">
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-4">ประสงค์ส่งเงินต่อเดือน</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            100
                                        </div>
                                        <div class="mt-2">หมายเหตุ</div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            -
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </UiCard>
                </div>
                <div class="col-span-2">
                    <UiCard>
                        <h2 class="text-xl font-bold dark:text-white">
                            เอกสารประกอบ
                        </h2>
                        <div class="grid grid-cols-2 gap-4 pt-2">
                            <div class="mb-5 field">
                                <p Class="text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
                                </p>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="file_input"></label>
                                <input
                                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input" type="file">
                            </div>
                            <div class="mb-5 field">
                                <p Class="text-sm font-medium text-gray-900 dark:text-gray-300">
                                    สำเนาหน้าบัญชีธนาคารกรุงไทย
                                </p>

                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="file_input"></label>
                                <input
                                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input" type="file">

                            </div>
                            <div class="mb-5 field">
                                <p Class="text-sm font-medium text-gray-900 dark:text-gray-300">
                                    สลิปเงินเดือน
                                </p>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="file_input"></label>
                                <input
                                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input" type="file">
                            </div>
                        </div>
                    </UiCard>
                </div>
            </div>
        </o-step-item>
        <o-step-item step="3" :clickable="true">
            <UiCard class="mb-3">
                <div class="mx-auto max-w-screen-xl lg:px-6">
                    <h5 class="mb-3 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        ข้อมูลการสมัครสมาชิก</h5>
                    <div class="grid pt-2 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div class="p-2">
                            <div class="mb-3">
                                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                    ชื่อ-สกุล
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">นายนพรุจ ชูธรรมสิทธิกุล</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                    วันเกิด
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">16/04/2542</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    ที่อยู่
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">152/1 บ้านกอกน้อย-โคกฟันโปง ตำบลบ้านเป็ด
                                    อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    เบอร์โทรศัพท์
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">0895658722</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    เลขประจำตัวประชาชน
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">1423987647</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    เลขที่บัญชีธนาคารกรุงไทย
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">0098766577</p>
                            </div>
                        </div>
                        <div  class="p-2">
                            <div class="mb-3">
                                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                    ตำแหน่ง
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">ข้าราชการ</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                    แผนก
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">คนไข้</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                    เงินเดือน
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">50,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid pt-2 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div  class="p-2">
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    ประสงค์ส่งเงินต่อเดือน
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">100</p>
                            </div>
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    หมายเหตุ
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">-</p>
                            </div>
                        </div>
                        <div  class="p-2">
                            <div class="mb-3">
                                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                                    เอกสารแนบการสมัคร
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">
                                    <li class="flex items-center">
                                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        สำเนาบัตรประชาชน
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        สำเนาทะเบียนบ้าน
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        สลิปเงินเดือน
                                    </li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end"><o-button>ยืนสมัคร</o-button></div>
                </div>
            </UiCard>
        </o-step-item>
    </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

const stepnext = ref(1);
const showInput = ref('F');
const showInput2 = ref('F');

const tableDatatour = [
    {
        id: 1552555234,
        name: "นายกิตติพิชญ์ เสนานุช",
        rank: "พนักงานประจำ",
        datemember: "05/06/2562",
    },
    {
        id: 1552555987,
        name: "นางสาวรินดา จุตโน",
        rank: "ข้าราชการ",
        datemember: "24/06/2561",
    },
];

onMounted(() => {
    initFlowbite();
});
const showcheck = ref("persen");
</script>
  