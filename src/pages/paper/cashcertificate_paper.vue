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
              ใบรับรองแทนใบเสร็จรับเงิน
            </div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">3462584695127</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">9/07/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5  text-xs">
        <div class="col-span-2 grid grid-cols-3 m-5 w-full text-xs">
          <div class="col-span-1 font-bold">ชื่อหน่วยงาน (ผู้ซื้อ/ผู้รับบริการ):</div>
          <div class="col-span-2 ">นายสรณ์สิริ สายบุตร</div>
          <div class="col-span-1 font-bold">ที่อยู่:</div>
          <div class="col-span-2 ">111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100</div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-2">
            <div class="col-span-1 font-bold">เลขประจำตัวผู้เสียภาษี:</div>
            <div class="col-span-1 text-right">2345016574356</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th>วัน เดือน ปี</th>
            <th>รายละเอียดรายจ่าย</th>
            <th>จำนวนเงิน (บาท)</th>
          </tr>
          <tr v-for="(i, idx) in datapaper" class="h-10 text-xs">
            <td>{{ i.datereceipt }}</td>
            <td>{{ i.detail }}</td>
            <td>{{ i.price }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div
        class="grid grid-cols-3 content-center gap-5 py-2 text-xs border-b border-black"
      >
        <div class="col-span-2 flex">
          <div class="mr-[15px]">รวมทั้งสิ้น(ตัวอักษร): </div>
          <div class="text-right">สี่หมื่นเก้าพันสามร้อยบาทถ้วน</div>
        </div>
        <div class="flex">
          <div class="mr-[15px]">รวมทั้งสิ้น:</div>
          <div class="text-right">49,300 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-3 indent-8">
          ข้าพเจ้า นายสรณ์สิริ สายบุตร (ผู้เบิกจ่าย)ตำแหน่ง บริการลูกค้า ขอรับรองว่า
          รายจ่ายข้างต้นนี้ไม่อาจเรียกเก็บใบเสร็จรับเงินจากผู้รับเงินได้และข้าพเจ้าได้จ่ายไปในงาน
          ของทางบริษัท ศรีดาราทัวร์จำกัด โดยแท้จริง ตั้งแต่วันที่ 5 มิถุนายน 2566 ถึงวันที่ 8 มิถุนายน 2566
        </div>
      </div>

      <div class="grid grid-cols-2 mt-[100px] text-xs">
        <div class="text-center border-b border-black mx-5">
          <div>ผู้เบิกจ่าย</div>
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
    <NuxtLink href="/paper_edit/cashcertificate_item">
      <o-button>
        <Icon class="mr-3 -ml-1 w-5 h-5" name="mdi:paper-edit"></Icon> แก้ไข
      </o-button>
    </NuxtLink>
    <o-button @click="print">
      <Icon class="mr-3 -ml-1 w-5 h-5" name="ic:round-print"></Icon> พิมพ์
    </o-button>
    <NuxtLink href="/paper_list/cashcertificate_list">
      <o-button variant="info">
        <Icon class="mr-3 -ml-1 w-5 h-5" name="iconamoon:close-bold"></Icon>
        ปิด
      </o-button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';


const datapaper = ref([
  {
    datereceipt: '05/07/2566',
    detail: 'ค่าน้ำมันคันที่ 1 และ 2',
    type: 'ค่าน้ำมัน',
    receiptnumber: '008327530',
    taxnumber: '0237854852147',
    price: 13300,
  },
  {
    datereceipt: '08/07/2566',
    detail: 'ค่าไกด์ทั้งสองคน',
    type: 'ค่าน้ำมัน',
    receiptnumber: '007167530',
    taxnumber: '0435698165428',
    price: 4000,
  },
  {
    datereceipt: '06/07/2566',
    detail: 'ค่าเช่าเหมายานพาหนะท้องถิ่น 3 คัน',
    type: 'ค่าเช่าเหมายานพาหนะท้องถิ่น',
    receiptnumber: '003481630',
    taxnumber: '0529863568452',
    price: 32000,
  },
])

function print() {
  window.print();
}

onMounted(() => { initFlowbite() });
</script>