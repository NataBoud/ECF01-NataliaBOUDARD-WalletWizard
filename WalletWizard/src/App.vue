<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <header>
    <nav>
      <h1>Wallet Wizard</h1>
      <!-- <RouterLink to="/">Home</RouterLink> -->
     
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;

  > nav {
    width: 100%;
    width: 100%;
    font-size: 16px;
    text-align: center;

    > h1 {
      font-size: 36px;
      color: hsl(163, 85%, 21%);
      font-weight: 800;
      margin-bottom: .7rem;
    }
  }
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
