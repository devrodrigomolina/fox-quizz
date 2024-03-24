<script setup lang="ts">
import CardQuizz from './CardQuizz.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { QuizzProps } from '../types/QuizzProps.ts'

const router = useRouter();

const quizzItems = ref<{ quizzItems: QuizzProps[] }>();

function handleAddQuizz(): void {
    router.push({ path: '/add-quizz' })
}

function openQuestions(item: QuizzProps): void {
    console.log(item)
    const questions = ref(item)
    console.log(questions)
}
</script>

<template>
    <div class="d-flex justify-content-center py-5">
        <div class="container-card card">
            <div v-if="!quizzItems" class="card-body text-center">
                <h5 class="card-title">Crie seu quizz</h5>
                <p class="card-text">Você não criou nenhum quizz ainda :(</p>
                <Button @click="handleAddQuizz" icon="pi pi-plus" label="Criar Quizz" /> 
            </div>
            <div v-else class="row d-flex card-body text-center">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">Seus Quizzes</h5>
                    <Button @click="handleAddQuizz" icon="pi pi-plus" label="Criar Quizz" /> 
                </div>
                <div class="pt-4">
                    <div class="container-cards">
                        <div class="d-flex flex-nowrap">
                            <div v-for="quizz in quizzItems" :key="quizz.id" class="col-lg-3 p-2">
                                <CardQuizz 
                                    :title="quizz.title"
                                    :image="quizz.image"
                                    @click="openQuestions(quizz)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    width: 80vw;
    margin: 0 auto;
}

/* ::-webkit-scrollbar {
    height: 6px;
}

::-webkit-scrollbar-track {
    border-radius: 20px; 
    background: rgba(196, 196, 196, 0.801);
}

::-webkit-scrollbar-thumb {
    background-color: rgb(127, 169, 248);
    border-radius: 20px;
} */
</style>