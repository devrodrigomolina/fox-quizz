<script setup lang="ts">
import { QuizzProps } from '../types/QuizzProps';

defineProps<QuizzProps>();
</script>

<template>
    <div class="card card-quizz">
        <div class="overlay"></div>
        <img :src="image" alt="">
        <div class="card-body infos-quizz">
            <h5 class="card-title">{{ title }}</h5>
        </div>
    </div>
</template>

<style scoped>
.card-quizz {
    position: relative;
    max-height: 200px;
    cursor: pointer;
}

.overlay {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 24%, rgba(0, 0, 0, 0.767) 78%);
}
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.infos-quizz {
    position: absolute;
    bottom: 0;
    padding: 10px;
    color: white;
    width: 100%;
}
</style>
