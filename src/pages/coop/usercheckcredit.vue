<template>
  <LayoutPageTitle> ตรวจสอบขอกู้</LayoutPageTitle>
  <o-steps v-model="stepnext">
    <o-step-item step="1" label="ค้นหา" :clickable="true" icon="search">
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
                    <div class="mt-2">ตำแหน่ง</div>
                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ข้าราชการ
                    </div>
                    <div class="mt-2">รหัสมาชิก</div>
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
        </div>
        <div class="col-span-2">
          <UiCard>
            <h2 class="text-xl font-bold dark:text-white">หลักค้ำประกัน</h2>
            <div class="grid grid-cols-2 gap-4 p-2">
              <div class="w-full">
                <div>
                  <o-field label="เลือกประเภทการกู้">
                    <select id="countries"
                      class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>ประเภทการกู้</option>
                      <option value="กู้สามัญ">กู้สามัญ</option>
                      <option value="กู้เงินฉุกเฉิน">กู้เงินฉุกเฉิน</option>
                      <option value="กู้พิเศษ">กู้พิเศษ</option>
                      <option value="กู้หุ้น">กู้หุ้น</option>
                    </select>
                  </o-field>
                </div>
              </div>
              <div>
                <o-field label="รายได้ต่อเดือน">
                  <o-input type="number" class="text-right" placeholder="บาท"></o-input>
                </o-field>
              </div>
              <div class="w-full">
                <o-field label="ขอกู้จำนวน">
                  <o-input type="number" class="text-right" placeholder="บาท"></o-input>
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
              <div class="col-span-2">
                <o-field label="เพื่อวัตถุประสงค์">
                  <o-input></o-input>
                </o-field>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </o-step-item>
    <o-step-item step="2" label="หลักค้ำประกัน" :clickable="true" icon="add">
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
        </div>
        <div class="col-span-2">
          <UiCard>
            <h2 class="text-xl font-bold dark:text-white">หลักค้ำประกัน</h2>
            <div class="w-full p-2">
              <h2 class="mb-2 text-lg font-normal dark:text-white">คนค้ำประกัน</h2>
              <div class="w-full mb-3">
                <div class="flex relative mb-4">
                  <div class="w-full">
                    <o-autocomplete placeholder="ค้นหาสมาชิก" icon="search" clearable :data="data" v-model="userdata">
                      <template #empty>No results found</template>
                    </o-autocomplete>
                  </div>
                </div>
                <div class="relative overflow-x-auto border shadow sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-3 py-3 text-center">ลำดับ</th>
                        <th scope="col" class="px-3 py-3">รหัสสมาชิก</th>
                        <th scope="col" class="px-3 py-3">ชื่อ-สกุล</th>
                        <th scope="col" class="px-3 py-3 text-center">ตำแหน่ง</th>
                        <th scope="col" class="px-3 py-3 text-center">เป็นสมาชิกตั้งแต่</th>
                        <th scope="col" class="px-3 py-3 text-center"></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        v-for="(i, index) in tableDatatour">
                        <td class="px-3 py-4 text-center">
                          {{ index + 1 }}
                        </td>
                        <td class="px-3 py-4">
                          {{ i.id }}
                        </td>
                        <td class="px-3 py-4">
                          {{ i.name }}
                        </td>
                        <td class="px-3 py-4 text-center">
                          {{ i.rank }}
                        </td>
                        <td class="px-3 py-4 text-center">
                          {{ i.datemember }}
                        </td>
                        <td class="px-3 py-4 text-center">
                          <Icon class="text-xl font-medium text-pink-600 dark:text-white"
                            name="material-symbols:delete-outline"></Icon>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h2 class="mb-2 text-lg font-normal dark:text-white">สินทรัพย์ค้ำประกัน</h2>
              <div class="w-full mb-3">
                <div class="flex w-full items-center">
                  <o-radio v-model="showInput" name="X" native-value="F">ไม่มี</o-radio>
                  <o-radio v-model="showInput" name="X" native-value="T" class="mx-3">มี</o-radio>
                </div>
              </div>
              <div v-if="showInput == 'T'" class="flex relative w-full gap-2 mb-4">
                <div class="w-full">
                  <o-field label="ประเภทสินทรัพย์">
                    <select id="countries"
                      class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>ประเภทสินทรัพย์</option>
                      <option value="US">อสังหาริมทรัพย์</option>
                      <option value="CA">ยานพาหนะ</option>
                      <option value="FR">ปศุสัตว์</option>
                    </select>
                  </o-field>
                </div>
                <div class="w-full ">
                  <o-field label="สินทรัพย์">
                    <o-input placeholder="เช่น บ้าน, รถ, วัว"></o-input>
                  </o-field>
                </div>
                <div class="w-full ">
                  <o-field label="จำนวน">
                    <o-input type="number"></o-input>
                  </o-field>
                </div>
                <div class="w-full">
                  <p class="text-sm text-red-500 font-normal">* ประมาณราคาสินทรัพย์</p>
                  <o-input type="number" class="text-right" placeholder="บาท"></o-input>
                </div>
                <div class="w-full  flex justify-end mt-5">
                  <o-button>เพิ่ม</o-button>
                </div>
              </div>
              <div v-if="showInput == 'T'" class="col-span-4 border shadow sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th class="px-6 py-3 text-center">
                        ลำดับ
                      </th>
                      <th class="px-6 py-3">
                        ประเภทสินทรัพย์
                      </th>
                      <th class="px-6 py-3">
                        สินทรัพย์
                      </th>
                      <th class="px-6 py-3 text-center">
                        จำนวน
                      </th>
                      <th class="px-6 py-3 text-right">
                        ประมาณราคาสินทรัพย์
                      </th>
                      <th class="px-6 py-3 text-center">

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="px-6 py-3 text-center">
                        1
                      </td>
                      <td class="px-6 py-3">
                        อสังหาทรัพย์
                      </td>
                      <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        บ้าน
                      </th>
                      <td class="px-6 py-3 text-center">
                        1
                      </td>
                      <td class="px-6 py-3 text-right">
                        1,500,000
                      </td>

                      <td class="px-6 py-3 text-center">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          <Icon class="text-xl font-medium text-pink-600 dark:text-white"
                            name="material-symbols:delete-outline"></Icon>
                        </a>
                      </td>
                    </tr>

                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="px-6 py-3 text-center">
                        2
                      </td>
                      <td class="px-6 py-3">
                        ยานพาหนะ
                      </td>
                      <td class="px-6 py-4 ">
                        รถ
                      </td>
                      <td class="px-6 py-3 text-center">
                        1
                      </td>
                      <td class="px-6 py-3 text-right">
                        500,000
                      </td>
                      <td class="px-6 py-3 text-center">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          <Icon class="text-xl font-medium text-pink-600 dark:text-white"
                            name="material-symbols:delete-outline"></Icon>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 class="mb-2 mt-5 text-lg font-normal dark:text-white">หุ้นค้ำประกัน</h2>
              <div class="w-full mb-3">
                <div class="flex w-full items-center">
                  <o-radio v-model="showInput2" name="z" native-value="F">ไม่มี</o-radio>
                  <o-radio v-model="showInput2" name="z" native-value="T" class="mx-3">มี</o-radio>
                </div>
                <div>
                  <p v-if="showInput2 == 'T'" class="mt-3 text-sm text-red-500 font-normal">* ประมาณราคาหุ้น ไม่เกิน 90
                    เปอร์เซ็นของหุ้นที่ถืออยู่</p>
                  <o-input type="number" v-if="showInput2 == 'T'" class="text-right" placeholder="จำนวน"></o-input>
                </div>
              </div>
              <h2 class="mb-2 mt-5 text-lg font-normal dark:text-white">เงินฝากค้ำประกัน</h2>
              <div class="w-full mb-3">
                <div class="flex w-full items-center">
                  <o-radio v-model="showInput3" name="c" native-value="F">ไม่มี</o-radio>
                  <o-radio v-model="showInput3" name="c" native-value="T" class="mx-3">มี</o-radio>
                </div>
                <div>
                  <p v-if="showInput3 == 'T'" class="mt-3 text-sm text-red-500 font-normal">* จำนวนเงินฝากในบัญชีสหกรณ์
                  </p>
                  <o-input type="number" v-if="showInput3 == 'T'" class="text-right" placeholder="บาท"></o-input>
                </div>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </o-step-item>
    <o-step-item step="3" label="ข้อมูล" :clickable="true" icon="success">
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
        </div>
        <div class="col-span-2">
          <UiCard>
            <h2 class="text-xl font-bold dark:text-white">เงื่อนไข</h2>
            <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                ไม่ติดสัญญากู้
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                วงเงินขอกู้
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                เงินเดือนอยู่ในเกณฑ์
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                อายุสมาชิกมากกว่า 3 ปี
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                คนค่ำประกัน
              </li>
              <li class="flex items-center">
                <div role="status">
                  <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                สินทรัพย์ประกัน
              </li>
              <li class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 text-gray-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>
                หุ้นประกัน
              </li>
            </ul>
            <div class="flex justify-end mt-4">
              <a href="/coop/loan">
                <o-button> ข้อกู้ </o-button>
              </a>
            </div>
          </UiCard>
        </div>
      </div>
    </o-step-item>
  </o-steps>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";

const isItemModalUserData = ref(false);
const stepnext = ref(1);
const showInput = ref('F');
const showInput2 = ref('F');
const showInput3 = ref('F');

const tableDatatour = [
  {
    id: 1552555234,
    name: "นายกิตติพิชญ์ เสนานุช",
    rank: "พนักงานประจำ",
    datemember: "05/06/2562",
  },
  {
    id: 1552555987,
    name: "นางสาวรินดา จุตโน",
    rank: "ข้าราชการ",
    datemember: "24/06/2561",
  },
];

const datauser = ref('');

const data = [
  "นายกิตติพิชญ์ เสนานุช",
  "นางสาวรินดา จุตโน",
];


onMounted(() => {
  initFlowbite();
});
const showcheck = ref("persen");
</script>
