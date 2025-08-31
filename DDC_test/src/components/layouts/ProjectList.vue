<script setup lang="ts">
import type { ProjectForm } from "../../types/project";
import { getItem, removeProject } from "../composables/useProjectStorage";
import AppTable from "../UI/AppTable.vue";
import { useRouter } from "vue-router";

const one = getItem<ProjectForm>("projectForm");
const many = getItem<ProjectForm[]>("projectForms");
const rows: ProjectForm[] = many ?? (one ? [one] : []);

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
  <AppTable :rows="rows" :columns="columns" :actions="actions" />
</template>
