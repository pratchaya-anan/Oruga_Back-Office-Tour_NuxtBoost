<template>
    <section>
        <div class="p-5">
            <div>
                <label class="text-4xl font-medium">เพิ่มไกด์</label>
            </div>
            <hr class="my-5 border-1.5" />
            <div>
                <label class="text-2xl font-medium">ข้อมูลส่วนตัว</label>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <div>
                    <o-field label="ชื่อภาษาไทย">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="สุกลภาษาไทย">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ชื่อภาษาอังกฤษ">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="สุกลภาษาอังกฤษ">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="เพศ">
                        <o-select placeholder="เลือกเพศ">
                            <option value="male">ชาย</option>
                            <option value="female">หญิง</option>
                        </o-select>
                    </o-field>
                </div>
                <div>
                    <o-field label="สัญชาติ">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วัน/เดือน/ปีเกิด">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="เลขบัตรประชาชน">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="เบอร์โทรศัพท์">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="อีเมล์">
                        <o-input></o-input>
                    </o-field>
                </div>
            </div>
            <div class="pt-2">
                <o-field label="ที่อยู่ตามบัตรประชาชน">
                    <o-input type="textarea"></o-input>
                </o-field>
            </div>
            <hr class="my-5 border-1.5" />
            <div>
                <label class="text-2xl font-medium">ข้อมูลพาสปอร์ต</label>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <div>
                    <o-field label="หมายเลขพาสปอต">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ตรวจลงตราเลขที่">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วันออกพาสปอร์ต">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วันหมดอายุพาสปอร์ต">
                        <o-input></o-input>
                    </o-field>
                </div>
            </div>
            <div class="pt-2">
                <o-field label="หมายเหตุ">
                    <o-input type="textarea"></o-input>
                </o-field>
            </div>
            <hr class="my-4 border-1.5" />
            <hr class="my-5 border-1.5" />
            <div>
                <label class="text-2xl font-medium">ข้อมูลบัตรประจำตัวมัคคุเทศก์</label>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <div>
                    <o-field label="หมายเลขมัคคุเทศก์">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ชื่อ-สกุล">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วันออกบัตรประจำตัวมัคคุเทศก์">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วันหมดอายุบัตรประจำตัวมัคคุเทศก์">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ประเภทมัคคุเทศก์">
                        <select placeholder="เลือกประเภทมัคคุเทศก์" v-model="typeguide" id="countries" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>เลือกประเภทมัคคุเทศก์</option>
                            <option value="US">ทั่วไป</option>
                            <option value="CA">เฉพาะภูมิภาค</option>
                            <option value="AS">ท้องถิ่น</option>
                        </select>
                    </o-field>
                </div>
               
                <div v-if="typeguide == 'CA'">
                    <o-field label="ประเภทเฉพาะภูมิภาค">
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>เลือกประเภทเฉพาะภูมิภาค</option>
                            <option value="US">ภาคเหนือ</option>
                            <option value="CA">ภาคตะวันออกเฉียงเหนือ</option>
                            <option value="VC">ภาคกลาง</option>
                            <option value="OP">ภาคใต้</option>
                        </select>
                    </o-field>
                </div>
            </div>
            <div class="pt-2">
                <o-field label="ความสามารถพิเศษ (พูดได้กี่ภาษา)">
                    <o-input type="textarea"></o-input>
                </o-field>
            </div>
            <div class="pt-2">
                <o-field label="แนบรูปภาพประกอบ">

                    <div class="mt-2 flex items-center justify-center w-full">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                        to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>

                </o-field>
            </div>

            <hr class="my-4 border-1.5" />
            <NuxtLink href="/create_tour/createtour" class="flex justify-end py-5">
                <o-button>+ เพิ่มไกด์</o-button>
            </NuxtLink>
        </div>
    </section>

    <span class="sr-only">Loading...</span>
</template>
  
<script setup lang="ts">
import { initFlowbite } from "flowbite";

const typeguide = ref('');

onMounted(() => {
    initFlowbite();
});
</script>
  