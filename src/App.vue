<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <TheHeader />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
