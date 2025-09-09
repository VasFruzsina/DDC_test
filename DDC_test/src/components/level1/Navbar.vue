<template>
  <nav
    class="flex items-center w-full border-b border-white/10 bg-slate-900/90 backdrop-blur px-4 py-3"
  >
    <div class="flex-shrink-0 flex items-center">
      <RouterLink v-if="imgSrc" to="/">
        <img :src="imgSrc" alt="logo" class="h-8 w-auto mr-6 cursor-pointer" />
      </RouterLink>
    </div>
    <div class="flex-1 flex justify-center gap-5">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.href"
        class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        :class="[
          $route.path === item.href
            ? 'text-blue-600'
            : 'text-slate-200 hover:text-blue-400 hover:bg-white/10',
        ]"
        aria-current="$route.path === item.href ? 'page' : undefined"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface MenuItem {
  name: string;
  href: string;
}

defineProps<{
  menuItems: MenuItem[];
  imgSrc?: string;
}>();
</script>
