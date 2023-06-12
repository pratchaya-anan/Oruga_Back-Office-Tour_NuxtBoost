<template>
    <LayoutPageTitle>กู้สามัญ</LayoutPageTitle>
    <o-steps v-model="steps" variant="success">

        <o-step-item step="2" label="พนักงาน" :clickable="true" icon="user-plus">
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
                    </section>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="3" label="เพิ่มรายการ" :clickable="true" icon="user-plus">
            <div class="col-span-2">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                    <UiCard>
                        <div>
                            <label class="text-2xl font-medium">ผู้ค้ำประกัน</label>
                        </div>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ลำดับ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ชื่อ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        สกุล
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เงินเดือน
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">แก้ไข</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                    </th>
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ชื่อ xxx
                                    </th>
                                    <td class="px-6 py-4">
                                        สกุล xxxxx
                                    </td>
                                    <td class="px-6 py-4">
                                        30,000
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        2
                                    </th>
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ชื่อ xxx
                                    </th>
                                    <td class="px-6 py-4">
                                        สกุล xxxxx
                                    </td>
                                    <td class="px-6 py-4">
                                        30,000
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </UiCard>
                </div>
                <section v-if="!showItemsPanel">
                    <o-button @click="showItemsPanel = true">เพิ่มคนค้ำ</o-button>
                </section>
                <UiCard v-if="showItemsPanel">
                    <div class="grid grid-cols-2 gap-4">
                        <o-field label="ชื่อ">
                            <o-input></o-input>
                        </o-field>

                        <o-field label="สกุล">
                            <o-input></o-input>
                        </o-field>
                        <o-field label="เลขทะเบียนที่">
                            <o-input></o-input>
                        </o-field>

                        <o-field label="ตำแหน่ง">
                            <o-input></o-input>
                        </o-field>
                        <o-field label="สังกัด">
                            <o-input></o-input>
                        </o-field>

                        <o-field label="เบอร์โทร">
                            <o-input></o-input>
                        </o-field>
                        <o-field label="วงเงินค้ำประกัน">
                            <o-input></o-input>
                        </o-field>
                        <o-field label="เงินเดือน">
                            <o-input></o-input>
                        </o-field>
                    </div>

                    <div class="field">
                        <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
                        <o-checkbox :value="true" checkClass="w-4 h-4 mt-3"
                            labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
                        </o-checkbox>
                    </div>
                    <div class="field">
                        <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                            labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาทะเบียนบ้าน
                        </o-checkbox>
                    </div>
                    <div class="field">
                        <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                            labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            สำเนาทะเบียนสมรสหรือใบหย่า </o-checkbox>
                    </div>
                    <section>
                        <o-button @click="showItemsPanel = false" class="mt-4">บันทึก</o-button>
                        <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
                    </section>
                </UiCard>
            </div>
        </o-step-item>
        <o-step-item step="4" label="ยืนยัน" :clickable="true" icon="user-lock">

        </o-step-item>
    </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>
