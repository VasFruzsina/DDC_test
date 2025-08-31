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
    class="rounded-md px-3 py-2"
  >
    {{ subtitle }}
  </button>
</template>
