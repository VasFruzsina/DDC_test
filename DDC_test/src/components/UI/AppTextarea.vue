<script setup lang="ts">
const model = defineModel<string | null>()
</script>

<template>
  <textarea v-model="model" class="rounded border"></textarea>
</template>