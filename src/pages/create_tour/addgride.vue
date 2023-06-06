<template>
    <section>
        <div class="p-5">
            <div>
                <label class="text-4xl font-medium">เพิ่มไกด์</label>
            </div>
            <hr class="my-5 border-1.5" />



            <div class="odocs-spaced">
                <o-button size="medium" variant="primary" @click="isImageModalActive = true">
                    เพิ่มไกด์
                </o-button>
            </div>


            <o-modal v-model:active="isImageModalActive">
                <div class="grid grid-cols-10 gap-8 p-6">
                    <div class="col-span-7">
                        <o-field label="ค้นหาไกด์">
                            <o-autocomplete v-model="name" rounded expanded placeholder="ค้นหา ชื่อ หรือ เลขใบอนุญาติ"
                                icon="search">
                            </o-autocomplete>
                        </o-field>
                    </div>
                    <div class="col-span-3 mt-6">
                        <o-button size="medium" variant="primary" @click="isImageModalActive = true">
                            เลือกไกด์
                        </o-button>
                        <o-button size="medium" variant="primary" @click="isImageModalActive = true">
                            เพิ่มไกด์
                        </o-button>
                    </div>
                </div>
                <!-- <o-table :data="data">
                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                        {{ row[column.field] }}
                    </o-table-column>
                </o-table>                 -->

            </o-modal>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const isImageModalActive = ref(false)
        const isCardModalActive = ref(false)

        return {
            isImageModalActive,
            isCardModalActive
        }
    }
})
</script>


  