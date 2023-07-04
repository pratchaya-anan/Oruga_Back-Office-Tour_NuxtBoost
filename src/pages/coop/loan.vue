<template>
  <LayoutPageTitle>การขอกู้</LayoutPageTitle>
  <o-steps v-model="steps" variant="success">
    <o-step-item step="1" label="ข้อมูลขอกู้" :clickable="true" icon="user-lock">
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
                      นาย นพรุจ ชูธรรมสิทธิกุล
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ข้าราชการ
                    </div>
                    <div class="mt-2">รหัสสมาชิก</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      1552555214
                    </div>
                    <div class="mt-2">เป็นสมาชิกตั้งแต่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      16/04/2551
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <h2 class="text-xl font-bold dark:text-white">
                  ข้อมูลการขอกู้
                </h2>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">ประเภทการกู้</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      กู้สามัญ
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ขอกู้จำนวน</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      2,000,000
                    </div>
                    <div class="mt-2">รายได้ต่อเดือน</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      20,000
                    </div>
                    <div class="mt-2">จำนวนงวด</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      240 งวด
                    </div>
                    <div class="mt-2">เพื่อวัตถุประสงค์</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นำไปใช้ในการลงทุน
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
        </div>
        <div class="col-span-2">
          <UiCard>    
              <div class="grid grid-cols-2 gap-4">                                        
                <div>
                  <o-field class="text-xl font-bold dark:text-white" label="ประเภทการรับเงินกู้">
                    <div class="flex mt-2">
                      <o-radio v-model="showcheck" name="name" native-value="persen" class="mr-3">
                        โอน
                      </o-radio>
                      <o-radio v-model="showcheck" name="name" native-value="custom">
                        เช็ค
                      </o-radio>
                    </div>

                    <select id="countries" v-if="showcheck == 'persen'"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>เลือกบัญชี</option>
                      <option value="US">บัญชีกรุงไทย</option>
                      <option value="CA">บัญชีกสิกร</option>
                    </select>

                  </o-field>
                </div>
                <div></div>
                <div class="mb-5 field">
                  <label class="text-xl font-bold dark:text-white">เอกสารที่แนบ</label>

                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input">สำเนาบัตรประชาชน</label>
                  <input
                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">
                </div>
                <div class="mb-5 field">
                  <label class="block  mt-8 mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
                    สำเนาทะเบียนบ้าน</label>
                  <input
                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">

                </div>
                <div class="mb-5 field">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input">สลิปเงินเดือน</label>
                  <input
                    class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">

                </div>

              </div>

            

          </UiCard>
        </div>
      </div>

    </o-step-item>
    <o-step-item step="2" label="หลักค้ำประกัน" :clickable="true" icon="user-lock">
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
                      นาย นพรุจ ชูธรรมสิทธิกุล
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ข้าราชการ
                    </div>
                    <div class="mt-2">รหัสสมาชิก</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      1552555214
                    </div>
                    <div class="mt-2">เป็นสมาชิกตั้งแต่</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      16/04/2551
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UiCard>
          <UiCard class="mb-4">
            <section>
              <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <h2 class="text-xl font-bold dark:text-white">
                  ข้อมูลการขอกู้
                </h2>
              </div>
            </section>
            <section class="border-t border-gray-200 dark:border-gray-700">
              <div class="sm:flex xl:block xl:space-y-4">
                <div class="sm:flex-1">
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-4">ประเภทการกู้</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      กู้สามัญ
                    </div>
                  </div>
                  <div class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                    <div class="mt-2">ขอกู้จำนวน</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      2,000,000
                    </div>
                    <div class="mt-2">รายได้ต่อเดือน</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      20,000
                    </div>
                    <div class="mt-2">จำนวนงวด</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      240 งวด
                    </div>
                    <div class="mt-2">เพื่อวัตถุประสงค์</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      นำไปใช้ในการลงทุน
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
              <label class="text-xl font-bold dark:text-white">คนค้ำประกัน</label>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    รหัสสมาชิก
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อ-สกุล
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ตำแหน่ง
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เป็นสมาชิกตั้งแต่
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
                    1
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1552555234
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    นายกิตติพิชญ์ เสนานุช
                  </th>
                  <td class="px-6 py-4">
                    พนักงานประจำ
                  </td>
                  <td class="px-6 py-4">
                    05/06/2562
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" @click="isItemModalHotelData = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class="ml-2 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData">
                      <UiCard>
                        <div class="col-span-2">
                          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            เพิ่มเอกสาร
                          </h2>
                          <div class="flex items-center mb-4 p-4 border shadow-md">
                            <dev class="w-full relative inline-flex items-center">
                              <div class="mx-9">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">นายกิตติพิชญ์ เสนานุช</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">รหัสสมาชิก 1552555234
                                </p>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ตำแหน่ง พนักงานประจำ</p>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">เป็นสมาชิกตั้งแต่
                                  05/06/2562
                                </p>
                              </div>
                            </dev>
                          </div>
                        </div>
                        <div class="col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาบัตรประชาชน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาทะเบียนบ้าน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                            <div class="field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สลิปเงินเดือน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                          </div>
                        </div>
                        <div class="w-full ">
                          <div class="mt-5 flex justify-between">
                            <o-button variant="danger" class="ml-2">ยกเลิก</o-button>
                            <o-button size="medium" variant="primary" @click="isItemModalHotelData = false"> บันทึก
                            </o-button>
                          </div>
                        </div>
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
                    2
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1552555987
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    นางสาวรินดา จุตโน
                  </th>
                  <td class="px-6 py-4">
                    ข้าราชการ
                  </td>
                  <td class="px-6 py-4">
                    24/06/2561
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" @click="isItemModalHotelData2 = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class="ml-2 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData2">
                      <UiCard>
                        <div class="col-span-2">
                          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            เพิ่มเอกสาร
                          </h2>
                          <div class="flex items-center mb-4 p-4 border shadow-md">
                            <dev class="w-full relative inline-flex items-center">
                              <div class="mx-9">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">นางสาวรินดา จุตโน</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">รหัสสมาชิก 1552555987
                                </p>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">ตำแหน่ง ข้าราชการ</p>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">เป็นสมาชิกตั้งแต่
                                  24/06/2561
                                </p>
                              </div>
                            </dev>
                          </div>
                        </div>
                        <div class="col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาบัตรประชาชน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาทะเบียนบ้าน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                            <div class="field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สลิปเงินเดือน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                          </div>
                        </div>
                        <div class="w-full ">
                          <div class="mt-5 flex justify-between">
                            <o-button variant="danger" class="ml-2">ยกเลิก</o-button>
                            <o-button size="medium" variant="primary" @click="isItemModalHotelData2 = false"> บันทึก
                            </o-button>
                          </div>
                        </div>
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
              <o-field label="ชื่อ-สกุล">
                <o-input></o-input>
              </o-field>
              <o-field label="เป็นสมาชิกตั้งแต่">
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
              <label class="text-xl font-bold dark:text-white">สินทรัพย์ประกัน</label>
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
                  <th scope="col" class="px-6 py-3 text-center">
                    จำนวน
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    ประมาณราคาสินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
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
                  <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    1
                  </th>
                  <td class="px-6 py-4">
                    อสังหาทรัพย์
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    บ้าน
                  </th>
                  <td class="px-6 py-4 text-center">
                    1
                  </td>
                  <td class="px-6 py-4 text-right">
                    1,500,000
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" @click="isItemModalHotelData4 = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class=" ml-10 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData4">
                      <UiCard>
                        <div class="col-span-2">
                          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            เพิ่มเอกสาร
                          </h2>
                          <div class="flex items-center mb-4 p-4 border shadow-md">
                            <dev class="w-full relative inline-flex items-center">
                              <div class="mx-9">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">อสังหาทรัพย์</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">บ้าน 1,500,000
                                </p>

                              </div>
                            </dev>
                          </div>
                        </div>
                        <div class="col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาโฉนดที่ดิน</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                          </div>
                        </div>
                        <div class="w-full ">
                          <div class="mt-5 flex justify-between">
                            <o-button variant="danger" class="ml-2">ยกเลิก</o-button>
                            <o-button size="medium" variant="primary" @click="isItemModalHotelData4 = false"> บันทึก
                            </o-button>
                          </div>
                        </div>
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
                    2
                  </th>
                  <td class="px-6 py-4">
                    ยานพาหนะ
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    รถ
                  </th>
                  <td class="px-6 py-4 text-center">
                    1
                  </td>
                  <td class="px-6 py-4 text-right">
                    500,000
                  </td>
                  <td class="px-6 py-4 ">
                    <a href="#" @click="isItemModalHotelData3 = true" class="text-blue-500 hover:text-blue-700">
                      <Icon class=" ml-10 w-6 h-6" name="material-symbols:upload"></Icon>
                    </a>
                    <o-modal v-model:active="isItemModalHotelData3">
                      <UiCard>
                        <div class="col-span-2">
                          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            เพิ่มเอกสาร
                          </h2>
                          <div class="flex items-center mb-4 p-4 border shadow-md">
                            <dev class="w-full relative inline-flex items-center">
                              <div class="mx-9">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ยานพาหนะ</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">รถ 500,000
                                </p>

                              </div>
                            </dev>
                          </div>
                        </div>
                        <div class="col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <div class="mb-5 field">
                              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">สำเนาเล่มทะเบียนรถ</label>
                              <input
                                class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">
                            </div>
                          </div>
                        </div>
                        <div class="w-full ">
                          <div class="mt-5 flex justify-between">
                            <o-button variant="danger" class="ml-2">ยกเลิก</o-button>
                            <o-button size="medium" variant="primary" @click="isItemModalHotelData3 = false"> บันทึก
                            </o-button>
                          </div>
                        </div>
                      </UiCard>
                    </o-modal>
                  </td>
                  <td class="px-6 py-4">
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
        </div>


      </div>

    </o-step-item>
    <o-step-item step="3" label="สรุปรายงาน" :clickable="true" icon="paper">
      <UiCard class="mb-3">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h5 class="mb-3 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">ข้อมูลการกู้สามัญ</h5>
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
                <p class="text-gray-500 dark:text-gray-400">1. อสังหาทรัพย์ (บ้าน) ราคา 1,500,000</p>
                <p class="text-gray-500 dark:text-gray-400">2. ยานพาหนะ (รถยนต์) ราคา 500,000</p>
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
              <div class="mb-2">
                <h3 class="flex items-center  text-lg font-medium text-gray-900 dark:text-white">
                  เพื่อวัตถุประสงค์
                </h3>
                <p class="text-gray-500 dark:text-gray-400">นำไปใช้ในการลงทุน</p>
              </div>
              <div class="mb-3">
                
                
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
                    รหัสสมาชิก
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อ-สกุล
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ตำแหน่ง
                  </th>
                  <th scope="col" class="px-6 py-3">
                    เป็นสมาชิกตั้งแต่
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
                  <td class="px-6 py-4">
                    1552555234
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    นายกิตติพิชญ์ เสนานุช
                  </th>
                  <td class="px-6 py-4">
                    พนักงานประจำ
                  </td>
                  <td class="px-6 py-4">
                    05/06/2562
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
                    2
                  </th>
                  <td class="px-6 py-4">
                    1552555987
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium ">
                    นางสาวรินดา จุตโน
                  </th>

                  <td class="px-6 py-4">
                    ข้าราชการ
                  </td>
                  <td class="px-6 py-4">
                    24/06/2561
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

            <h5 class="mt-5 mb-5 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">สินทรัพย์ค้ำประกัน
            </h5>
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
                  <th scope="col" class="px-6 py-3 text-center">
                    จำนวน
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    ประมาณราคาสินทรัพย์
                  </th>
                  <th scope="col" class="px-6 py-3 ">
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
                  <td class="px-6 py-4 text-center">
                    1
                  </td>
                  <td class="px-6 py-4 text-center">
                    1,500,000
                  </td>
                  <td class="px-6 py-4 ">
                    <li class="flex items-center">
                      <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"></path>
                      </svg>
                      สำเนาโฉนดที่ดิน
                    </li>
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
                  <td class="px-6 py-4 text-center">
                    1
                  </td>
                  <td class="px-6 py-4 text-center">
                    500,000
                  </td>
                  <td class="px-6 py-4 text-right">

                    <li class="flex items-center">
                      <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"></path>
                      </svg>
                      สำเนาเล่มทะเบียนรถ
                    </li>

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
const isItemModalHotelData3 = ref(false);
const isItemModalHotelData4 = ref(false);
const showcheck = ref('');
const steps = ref(1);

</script>
