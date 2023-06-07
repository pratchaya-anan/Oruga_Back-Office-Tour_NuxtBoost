<template>
    <section>
        <div class="p-40">
            <o-field>
          <o-switch
            :value="true"
          >
            Default
          </o-switch>
        </o-field>
        
      <o-field>
        <o-switch v-model="isSwitched"
            :value="true">
          {{ isSwitched }}
        </o-switch>
      </o-field>
  
      <o-field>
        <o-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No" checkClass="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            :value="true">
          {{ isSwitchedCustom }}
        </o-switch>
      </o-field>
  
      <o-field>
        <o-switch v-model="isSwitchedCustom2" true-value="Yes" false-value="No" disabled checkClass="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            :value="true">
            Disabled
        </o-switch>
      </o-field>
      
      <o-field>
        <o-switch disabled checkClass="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            :value="true">Disabled</o-switch>
      </o-field>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    setup() {
      const isSwitched = ref(false)
      const isSwitchedCustom = ref('Yes')
      const isSwitchedCustom2 = ref('Yes')
  
      return {
        isSwitched,
        isSwitchedCustom,
        isSwitchedCustom2
      }
    }
  })
  </script>