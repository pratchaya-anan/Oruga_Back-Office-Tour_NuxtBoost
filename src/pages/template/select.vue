<template>
    <section>
      <o-field label="Simple">
        <o-select 
        placeholder="Select a name">
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </o-select>
      </o-field>
    </section>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    setup() {
      const selectedOptions = ref([])
  
      return {
        selectedOptions
      }
    }
  })
  </script>