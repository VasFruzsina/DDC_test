<script setup lang="ts">
const model = defineModel<string | number | null | undefined>()

const props = defineProps<{
  type?: 'text' | 'date' | 'number'
  placeholder?: string
}>()
</script>

<template>
  <input
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    class="w-full rounded-md border"
  />
</template>
