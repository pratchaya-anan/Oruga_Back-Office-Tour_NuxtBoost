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
              ใบเสนอราคา/ยืนยันการสั่งซื้อ
            </div>
            <div class="col-span-3 text-center">Quatation</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">Q230430-0001</div>
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
            <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
            <div class="col-span-2">นายภาคภูมิ ภูเขียว</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2">
              175 ม.12 ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น
            </div>
            <div class="col-span-1 font-bold">ID TAX:</div>
            <div class="col-span-2">1522236</div>
            <div class="col-span-1 font-bold">โทร:</div>
            <div class="col-span-2">0625584785</div>
            <div class="col-span-1 font-bold">Email:</div>
            <div class="col-span-2">somchai@gmail.com</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right">1552555214</div>
            <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
            <div class="col-span-2 text-right">นายกอไก่ ขอไข่</div>
            <div class="col-span-1 font-bold">ฝ่าย/แผนก:</div>
            <div class="col-span-2 text-right">การเงิน</div>
            <div class="col-span-2 font-bold">ยืนยันราคาภายใน:</div>
            <div class="col-span-1 text-right">30/3/2566</div>
            <div class="col-span-1 font-bold">วันส่งของ:</div>
            <div class="col-span-2 text-right">5/04/2566</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <!-- <th>รหัสสินค้า</th> -->
            <th>รายการสินค้า</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>ส่วนลด</th>
            <th>ภาษี</th>
            <th>จำนวนเงิน</th>
          </tr>
          <tr class="h-10 text-xs">
            <td>1</td>
            <!-- <td>---</td> -->
            <td>ค่าตั๋วเครื่องบิน</td>
            <td>3</td>
            <td>1000</td>
            <td>0</td>
            <td>7%</td>
            <td>3,210</td>
          </tr>
          <tr class="h-10 text-xs">
            <td>2</td>
            <!-- <td>---</td> -->
            <td>ค่าโรงแรม</td>
            <td>2</td>
            <td>1,500</td>
            <td>0</td>
            <td>7%</td>
            <td>3,210</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          <div>
            กำหนดยืนราคา 15 วัน <br />
            จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
            ขอขอบพระคุณมา ณ ที่นี้
          </div>
          <div class="font-bold">ดังรายละเอียดธนาคารดังต่อไปนี้ :</div>
          <div>
            1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
            โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน <br />
            2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div>มัดจำ</div>
          <div class="text-right">3,000 บาท</div>
          <div>มูลค่าสินค้า</div>
          <div class="text-right">6,000 บาท</div>
          <div>ส่วนลดสินค้า</div>
          <div class="text-right">0 บาท</div>
          <div>รวมเงิน</div>
          <div class="text-right">6,000 บาท</div>
          <div>ภาษีมูลค่าเพิ่ม</div>
          <div class="text-right">420 บาท</div>
          <div class="font-bold">จำนวนเงินทั้งสิ้น</div>
          <div class="text-right font-bold">6,420 บาท</div>
        </div>
      </div>

      <div class="px-5 flex justify-end">
        <div class="px-5 text-center text-xs">
          ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ <br />
          ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[100px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้เสนอราคา</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้อนุมัติสั่งซื้อ</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center mt-3">
    <NuxtLink href="/paper_edit/quotation_item">
      <o-button>
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon> แก้ไข
      </o-button>
    </NuxtLink>
    <o-button @click="print">
      <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"></Icon> พิมพ์
    </o-button>
    <NuxtLink href="/paper_list/quotation_list">
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
