<template>
  <section>
    <div>
      <UiCard>
        <div>
          <label class="text-4xl font-medium">รายการทัวร์</label>
        </div>
        <UiManageBar>
          <NuxtLink href="/create_tour/createtour">
            <o-button class="inline-flex mt-2"
              ><Icon class="mr-1 -ml-1 w-5 h-5" name="mdi:plus"></Icon
              >สร้างทัวร์</o-button
            >
          </NuxtLink>
        </UiManageBar>
      </UiCard>
      <div class="mt-4 grid grid-cols-3 gap-4">
        <UiCard
          ><div class="grid grid-cols-2">
            <div>
              <div
                class="inline-block w-3 h-3 mr-2 bg-gray-500 rounded-full"
              ></div>
            </div>
            <div class="flex justify-end">
              <Icon
                class="mr-1 -ml-1 w-5 h-5"
                name="pepicons-pencil:people"
              ></Icon
              >10/50
            </div>
          </div>
          <div>
            <div
              class="text-xl font-nolmal tracking-tight text-gray-900 dark:text-white"
            >
              ชื่อทริปทัวร์: ทัวร์อุบล
            </div>
            <div>ชื่อโปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
            <div>วันเดินทาง: 06/07/66</div>
            <div>วันสิ้นสุด: 20/07/66</div>
            <div>จำนวน: 5 วัน 4 คืน</div>
          </div>
          <div class="flex justify-end">
            <NuxtLink href="#">
              <o-button class="inline-flex mt-2" variant="info"
                ><Icon class="mr-1 -ml-1 w-5 h-5" name="carbon:view"></Icon
                >พรีวิว</o-button
              >
            </NuxtLink>
            <NuxtLink href="/tour_data">
              <o-button class="inline-flex mt-2"
                ><Icon
                  class="mr-1 -ml-1 w-5 h-5"
                  name="icon-park-outline:category-management"
                ></Icon
                >จัดการ</o-button
              >
            </NuxtLink>
          </div>
        </UiCard>
        <UiCard
          ><div class="grid grid-cols-2">
            <div>
              <div
                class="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"
              ></div>
            </div>
            <div class="flex justify-end">
              <Icon
                class="mr-1 -ml-1 w-5 h-5"
                name="pepicons-pencil:people"
              ></Icon
              >10/50
            </div>
          </div>
          <div>
            <div
              class="text-xl font-nolmal tracking-tight text-gray-900 dark:text-white"
            >
              ชื่อทริปทัวร์: ทัวร์อุบล
            </div>
            <div>ชื่อโปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
            <div>วันเดินทาง: 06/07/66</div>
            <div>วันสิ้นสุด: 20/07/66</div>
            <div>จำนวน: 5 วัน 4 คืน</div>
          </div>
          <div class="flex justify-end">
            <NuxtLink href="#">
              <o-button class="inline-flex mt-2" variant="info"
                ><Icon class="mr-1 -ml-1 w-5 h-5" name="carbon:view"></Icon
                >พรีวิว</o-button
              >
            </NuxtLink>
            <NuxtLink href="/tour_data">
              <o-button class="inline-flex mt-2"
                ><Icon
                  class="mr-1 -ml-1 w-5 h-5"
                  name="icon-park-outline:category-management"
                ></Icon
                >จัดการ</o-button
              >
            </NuxtLink>
          </div>
        </UiCard>
        <UiCard
          ><div class="grid grid-cols-2">
            <div>
              <div
                class="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full"
              ></div>
            </div>
            <div class="flex justify-end">
              <Icon
                class="mr-1 -ml-1 w-5 h-5"
                name="pepicons-pencil:people"
              ></Icon
              >10/50
            </div>
          </div>
          <div>
            <div
              class="text-xl font-nolmal tracking-tight text-gray-900 dark:text-white"
            >
              ชื่อทริปทัวร์: ทัวร์อุบล
            </div>
            <div>ชื่อโปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
            <div>วันเดินทาง: 06/07/66</div>
            <div>วันสิ้นสุด: 20/07/66</div>
            <div>จำนวน: 5 วัน 4 คืน</div>
          </div>
          <div class="flex justify-end">
            <NuxtLink href="#">
              <o-button class="inline-flex mt-2" variant="info"
                ><Icon class="mr-1 -ml-1 w-5 h-5" name="carbon:view"></Icon
                >พรีวิว</o-button
              >
            </NuxtLink>
            <NuxtLink href="/tour_data">
              <o-button class="inline-flex mt-2"
                ><Icon
                  class="mr-1 -ml-1 w-5 h-5"
                  name="icon-park-outline:category-management"
                ></Icon
                >จัดการ</o-button
              >
            </NuxtLink>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

// computed: {
//   countstate function(state: number) {
//     const count = 0;
//     return count;
//   }
// }

// const setid = (id) => {
//   store.settourid(id);
//   useRouter().push('/tourdata');
// }
</script>
