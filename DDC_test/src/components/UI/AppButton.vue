<script setup lang="ts">
const props = withDefaults(defineProps<{
  subtitle: string
  type?: 'button' | 'submit'
}>(), {
  type: 'button'
})
</script>

<template>
  <button
    :type="type"
    class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-full px-10 py-2.5 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
  >
    {{ subtitle }}
  </button>
</template>
