<template>
  <section class="min-h-screen">
    <LayoutPageTitle> ตรวจสอบคำขอ </LayoutPageTitle>
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
      <div class="grid grid-cols-1 col-span-2 gap-4">
        <div class="flex flex-wrap gap-4">
          <UiCard class="flex-1 ">
            <div class="grid grid-cols-1 grid-cols-2 gap-4 ">
              <o-field label="ชื่อ">
                <o-input placeholder="นาย กล้วย"></o-input>
              </o-field>
              <o-field label="สกุล">
                <o-input placeholder="หวี"></o-input>
              </o-field>
              <o-field label="ขอกู้เงินเป็นจำนวน">
                <o-input></o-input>
              </o-field>
              <o-field label="สินทรัพย์">
                <o-input></o-input>
              </o-field>


              <o-field label="อายุ">
                <o-input></o-input>
              </o-field>
              <o-field label="เงินเดือน">
                <o-input></o-input>
              </o-field>

              <o-field label="ตำแหน่ง">
                <o-input></o-input>
              </o-field>
              <o-field label="สังกัด">
                <o-input></o-input>
              </o-field>

              <o-field label="เงินเดือน">
                <o-input></o-input>
              </o-field>

              <o-field label="ที่อยู่">
                <o-input></o-input>
              </o-field>
              <o-field label="เบอร์โทร">
                <o-input></o-input>
              </o-field>

              <div class="col-span-2">
                <div class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 mt-3">
                  หลักฐานผู้กู้
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-3">
              
              <div class="flex justify-between">
                สำเนาบัตรประชาชน
                <Icon aria-hidden="true" @click="isImageModalActive = true" class="ml-10 w-5 h-5"
                  name="carbon:view-filled"></Icon>
              </div>
              <div class="flex col-span-2">
                <o-radio v-model="check" name="name" native-value="cheque" class="mr-3">
                  ผ่าน
                </o-radio>
                <o-radio v-model="check" name="name" native-value="bank" class="mr-3">
                  ไม่ผ่าน
                </o-radio>            
                <div v-if="check == 'cheque'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="mdi:success"></Icon>                  
                </div>
                <div v-if="check == 'bank'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="ph:x-bold"></Icon>
                  <o-input >                    
                  </o-input>
                </div>
              </div>
              <div class="flex justify-between">
                สำเนาทะเบียนบ้าน
                <Icon aria-hidden="true" @click="isImageModalActive = true" class="ml-10 w-5 h-5"
                  name="carbon:view-filled"></Icon>
              </div>
              <div class="flex col-span-2">
                <o-radio v-model="check1" name="name1" native-value="cheque1" class="mr-3">
                  ผ่าน
                </o-radio>
                <o-radio v-model="chec1k" name="name1" native-value="bank1" class="mr-3">
                  ไม่ผ่าน
                </o-radio>            
                <div v-if="check1 == 'bank1'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="ph:x-bold"></Icon>
                  <o-input >                    
                  </o-input>
                </div>
              </div>
              <div class="flex justify-between">
                สลิปเงินเดือน
                <Icon aria-hidden="true" @click="isImageModalActive = true" class="ml-10 w-5 h-5"
                  name="carbon:view-filled"></Icon>
              </div>
              <div class="flex col-span-2">
                <o-radio v-model="check2" name="name2" native-value="cheque2" class="mr-3">
                  ผ่าน
                </o-radio>
                <o-radio v-model="check2" name="name2" native-value="bank2" class="mr-3">
                  ไม่ผ่าน
                </o-radio>            
                <div v-if="check2 == 'cheque2'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="mdi:success"></Icon>                  
                </div>
                <div v-if="check2 == 'bank2'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="ph:x-bold"></Icon>
                  <o-input >                    
                  </o-input>
                </div>
              </div>
              <div class="flex justify-between">
                โฉนดที่ดิน
                <Icon aria-hidden="true" @click="isImageModalActive = true" class="ml-10 w-5 h-5"
                  name="carbon:view-filled"></Icon>
              </div>
              <div class="flex col-span-2">
                <o-radio v-model="check3" name="name3" native-value="cheque3" class="mr-3">
                  ผ่าน
                </o-radio>
                <o-radio v-model="check3" name="name3" native-value="bank3" class="mr-3">
                  ไม่ผ่าน
                </o-radio>            
                <div v-if="check3 == 'cheque3'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="mdi:success"></Icon>                  
                </div>
                <div v-if="check3 == 'bank3'" class="flex">
                  <Icon aria-hidden="true" class="ml-10 w-5 h-5 mr-3" name="ph:x-bold"></Icon>
                  <o-input >                    
                  </o-input>
                </div>
              </div>
              </div>
              <o-modal v-model:active="isImageModalActive">
                <p style="text-align: center">
                  <img src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" />
                </p>
              </o-modal>

           
            
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const isImageModalActive = ref(false);
const comment = ref(false);
const check = ref('');
const check1 = ref('');
const check2 = ref('');
const check3 = ref('');
const checktwo = ref('');


onMounted(() => {
  initFlowbite();
});
</script>
