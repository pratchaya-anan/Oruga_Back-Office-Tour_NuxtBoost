<template>
    <section>
        <LayoutPageTitle> สมัครสมาชิก </LayoutPageTitle>
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
                หุ้น
            </h2>
            <div class="mb-2">
                <div class="grid grid-cols-6 gap-2">
                    <div class="col-span-2">
                        <o-field label="ประสงค์ส่งเงินต่อเดือน">
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
            <h2 class="text-xl font-bold dark:text-white">
                เอกสารประกอบ
            </h2>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <o-field label="อัพโหลดเอกสาร">
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">Click to upload</span> or drag
                                    and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    (บัตรประชาชนหรือเอกสารอื่นๆ) PDF, PNG, JPG
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                </o-field>
                <o-field label="เอกสารที่แนบ">
                    <UiCard>
                        <div class="flex justify-between">
                            <div>
                                <Icon class="w-6 h-6 text-gray-600 mr-1" name="tabler:file"></Icon>สำเนาบัตรประชาชน.pdf
                            </div>
                            <Icon class="w-6 h-6 text-red-500" name="pepicons-pop:trash"></Icon>
                        </div>
                    </UiCard>
                    <UiCard>
                        <div class="flex justify-between">
                            <div>
                                <Icon class="w-6 h-6 text-gray-600mr-1" name="tabler:file"></Icon>สำเนาหน้าบัญชีธนาคารกรุงไทย.pdf
                            </div>
                            <Icon class="w-6 h-6 text-red-500" name="pepicons-pop:trash"></Icon>
                        </div>
                    </UiCard>
                </o-field>
            </div>
            <div class="flex justify-end mt-4">
                <a href="#">
                    <o-button> ส่ง </o-button>
                </a>
            </div>
        </UiCard>
    </section>
</template>
  
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});
</script>
  