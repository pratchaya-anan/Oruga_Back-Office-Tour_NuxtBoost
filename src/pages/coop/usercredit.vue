<template>
    <section>
        <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <Icon class="w-60 h-60" name="healthicons:ui-user-profile"></Icon>
            </svg>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">นาย นพรุจ
                    ชูธรรมสิทธิกุล
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to
                certify for your weekly benefits:</p>
        </div>
        <div
            class="max-w-full mt-3 mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
            <h2 class="text-xl font-bold dark:text-white mt-3 mb-3">
                แนบสลิปเงินเดือน
            </h2>
            <div class="w-3/12">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                    file</label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                    800x400px).</p>
            </div>


            <div class="justify-end mt-2"><o-button>ตรวจสอบ</o-button></div>

        </div>
    </section>
</template>
  