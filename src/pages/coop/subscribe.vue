<template>
    <section>
        <LayoutPageTitle> สมัครสมาชิก </LayoutPageTitle>
        <UiCard>
            <h2 class="text-xl font-bold dark:text-white"></h2>
            <div class="grid grid-cols-5 gap-4">
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
            </div>
            <div class="grid grid-cols-5 gap-4">
                <div class="w-full">
                    <o-field label="บ้านเลขที่">
                        <o-input></o-input>
                    </o-field>
                </div>
            </div>
        </UiCard>
    </section>

    <span class="sr-only">Loading...</span>
</template>
  
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});
</script>
  