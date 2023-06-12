<template>
    <section>
        <UiCard>
            <h2 class="text-xl font-bold dark:text-white m-3">
                วงเงิน
            </h2>
            <div class="flex w-full">
                <div class="w-3/12"><o-input></o-input></div>
                <div><p class="px-3 text-red-500">*วงเงินของคุณคื่อ 1,000,000</p></div>
                
            </div>
            <h2 class="text-xl font-bold dark:text-white m-3">
                คนค้ำ
            </h2>
            <div class="flex w-full">
                <div class="w-4/12"><o-input></o-input></div>
                <div class="mx-3"><o-button>เพิ่ม</o-button></div>
            </div>
            <ul class="mt-2 mb-2 space-y-1">
                <li class="flex mx-4 items-center text-xl font-normal text-gray-500 dark:text-gray-400">
                  1. นางกาญจนบุรี เพชรบุรี
                </li>
                <li class="flex mx-4 items-center text-xl font-normal text-gray-500 dark:text-gray-400">
                  2. นางกาญจนบุรี เพชรบุรี
                </li>
              </ul>
            
            <div class="w-full flex justify-end"><o-button class="px-10 ">ตรวจสอบ</o-button></div>
        </UiCard>
    </section>
</template>
  