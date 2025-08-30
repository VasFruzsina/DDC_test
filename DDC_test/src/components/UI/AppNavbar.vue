<script setup lang="ts">
import type { MenuItem } from "../../types/project";

const props = defineProps<{
  menuItems: MenuItem[];
}>();
</script>

<template>
  <nav
    class="flex w-full bg-purple-800 text-neutral-200 px-4 py-5 gap-5 items-center justify-center"
  >
    <a
      v-for="item in menuItems"
      :key="item.name"
      :href="item.href"
      :aria-current="item.currentItem ? 'page' : undefined"
      class="hover:text-emerald-300"
      >{{ item.name }}</a
    >
  </nav>
</template>
