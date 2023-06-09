<template>
  <section class="h-min-screen">
    <LayoutPageTitle>Tour Management / บริหารจัดการทัวร์</LayoutPageTitle>

    <UiManageBar>
      <NuxtLink
        href="/create_tour/createtour"
        type="button"
        class="text-white bg-primary-700 justify-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
      >
        <Icon class="mr-1 -ml-1 w-5 h-5" name="mdi:plus"></Icon>
        สร้างทัวร์
      </NuxtLink>
    </UiManageBar>
    <UiSectionTabs></UiSectionTabs>
    <div class="grid grid-cols-4 gap-2">
      <UiCard
        class="hover:bg-gray-100 tracking-tight cursor-pointer"
        v-for="item in 10"
        :key="item"
        ><div class="grid grid-cols-2">
          <div
            class="text-lg font-nolmal tracking-tight text-gray-900 dark:text-white"
          >
            ชื่อทริปทัวร์: ทัวร์อุบล
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
          <div>ชื่อโปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
          <div class="grid grid-cols-2">
            <div>วันเดินทาง: 06/07/66</div>
            <div>วันสิ้นสุด: 20/07/66</div>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="flex items-center">
            <div
              class="inline-block w-3 h-3 mr-2 bg-gray-500 rounded-full"
            ></div>
            จัดเตรียม
          </div>
          <!-- <div class="flex items-center">
            <div
              class="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full"
            ></div>
            เสร็จสิ้น
          </div>
          <div class="flex items-center">
            <div
              class="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"
            ></div>
            ออกทริป
          </div> -->
          <div class="flex justify-end">
            <NuxtLink href="/tour_data">
              <o-button class="inline-flex"
                ><Icon
                  class="mr-1 -ml-1 w-5 h-5"
                  name="icon-park-outline:category-management"
                ></Icon
                >จัดการ</o-button
              >
            </NuxtLink>
          </div>
        </div>
      </UiCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const sec23 = Array.from(Array(23).keys()).map((x) => x + 1);
</script>
