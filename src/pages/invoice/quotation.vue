<template>
    <LayoutPageTitle>
        Quotation / ใบเสนอราคา
    </LayoutPageTitle>

    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
            <UiCard class="mb-4">
                <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                    <div>
                        <h2 class="text-xl font-bold dark:text-white">ใบเสนอราคา/ยืนยันการสั่งซื้อ</h2>
                        <ul class="mt-2 space-y-1">
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                Quatation
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                เลขที่:	0841142174178
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                วันที่:	24/03/2566
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <Icon class="mr-3 -ml-1 w-5 h-5" name="eva:people-fill"></Icon>
                                ศศิศ วิรัตน์จินดา
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <Icon class="mr-3 -ml-1 w-5 h5" name="ri:phone-fill"></Icon>
                                095-382825
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:baseline-date-range"></Icon>
                                24-03-2566
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <Icon class="mr-3 -ml-1 w-5 h-5" name="majesticons:money-line"></Icon>
                                59,920.00
                            </li>
                        </ul>                        
                    </div>
                </div>

                <section>
                    <o-button class="mt-4">Print</o-button>
                </section>
                <section v-if="showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                    <o-field label="Phone Number">
                        <o-input modelValue="+00 123 456 789 / +12 345 678"></o-input>
                    </o-field>
                    <o-field label="Home Address">
                        <o-input
                            modelValue="92 Miles Drive, Newark, NJ 07103, California, <br>United States of America"></o-input>
                    </o-field>

                    <section>
                        <o-button @click="showOrderPanel = false" class="mt-4">Save</o-button>
                    </section>
                </section>
                <section v-if="!showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                    <span>More Order Information
                        <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-edit" @click="showOrderPanel = true"></Icon>
                    </span>
                    <div class="sm:flex xl:block xl:space-y-4">
                        <div class="sm:flex-1">
                            <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                <div class="mt-4">
                                    Phone number
                                </div>
                                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    +00 123 456 789 / +12 345 678
                                </div>
                            </address>
                        </div>
                        <div class="sm:flex-1">
                            <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                <div class="mt-4">
                                    Home address
                                </div>
                                <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    92 Miles Drive, Newark, NJ 07103, California, <br>United States of America
                                </div>
                            </address>
                        </div>
                        <div class="hidden sm:flex-1">
                            <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">About</h3>
                            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive
                                experience
                                working as an Independent Contractor for Google and developing and growing my educational
                                social
                                network
                                that helps others learn programming, web design, game development, networking.
                            </p>
                        </div>
                    </div>
                </section>

            </UiCard>
        </div>
        <div class="col-span-2">

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section v-if="!showItemsPanel">
                <o-button @click="showItemsPanel = true">Add Items</o-button>
            </section>

            <UiCard v-if="showItemsPanel">
                <o-field label="Product">
                    <o-input></o-input>
                </o-field>
                <div class="flex">
                    <o-field class="flex-1" label="Quantity">
                        <o-input></o-input>
                    </o-field>
                    <div class="mx-4 shrink flex items-center justify-center">
                        <span class="align-middle">x</span>
                    </div>
                    <o-field class="flex-1" label="Price">
                        <o-input></o-input>
                    </o-field>
                </div>
                <o-field label="VAT">
                    <o-input></o-input>
                </o-field>
                <o-field label="Discount">
                    <o-input></o-input>
                </o-field>
                <o-field label="Remark">
                    <o-input></o-input>
                </o-field>

                <section>
                    <o-button class="mt-4">Add Item</o-button>
                    <o-button @click="showItemsPanel = false" class="ml-4">Close</o-button>
                </section>
            </UiCard>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });

const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
</script>