<template>
    <section>
        <div class="p-5">
            <div>
                <label class="text-4xl font-medium">เพิ่มโรมแรม</label>
            </div>
            <hr class="my-5 border-1.5" />
            <div>
                <label class="text-2xl font-medium">ข้อมูลโรงแรม</label>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-2">
                <div>
                    <o-field label="ชื่อโรงแรม">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="จำนวนห้องพักสูงสุดของโรงแรม">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="เบอร์ติดต่อ">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="ภาค">

                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>เลือกภาค</option>
                            <option value="US">ภาคเหนือ</option>
                            <option value="CA">ภาคตะวันออกเฉียงเหนือ</option>
                            <option value="FR">ภาคกลาง</option>
                            <option value="FD">ภาคตะวันออก</option>
                            <option value="DE">ภาคใต้</option>
                        </select>

                    </o-field>
                </div>
                <div class="pt-2">
                    <o-field label="ข้อมูลเพิ่มเติม">
                        <o-input type="textarea"></o-input>
                    </o-field>
                </div>
                <div class="pt-2">
                    <o-field label="ที่อยู่">
                        <o-input type="textarea"></o-input>
                    </o-field>
                </div>
            </div>

            <NuxtLink href="/create_tour/createtour" class="flex justify-end py-5">
                <o-button>+ เพิ่มโรมแรม</o-button>
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
  