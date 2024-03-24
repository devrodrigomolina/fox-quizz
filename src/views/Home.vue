<script setup lang="ts">
import AddQuizz from "../components/AddQuizz.vue";
import AllQuizzes from "../components/AllQuizzes.vue";
import { api } from '../services/api'
import { ref, onBeforeMount } from 'vue'
import CardQuizz from './CardQuizz.vue'

const quizzItems = ref([])

async function getQuizzesData() {
    const { data } = await api.get('/quizzes')
    quizzItems.value = data;
}

onBeforeMount(() => getQuizzesData());
</script>

<template>
    <AddQuizz 
        @addQuizz=""
        :quizzItems="quizzItems"
    />
    <AllQuizzes
        :quizzItems="quizzItems"
    />
</template>
