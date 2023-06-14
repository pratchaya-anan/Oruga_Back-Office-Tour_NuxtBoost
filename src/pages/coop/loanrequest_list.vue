<template>
  <section>
    <UiCard>
      <o-field label="คำขอสินเชื่อ">
        <form class="w-full md:max-w-sm flex-1 md:mr-4 mt-4">
          <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="search" id="default-search"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="ชื่อผู้กู้, รหัสสมาชิก..." required="">
            <button type="submit"
              class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ค้นหา</button>
          </div>
        </form>

        <o-tabs class="mt-5" v-model="activeTab" :multiline="multiline">
          <o-tab-item :value="0" label="ตรวจเอกสาร">
            <o-table :data="data">
              <o-table-column field="ID" label="รหัสสมาชิก" width="120" numeric v-slot:default="props">
                {{ props.row.ID }}
              </o-table-column>
              <o-table-column field="name" label="ชื่อ" v-slot:default="props">
                {{ props.row.name }}
              </o-table-column>
              <o-table-column field="type" label="ประเภทคำขอ" v-slot:default="props">
                {{ props.row.type }}
              </o-table-column>
              <o-table-column field="amount" label="จำนวนเงิน" v-slot:default="props">
                {{ props.row.amount }}
              </o-table-column>
              <o-table-column field="objective" label="วัตถุประสงค์" v-slot:default="props">
                {{ props.row.objective }}
              </o-table-column>
              <o-table-column field="จัดการ" label="จัดการ" position="centered" v-slot:default="props">
                <!-- {{ props.row.หมายเหตุ }} -->
                <NuxtLink to="/coop/loanrequest_rightsPage">
                  <o-button>ตรวจสอบ</o-button>
                </NuxtLink>
              </o-table-column>
            </o-table>
          </o-tab-item>

          <o-tab-item :value="1" label="ตรวจข้อมูล">
          </o-tab-item>
          
          <o-tab-item :value="2" label="ประเมินสินทรัพย์">
          </o-tab-item>

          <o-tab-item :value="3" label="รอเข้าที่ประชุม">
          </o-tab-item>

          <o-tab-item :value="4" label="รอทำสัญญา">
          </o-tab-item>

          <o-tab-item :value="5" label="สัญญากู้">
            <o-table :data="data">
              <o-table-column field="ID" label="รหัสสมาชิก" width="120" numeric v-slot:default="props">
                {{ props.row.ID }}
              </o-table-column>
              <o-table-column field="name" label="ชื่อ" v-slot:default="props">
                {{ props.row.name }}
              </o-table-column>
              <o-table-column field="type" label="ประเภทคำขอ" v-slot:default="props">
                {{ props.row.type }}
              </o-table-column>
              <o-table-column field="amount" label="จำนวนเงิน" v-slot:default="props">
                {{ props.row.amount }}
              </o-table-column>
              <o-table-column field="objective" label="วัตถุประสงค์" v-slot:default="props">
                {{ props.row.objective }}
              </o-table-column>
              <o-table-column field="จัดการ" label="จัดการ" position="centered" v-slot:default="props">
                <!-- {{ props.row.หมายเหตุ }} -->
                <o-button variant="info">ข้อมูล</o-button>
              </o-table-column>
            </o-table>
          </o-tab-item>
        </o-tabs>
      </o-field>
    </UiCard>
  </section>


  <!-- <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="border-b dark:border-gray-700 mx-4">
          <div class="flex items-center justify-between space-x-4 pt-3">
            <div class="flex-1 flex items-center space-x-3">
              <h5 class="dark:text-white font-semibold">รายการค้างชำระ</h5>
            </div>
          </div>
          <div class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
            <div class="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
              <form class="w-full md:max-w-sm flex-1 md:mr-4">
                <label for="default-search"
                  class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                      stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search"
                    class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ชื่อผู้กู้, รหัสสมาชิก..." required="">
                  <button type="submit"
                    class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ค้นหา</button>
                </div>
              </form>
              <div class="flex items-center space-x-4">
                <div>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" type="button"
                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400"
                      viewbox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
                    </svg>
                    Filter
                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div id="filterDropdown" class="z-10 hidden p-3 bg-white rounded-lg shadow w-56 dark:bg-gray-700">
                    <h6 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทการกู้</h6>
                    <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value="" checked=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          กู้สามัญ
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          กู้ฉุกเฉิน
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          อื่น ๆ
                        </label>
                      </li>
                    </ul>
                    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนงวดที่ค้าง</h6>
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          1 งวด
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          2 งวด
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox" value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          3 งวด
                        </label>
                      </li>
                    </ul>
                    <a href="#"
                      class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline mt-4 ml-1.5">
                      เลือกทั้งหมด</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch justify-between py-4 space-y-3 md:flex-row md:items-center md:space-y-0">
          <ul class="flex-wrap mx-4 hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
            <li class="mr-2">
              <a href="#"
                class="inline-flex items-center py-4 pr-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-primary-600 dark:text-primary-500"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path fill="currentColor"
                    d="M8 8.5c-.08 0-.15-.02-.22-.05L1.28 5.2a.5.5 0 0 1 0-.9l6.5-3.25c.14-.07.31-.07.45 0l6.5 3.25a.5.5 0 0 1 0 .9l-6.5 3.25c-.07.04-.15.05-.22.05ZM2.62 4.75L8 7.44l5.38-2.69L8 2.06L2.62 4.75Z" />
                  <path fill="currentColor"
                    d="M8 11.75c-.08 0-.15-.02-.22-.05l-6.5-3.25a.5.5 0 0 1 0-.9l3.25-1.62c.25-.12.55-.02.67.22c.12.25.02.55-.22.67L2.62 8L8 10.69L13.38 8l-2.36-1.18a.488.488 0 0 1-.22-.67c.12-.25.42-.35.67-.22l3.25 1.62a.5.5 0 0 1 0 .9l-6.5 3.25c-.07.04-.15.05-.22.05Z" />
                  <path fill="currentColor"
                    d="M8 15c-.08 0-.15-.02-.22-.05l-6.5-3.25a.5.5 0 0 1 0-.9l3.25-1.62c.25-.12.55-.02.67.22c.12.25.02.55-.22.67l-2.36 1.18L8 13.94l5.38-2.69l-2.36-1.18a.488.488 0 0 1-.22-.67c.12-.25.42-.35.67-.22l3.25 1.62a.5.5 0 0 1 0 .9l-6.5 3.25c-.07.04-.15.05-.22.05Z" />
                </svg>
                ทั้งหมด
              </a>
            </li>
            <li class="mr-2">
              <a href="#"
                class="inline-flex items-center p-4 border-b rounded-t-lg text-primary-600 border-primary-600 active dark:text-primary-500 dark:border-primary-500 group"
                aria-current="page">
                <svg aria-hidden="true" class="w-4 h-4 mr-2 text-primary-600 dark:text-primary-500" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z">
                  </path>
                </svg>
                รอดำเนินการ
              </a>
            </li>
            <li class="mr-2">
              <a href="#"
                class="inline-flex items-center p-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-primary-600 dark:text-primary-500"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1Zm-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16ZM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z" />
                </svg>
                นำเข้าที่ประชุม
              </a>
            </li>
            <li class="mr-2">
              <a href="#"
                class="inline-flex items-center p-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-primary-600 dark:text-primary-500"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m16 21l-.3-1.5q-.3-.125-.563-.263T14.6 18.9l-1.45.45l-1-1.7l1.15-1q-.05-.35-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263L16 11h2l.3 1.5q.3.125.563.275t.537.375l1.45-.5l1 1.75l-1.15 1q.05.3.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262L18 21h-2ZM2 20v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.725 1.8-.6 3.575T11.25 20H2Zm15-2q.825 0 1.413-.588T19 16q0-.825-.588-1.413T17 14q-.825 0-1.413.588T15 16q0 .825.588 1.413T17 18Zm-7-6q-1.65 0-2.825-1.175T6 8q0-1.65 1.175-2.825T10 4q1.65 0 2.825 1.175T14 8q0 1.65-1.175 2.825T10 12Z" />
                </svg>
                ดำเนินการแล้ว
              </a>
            </li>
            <li class="mr-2">
              <a href="#"
                class="inline-flex items-center p-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-primary-600 dark:text-primary-500"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M12 21q-3.45 0-6.013-2.288T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.038T19 12q0-2.925-2.038-4.963T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z" />
                </svg>
                ประวัติชำระแล้ว
              </a>
            </li>
          </ul>

          <div class="inline-flex flex-col mx-4 rounded-md shadow-sm md:flex-row" role="group">
            <button type="button"
              class="flex px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 mr-2 text-primary-600 dark:text-primary-500"
                fill="currentColor" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6m4 18H6V4h7v5h5v11m-2-9v7.1L13.9 16l-2.8 2.8L8.3 16l2.8-2.8L8.9 11H16Z" />
              </svg>
              Export
            </button>
            <button type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 border-x md:border-x-0 md:border-t md:border-b hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
              Archive all
            </button>
            <button type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
              Delete all
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input id="checkbox-all" type="checkbox"
                      class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">ลำดับ</th>
                <th scope="col" class="px-4 py-3">ชื่อ</th>
                <th scope="col" class="px-4 py-3">ครั้งที่</th>
                <th scope="col" class="px-4 py-3">งวดที่</th>
                <th scope="col" class="px-4 py-3">เป็นจำนวนเงิน</th>
                <th scope="col" class="px-4 py-3">สถานะ</th>
                <th scope="col" class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 3" class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td class="px-4 py-2 w-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()"
                      class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-4 py-2 w-15 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ i }}
                </th>
                <td class="px-4 py-2 whitespace-nowrap">
                  นาย บลาๆๆๆ
                </td>
                <td class="px-4 py-2 whitespace-nowrap">
                  {{ randomnumber() }}
                </td>
                <td class="px-4 py-2 whitespace-nowrap">
                  {{ randomnumber2() }}
                </td>
                <td class="px-4 py-2 whitespace-nowrap">
                  {{ randomnumber() * 25000 }} THB
                </td>
                <td v-if="i % 2 == 0" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="flex items-center">
                    <div class="w-3 h-3 mr-2 bg-yellow-500 border rounded-full"></div>
                    รอติดตามทวงถาม
                  </div>
                </td>
                <td v-if="i % 2 != 0" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="flex items-center">
                    <div class="w-3 h-3 mr-2 bg-blue-500 border rounded-full"></div>
                    ทวงถามแล้ว
                  </div>
                </td>
                <td class="px-4 py-2 ">
                  <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown"
                    class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  <div id="-dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                      <li>
                        <a href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">แสดง</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">แก้ไข</a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ลบ</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            แสดง
            <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
            จาก
            <span class="font-semibold text-gray-900 dark:text-white">1000</span>
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page"
                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section> -->
</template>

<script setup lang="ts">
// const state = 1;
const state = ref(1);

const data = ref([
  {
    ID: 111111,
    name: 'นายหนึ่ง สอง',
    type: 'สามัญ',
    amount: '100,000',
    objective: 'ชำระหนี้'
  },
  {
    ID: 22222,
    name: 'นายสาม สี่',
    type: 'ฉุกเฉิน',
    amount: '800,000',
    objective: 'การอันจำเป็น'
  },
  {
    ID: 333333,
    name: 'นายห้า หก',
    type: 'พิเศษ',
    amount: '50,000',
    objective: 'เพื่อการศึกษาบุตร'
  },
  {
    ID: 444444,
    name: 'นายเจ็ด แปด',
    type: 'สามัญ',
    amount: '450,000',
    objective: 'การอันจำเป็น'
  },
  {
    ID: 555555,
    name: 'นายเก้า สิบ',
    type: 'สามัญ',
    amount: '2,000,000',
    objective: 'ชำระหนี้'
  },
])

function setstate(i: number) {
  state.value = i;
  console.log(state)
}
function randomnumber() {
  return Math.floor(Math.random() * 3) + 1;
}
function randomnumber2() {
  return Math.floor(Math.random() * 12) + 1;
}
</script>
