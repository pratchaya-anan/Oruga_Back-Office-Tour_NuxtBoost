<template>
    <LayoutPageTitle>Quotation/สร้างใบเสนอราคา</LayoutPageTitle>
    <o-steps v-model="steps" variant="success">
        <o-step-item step="1" label="ลูกค้า" :clickable="true" icon="user-plus">
            <UiCard class="mb-3">
                <div class="p-5">
                    <div>
                        <label class="text-2xl font-medium">ข้อมูลลูกค้า</label>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-3">
                        <div>
                            <o-field label="ชื่อลูกค้า">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="เลขประจำตัวผู้เสียภาษี">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ชื่อผู้ติดต่อ">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="เบอร์โทรศัพท์">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="อีเมล">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ที่อยู่">
                                <o-input></o-input>
                            </o-field>
                        </div>
                    </div>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="2" label="พนักงาน" :clickable="true" icon="user-plus">
            <UiCard class="mb-3">
                <div class="p-5">
                    <div>
                        <label class="text-2xl font-medium">ข้อมูลฝ่ายขาย</label>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <o-field label="รหัสลูกค้า">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ยืนยันราคาภายใน">
                                <div class="relative ">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input datepicker type="text"
                                        class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date">
                                </div>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="วันที่ส่งของ">
                                <div class="relative ">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input datepicker type="text"
                                        class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date">
                                </div>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="ผู้เสนอขาย">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <div>
                                <o-field label="ฝ่ายขาย">
                                    <o-select placeholder="การตลาด">
                                        <option value="free">การตลาด</option>
                                        <option value="1%">xxxx</option>
                                        <option value="3%">xxxx</option>
                                    </o-select>
                                </o-field>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3">
                        <o-field label="กำหนดราคามัดจำ">
                            <div class="flex mt-3">
                                <o-radio v-model="showcheck" name="name" native-value="persen" class="mr-3">
                                    เปอร์เซ็น
                                </o-radio>
                                <o-radio v-model="showcheck" name="name" native-value="custom">
                                    จำนวนเงิน
                                </o-radio>
                            </div>
                        </o-field>
                    </div>
                    <section class="my-4 ">
                        <o-field v-if="showcheck == 'persen'">
                            <o-input modelValue=""></o-input>
                        </o-field>
                        <o-field v-if="showcheck == 'custom'">
                            <o-input modelValue=""></o-input>
                        </o-field>

                        <!-- <section>
                            <o-button @click="showcheck = false" class="mt-4">Save</o-button>
                        </section> -->
                    </section>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="3" label="เพิ่มรายการ" :clickable="true" icon="user-plus">
            <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
                <div class="col-span-full xl:col-auto mb-4">
                    <UiCard class="mb-4">
                        <section>
                            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                                <div>
                                    <div class="grid grid-cols-6">
                                        <div class="col-span-5">
                                            <h2 class="text-xl font-bold dark:text-white">ใบเสนอราคา/ยืนยันการสั่งซื้อ</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-edit"
                                                @click="showOrderPanel = true">
                                            </Icon>
                                        </div>
                                    </div>
                                    <ul class="mt-2 space-y-1">
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Quatation
                                        </li>
                                        <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                            เลขที่: 0841142174178
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section v-if="showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                            <o-field label="ชื่อลูกค้า">
                                <o-input modelValue="ศศิศ วิรัตน์จินดา"></o-input>
                            </o-field>
                            <o-field label="ชื่อผู้ติดต่อ">
                                <o-input modelValue="มะนาว หวานจังเลย"></o-input>
                            </o-field>
                            <o-field label="ที่อยู่">
                                <o-input modelValue="111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100"></o-input>
                            </o-field>
                            <o-field label="ID TAX">
                                <o-input modelValue="4585695214526"></o-input>
                            </o-field>
                            <o-field label="โทร">
                                <o-input modelValue="0254875858"></o-input>
                            </o-field>
                            <o-field label="Email">
                                <o-input modelValue="somchai@gmail.com"></o-input>
                            </o-field>
                            <o-field label="รหัสลูกค้า">
                                <o-input modelValue="C-58015259"></o-input>
                            </o-field>
                            <o-field label="ผู้เสนอขาย">
                                <o-input modelValue="สมชัย ใจเกินร้อย"></o-input>
                            </o-field>
                            <o-field label="ฝ่าย">
                                <o-input modelValue="การตลาด"></o-input>
                            </o-field>
                            <o-field label="ยืนยันราคาภายใน">
                                <o-input modelValue="31-03-2566"></o-input>
                            </o-field>
                            <o-field label="วันส่งของ">
                                <o-input modelValue="02-04-2566"></o-input>
                            </o-field>
                            <o-field label="ค่ามัดจำ">
                                <o-input modelValue="20%"></o-input>
                            </o-field>
                            <section>
                                <o-button @click="showOrderPanel = false" class="mt-4">Save</o-button>
                            </section>
                        </section>
                        <section v-if="!showOrderPanel" class="my-4 border-t border-gray-200 dark:border-gray-700">
                            <span>รายละเอียดลูกค้า</span>
                            <div class="sm:flex xl:block xl:space-y-4">
                                <div class="sm:flex-1">
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-4">
                                            ชื่อลูกค้า
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ศศิศ วิรัตน์จินดา
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ชื่อผู้ติดต่อ
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            มะนาว หวานจังเลย
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ที่อยู่
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ID TAX
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            4585695214526
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            โทร
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            0254875858
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            Email
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            somchai@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:flex-1">
                                    <div class="my-4 border-t border-gray-200 dark:border-gray-700"></div>
                                    <span>รายละเอียดฝ่ายขาย</span>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            รหัสลูกค้า
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            C-58015259
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ผู้เสนอขาย
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            สมชัย ใจเกินร้อย
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ฝ่าย:
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            การตลาด
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            ยืนยันราคาภายใน
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            31-03-2566
                                        </div>
                                    </div>
                                    <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                                        <div class="mt-2">
                                            วันส่งของ:
                                        </div>
                                        <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            02-04-2566
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </UiCard>
                </div>
                <div class="col-span-2">
                    <div class=" overflow-x-auto shadow-md sm:rounded-lg mb-4">

                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        รหัสสินค้า
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        จำนวน
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ราคาต่อหน่วย
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ส่วนลด
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ภาษี (0% 7% 9%)
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        รายการสินค้า
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Qu-285455
                                    </th>
                                    <td class="px-6 py-4">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        10,000
                                    </td>
                                    <td class="px-6 py-4">
                                        10 %
                                    </td>
                                    <td class="px-6 py-4">
                                        0%
                                    </td>
                                    <td class="px-6 py-4">
                                        ห้องพักโรงแรม
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                                                </path>
                                            </svg>
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Dropdown menu -->
                        <div id="dropdownDots"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    ลบ</a>
                            </div>
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    แก้ไข</a>
                            </div>
                        </div>

                    </div>
                    <section v-if="!showItemsPanel">
                        <o-button @click="showItemsPanel = true">เพิ่มข้อมูล</o-button>
                    </section>

                    <UiCard v-if="showItemsPanel">
                        <div class="flex gap-4">
                            <o-field class="flex-1" label="รหัสสินค้า">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <o-field class="flex-1" label="รายการสินค้า">
                            <o-input></o-input>
                        </o-field>
                        <div class="flex gap-4">
                            <o-field class="flex-1" label="จำนวน">
                                <o-input></o-input>
                            </o-field>
                            <o-field class="flex-1" label="ราคาต่อหน่วย">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div class="flex gap-4">
                            <o-field class="flex-1" label="ส่วนลด">
                                <o-input></o-input>
                            </o-field>
                            <o-field class="flex-1" label="ภาษี (0% 7% 9%)">
                                <o-select placeholder="0 %">
                                    <option value="flint">0 %</option>
                                    <option value="silver">7 %</option>
                                    <option value="silver">9 %</option>
                                </o-select>
                            </o-field>
                        </div>

                        <section>
                            <o-button class="mt-4">เพิ่มรายการ</o-button>
                            <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
                        </section>
                    </UiCard>
                </div>
            </div>
        </o-step-item>
        <o-step-item step="4" label="ยืนยัน" :clickable="true" icon="user-lock">
            <section>
                <div class="w-[210mm] h-[297mm] p-[5mm] my-1 mx-auto border solid rounded bg-white drop-shadow">
                    <div class="grid grid-rows-2 m-5">
                        <img class="w-[12vmin]" src="../../assets/images/ll-01.png" alt="Logo" />
                        <div class="grid grid-cols-3 text-sm">
                            <div class="col-span-2">
                                <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
                                <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
                                <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
                                <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
                            </div>
                            <div class="grid grid-cols-3">
                                <div class="col-span-3 font-bold text-center text-base">
                                    ใบเสนอราคา/ยืนยันการสั่งซื้อ
                                </div>
                                <div class="col-span-3 text-center">Quatation</div>
                                <div class="font-bold">เลขที่:</div>
                                <div class="col-span-2 text-right">0841142174178</div>
                                <div class="font-bold">วันที่:</div>
                                <div class="col-span-2 text-right">24/03/2566</div>
                            </div>
                        </div>
                    </div>
                    <hr class="col-span-3 mx-5" />
                    <div class="col-span-2 grid grid-cols-3 m-5 text-xs">
                        <div class="col-span-2">
                            <div class="grid grid-cols-3">
                                <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
                                <div class="col-span-2">S</div>
                                <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
                                <div class="col-span-2">N</div>
                                <div class="col-span-1 font-bold">ที่อยู่:</div>
                                <div class="col-span-2">20-22 ม.2 ขอนแก่น</div>
                                <div class="col-span-1 font-bold">ID TAX:</div>
                                <div class="col-span-2">12345</div>
                                <div class="col-span-1 font-bold">โทร:</div>
                                <div class="col-span-2">0625584785</div>
                                <div class="col-span-1 font-bold">Email:</div>
                                <div class="col-span-2">e@gmail.com</div>
                            </div>
                        </div>
                        <div class="border-l px-5">
                            <div class="grid grid-cols-3">
                                <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
                                <div class="col-span-2 text-right">12345</div>
                                <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
                                <div class="col-span-2 text-right">B</div>
                                <div class="col-span-1 font-bold">ฝ่าย:</div>
                                <div class="col-span-2 text-right">การเงิน</div>
                                <div class="col-span-2 font-bold">ยืนยันราคาภายใน:</div>
                                <div class="col-span-1 text-right">20/05/66</div>
                                <div class="col-span-1 font-bold">วันส่งของ:</div>
                                <div class="col-span-2 text-right">30/05/66</div>
                            </div>
                        </div>
                    </div>
                    <div class="min-h-100 border-b border-black">
                        <table class="w-full text-center">
                            <tr class="h-8 border-y border-black text-center text-sm">
                                <th class="text-center">ลำดับ</th>
                                <th>รหัสสินค้า</th>
                                <th>รายการสินค้า</th>
                                <th>จำนวน</th>
                                <th>ราคาต่อหน่วย</th>
                                <th>ส่วนลด</th>
                                <th>ภาษี</th>
                                <th>จำนวนเงิน</th>
                            </tr>
                            <!-- v-for="(data, index) in idfiltered.product"
            :key="index" -->
                            <tr class="h-10 text-xs" v-for="item in 8">
                                <td>1</td>
                                <td>14778854</td>
                                <td>ห้องพักและรถเดินทาง</td>
                                <td>12</td>
                                <td>20000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>5%</td>
                            </tr>
                        </table>
                    </div>

                    <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
                        <div class="col-span-2">
                            <div class="font-bold">หมายเหตุ:</div>
                            <div>
                                กำหนดยืนราคา 15 วัน <br />
                                จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
                                ขอขอบพระคุณมา ณ ที่นี้
                            </div>
                            <div class="font-bold">ดังรายละเอียดธนาคารดังต่อไปนี้ :</div>
                            <div>
                                1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
                                โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน <br />
                                2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
                            </div>
                        </div>

                        <div class="grid grid-cols-2 p-2">
                            <div>มัดจำ</div>
                            <div class="text-right">5000 บาท</div>
                            <div>รวมเงิน</div>
                            <div class="text-right">59920 บาท</div>
                            <div>ส่วนลดสินค้า</div>
                            <div class="text-right">0 บาท</div>
                            <div>มูลค่าสินค้า</div>
                            <div class="text-right">56000 บาท</div>
                            <div>ภาษีมูลค่าเพิ่ม 7 %</div>
                            <div class="text-right">3920 บาท</div>
                            <div class="font-bold">จำนวนเงินทั้งสิ้น</div>
                            <div class="text-right font-bold">59920 บาท</div>
                        </div>
                    </div>

                    <div class="px-5 flex justify-end">
                        <div class="px-5 text-center text-xs">
                            ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ <br />
                            ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
                        </div>
                    </div>

                    <div class="grid grid-cols-4 mt-25 text-xs">
                        <div class="text-center border-b border-black mx-5">
                            <div>ผู้เสนอราคา</div>
                            <div class="mb-5">วันที่</div>
                        </div>
                        <div class="text-center border-b border-black mx-5">
                            <div>ผู้รับเงิน</div>
                            <div class="mb-5">วันที่</div>
                        </div>
                        <div class="text-center border-b border-black mx-5">
                            <div>ผู้ตรวจสอบ</div>
                            <div class="mb-5">วันที่</div>
                        </div>
                        <div class="text-center border-b border-black mx-5">
                            <div>ผู้อนุมัติสั่งซื้อ</div>
                            <div class="mb-5">วันที่</div>
                        </div>
                    </div>
                </div>
            </section>
        </o-step-item>
    </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });
const showItemsPanel = ref(false);
const showOrderPanel = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>
