
<template>
    <section>
        <o-steps v-model="steps" variant="success">
            <o-step-item step="1" :clickable="true" icon="one">
                <UiCard class="mb-2">
                    <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <Icon class="w-60 h-60" name="healthicons:ui-user-profile"></Icon>
                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">นาย นพรุจ
                        ชูธรรมสิทธิกุล
                    </h5>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="w-full">
                            <ul class="mt-2 space-y-1">
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6 mr-2" name="ri:treasure-map-fill"></Icon>
                                    เลขบัตรประชาชน: 1-339955-874-58-7
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6 mr-2" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                                    เลขข้าราชการ: 1548362568
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6 mr-2" name="line-md:calendar"></Icon>
                                    วันเกิด: 16/04/2566
                                </li>
                            </ul>
                        </div>
                        <div class="w-full">
                            <ul class="mt-2 space-y-1">
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6 mr-2" name="fluent:people-audience-24-filled"></Icon>
                                    เป็นสมาชิกตั้งแต่: 16/04/2551
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6 mr-2" name="fluent:comment-error-16-filled"></Icon>
                                    เป็นสมาชิกมา: 5 ปี  4 เดือน  15 วัน
                                </li>
                            </ul>
                        </div>
                    </div>
                </UiCard>
                <UiCard>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="w-full">
                            <h2 class="text-xl font-bold dark:text-white my-3">
                                เลือกประเภทการกู้
                            </h2>
                            <select id="countries"
                                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>ประเภทการกู้</option>
                                <option value="US">กู้เงินฉุกเฉิน</option>
                                <option value="CA">กู้สามัญ</option>
                                <option value="FR">กู้พิเศษ</option>
                                <option value="DE">กู้หุ้น</option>
                            </select>

                        </div>
                        <div class="w-full">
                            <h2 class="text-xl font-bold dark:text-white my-3">
                                รายได้ต่อเดือน
                            </h2>
                            <div class="w-full">
                                <o-input placeholder="บาท"></o-input>
                            </div>
                        </div>
                    </div>
                </UiCard>
            </o-step-item>
            <o-step-item step="2" :clickable="true" icon="two">
                <UiCard>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="w-full">
                            <h2 class="text-xl font-bold dark:text-white my-3">
                                คนค้ำ
                            </h2>
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3 border shadow-md">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-3 py-3 text-center">
                                            ลำดับ
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            ตำแหน่งงาน
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            จำนวน
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            <span class="sr-only">แก้ไข</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            class="px-3 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1
                                        </th>
                                        <th scope="row"
                                            class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            ข้าราชการ
                                        </th>
                                        <td
                                            class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#"
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            class="px-3 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2
                                        </th>
                                        <th scope="row"
                                            class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            ลูกจ้างประจำ
                                        </th>
                                        <td
                                            class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#"
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="text-right text-red-500 my-2">*จำเป็นต้องมีค้ำอย่างน้อย 2 คน</p>
                            <div class="flex">
                                <select id="countries"
                                    class="w-10/12 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>เลือกตำแหน่ง</option>
                                    <option value="US">ข้าราชการ</option>
                                    <option value="CA">ลูกจ้างประจำ</option>
                                </select>
                                <o-button class="w-2/12">เพิ่มคนค้ำ</o-button>
                            </div>
                        </div>
                        <div class="w-full">
                            <h2 class="text-xl font-bold dark:text-white my-3">
                                สินทรัพย์
                            </h2>
                            <div class="flex w-full items-center">
                                <o-radio v-model="showInput" name="name" native-value="F">ไม่มี</o-radio>
                                <o-radio v-model="showInput" name="name" native-value="T" class="mx-3">มี</o-radio>
                            </div>
                            <o-input v-if="showInput == 'T'" class="mt-3" placeholder="ประมาณราคาสินทรัพย์"></o-input>
                            <h2 class="text-xl font-bold dark:text-white mt-4 mb-3">
                                หุ้น
                            </h2>
                            <div class="flex w-full items-center">
                                <o-radio v-model="showInput2" name="z" native-value="F">ไม่มี</o-radio>
                                <o-radio v-model="showInput2" name="z" native-value="T" class="mx-3">มี</o-radio>
                            </div>
                            <o-input v-if="showInput2 == 'T'" class="mt-3" placeholder="ประมาณราคาหุ้น"></o-input>
                        </div>
                    </div>
                </UiCard>
            </o-step-item>
            <o-step-item step="3" :clickable="true" icon="three">
                <UiCard>
                    <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                        เงื่อนไข
                    </h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            เงินเดือนมากกว่า 20,000 บาท
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            อายุสมาชิกมากกว่า 3 ปี
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            สินทรัพย์
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            คนค่ำประกัน
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-400 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            วงเงินของคุณคื่อ 10,000,000
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-400 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            ผ่อนสูงสุด 240 งวด
                        </li>
                    </ul>
                </UiCard>
            </o-step-item>
        </o-steps>

    </section>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });
const showItemsPanel = ref(0);
const showInput = ref('');
const showInput2 = ref('');
const steps = ref(1);

</script>