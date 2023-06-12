<template>
    <section>
        <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <Icon class="w-60 h-60" name="healthicons:ui-user-profile"></Icon>
            </svg>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">นาย นพรุจ ชูธรรมสิทธิกุล
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to
                certify for your weekly benefits:</p>
    </div>

    <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
           <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลือกประเภทการกู้</label>
           <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
             <option selected>ประเภทการกู้</option>
             <option value="US">กู้เงินฉุกเฉิน</option>
             <option value="CA">กู้สามัญ</option>
             <option value="FR">กู้พิเศษ</option>
             <option value="DE">กู้หุ้น</option>
           </select>
           <o-button>ตรวจสอบ</o-button>
               </div>
               
</section></template>
  