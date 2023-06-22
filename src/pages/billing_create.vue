<template>
    <LayoutPageTitle>Billing/สร้างใบวางบิล</LayoutPageTitle>
    <o-steps v-model="steps" variant="success">
        <o-step-item step="1" label="รายละเอียด" :clickable="true" icon="user-plus">
            <UiCard class="mb-3">
                <div class="p-5">
                    <div>
                        <label class="text-2xl font-medium">รายละเอียดใบวางบิล</label>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-3">
                        <div>
                            <o-field label="เลขที่">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="วันที่">
                                <o-input></o-input>
                            </o-field>
                        </div>
                        <div>
                            <o-field label="หมายเลขแฟกซ์">
                                <o-input></o-input>
                            </o-field>
                        </div>
                    </div>
                </div>
            </UiCard>
        </o-step-item>
        <o-step-item step="2" label="ยืนยัน" :clickable="true" icon="user-lock">
            <PaperBillingPaper id="papertax"></PaperBillingPaper>
            <div class="flex justify-center mt-3">
                <o-button @click="print" variant="info">
                    <Icon class="mr-3 -ml-1 w-5 h-5" name="material-symbols:print"></Icon>
                    พิมพ์
                </o-button>
                <NuxtLink to="quotation_list">
                    <o-button>
                        บันทึก
                    </o-button>
                </NuxtLink>
            </div>
        </o-step-item>
    </o-steps>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
const steps = ref(1);


function print() {
    window.print();
}

// function print() {
//     const printableContent = document.getElementById('papertax');
//     const printWindow = window.open('', '', 'height=1000,width=1000');
//     printWindow.document.write(printableContent.innerHTML);
//     printWindow.print();
// }

onMounted(() => { initFlowbite() });
</script>

<!-- <style>
@media print {
  /* header {
    display: none;
  }

  footer {
    display: none;
  } */

  .navbar {
    display: none !important;
  }

  #page {
    margin: 0;
    border: initial;
    border-radius: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
    print-color-adjust: exact;
  }
}
</style> -->