<script setup lang="ts">
import Navbar, { type MenuItem } from "./components/level1/Navbar.vue";
import AppToast from "./components/UI/AppToast.vue";
import logo from "./assets/logo.svg";

const mainMenu: MenuItem[] = [
  { name: "Kezdőlap", href: "/" },
  { name: "Projekt Lista", href: "/projects" },
  { name: "Új Projekt", href: "/projects/new" },
];
</script>

<template>
  <Navbar :menu-items="mainMenu" :img-src="logo"/>
  <AppToast />
  <RouterView />
</template>

