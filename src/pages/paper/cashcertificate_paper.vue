<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
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
            <div class="col-span-3 font-bold text-center text-base">ใบสำคัญรับเงิน</div>
            <div class="col-span-3 text-center">Quatation</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0841142174178</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5">

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5  text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อ-สกุล:</div>
            <div class="col-span-2 ">ศศิศ วิรัตน์จินดา</div>
            <div class="col-span-1 font-bold">เลขประจำตัวประชาชน:</div>
            <div class="col-span-2 ">1023456789123</div>
            <div class="col-span-1 font-bold">เบอร์โทร:</div>
            <div class="col-span-2 ">0848456732</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2 ">111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100</div>
            <div class="flex items-center">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">จ่ายบุคคลภายใน</label>
            </div>
            <div class="flex items-center">
              <input checked id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">จ่ายบุคคลภายนอก</label>
            </div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="grid grid-cols-3">
          <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
          <div class="col-span-2 text-right">C-58015259</div>
          <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
          <div class="col-span-2 text-right">สมชัย ใจเกินร้อย</div>
          <div class="col-span-1 font-bold">ฝ่าย:</div>
          <div class="col-span-2 text-right">การตลาด</div>
          <div class="col-span-2 font-bold">ยืนยันราคาภายใน:</div>
          <div class="col-span-1 text-right">31/03/2566</div>
          <div class="col-span-1 font-bold">วันส่งของ:</div>
          <div class="col-span-2 text-right">02/04/2566</div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-[400px] border-b border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>รหัสสินค้า</th>
            <th>รายการสินค้า</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>ส่วนลด</th>
            <th>ภาษี</th>
            <th>จำนวนเงิน</th>
          </tr>
          <tr class="h-10 text-xs">
            <td>1</td>
            <td>Q-4636653086</td>
            <td>เที่ยวเกาะ เลาะรัก</td>
            <td>10</td>
            <td>5600</td>
            <td>0</td>
            <td>7%</td>
            <td>59920</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          <div> กำหนดยืนราคา 15 วัน <br>
            จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน ขอขอบพระคุณมา ณ ที่นี้
          </div>
          <div class="font-bold">ดังรายละเอียดธนาคารดังต่อไปนี้ :</div>
          <div>1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน
            <br> 2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
          </div>
          <div class="flex">
            <div class="font-black w-30">ตัวอักษร: </div>
            <div class="font-black">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div>
          <div class="grid grid-cols-2 p-2">
            <div>มัดจำ</div>
            <div class="text-right">5000 บาท</div>
            <div>รวมเงิน</div>
            <div class="text-right">59920 บาท</div>
            <div>ส่วนลดสินค้า</div>
            <div class="text-right">0 บาท</div>
            <div>มูลค่าสินค้า</div>
            <div class="text-right">56000 บาท</div>
            <div>ภาษีมูลค่าเพิ่ม 7 %</div>
            <div class="text-right">3920 บาท</div>
            <div class="font-bold">จำนวนเงินทั้งสิ้น</div>
            <div class="text-right font-bold">59920 บาท</div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="text-center text-xs">
          ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ <br> ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
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
</section></template>