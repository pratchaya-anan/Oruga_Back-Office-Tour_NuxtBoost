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
              ใบประมาณการเบิกเงินสดย่อย
            </div>
            <div class="col-span-3 text-center">Disbursement Estimate</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">2310652498375</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/06/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-2 m-5 text-xs">
        <div class="col-span-1">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อผู้ขอเบิก:</div>
            <div class="col-span-2">นายสรณ์สิริ สายบุตร</div>
            <div class="col-span-1 font-bold">ฝ่าย/แผนก:</div>
            <div class="col-span-2">บริการลูกค้า</div>
            <div class="col-span-1 font-bold">
              วัตถุประสงค์การยืมเงินทดลองจ่าย:
            </div>
            <div class="col-span-2">ค่าใช้จ่ายในทัวร์</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-2">
            <div class="col-span-1 font-bold">วันที่ต้องการใช้เงิน:</div>
            <div class="col-span-1 text-right">03/07/2566</div>
            <div class="col-span-1 font-bold">โครงการ:</div>
            <div class="col-span-1 text-right">องค์การบริหารส่วนตำบลโพนงาม</div>
            <div class="col-span-1 font-bold">รายละเอียดโครงการ/กิจกรรม:</div>
            <div class="col-span-1 text-right">นำสมาชิกเข้าร่วมการอบรมณ์</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <!-- <th>รายละเอียดค่าใช้จ่าย</th> -->
            <th>ประเภทค่าใช้จ่าย</th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>ยอดสุทธิ</th>
          </tr>
          <tr v-for="(i, idx) in datapaper" class="h-10 text-xs">
            <td>{{ idx + 1 }}</td>
            <!-- <td></td> -->
            <td>{{ i.type }}</td>
            <td>{{ i.price }}</td>
            <td>{{ i.unit }}</td>
            <td>{{ i.price * i.unit }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-2">
          <div class="flex">
            <div class="font-black w-[100px]">ตัวอักษร:</div>
            <div class="font-black">แปดหมื่นสองพันแปดร้อยบาทถ้วน</div>
          </div>
          <div class="font-black">
            ผู้อนุมัติ (แบบอิเล็กทอรนิกส์): นางสาวรินดา จุตตะโน
          </div>
          <div class="text-xs">
            ข้าพเจ้าขอรับรองว่ารายการที่กล่าวมาข้างต้นเป็นความจริง
            พร้อมหลักฐานการจ่าย/แผนประกอบการที่ส่งมา
            รวมทั้งจำนวนเงินที่ขอเบิกถูกต้องตามระเบียบบริษัททุกประการ
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div class="font-bold">รวมสุทธิ</div>
          <div class="text-right font-bold">82,800</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[250px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้ขอเบิก</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้อนุมัติ/ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้จ่ายเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center mt-3">
    <NuxtLink href="/paper_edit/disbursement_item">
      <o-button>
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon> แก้ไข
      </o-button>
    </NuxtLink>
    <o-button @click="print">
      <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"></Icon> พิมพ์
    </o-button>
    <NuxtLink href="/paper_list/disbursement_list">
      <o-button variant="info">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="iconamoon:close-bold"></Icon>
        ปิด
      </o-button>
    </NuxtLink>
  </div>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const datapaper = ref([
  {
    type: "ค่าน้ำมัน",
    price: 5600,
    unit: 3,
  },
  {
    type: "ค่าไกด์",
    price: 2000,
    unit: 2,
  },
  {
    type: "ค่าเช่าเหมายานพาหนะท้องถิ่น",
    price: 52000,
    unit: 1,
  },
  {
    type: "ค่าอารหาร",
    price: 10000,
    unit: 1,
  },
]);
function print() {
  window.print();
}

onMounted(() => {
  initFlowbite();
});
</script>
