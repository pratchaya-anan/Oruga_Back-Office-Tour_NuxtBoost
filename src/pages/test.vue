<template>
    <o-autocomplete 
    rounded 
    expanded 
    placeholder="e.g. jQuery" 

    clearable
        :data="filteredDataArray" @select="(option) => (selected = option)">
        <template #empty>No results found</template>
    </o-autocomplete>
    
    
</template>
  
<script>
import { defineComponent, ref, computed } from "vue";

const data = [
    "Angular",
    "Angular 2",
    "Aurelia",
    "Backbone",
    "Ember",
    "jQuery",
    "Meteor",
    "Node.js",
    "Polymer",
    "React",
    "RxJS",
    "Vue.js",
];

export default defineComponent({
    setup() {
        const name = ref('');
        const selected = ref(null);

        const filteredDataArray = computed(() =>
            data.filter(
                (option) =>
                    option.toString().toLowerCase().indexOf(name.value.toLowerCase()) >= 0
            )
        );

        return {
            name,
            selected,
            filteredDataArray,
        };
    },
});
</script>