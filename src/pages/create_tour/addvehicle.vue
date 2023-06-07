<template>
  <section>
    <UiCard class="max-w-full">
      <div class="p-5">
        <div>
          <label class="text-4xl font-medium">เพิ่มพาหนะ</label>
        </div>
        <hr class="my-5 border-1.5" />
  
        <div class="odocs-spaced">
          <o-button
            size="medium"
            variant="primary"
            @click="isCardModalActive = true"
          >
            เพิ่มพาหนะ
          </o-button>
        </div>
        <o-table :data="data">
          <o-table-column
            v-for="column in columns"
            v-bind="column"
            #default="{ row }"
          >
            {{ row[column.field] }}
          </o-table-column>
        </o-table>
  
        <o-modal v-model:active="isCardModalActive">            
            <div class="grid grid-cols-10 gap-8 p-6">
              <div class="col-span-7">
                <o-field label="ค้นหาพาหนะ">
                  <o-autocomplete
                    v-model="name"
                    rounded
                    expanded
                    placeholder="ค้นหา พาหนะ"
                    icon="search"
                  >
                  </o-autocomplete>
                </o-field>
              </div>
              <div class="col-span-3 mt-6">
                <o-button size="medium" variant="primary" @click="isCardModalActive2 = true"> เพิ่มพาหนะใหม่ </o-button>
              </div>
            </div>
            <div>
              <o-table :data="data">
                <o-table-column
                  v-for="column in columns1"
                  v-bind="column"
                  #default="{ row }"
                >
                  {{ row[column.field] }}
                </o-table-column>
              </o-table>
            </div>
        </o-modal>
  
        <o-modal v-model:active="isCardModalActive2">
        <div class="grid grid-cols-2 gap-4 p-6">
          <div class="col-span-2">
            <label>เพิ่มพาหนะ</label>
          </div>
          <div>
            <o-field label="พาหนะ">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="เลขพาหนะ">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-button size="medium" variant="primary" @click="isCardModalActive2 = false"> บันทึก </o-button>
          </div>
        </div>
      </o-modal>
        <hr class="my-5 border-1.5" />
        <div class="flex justify-end py-4">
          <NuxtLink href="/tour_data">
            <o-button>ถัดไป ></o-button>
          </NuxtLink>
        </div>
      </div>
    </UiCard>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isCardModalActive2 = ref(false);
    const isCardModalActive = ref(false);
    const data = ref([
      {
        id: 1,
        first_name: "รถเช่า",
        last_name: "3",
        date: "ไปกลับ",
      },
      {
        id: 2,
        first_name: "รถเช่า",
        last_name: "3",
        date: "ไปกลับ",
      },
      {
        id: 3,
        first_name: "รถเช่า",
        last_name: "3",
        date: "ไปกลับ",
      },
      {
        id: 4,
        first_name: "รถเช่า",
        last_name: "3",
        date: "ไปกลับ",
      },
    ]);

    const columns = ref([
      {
        field: "id",
        label: "ID",
        width: "40",
        numeric: true,
      },
      {
        field: "first_name",
        label: "พาหนะ",
      },
      {
        field: "last_name",
        label: "จำนวน",
      },
      {
        field: "date",
        label: "สถานะเดินทาง",
        position: "centered",
      },
    ]);
    const columns1 = ref([
      {
        field: "id",
        label: "ID",
        width: "40",
        numeric: true,
      },
      {
        field: "first_name",
        label: "พาหนะ",
      },
      {
        field: "last_name",
        label: "วันที่เริ่มพัก",
      },
    ]);
    // function close(){
    //   value.isCardModalActive2 = false
    //   isCardModalActive=false
    // }

    return {
      data,
      columns,
      columns1,
      isCardModalActive2,
      isCardModalActive,
    };
  },
});
</script>
