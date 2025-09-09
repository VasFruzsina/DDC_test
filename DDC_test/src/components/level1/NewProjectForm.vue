<template>
  <div class="relative min-h-[70vh] p-10">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      ></div>
    </div>

    <div
      class="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md"
    >
      <header class="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1
            class="text-xl font-semibold text-indigo-600 dark:text-slate-100 mb-2"
          >
            {{ isEditing ? "Projekt szerkesztése" : "Új projekt" }}
          </h1>
          <p class="text-sm text-slate-500">
            Töltsd ki az alábbi mezőket, majd mentsd el.
          </p>
        </div>
        <span
          class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600"
        >
          {{ isEditing ? "Szerkesztés" : "Létrehozás" }}
        </span>
      </header>

      <form class="grid gap-5" @submit.prevent="onSubmit">
        <div class="relative">
          <label
            for="name"
            class="mb-2 block text-sm font-medium text-slate-600"
            >Projekt neve</label
          >

          <AppInput id="name" v-model="name" type="text" required />
        </div>

        <div>
          <label
            for="desc"
            class="mb-2 block text-sm font-medium text-slate-600"
            >Leírás</label
          >
          <div class="relative">
            <AppTextarea
              id="desc"
              v-model="description"
              placeholder="Röviden a projektről…"
            />
            <span
              class="pointer-events-none absolute bottom-2 right-3 text-xs text-slate-400"
            >
              {{ description?.length ?? 0 }}/500
            </span>
          </div>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <div class="relative">
            <label
              for="start"
              class="mb-2 block text-sm font-medium text-slate-600"
              >Kezdési dátum</label
            >
            <AppInput id="start" v-model="startDate" type="date"></AppInput>
          </div>
          <div class="relative">
            <label
              for="budget"
              class="mb-2 block text-sm font-medium text-slate-600"
              >Költségvetés</label
            >
            <AppInput
              id="budget"
              v-model.number="budget"
              type="number"
              min="1"
              step="any"
            />
            <span
              class="pointer-events-none absolute right-3 top-[42px] rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-white/90"
            >
              HUF
            </span>
          </div>
        </div>
        <div class="mt-2 flex items-center justify-center gap-3">
          <AppButton type="submit" subtitle="Mentés" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { ProjectForm } from "../../types/project";
import { getItem, setItem } from "../composables/useProjectStorage";
import AppButton from "../UI/AppButton.vue";
import AppInput from "../UI/AppInput.vue";
import AppTextarea from "../UI/AppTextarea.vue";
import { onMounted, ref, computed } from "vue";
import { useToast } from "../composables/useToast";
const { showToast } = useToast();

const name = ref<string | undefined>(undefined);
const description = ref<string | undefined>(undefined);
const startDate = ref<string | undefined>(undefined);
const budget = ref<number | null>(null);

const route = useRoute();
const id = String(route.params.id ?? "");
const all = getItem<ProjectForm[]>("projectForms") ?? [];
const project = all.find((p) => p.id === id);
const isEditing = computed(() => !!id && !!project);

function generateID(): string {
  return crypto.randomUUID();
}

function onSubmit() {
  const list = all;

  if (isEditing.value && project) {
    const idx = list.findIndex((p) => p.id === id);
    list[idx] = {
      ...project,
      name: name.value ?? "",
      description: description.value ?? "",
      startDate: startDate.value ?? "",
      budget: budget.value ?? null,
      updatedAt: new Date().toISOString(),
    };
    setItem("projectForms", list);
    showToast("Projekt sikeresen módosítva!", "info");
  } else {
    const now = new Date().toISOString();
    const data: ProjectForm = {
      id: generateID(),
      name: name.value ?? "",
      description: description.value ?? "",
      startDate: startDate.value ?? "",
      budget: budget.value ?? null,
      createdAt: now,
      updatedAt: now,
    };
    list.push(data);
    setItem("projectForms", list);
    showToast("Új projekt sikeresen létrehozva!", "success");
  }
}

onMounted(() => {
  if (project) {
    name.value = project.name;
    description.value = project.description;
    startDate.value = project.startDate;
    budget.value = project.budget;
  }
});
</script>
