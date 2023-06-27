<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div
      class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow"
    >
      <div class="grid grid-rows-2 m-5">
        <img class="w-[100px]" src="../../assets/images/ll-01.png" alt="Logo" />
        <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
            <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
            <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
            <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
          </div>

          <!-- ชื่อใบ/ข้อมูลใบ -->
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">
              ใบสำคัญรับเงิน
            </div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0841142174178</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5 w-full text-xs">
        <div class="col-span-1 font-bold">ผู้ขายสินค้า / ผู้ให้บริการ:</div>
        <div class="col-span-2">ศศิศ วิรัตน์จินดา</div>
        <div class="col-span-1 font-bold">เลขประจำตัวประชาชน:</div>
        <div class="col-span-2">1023456789123</div>
        <div class="col-span-1 font-bold">เบอร์โทร:</div>
        <div class="col-span-2">0848456732</div>
        <div class="col-span-1 font-bold">ที่อยู่:</div>
        <div class="col-span-2">
          111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100
        </div>
        <div class="flex col-span-2 mt-2">
          <div class="flex items-center mr-5">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >จ่ายบุคคลภายใน</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >จ่ายบุคคลภายนอก</label
            >
          </div>
        </div>
        <div class="col-span-2 my-1 flex w-full text-xs">
          <div class="font-bold">รับจาก:</div>
          <div class="ml-5">ศศิศ วิรัตน์จินดา</div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th>วัน เดือน ปี</th>
            <th>รายการ</th>
            <th>จำนวนเงิน (บาท)</th>
            <!-- <th>หักภาษี ณ ที่จ่าย (%)</th>
            <th>เงินได้สุทธิ์ (บาท)</th> -->
          </tr>
          <tr class="h-10 text-xs">
            <td>31/03/2566</td>
            <td>เที่ยวเกาะ เลาะรัก</td>
            <td>5,000</td>
            <!-- <td>7%</td>
            <td>4,650</td> -->
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div
        class="grid grid-cols-3 content-center gap-5 py-2 text-xs border-b border-black"
      >
        <div class="col-span-2 flex">
          <div class="mr-[15px]">จำนวนเงิน(ตัวอักษร) Total Amount:</div>
          <div class="text-right">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
        </div>
        <div class="flex">
          <div class="mr-[15px]">รวม(Total):</div>
          <div class="text-right">59920 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-3 indent-8">
          ข้าพเจ้า นายกอไก่ ขอไข่ (ผู้เบิกจ่าย)ตำแหน่ง บัญชี ขอรับรองว่า
          รายจ่ายข้างต้นนี้ไม่อาจเรียกเก็บใบเสร็จรับเงินจากผู้รับเงินได้และข้าพเจ้าได้จ่ายไปในงาน
          ของทางบริษัท ศรีดาราทัวร์จำกัด โดยแท้จริง ตั้งแต่วันที่ 19 เมษายน 2566
          ถึงวันที่ 21 เมษายน 2566
        </div>
      </div>

      <div class="grid grid-cols-3 mt-[100px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>จ่ายเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้อนุมัติ</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center mt-3">
    <NuxtLink href="/paper_edit/receipt_item">
      <o-button>
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon> แก้ไข
      </o-button>
    </NuxtLink>
    <o-button @click="print">
      <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"></Icon> พิมพ์
    </o-button>
    <NuxtLink href="/paper_list/receipt_list">
      <o-button variant="info">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="iconamoon:close-bold"></Icon>
        ปิด
      </o-button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

function print() {
  window.print();
}

onMounted(() => {
  initFlowbite();
});
</script>
