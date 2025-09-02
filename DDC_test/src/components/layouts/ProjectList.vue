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
      class="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md"
    >
      <header class="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1
            class="mb-2 text-xl font-semibold text-indigo-600 dark:text-slate-100"
          >
            Projektek
          </h1>
          <p class="text-sm text-slate-500">
            Keresés, szerkesztés és törlés az alábbi táblázatban.
          </p>
        </div>
        <span
          class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600"
        >
          Összesen: {{ filteredRows.length }}
        </span>
      </header>

      <div class="mb-4 flex items-center gap-2">
        <AppInput
          v-model.trim="q"
          placeholder="Keresés: név, leírás, dátum, költségvetés…"
          class="w-full"
          @keyup.enter.prevent
        />
      </div>

      <div v-if="filteredRows.length > 0">
        <AppTable :rows="filteredRows" :columns="columns" :actions="actions" />
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
      >
        <div class="text-3xl">🗂️</div>
        <p class="text-sm text-slate-500">
          Nincs találat a(z) “{{ q }}” kifejezésre.
        </p>
        <p class="text-xs text-slate-400">
          Tipp: próbálj rövidebb kulcsszót, vagy töröld a keresést.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectForm } from "../../types/project";
import { getItem, removeProject } from "../composables/useProjectStorage";
import AppTable from "../UI/AppTable.vue";
import AppInput from "../UI/AppInput.vue";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { CurrencyFormat, DateTimeFormat } from "../../utils/formatters";

const router = useRouter();
const q = ref("");

function readAll(): ProjectForm[] {
  const one = getItem<ProjectForm>("projectForm");
  const many = getItem<ProjectForm[]>("projectForms");
  return (many ?? (one ? [one] : [])) as ProjectForm[];
}

const rows = ref<ProjectForm[]>(readAll());

const searchableKeys: (keyof ProjectForm)[] = [
  "name",
  "description",
  "startDate",
  "budget",
];

const filteredRows = computed(() => {
  const term = q.value.trim().toLowerCase();
  if (!term) return rows.value;
  return rows.value.filter((r) =>
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
  {
    key: "startDate",
    label: "Kezdési dátum",
    formatter: (v: any) => DateTimeFormat(v),
  },
  {
    key: "budget",
    label: "Költségvetés",
    formatter: (v: any) => CurrencyFormat(Number(v)),
  },
];

function refresh() {
  rows.value = readAll();
}

const actions = [
  {
    label: "Szerkesztés",
    onClick: (row: ProjectForm) => router.push(`/projects/edit/${row.id}`),
  },
  {
    label: "Törlés",
    onClick: (row: ProjectForm) => {
      removeProject(row.id);
      refresh();
    },
  },
];
</script>