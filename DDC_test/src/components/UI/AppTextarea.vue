<template>
  <textarea
    v-model="model"
    class="min-h-[110px] w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-800 placeholder:text-slate-400 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300"
  ></textarea>
</template>

<script setup lang="ts">
const model = defineModel<string | null>();
</script>
