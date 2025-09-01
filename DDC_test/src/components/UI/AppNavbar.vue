<script setup lang="ts">
export interface MenuItem {
  name: string;
  href: string;
  current?: boolean;
}

const props = defineProps<{
  menuItems: MenuItem[];
  imgSrc?: string;
}>();
</script>

<template>
  <nav
    class="flex items-center w-full border-b border-white/10 bg-slate-900/90 backdrop-blur px-4 py-3"
  >
    <div class="flex-shrink-0 flex items-center">
      <RouterLink v-if="props.imgSrc" to="/">
        <img
          :src="props.imgSrc"
          alt="logo"
          class="h-8 w-auto mr-6 cursor-pointer"
        />
      </RouterLink>
    </div>
    <div class="flex-1 flex justify-center gap-5">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.href"
        custom
        v-slot="{ isActive }"
      >
        <a
          :href="item.href"
          class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          :class="[
            isActive
              ? 'text-blue-600'
              : 'text-slate-200 hover:text-blue-400 hover:bg-white/10',
          ]"
          :aria-current="isActive ? 'page' : undefined"
        >
          {{ item.name }}
        </a>
      </RouterLink>
    </div>
  </nav>
</template>
