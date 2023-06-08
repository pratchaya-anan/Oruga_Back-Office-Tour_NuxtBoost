<template>
    <section>
        <o-table :data="dataday">
    <o-table-column
        v-for="column in columnsday"
        v-bind="column"
        #default="{ row }">
        {{ row[column.field]}}
    </o-table-column>
  </o-table>
    </section>
</template>

<script setup lang="ts">

    const dataday = ref([
      {
        id: 1,
        first_name: 'องค์การบริหารส่วนตำบลโพนงาม',
        last_name: '52000',
        date: '-',
        gender: ''
      },
      {
        id: 2,
        first_name: 'เที่ยวเกาะ เลาะรัก',
        last_name: '59920',
        date: '-',
        gender: ''
      },
      {
        id: 3,
        first_name: 'เที่ยวเกาะ เลาะรัก',
        last_name: '59920',
        date: '-',
        gender: ''
      },
      {
        id: 4,
        first_name: 'ชื้อข้าวเที่ยง',
        last_name: '-',
        date: '750',
        gender: ''
      },
      {
        id: 5,
        first_name: 'เที่ยวเกาะ เลาะรัก',
        last_name: '59920',
        date: '-',
        gender: ''
      }
    ])

    const columnsday = ref([
      {
        field: 'id',
        label: 'ลำดับ',
        width: '40',
        numeric: true
      },
      {
        field: 'first_name',
        label: 'รายการ'
      },
      {
        field: 'last_name',
        label: 'รายรับ(บาท)',
        position: 'centered'
      },
      {
        field: 'date',
        label: 'รายจ่าย(บาท)',
        position: 'centered'
      },
      {
        field: 'gender',
        label: 'หมายเหตุ'
      }
    ])
</script>