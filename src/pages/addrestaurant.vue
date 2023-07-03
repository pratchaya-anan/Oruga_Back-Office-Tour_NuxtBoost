<template>
    <section>
      <div class="p-5">
        <div>
          <label class="text-4xl font-medium">เพิ่มร้านอาหาร</label>
        </div>
        <hr class="my-5 border-1.5" />
        <div>
          <label class="text-2xl font-medium">ข้อมูลร้านอาหาร</label>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div>
            <o-field label="ชื่อร้านอาหาร">
              <o-input></o-input>
            </o-field>
          </div>
          <div>
            <o-field label="ประเภทร้านอาหาร (ร้านอาหารจีน / ร้านอาหารไทย / ร้านของหวาน เป็นต้น)">
              <o-input></o-input>
            </o-field>
          </div>
          </div>
        <div class="pt-2">
          <o-field label="ข้อมูลเพิ่มเติม">
            <o-input type="textarea"></o-input>
          </o-field>
        </div>

        <div class="pt-2">
          <o-field label="รูปภาพร้านประกอบ">
            
<div class="mt-2 flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

          </o-field>
        </div>
        
        <NuxtLink href="/tour_data" class="flex justify-end py-5">
          <o-button>+ เพิ่มร้านอาหาร</o-button>
        </NuxtLink>
      </div>
    </section>
  
    <span class="sr-only">Loading...</span>
  </template>
  
  <script setup lang="ts">
  import { initFlowbite } from "flowbite";
  
  onMounted(() => {
    initFlowbite();
  });
  </script>
  