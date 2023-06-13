<template>
    <section>
        <o-steps v-model="steps" variant="success">
            <o-step-item step="1" :clickable="true" icon="one">
                <UiCard>
                    <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <Icon class="w-60 h-60" name="healthicons:ui-user-profile"></Icon>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">นาย นพรุจ
                            ชูธรรมสิทธิกุล
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline
                        process on how to
                        certify for your weekly benefits:</p>

                    <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                        เลือกประเภทการกู้
                    </h2>
                    <div class="flex w-full">
                        <div>
                            <select id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>ประเภทการกู้</option>
                                <option value="US">กู้เงินฉุกเฉิน</option>
                                <option value="CA">กู้สามัญ</option>
                                <option value="FR">กู้พิเศษ</option>
                                <option value="DE">กู้หุ้น</option>
                            </select>
                        </div>
                    </div>
                    <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                        เงินเดือนประจำตำแหน่ง
                    </h2>
                    <div class="w-3/12"><o-input></o-input></div>
                </UiCard>
            </o-step-item>
            <o-step-item step="2" :clickable="true" icon="two">
                <UiCard>

                    <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                        คนค้ำ
                    </h2>
                    <div>
                        <p class="text-red-500">*จำเป็นต้องมีค้ำอย่างน้อย 2 คน</p>
                    </div>
                    <div class="flex w-full">
                        <div class="w-3/12"><o-input placeholder="จำนวนคนค้ำ"></o-input></div>

                        <div class="mx-3"><o-button>เพิ่ม</o-button></div>
                    </div>

                    <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                        สินทรัพย์
                    </h2>
                    <div class="flex my-2">
                        <div class="flex text-xl text-center items-center">1. </div>
                        <select id="countries"
                            class="bg-gray-50 border mx-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>ตำแหน่ง</option>
                            <option value="US">ข้าราชการ</option>
                            <option value="CA">ลูกจ้างประจำ</option>
                        </select>
                    </div>
                    <div class="flex">
                        <o-radio name="name" native-value="T">มี</o-radio>

                        <o-input class="mx-2" placeholder="ประมาณราคาสินทรัพย์"></o-input>
                    </div>
                    <o-radio name="name" native-value="F">ไม่มี</o-radio>
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
const showItemsPanel = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>