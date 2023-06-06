<template>
  <section>
    <div class="p-5">
      <div>
        <label class="text-4xl font-medium">จัดข้อมูลทัวร์</label>
      </div>
      <hr class="my-5 border-1.5" />
      <div>
        <label class="text-2xl font-medium">ข้อมูลทัวร์</label>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div>
          <p>ชื่อทริปทัวร์: เกาะเสม็ด เสร็จบางราย</p>
          <p>จำนวน: 5 วัน 4 คืน</p>
        </div>
        <div>
          <p>โปรแกรมทัวร์: เกาะเสม็ด เสร็จบางราย</p>
          <p>จำนวนลูกทัวร์: 30 คน</p>
        </div>
        <div>
          <p>วันที่เดินทาง: 16/04/2566 ถึง 20/04/2566</p>
          <p>หมายเหตุ: สบายตัวมากๆเลยนะ ถ้าไปอีกรอบ จะหาตัวท็อป</p>
        </div>
      </div>
      <hr class="my-5 border-1.5" />
      <div class="grid grid-cols-3 gap-6">
        <div>
          <div>
            <label class="text-2xl font-medium">ข้อมูลโรงแรม</label>
            <div class="grid grid-cols-2 gap-2">
              <div>โรงแรมริเวอร์แคว กาญจนบุรี</div>
              <div>จำนวนห้องพัก: 45</div>
              <div>วันที่เช็คอินน์: 30/03/2566</div>
              <div>วันที่เช็คเอ้าท์: 31/03/2566</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label class="text-2xl font-medium">ข้อมูลไกด์</label>
            <div class="grid grid-cols-2 gap-2">
              <div>นายขวัญชัย บูรณฤกษ์</div>
              <div>0833076329</div>
              <div>นายพิษณุ บุญลือ</div>
              <div>0632452369</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label class="text-2xl font-medium">ข้อมูลพาหนะ</label>
            <div>พาหนะขาไป :</div>
            <div class="grid grid-cols-2 gap-2">
              <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
              <div>จำนวนคน: 20</div>
            </div>
            <div>พาหนะขากลับ :</div>
            <div class="grid grid-cols-2 gap-2">
              <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
              <div>จำนวนคน: 20</div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2 border-1.5" />
      <div>
        <label class="text-2xl font-medium">ข้อมูลลูกทัวร์</label>
      </div>
      <div class="my-2 grid grid-cols-2 gap-4">
        <div><o-input placeholder="ค้นหาลูกทัวร์"></o-input></div>
        <div class="flex justify-end">
          <NuxtLink href="/adduser">
            <o-button>+ เพิ่มลูกทัวร์</o-button>
          </NuxtLink>
          <NuxtLink>
            <o-button variant="info"> พิมพ์ Tag รายชื่อ</o-button>
          </NuxtLink>
        </div>
      </div>
      <div>
        <o-table :data="data" checkable :checkbox-position="checkboxPosition">
          <o-table-column
            v-for="column in columns"
            v-bind="column"
            #default="{ row }"
          >
            {{ row[column.field] }}
          </o-table-column>
        </o-table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const tableData = [
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
];

export default defineComponent({
  setup() {
    const data = ref(tableData);
    const checkboxPosition = ref("left");

    const columns = ref([
      {
        field: "id",
        label: "ID",
        width: "40",
        numeric: true,
      },
      {
        field: "first_name",
        label: "First Name",
      },
      {
        field: "last_name",
        label: "Last Name",
      },
      {
        field: "date",
        label: "Date",
        position: "centered",
      },
      {
        field: "gender",
        label: "Gender",
      },
    ]);

    return {
      data,
      checkboxPosition,
      columns,
    };
  },
});
</script>
