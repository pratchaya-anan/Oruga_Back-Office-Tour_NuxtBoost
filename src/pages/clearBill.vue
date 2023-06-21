<template>
    <LayoutPageTitle>ออกใบเคียร์ประมาณการเงินสดย่อย</LayoutPageTitle>
    <o-steps v-model="steps" variant="success">
        <o-step-item step="1" label="ผู้ขอเคลียร์" :clickable="true" icon="user-plus">
            <UiCard class="mb-3">
                <div class="p-5">
                    <div>
                        <label class="text-2xl font-medium">ข้อมูลผู้ขอเคลียร์</label>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-3">
                        <div>
                            <o-field label="ผู้ขอเคลียร์">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ฝ่าย/แผนก">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="อ้างอิงถึงเลขที่ใบขอเคลียร์">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ผู้อนุมัติ (แบบอิเล็กทอรนิกส์)">
                                <o-input></o-input>
                            </o-field>
                        </div>
                    </div>
                    <div>
                        <o-field label="รายละเอียดโครงการ/กิจกรรม">
                            <o-input></o-input>
                        </o-field>
                    </div>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="2" label="รายการเคลียร์" :clickable="true" icon="user-plus">
            <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
                <div class="col-span-full xl:col-auto mb-4">
                    <UiCard class="mb-4">
                        <section>
                            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                                <div>
                                    <div class="grid grid-cols-6">
                                        <div class="col-span-5">
                                            <h2 class="text-xl font-bold dark:text-white">ใบเคียร์ประมาณการเงินสดย่อย</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-edit"
                                                @click="showOrderPanel = true">
                                            </Icon>
                                        </div>
                                    </div>
                                    <ul class="mt-2 space-y-1">
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Quatation
                                        </li>
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            เลขที่: 0841142174178
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section v-if="showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                            <o-field label="ผู้ขอเคลียร์">
                                <o-input modelValue="ศศิศ วิรัตน์จินดา"></o-input>
                            </o-field>
                            <o-field label="ฝ่าย/แผนก">
                                <o-input modelValue="ฝ่ายขาย"></o-input>
                            </o-field>
                            <o-field label="อ้างอิงถึงเลขที่ใบขอเคลียร์">
                                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    5825-99868
                                </div>
                            </o-field>
                            <o-field label="รายละเอียดโครงการ/กิจกรรม">
                                <o-input modelValue="ค่าน้ำมันรถ"></o-input>
                            </o-field>
                            <o-field label="ผู้อนุมัติ (แบบอิเล็กทอรนิกส์)">
                                <o-input modelValue="นายกล้วยหอม หวีน้ำหว้า"></o-input>
                            </o-field>
                            <section>
                                <o-button @click="showOrderPanel = false" class="mt-4">บันทึก</o-button>
                                <o-button @click="showOrderPanel = false" class="mt-4">ยกเลิก</o-button>
                            </section>
                        </section>
                        <section v-if="!showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                            <span>ข้อมูลผู้ขอเคลียร์</span>
                            <div class="sm:flex xl:block xl:space-y-4">
                                <div class="sm:flex-1">
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ผู้ขอเคลียร์
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ศศิศ วิรัตน์จินดา
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ฝ่าย/แผนก
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ฝ่ายขาย
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            อ้างอิงถึงเลขที่ใบขอเคลียร์
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            5825-99868
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            รายละเอียดโครงการ/กิจกรรม
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            เบิกจ่ายทัวร์องค์การบริหารส่วนตำบลโพนงาม
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ผู้อนุมัติ (แบบอิเล็กทอรนิกส์)
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            นายกล้วยหอม หวีน้ำว้า
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </section>

                    </UiCard>
                </div>
                <div class="col-span-2">
                    <div class=" overflow-x-auto shadow-md sm:rounded-lg mb-4">
                        <UiCard>
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        วันที่ใบเสร็จ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        รายละเอียดค่าใช้จ่าย
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เลขที่ใบเสร็จ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เลขประจำตัวผู้เสียภาษี
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ยอดสุทธิ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        หัวข้ออ้างอิงไม่แสดงในใบเคลียร์
                                    </th>
                                    <td class="px-6 py-4">
                                        ค่าน้ำแข็ง
                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">
                                        80 .-
                                    </td>
                                    <td class="px-6 py-4 text-right">

                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        03-06-2566
                                    </th>
                                    <td class="px-6 py-4">
                                        ค่าน้ำแข็งถัง
                                    </td>
                                    <td class="px-6 py-4">
                                        WQp7985
                                    </td>
                                    <td class="px-6 py-4">
                                        3885587473
                                    </td>
                                    <td class="px-6 py-4">
                                        80 .-
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                                                </path>
                                            </svg>
                                        </button>

                                    </td>
                                </tr>
                                <tr class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        หัวข้ออ้างอิงไม่แสดงในใบเคลียร์
                                    </th>
                                    <td class="px-6 py-4">
                                        ค่ารถนำเที่ยว
                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">
                                        4,000 .-
                                    </td>
                                    <td class="px-6 py-4 text-right">

                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        03-06-2566
                                    </th>
                                    <td class="px-6 py-4">
                                        ค่ารถนำเที่ยว
                                    </td>
                                    <td class="px-6 py-4">
                                        A7858575
                                    </td>
                                    <td class="px-6 py-4">
                                        3885587473
                                    </td>
                                    <td class="px-6 py-4">
                                        4,000 .-
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                                                </path>
                                            </svg>
                                        </button>

                                    </td>
                                </tr>                                
                                                               
                            </tbody>
                        </table>
                        </UiCard>

                        <!-- Dropdown menu -->
                        <div id="dropdownDots"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    ลบ</a>
                            </div>
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    แก้ไข</a>
                            </div>
                        </div>
                    </div>
                    <section v-if="!showItemsPanel">
                        <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
                    </section>
                    <UiCard v-if="showItemsPanel">
                        <div class="grid grid-cols-2 gap-4">
                            <o-field label="วันที่ต้องการใช้เงิน">
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

                            <o-field class="flex-1" label="รายละเอียดค่าใช้จ่าย">
                                <o-input></o-input>
                            </o-field>
                            <o-field class="flex-1" label="เลขที่ใบเสร็จ">
                                <o-input></o-input>
                            </o-field>
                            <o-field class="flex-1" label="เลขประจำตัวผู้เสียภาษี">
                                <o-input></o-input>
                            </o-field>
                            <o-field class="flex-1" label="ยอดสุทธิ">
                                <o-input></o-input>
                            </o-field>
                            <o-field label="รายการ">
                                <o-select placeholder="ประเภทค่าใช้จ่าย">
                                    <option value="free">ค้าน้ำแข็ง</option>
                                    <option value="1%">ค่าน้ำมันรถ</option>
                                </o-select>
                            </o-field>
                        </div>

                        <section>
                            <o-button class="mt-4">เพิ่มรายการ</o-button>
                            <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
                        </section>
                    </UiCard>
                </div>
            </div>
        </o-step-item>
        <o-step-item step="3" label="ยืนยัน" :clickable="true" icon="user-plus">
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
