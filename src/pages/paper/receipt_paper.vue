<template>
  <section>
    <div class="w-[210mm] h-[297mm] p-[5mm] mx-auto border rounded bg-white">
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
              ใบเสร็จรับเงิน
            </div>
            <div class="col-span-3 text-center">Receipt</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">R230430-0001</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5 text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">หน่วยงาน/ลูกค้า:</div>
            <div class="col-span-2">เทศบาลขอนแก่น</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2">
              175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000
            </div>
            <div class="col-span-1 font-bold">สาขา:</div>
            <div class="col-span-2">สำนักงานใหญ่</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th>ลำดับ</th>
            <th>วันที่</th>
            <th>เลขที่ใบกำกับภาษี</th>
            <th>รายละเอียด</th>
            <th>จำนวนเงิน</th>
          </tr>
          <tr v-for="(i,idx) in tableData" class="h-10 text-xs">
            <td>{{ idx+1 }}</td>
            <td>{{ i.productcode }}</td>
            <td>{{ i.productlist }}</td>
            <td>{{ i.quantity }}</td>
            <td>{{ i.unitprice }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง -->
      <div class="grid grid-cols-5 text-xs p-2 border-b border-black">
        <div class="col-span-1">
          <div class="font-bold mb-1">รวมทั้งสิ้น:</div>
          <div class="font-bold mb-1">รวมทั้งสิ้น ตัวอักษร:</div>
          <div class="font-bold mb-1">ชำระผ่าน:</div>
          <div class="font-bold mb-1">หักภาษี ณ ที่จ่าย :</div>
          <div class="font-bold mb-1">เลขที่เช็ค // วันที่เช็ค</div>
          <div class="font-bold mb-1">หมายเหตุ:</div>
        </div>
        <div class="col-span-4">
          <div class="mb-1">12,840 บาท</div>
          <div class="mb-1">หนึ่งหมื่นสองพันแปดร้อยสี่สิบบาทถ้วน</div>
          <div class="mb-1">เช็คธนาคาร</div>
          <div class="mb-1">898.80 บาท</div>
          <div class="mb-1">7842744 // 24/03/2566</div>
          <div class="mb-1">
            ใบเสร็จรับเงินฉบับนี้จะสมบูรณ์ต่อเมื่อได้รับเงินตามเช็คเรียบร้อยและต้องมีลายมือชื่อกรรมการ
            ผู้มีอำนาจหรือผู้แทนที่ถูกต้องและผู้รับเงิน
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 mt-40 text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้จัดทำ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>กรรมการผู้มีอำนาจหรือตัวแทน</div>
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

const tableData = [
  {
    id: 1,
    productcode: "24/03/2566",
    productlist: "CR230430-0001",
    quantity:
      "เทศบาลขอนแก่น 175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000",
    unitprice: "6,420",
  },
  {
    id: 2,
    productcode: "24/03/2566",
    productlist: "CR230430-0002",
    quantity:
      "เทศบาลขอนแก่น 175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น 40000",
    unitprice: "6,420",
  },
];


function print() {
  window.print();
}

onMounted(() => {
  initFlowbite();
});
</script>
