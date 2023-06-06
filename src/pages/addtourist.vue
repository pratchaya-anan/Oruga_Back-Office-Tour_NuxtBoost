<template>
    <div class="grid grid-cols-2 gap-6">
        <div>            
            <o-field label="ชื่อ">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="Name">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="สัญชาติ">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="เบอร์โทร">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="หมายเลขพาสปอต">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="ตรวจลงตราเลขที่">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="ที่อยู่ตามบัตรประชาชน">
              <o-input v-model="name"></o-input>
            </o-field>
        </div>
        <div>            
            <o-field label="สุกล">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="Surname">
              <o-input v-model="name"></o-input>
            </o-field>
            <o-field label="เลขบัตรประชาชน">
              <o-input v-model="number"></o-input>
            </o-field>
            <o-field label="วันเดือนปีเกิด">
              <o-input v-model="b"></o-input>
            </o-field>
            <o-field label="วันที่ออก/วันที่หมด พาสปอต">
              <o-input v-model="number"></o-input>
            </o-field>
            <o-field label="วันเดือนปีเกิด">
              <o-input v-model="b"></o-input>
            </o-field>
            <o-field label="หมายเหตุ">
              <o-input v-model="b"></o-input>
            </o-field>
        </div>

    </div>
    
 
      <span class="sr-only">Loading...</span>

  </template>
  
  <script setup lang="ts">
  import { initFlowbite } from 'flowbite';
  
  onMounted(() => { initFlowbite() });
  </script>