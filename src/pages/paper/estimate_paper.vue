<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border solid rounded bg-white drop-shadow">
      <div class="grid grid-rows-2 m-5">
        <img class="w-[100px]" src="../../assets/images/ll-01.png" alt="Logo">
        <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
            <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
            <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
            <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
          </div>

          <!-- ชื่อใบ/ข้อมูลใบ -->
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">ใบเคลียร์เงินสดย่อย</div>
            <div class="col-span-3 text-center">Estimate Clearing</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0642531698546</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">09/07/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5">

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5  text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-2">
            <div class="col-span-1 font-bold">อ้างอิงถึงเลขที่ใบขอเคลียร์เงินทดลองจ่าย:</div>
            <div class="col-span-1 ">2310652498375</div>
            <div class="col-span-1 font-bold">โครงการ:</div>
            <div class="col-span-1 ">องค์การบริหารส่วนตำบลโพนงาม</div>
            <div class="col-span-1 font-bold">รายละเอียดโครงการ/กิจกรรม:</div>
            <div class="col-span-1 ">นำสมาชิกเข้าร่วมการอบรมณ์</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ผู้ขอเคลียร์:</div>
            <div class="col-span-2 text-right">นายสรณ์สิริ สายบุตร</div>
            <div class="col-span-1 font-bold">ฝ่าย/แผนก:</div>
            <div class="col-span-2 text-right">บริการลูกค้า</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>วันที่ใบเสร็จ</th>
            <th>รายละเอียดค่าใช้จ่าย</th>
            <th>เลขที่ใบเสร็จ</th>
            <th>เลขประจำตัวผู้เสียภาษี</th>
            <th>ยอดสุทธิ</th>
          </tr>
          <tr v-for="(i, idx) in datapaper" class="h-10 text-xs">
            <td>{{ idx+1 }}</td>
            <td>{{ i.datereceipt }}</td>
            <td>{{ i.detail }}</td>
            <td>{{ i.receiptnumber }}</td>
            <td>{{ i.taxnumber }}</td>
            <td>{{ i.price }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-2">
          <div class="flex">
            <div class="font-black mr-5">รายละเอียดโครงการ/กิจกรรม:</div>
            <div> เที่ยวที่ไหน</div>
          </div>
          <div class="flex">
            <div class="font-black mr-5">ผู้อนุมัติ (แบบอิเล็กทอรนิกส์):</div>
            <div> นายสอง สามสี่</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div>ยอดสุทธิ</div>
          <div class="text-right">49,300 บาท</div>
          <div>ยอกเงินประมาณการ</div>
          <div class="text-right">82,800 บาท</div>
          <div>ยอดเงินส่งคืน</div>
          <div class="text-right">33,500 บาท</div>
          <div>ยอดเงินเบิกเพิ่ม </div>
          <div class="text-right">0 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[200px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้ขอเคียร์</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้อนุมัติ / ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้รับเคียร์เงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b border-black mx-5">
          <div>ผู้อำนวยการฝ่ายการเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>

    </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const datapaper = ref([
{
    datereceipt:'05/07/2566',
    detail:'ค่าน้ำมันคันที่ 1 และ 2',
    type:'ค่าน้ำมัน',
    receiptnumber:'008327530',
    taxnumber:'0237854852147',
    price:13300,
  },
  {
    datereceipt:'08/07/2566',
    detail:'ค่าไกด์ทั้งสองคน',
    type:'ค่าน้ำมัน',
    receiptnumber:'007167530',
    taxnumber:'0435698165428',
    price:4000,
  },
  {
    datereceipt:'06/07/2566',
    detail:'ค่าเช่าเหมายานพาหนะท้องถิ่น 3 คัน',
    type:'ค่าเช่าเหมายานพาหนะท้องถิ่น',
    receiptnumber:'003481630',
    taxnumber:'0529863568452',
    price:32000,
  },
])

onMounted(() => {
  initFlowbite();
});
</script>