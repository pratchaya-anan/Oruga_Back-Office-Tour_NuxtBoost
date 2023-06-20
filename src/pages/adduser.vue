<template>
  <section>
    <LayoutPageTitle> adduser / เพิ่มลูกทัวร์ </LayoutPageTitle>
    <UiCard>
      <div>
        <!-- <div>
        <label class="text-4xl font-medium">เพิ่มลูกทัวร์</label>
      </div> -->
        <!-- <hr class="my-5 border-1.5" /> -->
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
        </div>
        <div class="pt-2">
          <o-field label="ที่อยู่ตามบัตรประชาชน">
            <o-input type="textarea"></o-input>
          </o-field>
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
        <div class="pt-2">
          <o-field label="หมายเหตุ">
            <o-input type="textarea"></o-input>
          </o-field>
        </div>
        <hr class="my-4 border-1.5" />
        <div class="flex justify-center">
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
