<script setup>
import DepenseList from '../components/DepenseList.vue'
</script>

<template>
  <main class="main-container">
    <DepenseList />
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */
  max-width: 100%;
}
</style>