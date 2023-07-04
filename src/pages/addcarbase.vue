<template>
    <section>
        <div class="p-5">
            <div>
                <label class="text-4xl font-medium">เพิ่มยานพานะ</label>
            </div>
            <hr class="my-5 border-1.5" />
            <div>
                <label class="text-2xl font-medium">ข้อมูลยานพานะ</label>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <div>
                    <o-field label="ประเภทยานพานะ">
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>เลือกยานพานะ</option>
                            <option value="US">จักรยานยนต์</option>
                            <option value="CA">รถยนต์ 4 ล้อ</option>
                            <option value="CI">รถยนต์ 6 ล้อ</option>
                        </select>
                    </o-field>
                </div>
                <div>
                    <o-field label="ยี่ห้อ">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ป้ายทะเบียน">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ที่นั่ง">
                        <o-input></o-input>
                    </o-field>
                </div>
            </div>

            <NuxtLink href="/create_tour/createtour" class="flex justify-end py-5">
                <o-button>+ เพิ่มยานพานะ</o-button>
            </NuxtLink>
        </div>
    </section>

    <span class="sr-only">Loading...</span>
</template>
  
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});
</script>
  