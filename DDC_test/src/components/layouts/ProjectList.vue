<script setup lang="ts">
import type { ProjectForm } from "../../types/project";
import { getItem, removeProject } from "../composables/useProjectStorage";
import AppTable from "../UI/AppTable.vue";

const one = getItem<ProjectForm>("projectForm");
const many = getItem<ProjectForm[]>("projectForms");
const rows: ProjectForm[] = many ?? (one ? [one] : []);

const columns = [
  { key: "name", label: "Projekt neve" },
  { key: "description", label: "Leírás" },
  { key: "startDate", label: "Kezdési dátum" },
  { key: "budget", label: "Költségvetés" },
];

const actions = [
  {
    label: "Szerkesztés",
    onClick: (row: ProjectForm) => console.log("Edit", row),
  },
  { label: "Törlés", onClick: (row: ProjectForm) => removeProject(row.id) },
];
</script>

<template>
  <AppTable :rows="rows" :columns="columns" :actions="actions" />
</template>
