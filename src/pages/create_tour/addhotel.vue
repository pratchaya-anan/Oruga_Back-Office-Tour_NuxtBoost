<template>
  <section>
    <div class="p-5">
      <div>
        <label class="text-4xl font-medium">เพิ่มโรงแรม</label>
      </div>
      <hr class="my-5 border-1.5" />

      <div class="odocs-spaced">
        <o-button
          size="medium"
          variant="primary"
          @click="isImageModalActive = true"
        >
          เพิ่มโรงแรม
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

      <o-modal v-model:active="isImageModalActive">
        <div class="grid grid-cols-10 gap-8 p-6">
          <div class="col-span-7">
            <o-field label="ค้นหาโรงแรม">
              <o-autocomplete
                v-model="name"
                rounded
                expanded
                placeholder="ค้นหา ชื่อโรงแรม"
                icon="search"
              >
              </o-autocomplete>
            </o-field>
          </div>
          <div class="col-span-3 mt-6">
            <o-button size="medium" variant="primary"> เพิ่มโรงแรม </o-button>
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
      <hr class="my-5 border-1.5" />
      <div class="flex justify-end py-4">
        <NuxtLink href="/tour_data">
          <o-button>ถัดไป ></o-button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isImageModalActive = ref(false);
    const isCardModalActive = ref(false);
    const data = ref([
      {
        id: 1,
        first_name: "โรงแรมกล้วยไม้",
        last_name: "06-06-2566",
        date: "2 วัน 3 คืน",
        gender: "5 ",
      },
      {
        id: 2,
        first_name: "โรงแรมกล้วยไม้",
        last_name: "06-06-2566",
        date: "2 วัน 3 คืน",
        gender: "5 ",
      },
      {
        id: 3,
        first_name: "โรงแรมกล้วยไม้",
        last_name: "06-06-2566",
        date: "2 วัน 3 คืน",
        gender: "5 ",
      },
      {
        id: 4,
        first_name: "โรงแรมกล้วยไม้",
        last_name: "06-06-2566",
        date: "2 วัน 3 คืน",
        gender: "5 ",
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
        label: "ชื่อโรงแรม",
      },
      {
        field: "last_name",
        label: "วันที่เริ่มพัก",
      },
      {
        field: "date",
        label: "จำนวนวัน",
        position: "centered",
      },
      {
        field: "gender",
        label: "จำนวนห้อง",
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
        label: "ชื่อโรงแรม",
      },
      {
        field: "last_name",
        label: "วันที่เริ่มพัก",
      },
    ]);

    return {
      data,
      columns,
      columns1,
      isImageModalActive,
      isCardModalActive,
    };
  },
});
</script>
