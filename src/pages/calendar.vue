<template>
    <section class="h-m-screen">
        <LayoutPageTitle> Calendar</LayoutPageTitle>
        <div class="grid grid-cols-9 gap-4">
            <div class="col-span-5">
                <UiCard>
                    <div class="grid grid-cols-3 gap-4">

                        <div class="w-full">
                            <svg aria-hidden="true" class="w-5 h-5 mx-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="w-full flex justify-center text-xl">
                            June 2023
                        </div>
                        <div class="w-full flex justify-end">
                            <svg aria-hidden="true" class="w-5 h-5 mx-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>

                        <div class="col-span-3 relative overflow-x-auto">
                            <table class="w-full text-center text-sm text-gray-500 dark:text-gray-400 border shadow-mb">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-3 py-4">
                                            SUN
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            MON
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            TUE
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            WED
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            THU
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            FRI
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            SAT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4 relative inline-flex items-center">
                                            1
                                            <div
                                                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900">
                                            </div>
                                        </td>
                                        <td class="px-3 py-4">
                                            2
                                        </td>
                                        <td class="px-3 py-4">
                                            3
                                        </td>
                                        <td class="px-3 py-4">
                                            4
                                        </td>
                                        <td class="px-3 py-4">
                                            5
                                        </td>
                                        <td class="px-3 py-4">
                                            6
                                        </td>
                                        <td class="px-3 py-4">
                                            7
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            8
                                        </td>
                                        <td class="px-3 py-4">
                                            9
                                        </td>
                                        <td class="px-3 py-4">
                                            10
                                        </td>
                                        <td class="px-3 py-4">
                                            11
                                        </td>
                                        <td class="px-3 py-4">
                                            12
                                        </td>
                                        <td class="px-3 py-4">
                                            13
                                        </td>
                                        <td class="px-3 py-4 relative inline-flex items-center">
                                            14
                                            <div
                                                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            15
                                        </td>
                                        <td class="px-3 py-4">
                                            16
                                        </td>
                                        <td class="px-3 py-4">
                                            17
                                        </td>
                                        <td class="px-3 py-4">
                                            18
                                        </td>
                                        <td class="px-3 py-4">
                                            19
                                        </td>
                                        <td class="px-3 py-4">
                                            20
                                        </td>
                                        <td class="px-3 py-4 relative inline-flex items-center">
                                            21
                                            <div
                                                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            22
                                        </td>
                                        <td class="px-3 py-4">
                                            23
                                        </td>
                                        <td class="px-3 py-4">
                                            24
                                        </td>
                                        <td class="px-3 py-4">
                                            25
                                        </td>
                                        <td class="px-3 py-4">
                                            26
                                        </td>
                                        <td class="px-3 py-4">
                                            27
                                        </td>
                                        <td class="px-3 py-4">
                                            28
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            30
                                        </td>
                                        <td class="px-3 py-4">
                                            31
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="col-span-3 flex justify-center text-xl">
                            Juyl 2023
                        </div>

                        <div class="col-span-3 relative overflow-x-auto">
                            <table
                                class="w-full text-center text-sm text-left text-gray-500 dark:text-gray-400 border shadow-mb">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-3 py-4">
                                            SUN
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            MON
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            TUE
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            WED
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            THU
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            FRI
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            SAT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">

                                        </td>
                                        <td class="px-3 py-4">

                                        </td>
                                        <td class="px-3 py-4">
                                            1
                                        </td>
                                        <td class="px-3 py-4 relative inline-flex items-center">
                                            2
                                            <div
                                                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-1 -right-2 dark:border-gray-900">
                                            </div>
                                        </td>
                                        <td class="px-3 py-4">
                                            3
                                        </td>
                                        <td class="px-3 py-4">
                                            4
                                        </td>
                                        <td class="px-3 py-4">
                                            5
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            6
                                        </td>
                                        <td class="px-3 py-4">
                                            7
                                        </td>
                                        <td class="px-3 py-4">
                                            8
                                        </td>
                                        <td class="px-3 py-4">
                                            9
                                        </td>
                                        <td class="px-3 py-4">
                                            10
                                        </td>
                                        <td class="px-3 py-4">
                                            11
                                        </td>
                                        <td class="px-3 py-4">
                                            12
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            13
                                        </td>
                                        <td class="px-3 py-4">
                                            14
                                        </td>
                                        <td class="px-3 py-4">
                                            15
                                        </td>
                                        <td class="px-3 py-4">
                                            16
                                        </td>
                                        <td class="px-3 py-4">
                                            17
                                        </td>
                                        <td class="px-3 py-4">
                                            18
                                        </td>
                                        <td class="px-3 py-4">
                                            19
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            20
                                        </td>
                                        <td class="px-3 py-4">
                                            21
                                        </td>
                                        <td class="px-3 py-4">
                                            22
                                        </td>
                                        <td class="px-3 py-4">
                                            23
                                        </td>
                                        <td class="px-3 py-4">
                                            24
                                        </td>
                                        <td class="px-3 py-4">
                                            25
                                        </td>
                                        <td class="px-3 py-4">
                                            26
                                        </td>
                                    </tr>
                                    <tr class="bg-white  dark:bg-gray-800">
                                        <td class="px-3 py-4">
                                            27
                                        </td>
                                        <td class="px-3 py-4">
                                            28
                                        </td>
                                        <td class="px-3 py-4">
                                            29
                                        </td>
                                        <td class="px-3 py-4">
                                            30
                                        </td>
                                        <td class="px-3 py-4">
                                            31
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </UiCard>
            </div>
            <div class="col-span-4">
                <UiCard>
                    <h2 class="mt-2 mb-2 text-lg font-semibold text-gray-900 dark:text-white">ลูกทัวร์:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                       
                        <li>
                            พาสปอตหมดอายุ นายนพรุจ ชูธรรมสิทธิกุล ทัวร์เกาะเสม็ด
                        </li>
                        <li>
                            พาสปอตหมดอายุ นายนพรุจ ชูธรรมสิทธิกุล ทัวร์เกาะเสม็ด
                        </li>
                        <li>
                            พาสปอตหมดอายุ นายนพรุจ ชูธรรมสิทธิกุล ทัวร์เกาะเสม็ด
                        </li>
                    </ul>
                    <h2 class="mt-2 mb-2 text-lg font-semibold text-gray-900 dark:text-white">ไกด์:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            พาสปอตหมดอายุ นายนพรุจ ชูธรรมสิทธิกุล ทัวร์เกาะเสม็ด
                        </li>
                    </ul>
                    <h2 class="mt-2 mb-2 text-lg font-semibold text-gray-900 dark:text-white">วันเกิด:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        
<a href="#" data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <a class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">นายนพรุจ ชูธรรมสิทธิกุล</a>
    
</a>

<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    ข้อมูลส่วนตัว
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    วันที่เกิด 7/12/2542
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    เบอร์โทรติดต่อ 0899409060
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ติดต่อแล้ว</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">ยกเลิก</button>
            </div>
        </div>
    </div>
</div>


<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-3 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>วันเกิด นายนพรุจ ชูธรรมสิทธิกุล</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-3 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p>เบอร์โทรติดต่อ 0899409060 <o-button class="ml-20">ติดต่อแล้ว</o-button></p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-3 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>วันเกิด นายนพรุจ ชูธรรมสิทธิกุล</span> 
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-3 border border-b-0 border-gray-200 dark:border-gray-700">
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-3 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>วันเกิด นายนพรุจ ชูธรรมสิทธิกุล </span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-3 border border-t-0 border-gray-200 dark:border-gray-700">
      <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>


                    </ul>
                </UiCard>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});

</script>
  