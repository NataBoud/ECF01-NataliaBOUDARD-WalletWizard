<script setup>
import AddDepense from '../components/AddDepense.vue'
</script>

<template>
  <div class="about">
    <AddDepense />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
