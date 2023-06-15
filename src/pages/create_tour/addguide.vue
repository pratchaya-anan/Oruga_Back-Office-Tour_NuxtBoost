<template>
    <section>
        <UiCard class="max-w-full">
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
                <o-table :data="data">
                    <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                        {{ row[column.field] }}
                    </o-table-column>
                </o-table>
    
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
                            <o-button size="medium" variant="primary" @click="isImageModalActive = false">
                                เลือกไกด์
                            </o-button>
                            <NuxtLink to="/addguide">
                                <o-button size="medium" variant="primary" >
                                    เพิ่มไกด์
                                </o-button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div>
                        <o-table :data="data" v-model:checked-rows="checkedRows"
                             checkable
                            :checkbox-position="checkboxPosition">
                            <o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
                                {{ row[column.field] }}
                            </o-table-column>
                        </o-table>
                    </div>
                </o-modal>
                <hr class="my-5 border-1.5" />
                <div class="flex justify-end py-4">
                    <NuxtLink to="/create_tour/addhotel">
                        <o-button>ถัดไป ></o-button>
                    </NuxtLink>
                </div>
            </div>
        </UiCard>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const isImageModalActive = ref(false)
        const isCardModalActive = ref(false)
        const data = ref([
            {
                id: 1,
                first_name: 'Jesse',
                last_name: 'Simmons',
                date: '85859-95959',
                gender: 'ชาย'
            },
            {
                id: 2,
                first_name: 'John',
                last_name: 'Jacobs',
                date: '98585-79858',
                gender: 'ชาย'
            },
            {
                id: 3,
                first_name: 'John',
                last_name: 'Jacobs',
                date: '98575-58579',
                gender: 'ชาย'
            }

        ])

        const columns = ref([
            {
                field: 'id',
                label: 'ID',
                width: '40',
                numeric: true
            },
            {
                field: 'first_name',
                label: 'ชื่อ'
            },
            {
                field: 'last_name',
                label: 'สกุล'
            },
            {
                field: 'date',
                label: 'เลขใบอนุญาติ',
                position: 'centered'
            },
            {
                field: 'gender',
                label: 'เพศ'
            }
        ])

        return {
            data,
            columns,
            isImageModalActive,
            isCardModalActive
        }
    }
})
</script>


  