<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
      <div class="grid grid-rows-1 m-5">
        <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <img class="ml-4 mb-3 w-[100px]" src="../assets/images/ll-01.png" alt="Logo">
            <div>บริษัท ศรีดาราทัวร์ จำกัด</div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="col-span-3 font-bold text-center text-base">ใบสั่งงานมัคคุเทศก์</div>
            <div class="col-span-3 text-center">GuideOrder</div>
            <div class="text-sm font-bold text-right">ใบอนุญาต:</div>
            <div class="col-span-2 text-sm text-center">51/00481</div>
            <div class="text-sm font-bold text-right">วันที่:</div>
            <div class="mt-1 col-span-2 text-sm text-center">...................................................</div>
            <div class="text-sm font-bold text-right">ใบสั่งงาน:</div>
            <div class="mt-1 col-span-2 text-sm text-center">...................................................</div>
          </div>
        </div>
      </div>
      <hr class="mb-1 col-span-3">
      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-4 gap-1">
        <div class="col-span-2 border-r">
          <div class="p-2 grid grid-cols-2 gap-1">
            <div class="col-span-1 text-sm font-bold">ชื่อมัคคุเทศก์</div>
            <div class="col-span-1 text-sm font-normal">นายวุฒินันท์ ศรีสุระ</div>
            <div class="col-span-1 text-sm font-bold">ใบอนุญาตเลขที่</div>
            <div class="col-span-1 text-sm font-normal">11-57185</div>
            <div class="col-span-1 text-sm font-bold">จำนวนนักท่องเที่ยว</div>
            <div class="col-span-1 text-sm font-normal">ผู้ใหญ่ 19 เด็ก 3</div>
            <div class="col-span-1 text-sm font-bold">ห้องเดี่ยว</div>
            <div class="col-span-1 text-sm font-normal">-</div>
            <div class="col-span-1 text-sm font-bold">ห้องคู่</div>
            <div class="col-span-1 text-sm font-normal">11</div>
            <div class="col-span-1 text-sm font-bold">ห้องนอน 3 รวม</div>
            <div class="col-span-1 text-sm font-normal">1</div>
            <div class="col-span-1 text-sm font-bold">หมายเหตุ</div>
            <div class="col-span-1 text-sm font-normal">-</div>
            <div class="col-span-1 text-sm font-bold">โทร.</div>
            <div class="mt-1  col-span-1 text-sm font-normal">...................................................</div>
          </div>
        </div>
        <!-- ข้อมูลฝั่งขวา -->
        <div class="col-span-2">
          <div class="p-2 grid grid-cols-2 gap-1">
            <div class="col-span-1 text-sm font-bold">กำหนดการเดินทาง:</div>
            <div class="col-span-1 text-sm font-normal">21 เมษายน 2566</div>
            <div class="col-span-1 text-sm font-bold">กำหนดการเดินทางกลับ:</div>
            <div class="col-span-1 text-sm font-normal">24 เมษายน 2566</div>
            <div class="col-span-1 text-sm font-bold">จำนวนวัน:</div>
            <div class="col-span-1 text-sm font-normal">4 วัน 3 คืน</div>
            <div class="col-span-1 text-sm font-bold">เดินทางจาก:</div>
            <div class="col-span-1 text-sm font-normal">กาญจนบุรี-เพชรบุรี</div>
            <div class="col-span-1 text-sm font-bold">รถเดินทาง:</div>
            <div class="col-span-1 text-sm font-normal">รถบัสลาว</div>
            <div class="col-span-1 text-sm font-bold">ทะเบียน: </div>
            <div class="col-span-1 text-sm font-normal">8989 นครหลวงเวียงจันทร์</div>
          </div>
        </div>
      </div>


      <!-- รายละเอียดข้อตกลง -->
      <table class="my-2 w-full ">
        <tr class="border-y border-black text-sm text-center">
          <th class="w-[100px]">วันเดือนปี</th>
          <th>สถานที่ท่องเที่ยว</th>
          <th>โรงแรม</th>
        </tr>
        <tr class="text-xs border-b border-black">
          <td class="px-6 py-2">21/4/2566</td>
          <td class="px-6 py-2">
            <p>05.00 น. บ้านหนองผือ
              จุดนัดหมาย อ.ชานุมาน อำนาจเจริญ ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว</p>
            <p>12.00 น. ตม.มุขดาหาร
              รับประทานอาหารเที่ยง หน้าด่านลาวบาว ระหว่างรอเอกสารข้านแดน จากนั้นเดินทางต่อไปยังเมือง เว้-ตานัง</p>
            <p>เย็น เว้-ตานัง
              รับประทานอาหารเย็น / เที่ยวชมสะพานมังกร / สะพานแห่งความรัก / เข้าที่พัก</p>
              <hr class="my-1 col-span-3">
            <p>12.00 น. ทานอาหารเทียง ร้านเลียจาน</p>
            <p>18.00 น. ทานอาหารเย็น ร้านโครตอร่อย!</p>
          </td>
          <td class="px-6 py-2">โรงแรม NHU MINH PLAZA</td>
        </tr>


        <tr class="text-xs border-b border-black">
          <td class="px-6 py-2">22/4/2566</td>
          <td class="px-6 py-2">
            <p>เช้า เว้-ตานัง รับประทานอาหารเช้าที่โรงแรม / เดินทางไปเมืองฮอยอัน</p>
            <p>สาย ฮอยอัน นั่งเรือกระด้ง </p>
            <p>12.00 น. ทานอาหารเที่ยง ร้านอาหารอาโนะเนะ</p>
            <p>เที่ยง ฮอยอัน รับประทานอาหารเที่ยง /
              เดินทางขึ้นไปบาน่าฮิลล์</p>
            <p>บ่าย บาน่าฮิว นั่งกระเช้าลอยฟ้า / สะพานเมืองทอง /
              สวนดอกไม้</p>
            <p>18.00 น. ทานอาหารเย็น กินไหมจร๊ะ</p>
            <p>เย็น บาน่าฮิว รับประทานอาหารเย็น / เข้าที่พัก</p>
            <hr class="my-1 col-span-3">
            <p>12.00 น. ทานอาหารเี่ยง ร้านอาหารอาโนะเนะ</p>
            <p>18.00 น. ทานอาหารเย็น กินไหมจร๊ะ</p>
          </td>
          <td class="px-6 py-2">โรงแรม Mercure Bana hills</td>
        </tr>
        <tr class="text-xs border-b border-black">
          <td class="px-6 py-2">23/4/2566</td>
          <td class="px-6 py-2">
            <p>เช้า บาน่าฮิว รับประทานอาหารเช้าที่โรงแรม /
              เดินทางลงจากบาน่าฮิลล์สู่เมืองเว้</p>
            <p>เที่ยง บาน่าฮิว รับประทานอาหารเที่ยง /
              ชมพระราชวังได๋โหน๋ย / ตลาดดงบา / วัดเทียนมู๋ / ล่องเรือมังกร / รับประทานอาหารเย็น / เข้าที่พัก</p>
            <p>เย็น เว้ รับประทานอาหารเย็น / เข้าที่พัก</p>
            <hr class="my-1 col-span-3">
            <p>12.00 น. ทานอาหารเที่ยง ร้านอาหาร อัลไล</p>
            <p>18.00 น. ทานอาหารเย็น วงวารอาหาร</p>
          </td>
          <td class="px-6 py-2">โรงแรม Century hotel</td>
        </tr>
        <tr class="text-xs border-b border-black">
          <td class="px-6 py-2">24/4/2566</td>
          <td class="px-6 py-2">
            <p>เช้า เว้ รับประทานอาหารเช้าที่โรงแรม /
              เดินทางกลับประเทศไทย</p>
            <p>เทียง ด่านลาวบาว ทำพิธีการข้ามด่าน /
              รับประทานอาหารเที่ยง / เดินทางต่อมายังด่านสะหวันนะเขต</p>
            <p>เย็น ด่านสะหวันนะเขต รับประทานอาหารเย็น</p>
            <p>20.00 น. เดินทางถึงจุดหมายปลายทางโดยสวัสดิภาพ</p>
            <hr class="my-1 col-span-3">
            <p>12.00 น. ทานอาหารเที่ยง ในรู</p>
            <p>18.00 น. ทานอาหารเย็น โต๋วโภชนา</p>
          </td>
          <td class="px-6 py-2"></td>
        </tr>
      </table>
      <div class="text-center">
        <p class="mt-8 text-sm font-normal">
          ค่าจ้างมัคคุเทศก์................................................................................................................................บาท
        </p>
        <p class="mt-5 text-sm font-normal">
          มัคคุเทศก์ลงนาม..........................................................................................................................................
        </p>
      </div>
      <div class="mt-20 grid grid-cols-2 gap-8 text-center">
        <p class="p-1 border-t text-sm font-normal">
          ผู้มีอำนาจลงนาม นางศรีดารา ประเปรียว
        </p>
        <p class="p-1 border-t text-sm font-normal">
          ตราประทับบริษัท
        </p>
      </div>
    </div>
  </section>
</template>