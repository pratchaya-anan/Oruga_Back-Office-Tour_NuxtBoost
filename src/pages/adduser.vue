<template>
  <section>
    <LayoutPageTitle> Add Member / เพิ่มลูกทัวร์ </LayoutPageTitle>
    <UiCard>
      <div>
        <div>
          <label class="text-2xl font-medium">ข้อมูลส่วนตัว</label>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div>
            <o-field label="ชื่อภาษาไทย">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="สุกลภาษาไทย">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="ชื่อภาษาอังกฤษ">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="สุกลภาษาอังกฤษ">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="เพศ">
              <o-select placeholder="เลือกเพศ">
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
              </o-select>
            </o-field>
          </div>
          <div>
            <o-field label="สัญชาติ">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="วัน/เดือน/ปีเกิด">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="เลขบัตรประชาชน">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="เบอร์โทรศัพท์">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="ประเภทเตียง">
              <o-select placeholder="กำหนดประเภทเตียง">
                <option value="double">เตียงคู่</option>
                <option value="single">เตียงเดี่ยว</option>
              </o-select>
            </o-field>
          </div>
          <div>
            <o-field label="ที่อยู่ตามบัตรประชาชน">
              <o-input type="textarea"></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="หมายเหตุ">
              <o-input type="textarea"></o-input>
            </o-field>
          </div>
        </div>

        <hr class="my-5 border-1.5" />
        <div>
          <label class="text-2xl font-medium">ข้อมูลพาสปอร์ต</label>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div>
            <o-field label="หมายเลขพาสปอต">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="ตรวจลงตราเลขที่">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="วันออกพาสปอร์ต">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="วันหมดอายุพาสปอร์ต">
              <o-input variant="danger"></o-input>
              <div class="flex text-sm text-red-800 rounded-lg" role="alert">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p class="text-red-500">บัตรหมดอายุ</p>
              </div>
            </o-field>
          </div>
        </div>
        <hr class="my-5 border-1.5" />
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div>
            <label class="text-2xl font-medium">อัพโหลดไฟล์เอกสาร</label>
          </div>
          <div>
            <label class="text-2xl font-medium">ไฟล์และเอกสารที่แนบ</label>
          </div>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  (พาสปอร์ต, บัตรประชาชนและเอกสารอื่นๆ) PDF, PNG, JPG
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          <UiCard>
            <UiCard>
              <Icon class="w-6 h-6 text-gray-600" name="tabler:file"></Icon
              >Passport.pdf
            </UiCard>
            <UiCard>
              <Icon class="w-6 h-6 text-gray-600" name="tabler:file"></Icon
              >บัตรประชาชน.pdf
            </UiCard>
          </UiCard>
        </div>

        <hr class="my-4 border-1.5" />
        <div class="flex justify-end">
          <NuxtLink href="/tour_manage">
            <o-button>ยกเลิก</o-button>
          </NuxtLink>
          <NuxtLink href="/tour_data">
            <o-button>บันทึก</o-button>
          </NuxtLink>
        </div>
      </div>
    </UiCard>
  </section>

  <span class="sr-only">Loading...</span>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
