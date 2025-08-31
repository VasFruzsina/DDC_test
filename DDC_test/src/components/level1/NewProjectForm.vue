<script setup lang="ts">
import { useRoute } from "vue-router";
import type { ProjectForm } from "../../types/project";
import { getItem, setItem } from "../composables/useProjectStorage";
import AppButton from "../UI/AppButton.vue";
import AppInput from "../UI/AppInput.vue";
import AppTextarea from "../UI/AppTextarea.vue";

import { onMounted, ref } from "vue";

const name = ref<string | undefined>(undefined);
const description = ref<string | undefined>(undefined);
const startDate = ref<string | undefined>(undefined);
const budget = ref<number | null>(null);
const route = useRoute();
const id = Number(route.params.id);
const all = getItem<ProjectForm[]>("projectForms") ?? [];
const project = all.find((p) => p.id === id);

function nextID(key = "projectForm:lastId"): number {
  const raw = localStorage.getItem(key);
  const last = raw ? parseInt(raw, 10) : 0;
  const next = last + 1;
  localStorage.setItem(key, String(next));
  return next;
}

function onSubmit() {
  const list = getItem<ProjectForm[]>("projectForms") ?? [];
  if (id) {
    const idx = list.findIndex((p) => p.id === id);
    if (idx !== -1) {
      list[idx] = {
        id,
        name: name.value ?? "",
        description: description.value ?? "",
        startDate: startDate.value ?? "",
        budget: budget.value ?? null,
      };
      setItem("projectForms", list);
    }
  } else {
    const data: ProjectForm = {
      id: nextID(),
      name: name.value ?? "",
      description: description.value ?? "",
      startDate: startDate.value ?? "",
      budget: budget.value ?? null,
    };
    list.push(data);
    setItem("projectForms", list);
  }
}

onMounted(() => {
  if (id !== null) {
    const all = getItem<ProjectForm[]>("projectForms") ?? [];
    const project = all.find((p) => p.id === id);
    if (project) {
      name.value = project.name;
      description.value = project.description;
      startDate.value = project.startDate;
      budget.value = project.budget;
    }
  }
});
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <div>
      <label for="name" class="block text-sm font-medium">Projekt neve</label>
      <AppInput id="name" v-model="name" type="text" required />
    </div>

    <div>
      <label for="desc" class="block text-sm font-medium">Leírás</label>
      <AppTextarea id="desc" v-model="description" />
    </div>

    <div>
      <label for="start" class="block text-sm font-medium">Kezdési dátum</label>
      <AppInput id="start" v-model="startDate" type="date" />
    </div>

    <div>
      <label for="budget" class="block text-sm font-medium">Költségvetés</label>
      <AppInput
        id="budget"
        v-model.number="budget"
        type="number"
        required
        min="1"
        step="any"
      />
    </div>
    <AppButton type="submit" subtitle="Mentés" />
  </form>
</template>
