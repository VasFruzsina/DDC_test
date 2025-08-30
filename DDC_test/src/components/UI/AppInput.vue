<script setup lang="ts">
const model = defineModel<string | number | null | undefined>()

const props = defineProps<{
  id?: string
  type?: 'text' | 'date' | 'number'
  placeholder?: string
}>()
</script>

<template>
  <input
    :id="id"
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    class="w-full rounded-md border"
  />
</template>
