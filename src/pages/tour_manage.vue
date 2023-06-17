<template>
    <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">Passport หมดอายุ ! </span> นายสมหมาย ใจดี
        </div>
    </div>
    <div class="flex p-4 mb-4 text-sm text-yellow-600 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">Passport ใกล้หมดอายุ !</span> นายสายใย มีใจ
        </div>
    </div>
    <section class="h-m-screen">
        <LayoutPageTitle> Tour / จัดทัวร์ / จัดการลูกทัวร์</LayoutPageTitle>
        <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
            <div class="col-span-full xl:col-auto mb-4">
                <UiCard>
                    <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">

                        <div>
                            <h2 class="text-xl font-bold dark:text-white">
                                ทัวร์เกาะเสม็ด เสร็จทุกราย
                            </h2>
                            <ul class="mt-2 space-y-1">
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6" name="ri:treasure-map-fill"></Icon>
                                    กาญจนบุรี-เพชรบุรี
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6" name="line-md:moon-filled-to-sunny-filled-transition"></Icon>
                                    5 วัน 4 คืน
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6" name="line-md:calendar"></Icon>
                                    16/04/2566 &#32;
                                    <Icon class="w-5 h-5" name="line-md:arrow-right"></Icon>
                                    &#32; 16/04/2566
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6" name="fluent:people-audience-24-filled"></Icon>
                                    35 คน
                                </li>
                                <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <Icon class="w-6 h-6" name="fluent:comment-error-16-filled"></Icon>
                                    สนุกดี
                                </li>
                            </ul>
                        </div>
                    </div>
                </UiCard>
                <!-- ลูกทัวร์ -->
                <UiCard>
                    <div class="flex justify-between">
                        <h2 class="text-xl font-bold dark:text-white">
                            ลูกทัวร์
                        </h2>
                        <div class="flex">
                            <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
                            <div class="px-2">
                                <o-button>ค้นหา</o-button>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-2 py-3">ชื่อ-สกุล</th>
                                    <th scope="col" class="py-3 ">วันเกิด
                                        <span
                                            class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                            1
                                        </span>
                                    </th>
                                    <th scope="col" class="py-3">
                                        passport
                                        <span
                                            class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                                            2
                                        </span>
                                    </th>
                                    <th scope="col" class="py-3">คอมเมนต์</th>
                                    <th scope="col" class="py-3">..</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class=" px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        นายสมหมาย ใจดี
                                    </th>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div> 25/06/2532
                                        </div>
                                    </td>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> 25/06/2566
                                        </div>
                                    </td>
                                    <td>
                                        no comment
                                    </td>
                                    <td>
                                        <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        นายสายใย มีใจ
                                    </th>
                                    <td class="py-4">20/06/2566</td>
                                    <td class="py-4 flex">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> 25/06/2566
                                        </div>
                                    </td>
                                    <td>
                                        แพ้อาหารทะเล..
                                    </td>
                                    <td>
                                        <Icon class="text-red-900 w-5 h-5" name="typcn:delete"></Icon>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </UiCard>

            </div>
            <div class="col-span-2">
                <UiCard>
                    <div class="my-2 grid grid-cols-2 gap-2 mt-5">
                        <div class="flex">
                            <o-input placeholder="ค้นหาลูกทัวร์"></o-input>
                            <div class="px-2">
                                <o-button>ค้นหา</o-button>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <NuxtLink to="/adduser">
                                <o-button>+ เพิ่มลูกทัวร์ใหม่</o-button>
                            </NuxtLink>
                        </div>
                    </div>
                    <o-table :data="data" v-model:checked-rows="checkedRows" checkable
                        :checkbox-position="checkboxPosition">
                        <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                            {{ row[column.field] }}
                        </o-table-column>
                    </o-table>
                </UiCard>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const showItemscomment = ref(false);


const columns = ref([
    {
        field: "id",
        label: "ลำดับ",
        width: "40",
        numeric: true,
    },
    {
        field: "name",
        label: "ชื่อ-สกุล",
    },
    {
        field: "bday",
        label: "วันเกิด",
    },
    {
        field: "passport",
        label: "วันหมดอายุพาสปอต",
    },
    {
        field: "phone",
        label: "เบอร์ติดต่อ",
        position: "centered",
    },
    {
        field: "comment",
        label: "คอมเมนต์",
        position: "centered",
    },
    {
        field: "manage",
        label: "จัดการ",
        position: "centered",
    },
]);

const tableData = [
    {
        id: 1,
        name: "นายสมหมาย ใจดี",
        bday: "20/06/2566",
        passport: "20/06/2566 ",
        phone: "092-5364869",
        comment: "no comment",
        manage: ". . .",
    },
    {
        id: 2,
        name: "นายสายใย มีใจ",
        bday: "20/06/2566",
        passport: "20/06/2566 ",
        phone: "092-5364869",
        comment: "แพ้อาหารทะเล..",
        manage: ". . .",
    },
    {
        id: 3,
        name: "นางสาวดวงดาว หมายมอง",
        bday: "20/06/2566",
        passport: "20/06/2566 ",
        phone: "092-5364869",
        comment: "แพ้ถั่ว",
        manage: ". . .",
    },
];


const data = ref(tableData);

</script>