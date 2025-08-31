<script setup lang="ts">
import type { ProjectForm } from "../../types/project";
import { getItem, removeProject } from "../composables/useProjectStorage";
import AppTable from "../UI/AppTable.vue";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

const one = getItem<ProjectForm>("projectForm");
const many = getItem<ProjectForm[]>("projectForms");
const rows = (many ?? (one ? [one] : [])) as ProjectForm[];

const q = ref("");

const searchableKeys: (keyof ProjectForm)[] = [
  "name",
  "description",
  "startDate",
  "budget",
];

const filteredRows = computed(() => {
  const term = q.value.trim().toLowerCase();
  if (!term) return rows;
  return rows.filter((r) =>
    searchableKeys.some((k) =>
      String((r as any)[k] ?? "")
        .toLowerCase()
        .includes(term)
    )
  );
});

const columns = [
  { key: "name", label: "Projekt neve" },
  { key: "description", label: "Leírás" },
  { key: "startDate", label: "Kezdési dátum" },
  { key: "budget", label: "Költségvetés" },
];

const router = useRouter();
const actions = [
  {
    label: "Szerkesztés",
    onClick: (row: ProjectForm) => router.push(`/projects/edit/${row.id}`),
  },
  { label: "Törlés", onClick: (row: ProjectForm) => removeProject(row.id) },
];
</script>

<template>
  <div class="mb-4 flex items-center gap-2 search-wrap">
    <input
      v-model.trim="q"
      type="search"
      placeholder="Keresés név, leírás, dátum, költségvetés…"
      class="search-input w-full rounded-lg border py-2"
      @keyup.enter.prevent
    />
  </div>
  <AppTable :rows="filteredRows" :columns="columns" :actions="actions" />
</template>