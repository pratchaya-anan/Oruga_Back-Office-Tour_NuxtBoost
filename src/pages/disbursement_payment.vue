<template>
    <LayoutPageTitle>disbursement/ใบประมาณการเบิกเงินสดย่อย</LayoutPageTitle>
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
            <o-table-column @click="isImageModalActive = true" v-for="column in columns" v-bind="column" #default="{ row }">
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </UiCard>
  
  
      </o-step-item>
      <o-step-item step="2" label="เลือกรายการ" :clickable="true" icon="user-lock">
        <UiCard class="mb-3">
          <o-table :data="data" v-model:checked-rows="checkedRows" checkable :checkbox-position="checkboxPosition">
            <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
              {{ row[column.field] }}
            </o-table-column>
          </o-table>
        </UiCard>
      </o-step-item>
      <o-step-item step="3" label="ข้อมูล" :clickable="true" icon="user-lock">
        <UiCard class="mb-3">
            <div class="p-5">
            <div>
                <label class="text-2xl font-medium">ข้อมูลผู้ขอเบิก</label>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-3">
                <div>
                    <o-field label="ชื่อผู้ขอเบิก">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="แผนก">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วัตถุประสงค์การยืม">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="เงินทดลองจ่าย">
                        <o-input></o-input>
                    </o-field>
                </div>
                <div>
                    <o-field label="วันที่ต้องการใช้เงิน">
                        <div class="relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input datepicker type="text"
                                class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date">
                        </div>
                    </o-field>
                </div>                              
                <div>
                    <o-field label="โครงการ">
                        <o-input></o-input>
                    </o-field>
                </div>
            </div>
        </div>
        </UiCard>       
        <div class="flex justify-end">
          <NuxtLink to="/disbursement_item">
            <o-button>บันทึก</o-button>
          </NuxtLink>
        </div>
      </o-step-item>
  
  
    </o-steps>
  </template>
  
  <script setup lang="ts">
  import { initFlowbite } from 'flowbite';
  const steps = ref(1);
  const branch = ref('MainBranch');
  const showItemsPanel = ref(false);
  const showOrderPanel = ref(false);
  const showItemslist = ref(false);
  const isImageModalActive = ref(false);
  const showcheck = ref('');
  const selected = ref();
  
  function setnull() {
    selected.value = null;
  }
  
  function print() {
    window.print();
  }
  onMounted(() => { initFlowbite() });
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
  
  
