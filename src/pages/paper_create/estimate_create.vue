<template>
    <LayoutPageTitle> Estimate Clearing/ใบเคลียร์เงินสดย่อย </LayoutPageTitle>
    <o-steps v-model="steps" variant="success">
      <o-step-item step="1" label="เลือก" :clickable="true" icon="user-plus">
        <UiCard>
          <div class="flex">
            <o-input placeholder="ค้นหา ชื่อลูกค้า , รหัสลูกค้า"></o-input>
            <div class="px-2">
              <o-button>ค้นหา</o-button>
            </div>
          </div>
          <o-table :data="data" v-model:selected="selected">
            <o-table-column
              @click="isImageModalActive = true"
              v-for="column in columns"
              v-bind="column"
              #default="{ row }"
              :key="column"
            >
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </UiCard>
      </o-step-item>
      <o-step-item
        step="2"
        label="เลือกรายการ"
        :clickable="true"
        icon="user-lock"
      >
        <UiCard class="mb-3">
          <o-table
            :data="data"
            v-model:checked-rows="checkedRows"
            checkable
            :checkbox-position="checkboxPosition"
          >
            <o-table-column
              v-for="column in columns"
              v-bind="column"
              #default="{ row }"
              :key="column"
            >
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </UiCard>
      </o-step-item>
      <o-step-item step="3" label="ข้อมูล" :clickable="true" icon="user-lock">
        <UiCard class="mb-3">
            <div class="p-5">
          <div>
            <label class="text-2xl font-medium">ข้อมูลผู้ขอเคลียร์</label>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div>
              <o-field label="ผู้ขอเคลียร์">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ฝ่าย/แผนก">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="อ้างอิงถึงเลขที่ใบขอเคลียร์">
                <o-input></o-input>
              </o-field>
            </div>
            <div>
              <o-field label="ผู้อนุมัติ (แบบอิเล็กทอรนิกส์)">
                <o-input></o-input>
              </o-field>
            </div>
          </div>
          <div>
            <o-field label="รายละเอียดโครงการ/กิจกรรม">
              <o-input></o-input>
            </o-field>
          </div>
        </div>
        </UiCard>
        
        <div class="flex justify-end">
          <NuxtLink to="/estimate_item">
            <o-button>บันทึก</o-button>
          </NuxtLink>
        </div>
      </o-step-item>
    </o-steps>
  </template>
  
  <script setup lang="ts">
  import { initFlowbite } from "flowbite";
  const steps = ref(1);
  const branch = ref("MainBranch");
  const showItemsPanel = ref(false);
  const showOrderPanel = ref(false);
  const showItemslist = ref(false);
  const isImageModalActive = ref(false);
  const showcheck = ref("");
  const selected = ref();
  
  function setnull() {
    selected.value = null;
  }
  
  function print() {
    window.print();
  }
  onMounted(() => {
    initFlowbite();
  });
  const showItemscomment = ref(false);
  const isItemModalUserData = ref(false);
  
  const columns = ref([
    {
      field: "id",
      label: "ลำดับ",
      width: "40",
      numeric: true,
    },
    {
      field: "productcode",
      label: "รหัสลูกค้า",
    },
    {
      field: "productlist",
      label: "ชื่อลูกค้า",
    },
    {
      field: "quantity",
      label: "วันที่",
    },
    {
      field: "unitprice",
      label: "ยอดสุทธิ",
      position: "centered",
    },
  ]);
  
  const tableData = [
    {
      id: 1,
      productcode: "Lo-2586957",
      productlist: "นายสายแสง ส่องไฟ",
      quantity: "05-06-2566",
      unitprice: "5,000",
    },
    {
      id: 2,
      productcode: "Lo-2586957",
      productlist: "นายสายแสง ส่องไฟ",
      quantity: "05-06-2566",
      unitprice: "6,000",
    },
  ];
  
  const data = ref(tableData);
  </script>
  
  