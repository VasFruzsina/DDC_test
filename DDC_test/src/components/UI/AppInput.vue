<script setup lang="ts">

const model = defineModel<number | null | string | undefined>()

const props = defineProps<{
  type?: 'text' | 'date' | 'number'
}>()

function onInput(e: Event) {
  if (props.type === 'number') {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    if (target.value !== '' && (isNaN(value) || value <= 0)) {
      target.value = '';
      model.value = '';
    }
  }
}
</script>

<template>
  <input
    :type="type"
    v-model="model"
    @input="onInput"
    class="w-full rounded-md border"
  />
</template>
