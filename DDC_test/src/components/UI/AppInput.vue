<script setup lang="ts">
import { parsePositiveNumber } from "../../utils/validators";

const model = defineModel<number | string | null | undefined>({ default: "" });

const props = withDefaults(
  defineProps<{
    type?: "text" | "date" | "number";
  }>(),
  {
    type: "text",
  }
);

function onInput(e: Event) {
  const el = e.target as HTMLInputElement;

  if (props.type === "number") {
    const parsed = parsePositiveNumber(el.value);
    if (parsed === null) {
      model.value = null;
    } else {
      model.value = parsed;
    }
  } else {
    model.value = el.value;
  }
}
</script>

<template>
  <input
    :type="type"
    v-model="model"
    @input="onInput"
    class="w-full rounded-md border px-3 py-2"
  />
</template>
