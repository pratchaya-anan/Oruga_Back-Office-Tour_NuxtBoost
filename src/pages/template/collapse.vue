<template class="bg-white">
  <section>
    <o-collapse v-for="(collapse, index) of collapses" :key="index" :open="isOpen == index" @open="isOpen = index">
      <template #trigger="props">
        <div>
          {{ collapse.title }}
        </div>
        <o-icon :icon="props.open ? 'caret-up' : 'caret-down'"> </o-icon>
      </template>
      <div>
        {{ collapse.text }}
      </div>
    </o-collapse>

  </section>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isOpen = ref(0)
    const collapses = ref(
      [
        {
          title: 'Title 1',
          text: 'Text 1',
        },
        {
          title: 'Title 2',
          text: 'Text 2',
        },
        {
          title: 'Title 3',
          text: 'Text 3',
        }
      ]
    )
    return {
      isOpen, collapses
    }
  }
})
</script>