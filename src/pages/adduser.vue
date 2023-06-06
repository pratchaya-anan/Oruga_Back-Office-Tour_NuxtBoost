<template>
  <section>
    <div class="p-5">
      <div>
        <label class="text-4xl font-medium">เพิ่มลูกทัวร์</label>
      </div>
      <hr class="my-5 border-1.5" />
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
            <o-input></o-input>
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
            <o-input></o-input>
          </o-field>
        </div>
      </div>
      <div>
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
            <o-input></o-input>
          </o-field>
        </div>
      </div>
      <div>
        <o-field label="หมายเหตุ">
          <o-input type="textarea"></o-input>
        </o-field>
      </div>
      <hr class="my-4 border-1.5" />
      <div class="flex justify-end py-5">
        <o-button>เพิ่มลูกทัวร์ ></o-button>
      </div>
    </div>
  </section>

  <span class="sr-only">Loading...</span>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
