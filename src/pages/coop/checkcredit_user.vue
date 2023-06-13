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
                
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">แนบเอกสาร</label>
<input class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">

                <li class="flex mx-4 items-center text-xl font-normal text-gray-500 dark:text-gray-400">
                  2. นางกาญจนบุรี เพชรบุรี
                </li>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">แนบเอกสาร</label>
<input class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
              </ul>
            
            <div class="w-full flex justify-end"><o-button class="px-10 ">ตรวจสอบ</o-button></div>
        </UiCard>
    </section>
</template>
  