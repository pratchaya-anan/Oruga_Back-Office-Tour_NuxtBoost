<template>
  <LayoutPageTitle></LayoutPageTitle>
  <o-steps v-model="steps" variant="success">
    <o-step-item step="1" label="ลูกค้า" :clickable="true" icon="user-lock">
      <UiCard class="mb-3">
        <div class="p-5">
          <label class="text-2xl font-medium">ข้อมูลการกู้</label>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <o-field label="ขอกู้เงินเป็นจำนวน (ไม่เกิน 10,000,000)">
              <o-input></o-input>
            </o-field>
            <o-field label="เพื่อวัตถุประสงค์">
              <o-input></o-input>
            </o-field>
            <o-field label="มีผลตั้งแต่วันที่">

              <div class="relative max-w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input datepicker type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกงวดประจำเดือน">
              </div>
            </o-field>

            <o-field label="สินทรัพย์">
              <o-input></o-input>
            </o-field>
<div></div>
            <div class="grid grid-cols-3">
              <o-field label="ประเภทการรับเงินกู้">
                <div class="flex mt-3">
                  <o-radio v-model="showcheck" name="name" native-value="cheque" class="mr-3">
                    เช็ค
                  </o-radio>
                  <o-radio v-model="showcheck" name="name" native-value="bank">
                    โอน
                  </o-radio>
                </div>
              </o-field>
            </div>
            <!-- <o-field v-if="showcheck == 'cheque'" label="เปอร์เซ็น">
              <o-input modelValue=""></o-input>
            </o-field> -->

            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <select id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>เลือกบัญชี</option>
              <option value="US">บัญชีที่ 1</option>
              <option value="CA">บัญชีที่ 2</option>
              <option value="FR">บัญชีที่ 3</option>
              <option value="DE">บัญชีที่ 4</option>
            </select>

            <div></div>
            <div class="mb-5 field">
              <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
              <o-checkbox :value="true" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
              </o-checkbox>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">
            </div>
            <div class="mb-5 field">
              <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4 mt-10"
                labelClass="ml-2 mt-10 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาทะเบียนบ้าน
              </o-checkbox>

              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">

            </div>
            <div class="mb-5 field">
              <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                สลิปเงินเดือน
              </o-checkbox>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">

            </div>
            <div class="mb-5 field">
              <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                โฉนดที่ดิน
              </o-checkbox>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">

            </div>
          </div>
        </div>
      </UiCard>
    </o-step-item>
    <o-step-item step="2" label="พนักงาน" :clickable="true" icon="user">
      <div class="col-span-2">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
          <UiCard>
            <div>
              <label class="text-2xl font-medium">ผู้ค้ำประกัน</label>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สกุล
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ตำแหน่ง
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เงินเดือน
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">แก้ไข</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ชื่อ xxx
                  </th>
                  <td class="px-6 py-4">
                    สกุล xxxxx
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ชื่อ xxx
                  </th>
                  <td class="px-6 py-4">
                    สกุล xxxxx
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </UiCard>
        </div>
        <section v-if="!showItemsPanel">
          <o-button @click="showItemsPanel = true">เพิ่มคนค้ำ</o-button>
        </section>
        <UiCard v-if="showItemsPanel">
          <div class="grid grid-cols-2 gap-4">
            <o-field label="เลขทะเบียนสมาชิก">
              <o-input></o-input>
            </o-field>
            <o-field label="ตำแหน่ง">
              <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>เลือกตำแหน่ง</option>
                <option value="US">ราชการ</option>
                <option value="CA">ลูกจ้างประจำ</option>
              </select>

            </o-field>
            <o-field label="รายได้ต่อเดือน">
              <o-input></o-input>
            </o-field>
          </div>

          <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
          <div class="grid grid-cols-2 gap-2">
            <div class="mb-5 field">

              <o-checkbox :value="true" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
              </o-checkbox>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">
            </div>

            <div class="mb-5 field">
              <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาทะเบียนบ้าน
              </o-checkbox>

              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">

            </div>
            <div class="field">
              <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                สลิปเงินเดือน
              </o-checkbox>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
              <input
                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">

            </div>
          </div>
          <section>
            <o-button @click="showItemsPanel = false" class="mt-4">บันทึก</o-button>
            <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
          </section>
        </UiCard>
      </div>
    </o-step-item>
    <o-step-item step="3" label="Social" :clickable="true" icon="user-plus">
      <UiCard class="mb-3">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ข้อมูลการกู้</h2>
            <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div class="mb-3">
                        <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">

                            สมาชิกขอกู้เงินเป็นจำนวน
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">2,000,000 บาท (สองล้านบาทถ้วน)</p>
                    </div>
                    <div class="mb-3">
                        <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">

                            สินทรัพย์
                        </h3>

                        <p class="text-gray-500 dark:text-gray-400">รายการสินทรัพย์</p>
                        <p class="text-gray-500 dark:text-gray-400">1. อสังหาทรัพย์ (บ้าน)</p>
                        <p class="text-gray-500 dark:text-gray-400">2. ยานพาหนะ (รถยนต์)</p>
                    </div>
                    <div class="mb-3">
                        <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">

                            ประเภทการรับเงินกู้
                        </h3>

                        <p class="text-gray-500 dark:text-gray-400">ประเภทการรับเงินกู้แบบ : โอน</p>
                        <p class="text-gray-500 dark:text-gray-400">โอนไปยังบัญชี : กรุงไทย</p>
                    </div>
                    <div class="mb-3">
                        <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                            เอกสารที่แนบขอผู้กู้
                        </h3>

                        <p class="text-gray-500 dark:text-gray-400">
                            <li class="flex items-center">
                                <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                สำเนาบัตรประชาชน
                            </li>
                            <li class="flex items-center">
                                <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                สำเนาทะเบียนบ้าน
                            </li>
                            <li class="flex items-center">
                                <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                สลิปเงินเดือน
                            </li>
                            <li class="flex items-center">
                                <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                โฉนดที่ดิน
                            </li>
                        </p>
                    </div>

                </div>

                <div>
                    <div class="mb-3">
                        <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                            จำนวนงวด
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">240 งวด (20 ปี)</p>
                    </div>
                    <div class="mb-3">
                        <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                            หมายเหตุ
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">นำไปใช้ในการลงทุน</p>
                    </div>
                    <div class="mb-3">
                        <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                            มีผลตั้งแต่วันที่
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">12 มกราคม เป็นต้นไป</p>
                    </div>
                </div>

            </div>
            <div>
              <label class="text-2xl font-medium">ผู้ค้ำประกัน</label>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สกุล
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เงินเดือน
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">แก้ไข</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ชื่อ xxx
                  </th>
                  <td class="px-6 py-4">
                    สกุล xxxxx
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                   <div class="mb-5 field">
           
              <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สำเนาบัตรประชาชน
                </li>
                 <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สำเนาทะเบียนบ้าน
                </li>
                <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สลิปเงินเดือน
                </li>
                <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    ฉโฉนดที่ดิน
                </li>
            </div>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ชื่อ xxx
                  </th>
                  <td class="px-6 py-4">
                    สกุล xxxxx
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class="mb-5 field">
              
              <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สำเนาบัตรประชาชน
                </li>
                 <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สำเนาทะเบียนบ้าน
                </li>
                <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    สลิปเงินเดือน
                </li>
                <li class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    ฉโฉนดที่ดิน
                </li>
            </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiCard>

    </o-step-item>

  </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });
const showItemsPanel = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>
