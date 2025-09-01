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
    class="pl-9 w-full rounded-xl border border-slate-200 bg-white py-2.5 text-slate-800 placeholder:text-slate-400 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
  />
</template>
