<script setup lang="ts">
import { QuizzProps } from '../types/QuizzProps.ts'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const layout = ref('grid');
const { quizzItems } = defineProps<{ quizzItems: QuizzProps[] }>();


function openQuestions(item) {
    const a = reactive(item);
    router.push({ path: '/view-quizz', params: item })
}
</script>

<template>
    <div class="container-cards">
        <div class="card">
            <DataView :value="quizzItems" :layout="layout" paginator :rows="6">
                <template #header>
                    <div class="flex justify-content-end">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </template>

                <template #list="slotProps">
                    <h2 class="p-3">Todos seus quizzes</h2>
                    <div class="grid grid-nogutter">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                            <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                <div class="md:w-10rem relative">
                                    <img class="block xl:block mx-auto border-round w-full" :src="item.image" :alt="item.name" />
                                </div>
                                <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                    <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                        <div>
                                            <span class="font-medium text-secondary text-sm">{{ item.title }}</span>
                                            <div class="text-lg font-medium text-900 mt-2">{{ item.title }}</div>
                                        </div>
                                        <div class="surface-100 p-1" style="border-radius: 30px">
                                            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                <i class="pi pi-star-fill text-yellow-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-column md:align-items-end gap-5">
                                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                            <Button icon="pi pi-star" outlined></Button>
                                            <Button icon="pi pi-eye" label="Ver Quizz" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap p-2"></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <template #grid="slotProps">
                    <h2 class="p-3">Todos seus quizzes</h2>
                    <div class="grid grid-nogutter">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-4 md:col-4 xl:col-4 p-2">
                            <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                                <div class="surface-50 flex justify-content-center border-round p-3">
                                    <div class="relative mx-auto">
                                        <img class="border-round w-full" :src="item.image" :alt="item" style="width: 100%; max-height: 150px"/>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <div class="flex flex-row justify-content-between align-items-start gap-2">
                                        <div>
                                            <div class="text-lg font-medium text-900 mt-1">{{ item.title }}</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-column gap-4 mt-4">
                                        
                                        <div class="flex gap-2">
                                            <Button icon="pi pi-eye" label="Ver Quizz" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap p-2"></Button>
                                            <Button icon="pi pi-star" outlined></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>

<style scoped>
.container-cards {
    width: 80vw;
    margin: 0 auto;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
</style>