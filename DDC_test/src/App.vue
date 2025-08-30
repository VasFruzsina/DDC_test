<script setup lang="ts">
import AppNavbar from "./components/UI/AppNavbar.vue";
</script>

<template>
  <AppNavbar
    :menuItems="[
      { name: 'Projektek Listája', href: '/project-list' },
      { name: 'Új Projekt Hozzáadása', href: '/projects' },
    ]"
  />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
