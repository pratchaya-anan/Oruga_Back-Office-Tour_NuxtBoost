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
            <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
            <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
            <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
            <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
          </div>
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">
              ใบเสนอราคา/ยืนยันการสั่งซื้อ
            </div>
            <div class="col-span-3 text-center">Quatation</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0841142174178</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />
      <div class="col-span-2 grid grid-cols-3 m-5 text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
            <div class="col-span-2">S</div>
            <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
            <div class="col-span-2">N</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2">20-22 ม.2 ขอนแก่น</div>
            <div class="col-span-1 font-bold">ID TAX:</div>
            <div class="col-span-2">12345</div>
            <div class="flex justify-between">
              <div class="font-bold">Email:</div>
              <div>e@gmail.com</div>
              <div class="font-bold">โทร:</div>
              <div>0625584785</div>
            </div>
          </div>
        </div>
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right">12345</div>
            <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
            <div class="col-span-2 text-right">B</div>
            <div class="col-span-1 font-bold">ฝ่าย:</div>
            <div class="col-span-2 text-right">การเงิน</div>
            <div class="col-span-2 font-bold">ยืนยันราคาภายใน:</div>
            <div class="col-span-1 text-right">20/05/66</div>
            <div class="col-span-1 font-bold">วันส่งของ:</div>
            <div class="col-span-2 text-right">30/05/66</div>
          </div>
        </div>
      </div>
      <div>
        <o-table :data="data">
          <o-table-column
            v-for="column in columns"
            v-bind="column"
            #default="{ row }"
          >
            {{ row[column.field] }}
          </o-table-column>
        </o-table>
      </div>
      <div class="grid grid-cols-3 text-xs p-2">
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
      <div class="px-5 pb-20 flex justify-end">
        <div class="px-5 text-center text-xs">
          ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ <br />
          ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
        </div>
      </div>

      <div class="grid grid-cols-4 mt-25 text-xs">
        <div class="text-center mx-5">
          <div>ผู้เสนอราคา</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center mx-5">
          <div>ผู้ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center mx-5">
          <div>ผู้อนุมัติสั่งซื้อ</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>
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
