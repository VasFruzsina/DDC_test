<script setup lang="ts">
export interface MenuItem {
  name: string;
  href: string;
  current?: boolean;
}

defineProps<{
  menuItems: MenuItem[];
}>();
</script>

<template>
  <nav
    class="flex w-full bg-purple-800 text-neutral-200 px-4 py-5 gap-5 items-center justify-center"
  >
    <RouterLink
      v-for="item in menuItems"
      :key="item.name"
      :to="item.href"
      :aria-current="item.current ? 'page' : undefined"
      class="hover:text-emerald-300"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
