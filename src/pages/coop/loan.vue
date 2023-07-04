<template>
  <LayoutPageTitle></LayoutPageTitle>
  <o-steps v-model="steps" variant="success">
    <o-step-item step="1" label="ข้อมูลขอ" :clickable="true" icon="user-lock">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <h2 class="text-xl font-bold dark:text-white">
                  ข้อมูลสมาชิก
                </h2>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">ชื่อ-สกุล</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นพรุจ ชูธรรมสิทธิกุล
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ลูกจ้างประจำ
                    </div>
                    <div class="mt-2">รหัสสมาชิก</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      014141
                    </div>
                    <div class="mt-2">เป็นสมาชิกตั้งแต่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      02/07/2566
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
        </div>
        <div class="col-span-2">
          <UiCard class="mb-3">
            <div class="p-5">
              <div class="mb-2">
                <h2 class="text-xl font-bold dark:text-white">ข้อมูลการกู้</h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <o-field label="ขอกู้เงินเป็นจำนวน (ไม่เกิน 10,000,000)">
                    <o-input modelValue=""></o-input>
                  </o-field>
                </div>
                <div>
                  <o-field label="จำนวนงวด">
                    <o-select placeholder="เลือกจำนวนงวด">
                      <option value="12">12 งวด</option>
                      <option value="24">24 งวด</option>
                      <option value="240">240 งวด</option>
                    </o-select>
                  </o-field>
                </div>
                <div>
                  <o-field label="เงินเดือน">
                    <o-input modelValue=""></o-input>
                  </o-field>
                  <o-field label="เพื่อวัตถุประสงค์">
                    <o-input modelValue=""></o-input>
                  </o-field>
                </div>
                <div>
                  <o-field label="มีผลตั้งแต่วันที่">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input datepicker type="text"
                        class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="เลือกงวดประจำเดือน" />
                    </div>
                  </o-field>
                </div>
                <div>

                </div>
                <div></div>
                <div>
                  <o-field label="ประเภทการรับเงินกู้">
                    <div class="flex mt-2">
                      <o-radio v-model="showcheck" name="name" native-value="persen" class="mr-3">
                        เช็ค
                      </o-radio>
                      <o-radio v-model="showcheck" name="name" native-value="custom">
                        โอน
                      </o-radio>
                    </div>
                    <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>เลือกบัญชี</option>
                      <option value="US">บัญชีที่ 1</option>
                      <option value="CA">บัญชีที่ 2</option>
                      <option value="FR">บัญชีที่ 3</option>
                      <option value="DE">บัญชีที่ 4</option>
                    </select>
                  </o-field>
                </div>
                <div></div>
                <div class="mb-5 field">
                  <label class="text-2xl font-medium">เอกสารที่แนบ</label>
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

              </div>

            </div>

          </UiCard>
        </div>
      </div>
    </o-step-item>
    <o-step-item step="2" label="ข้อมูลคนค้ำ" :clickable="true" icon="user-lock">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="col-span-full xl:col-auto mb-4">
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <h2 class="text-xl font-bold dark:text-white">
                  ข้อมูลสมาชิก
                </h2>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">ชื่อ-สกุล</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นพรุจ ชูธรรมสิทธิกุล
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ลูกจ้างประจำ
                    </div>
                    <div class="mt-2">รหัสสมาชิก</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      014141
                    </div>
                    <div class="mt-2">เป็นสมาชิกตั้งแต่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      02/07/2566
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>

        </div>
        <div class="col-span-2">
          <UiCard>
            <div>
              <label class="text-2xl font-medium">ผู้ค้ำประกัน</label>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    รหัสสมาชิก
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
                    เอกสาร
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
                    018414
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    นายประสบ
                  </th>
                  <td class="px-6 py-4">
                    อุบัติเหตุ
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class="ml-2 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData">
                      <UiCard>
                        <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
                        <div class="grid grid-cols-2 gap-2">
                          <div class="mb-5 field">

                            <o-checkbox :value="true" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
                            </o-checkbox>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">
                          </div>

                          <div class="mb-5 field">
                            <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาทะเบียนบ้าน
                            </o-checkbox>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">

                          </div>
                          <div class="field">
                            <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              สลิปเงินเดือน
                            </o-checkbox>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">
                          </div>
                        </div>
                        <o-button class="mt-5" size="medium" variant="primary" @click="isItemModalHotelData = false">
                          บันทึก </o-button>
                      </UiCard>
                    </o-modal>
                  </td>

                  <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    014347
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    นายบารมี
                  </th>
                  <td class="px-6 py-4">
                    คุ้มค่า
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" @click="isItemModalHotelData2 = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class="ml-2 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData2">
                      <UiCard>
                        <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
                        <div class="grid grid-cols-2 gap-2">
                          <div class="mb-5 field">

                            <o-checkbox :value="true" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาบัตรประชาชน
                            </o-checkbox>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">
                          </div>

                          <div class="mb-5 field">
                            <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาทะเบียนบ้าน
                            </o-checkbox>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">

                          </div>
                          <div class="field">
                            <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                              labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              สลิปเงินเดือน
                            </o-checkbox>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              for="file_input"></label>
                            <input
                              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input" type="file">
                          </div>
                        </div>
                        <o-button class="mt-5" size="medium" variant="primary" @click="isItemModalHotelData2 = false">
                          บันทึก </o-button>
                      </UiCard>
                    </o-modal>
                  </td>
                  <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <o-button class="mt-3" @click="showItemsPanel = true">เพิ่มคนค้ำ</o-button>
          </UiCard>
          <section v-if="!showItemsPanel">

          </section>
          <UiCard class="mt-3 mb-3" v-if="showItemsPanel">
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
              <o-field label="ชื่อ">
                <o-input></o-input>
              </o-field>
              <o-field label="สกุล">
                <o-input></o-input>
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
              <o-button @click="showItemsPanel = false" class="mt-4">เพิ่ม</o-button>
              <o-button @click="showItemsPanel = false" class="ml-4">ยกเลิก</o-button>
            </section>
          </UiCard>
          <UiCard class="mt-3">
            <div>
              <label class="text-2xl font-medium">สินทรัพย์ค้ำประกัน</label>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ประเภทสินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3">
                    จำนวน
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ประมาณราคาสินทรัพย์
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
                  <td class="px-6 py-4">
                    อสังหาทรัพย์
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    บ้าน
                  </th>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class="px-6 py-4">
                    1,500,000
                  </td>

                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                  </th>
                  <td class="px-6 py-4">
                    ยานพาหนะ
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    รถ
                  </th>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class="px-6 py-4">
                    500,000
                  </td>

                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <o-button class="mt-3" @click="showItemsPanel2 = true">เพิ่มสินทรัพย์</o-button>
          </UiCard>
          <section v-if="!showItemsPanel">

          </section>
          <UiCard class="mt-3 mb-3" v-if="showItemsPanel2">
            <div class="grid grid-cols-2 gap-4">
              <o-field label="ประเภทสินทรัพย์">
                <select id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>เลือกประเภท</option>
                  <option value="US">อสังหาทรัพย์</option>
                  <option value="CA">ยานพาหนะ</option>
                  <option value="AN">ปศุสัตว์</option>

                </select>

              </o-field>
              <o-field label="สินทรัพย์">
                <o-input></o-input>
              </o-field>
              <o-field label="จำนวน">
                <o-input></o-input>
              </o-field>
              <o-field label="ราคาโดยประมาณ">
                <o-input></o-input>
              </o-field>

            </div>

            <label class="text-2xl font-medium ">เอกสารที่แนบ</label>
            <div class="grid grid-cols-2 gap-2">
              <div class="mb-5 field">

                <o-checkbox :value="true" checkClass="w-4 h-4"
                  labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาโฉนดที่ดิน
                </o-checkbox>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
                <input
                  class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
              </div>
              <div class="mb-5 field">
                <o-checkbox :value="true" variant="danger" checkClass="w-4 h-4"
                  labelClass="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> สำเนาอื่นๆ
                </o-checkbox>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"></label>
                <input
                  class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
              </div>
            </div>
            <section>
              <o-button @click="showItemsPanel2 = false" class="mt-4">เพิ่ม</o-button>
              <o-button @click="showItemsPanel2 = false" class="ml-4">ยกเลิก</o-button>
            </section>
          </UiCard>

          <UiCard class="mt-3 mb-3">
            <div>
              <label class="text-2xl font-medium">หุ้นค้ำประกัน</label>
            </div>


          </UiCard>
        </div>


      </div>

    </o-step-item>
    <o-step-item step="3" label="สรุปรายงาน" :clickable="true" icon="user-plus">
      <UiCard class="mb-3">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h5 class="mb-3 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">ข้อมูลการกู้</h5>
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
            <h5 class="mb-3 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">ผู้ค้ำประกัน</h5>
            <div class="border-t border-gray-200 md:gap-16 dark:border-gray-700"></div>
            <table class="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
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
                    เอกสาร
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    018414
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    นายประสบ
                  </th>
                  <td class="px-6 py-4">
                    อุบัติเหตุ
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class=" field">

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

                    </div>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    014347
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    นายบารมี
                  </th>
                  <td class="px-6 py-4">
                    คุ้มค่า
                  </td>
                  <td class="px-6 py-4">
                    ราชการ
                  </td>
                  <td class="px-6 py-4">
                    30,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class=" field">

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

                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <h5 class="mt-5 mb-5 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">สินทรัพย์ค้ำประกัน</h5>
            <div class="border-t border-gray-200 md:gap-16 dark:border-gray-700"></div>
            <table class="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ประเภทสินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3">
                    จำนวน
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ประมาณราคาสินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เอกสาร
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    1
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    อสังหาทรัพย์
                  </th>
                  <td class="px-6 py-4">
                    บ้าน
                  </td>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class="px-6 py-4">
                    1,500,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class=" field">

                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        สำเนาโฉนดที่ดิน
                      </li>

                    </div>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    2
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    ยานพาหนะ
                  </th>
                  <td class="px-6 py-4">
                    รถ
                  </td>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class="px-6 py-4">
                    500,000
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class=" field">

                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                        </svg>
                        สำเนาเล่มทะเบียนรถ
                      </li>

                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-3">
                <h3 class="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  คำนวนดอกเบี้ย
                </h3>
                <p class="text-gray-500 dark:text-gray-400">ต้นเงินรวมดอกเบี้ยเท่ากันทุก งวดละ 4,166 บาท จำนวน 240
                  งวด</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end"><o-button>ยืนคำข้อ</o-button></div>
        </div>
      </UiCard>

    </o-step-item>

  </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => { initFlowbite() });
const showItemsPanel = ref(false);
const showItemsPanel2 = ref(false);
const isItemModalHotelData = ref(false);
const isItemModalHotelData2 = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>
