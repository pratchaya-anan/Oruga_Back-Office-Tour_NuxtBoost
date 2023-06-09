<template>
    <section>

        <LayoutPageTitle>รายการใบเสนอ</LayoutPageTitle>

        <UiManageBar>
            <button type="button"
                class="text-white bg-primary-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center">
                <Icon class="mr-1 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
                สร้างใบเสนอราคา
            </button>
        </UiManageBar>

        <UiSectionTabs></UiSectionTabs>

        <section class="flex flex-wrap gap-4">
            <UiCard v-for="(it, idx) in sec23" :key="idx" class="flex-1">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        86857-582</h5>
                </a>
                <div class="gride gride-cols-2">
                    <div>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            ชื่อลูกค้า ศศิศ วิรัตน์จินดา
                        </p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            ผู้เสนอขาย สมชัย ใจเกินร้อย
                        </p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            วันที่สร้างล่าสุด 24/03/2566
                        </p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            ราคาใบเสนอ 59,920.00
                        </p>
                    </div>
                </div>
                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <Icon class="w-4 h-4 ml-2 -mr-1" name="mdi:chevron-right"></Icon>
                </a>
            </UiCard>
        </section>

    </section>
</template>
  
<script setup lang="ts">
const sec23 = Array.from(Array(5).keys()).map(x => x + 1);
</script>