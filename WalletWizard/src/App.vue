<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header>
    <nav>
      <h1>Wallet Wizard</h1>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/ajout">Ajouter</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  padding-bottom: 2rem;

  >nav {
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  >h1 {
    font-size: 36px;
  }

  }

}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
