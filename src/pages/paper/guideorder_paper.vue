<template>
    <section>
      <div
        class="w-[210mm] h-[297mm] p-[2vmin] my-1 mx-auto border-1 solid rounded bg-white drop-shadow"
      >
        <div class="grid grid-rows-2 m-5">
          <img
            class="w-[12vmin]"
            src="../../assets/images/ll-01.png"
            alt="Logo"
          />
          <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <div>บริษัท ศรีดาราทัวร์ จำกัด</div>
            <div>ชื่อมัคคุเทศก์ นายวุฒินันท์ ศรีสุระ</div>
            <div>ใบอนุญาตเลขที่ 11-57185</div>
          </div>

          <!-- ชื่อใบ/ข้อมูลใบ -->
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">ใบสั่งงานมัคคุเทสก์</div>
            <div class="col-span-3 text-center">GuideOrder</div>
            <div class="font-bold">ใบอนุญาต:</div>
            <div class="col-span-2 text-right">51/00481</div>
            <div class=" font-bold">วันที่:</div>
            <div class="col-span-2 text-right">...................</div>
            <div class="font-bold">ใบสั่งงาน:</div>
            <div class="col-span-2 text-right">ทัวร์เกาะเสม็ด เสร็จทุกราย</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5">

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-4 m-5  text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-2">
            <div class="mt-2 col-span-1 font-bold">จำนวนนักท่องเที่ยว</div>
            <div class="mt-2 col-span-1 font-bold">ผู้ใหญ่ 30   เด็ก 5</div>
            <div class="mt-2 col-span-1 font-bold">ห้องเดี่ยว</div>
            <div class="mt-2 col-span-1 font-bold">-</div>
            <div class="mt-2 col-span-1 font-bold">ห้องคู่</div>
            <div class="mt-2 col-span-1 font-bold">11</div>
            <div class="mt-2 col-span-1 font-bold">ห้องนอน 3 รวม</div>
            <div class="mt-2 col-span-1 font-bold">1</div>
            <div class="mt-2 col-span-1 font-bold">หมายเหตุ</div>
            <div class="mt-2 col-span-1 font-bold">สนุกดี</div>

          </div>
        </div>

        <div class="col-span-2">
          <div class="border-l px-5">
          <div class="grid grid-cols-2">
            <div class="mt-2 col-span-1 font-bold">กำหนดการเดินทาง:</div>
            <div class="mt-2 col-span-1 font-bold">21-24 เมษายน 2566</div>
            <div class="mt-2 col-span-1 font-bold">เดินทางจาก:</div>
            <div class="mt-2 col-span-1 font-bold">อำนาญเจริญ</div>
            <div class="mt-2 col-span-1 font-bold">ถึง:</div>
            <div class="mt-2 col-span-1 font-bold">เว้ ดานัง ประเทศเวียดนาม</div>
            <div class="mt-2 col-span-1 font-bold">รถเดินทาง:</div>
            <div class="mt-2 col-span-1 font-bold">รถบัสลาว</div>
            <div class="mt-2 col-span-1 font-bold">ทะเบียน: </div>
            <div class="mt-2 col-span-1 font-bold">8989 นครหลวงเวียงจันทร์</div>
            <div class="mt-2 col-span-1 font-bold">โทร.</div>
            <div class="mt-4 col-span-1 font-bold">026-568-4785</div>
            
</div>
          </div>
        </div>
        </div>
        

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="min-h-50 border-b-0 border-black">
        <table class="mt-3 w-full ">
          <tr class="h-8 border-y border-black text-sm text-center">
            <th class="w-25">วันเดือนปี</th>
            <th>สถานที่ท่องเที่ยว</th>
            <th>โรงแรม</th>
          </tr>
          <tr class="h-10 text-xs border-b border-black">
            <td class="px-6 py-2">21/4/2566</td>
            <td class="px-6 py-2">
              05.00 น. รับคณะที่จุดนัดหมายบ้านหนองผื่อ อ.ชานุมาน อำนาจเจริญ<br>
              ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว<br>
              12.00 น.รับประทานอาหารเที่ยง หน้าด่านลาวบาว ระหว่างรอเอกสารข้านแดน<br>
              จากนั้นเดินทางต่อไปยังเมือง เว้-ตานัง /รับประทานอาหารเย็น<br>
              เที่ยวชมสะพานมังกร / สะพานแห่งความรัก / เข้าที่พัก
            </td>
            <td class="px-6 py-2">โรงแรม NHU MINH PLAZA</td>
          </tr>

          <tr class="h-10 text-xs border-b border-black">
            <td class="px-6 py-2">22/4/2566</td>
            <td class="px-6 py-2">
              เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางไปเมืองฮอยอัน / นั่งเรือกระด้ง<br>
              เที่ยง รับประทานอาหารเที่ยง / เดินทางขึ้นไปบาน่าฮิลล์<br>
              บ่าย นั่งกระเช้าลอยฟ้า / สะพานเมืองทอง / สวนดอกไม้<br>
              เย็น รับประทานอาหารเย็น / เข้าที่พัก
            </td>
            <td class="px-6 py-2">โรงแรม Mercure Bana hills</td>
          </tr>
          <tr class="h-10 text-xs border-b border-black">
            <td class="px-6 py-2">23/4/2566</td>
            <td class="px-6 py-2">
              เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางลงจากบาน่าฮิลล์สู่เมืองเว้<br>
              เที่ยง รับประทานอาหารเที่ยง / ชมพระราชวังได๋โหน๋ย / ตลาดดงบา<br>
              วัดเทียนมู๋ / ล่องเรือมังกร / รับประทานอาหารเย็น / เข้าที่พัก
            </td>
            <td class="px-6 py-2">โรงแรม Century hotel</td>
          </tr>
          <tr class="h-10 text-xs border-b border-black">
            <td class="px-6 py-2">24/4/2566</td>
            <td class="px-6 py-2">
              เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางกลับประเทศไทย<br>
              เดินทางถึงด่านลาวบาว ทำพิธีการข้ามด่าน / รับประทานอาหารเที่ยง<br>
              เดินทางต่อมายังด่านสะหวันนะเขต / รับประทานอาหารเย็น<br>
              20.00 น.เดินทางถึงจุดหมายปลายทางโดยสวัสดิภาพ
            </td>
            <td class="px-6 py-2"></td>
          </tr>
          <tr class="h-20 text-xs">
            <td></td>
            <td>
              ค่าจ้างมัคคุเทศก์................................................................................................................................บาท
            </td>
            <td></td>
          </tr>
          <tr class="h-10 text-xs">
            <td></td>
            <td>
              มัคคุเทศก์ลงนาม..........................................................................................................................................
            </td>
            <td></td>
          </tr>
        </table>
      </div>
      <table class="mt-25 ml-10 w-full">
        <tr>
          <td><b>ผู้มีอำนาจลงนาม นางศรีดารา ประเปรียว</b></td>
          <td><b>ตราประทับบริษัท</b>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const radio = ref("default");
      const data = ref([
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          date: "2016-10-15 13:43:27",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          date: "2016-12-15 06:00:53",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          date: "2016-04-26 06:26:28",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          date: "2016-04-10 10:28:46",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          date: "2016-12-06 14:38:38",
          gender: "Female",
        },
      ]);
  
      const columns = ref([
        {
          field: "id",
          label: "ลำดับ",
          numeric: true,
        },
        {
          field: "first_name",
          label: "รหัสสินค้า",
        },
        {
          field: "last_name",
          label: "รายการสินค้า",
        },
        {
          field: "date",
          label: "จำนวน",
          position: "centered",
        },
        {
          field: "gender",
          label: "ราคาต่อหน่วย",
        },
        {
          field: "w",
          label: "ส่วนลด",
        },
        {
          field: "q",
          label: "ภาษี",
        },
        {
          field: "r",
          label: "จำนวนเงิน",
        },
      ]);
  
      return {
        radio,
        data,
        columns,
      };
    },
  });
  </script>
  