import { createRouter, createWebHistory } from 'vue-router';
import PageAddQuizz from '../views/PageAddQuizz.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add-quizz',
            name: 'addquizz',
            component: PageAddQuizz
        },
    ]
})

export default router