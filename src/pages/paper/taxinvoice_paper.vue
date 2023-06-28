<template>
  <section>
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border solid rounded bg-white drop-shadow">
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
              ใบกำกับภาษี/ใบส่งของ
            </div>
            <div class="col-span-3 text-center">Tax Invoice/Delivery Order</div>
            <div class="col-span-3 text-center text-[11px]">
              ต้นฉบับ/Original (เอกสารออกเป็นชุด)
            </div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">T230430-0001</div>
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
            <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
            <div class="col-span-2">นายภาคภูมิ ภูเขียว</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2">
              175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
            </div>
            <div class="col-span-1 font-bold">เลขประจำตัวผู้เสียภาษี:</div>
            <div class="col-span-2">1522236</div>
            <div class="flex items-center">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">สำนักงานใหญ่</label>
            </div>
            <div class="flex items-center">
              <input checked id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">สาขาที่:
                บ้านใหญ่</label>
            </div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right">1552555214</div>
            <div class="col-span-1 font-bold">ผู้ขาย:</div>
            <div class="col-span-2 text-right">นายกอไก่ ขอไข่</div>
            <div class="col-span-1 font-bold">ฝ่าย/แผนก:</div>
            <div class="col-span-2 text-right">การเงิน</div>
            <div class="col-span-2 font-bold">ยืนยันราคาวันที่:</div>
            <div class="col-span-1 text-right">31/03/2566</div>
            <div class="col-span-2 font-bold">กำหนดชำระ:</div>
            <div class="col-span-1 text-right">31/03/2566</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>รายการสินค้า</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>ส่วนลด</th>
            <th>ภาษี</th>
            <th>จำนวนเงิน</th>
          </tr>
          <tr v-for="(i, idx) in dataitem" :key="idx" class="h-10 text-xs">
            <td>{{ idx+1 }}</td>
            <td>{{ i.nameitem }}</td>
            <td>{{ i.quantity }}</td>
            <td>{{ i.unitprice }}</td>
            <td>{{ i.discount }}</td>
            <td>{{ i.tax }}</td>
            <td>{{ i.amount }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          <div class="text-xs">
            - หากสินค้าไม่ครบถ้วนกรุณาแจ้งกลับบริษัทฯ ภายใน 7 วัน
            หลังจากได้รับสินค้าแล้ว มิฉะนั้นบริษัทฯ จะไม่รับผิดชอบใด ๆ ทั้งสิ้น
            <br />
            -
            กรรมสิทธิ์สินค้าตามใบส่งของนี้ยังถือว่าเป็นของผู้ขายอยู่จนกว่าผู้ซื้อจะได้ชำระเงินหรือเช็คขึ้นเงินเรียบร้อย
            <br />
            - หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม “บริษัทนิลผกาทัวร์จำกัด”
            และขีดฆ่าหรือผู้ถือออก
          </div>
          <div class="flex">
            <div class="font-black w-30">ตัวอักษร:</div>
            <div class="font-black">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div>รวมเงิน</div>
          <div class="text-right">6,000 บาท</div>
          <div>หักส่วนลดพิเศษ</div>
          <div class="text-right">6,000 บาท</div>
          <div>มูลค่ายกเว้นภาษี</div>
          <div class="text-right">6,000 บาท</div>
          <div>มูลค่าคิดภาษี</div>
          <div class="text-right">6,000 บาท</div>
          <div>ภาษีมูลค่าเพิ่ม</div>
          <div class="text-right">420 บาท</div>
          <div class="font-bold">จำนวนเงินทั้งสิ้น</div>
          <div class="text-right font-bold">6,420 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[100px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับสินค้า</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้ส่งสินค้า</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้ประสานงาน</div>
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
    <NuxtLink href="/paper_edit/taxinvoice_item">
      <o-button>
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon> แก้ไข
      </o-button>
    </NuxtLink>
    <o-button @click="print">
      <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"></Icon> พิมพ์
    </o-button>
    <NuxtLink href="/paper_list/taxinvoice_list">
      <o-button variant="info">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="iconamoon:close-bold"></Icon>
        ปิด
      </o-button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const dataitem = [
  {
    nameitem:'ค่าตั๋วเครื่องบิน',
    quantity:3,
    unitprice:'1000',
    discount:'0%',
    tax:210,
    amount:'3210',
  },
  {
    nameitem:'ค่าโรงแรม',
    quantity:2,
    unitprice:'1500',
    discount:'0%',
    tax:210,
    amount:'3210',
  }
  
]

function print() {
  window.print();
}

onMounted(() => {
  initFlowbite();
});
</script>

<style>
@media print {
  header {
    display: none;
  }

  footer {
    display: none;
  }

  #page {
    margin: 0;
    border: initial;
    border-radius: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
    print-color-adjust: exact;
  }

  #pagebreak {
    clear: both;
    page-break-after: always;
  }

  /* #page {padding: none; margin: none; border: none; box-shadow: none;} */
}
</style>
