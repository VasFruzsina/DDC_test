<script setup lang="ts">
import AppNavbar, { type MenuItem } from "./components/UI/AppNavbar.vue";

const mainMenu: MenuItem[] = [
  { name: "Kezdőlap", href: "/" },
  { name: "Projekt Lista", href: "/projects" },
  { name: "Új Projekt", href: "/projects/new" },
];
</script>

<template>
  <AppNavbar :menu-items="mainMenu" />
  <RouterView />
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
