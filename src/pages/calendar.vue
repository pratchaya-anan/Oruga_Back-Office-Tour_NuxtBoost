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
                            วันเกิด นายนพรุจ ชูธรรมสิทธิกุล ทัวร์เกาะเสม็ด
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
  