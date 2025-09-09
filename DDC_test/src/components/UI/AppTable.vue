<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-2xl"
    ></div>

    <div
      class="overflow-x-auto rounded-2xl bg-white/80 dark:bg-slate-900/40 backdrop-blur shadow-lg"
    >
      <table class="min-w-full border-separate border-spacing-0">
        <thead class="sticky top-0 z-10">
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 bg-white/30 dark:bg-slate-900/40 backdrop-blur border-b border-white/20 text-center"
              scope="col"
            >
              {{ col.label }}
            </th>
            <th
              v-if="actions && actions.length"
              class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 bg-white/30 dark:bg-slate-900/40 backdrop-blur border-b border-white/20 text-center"
              scope="col"
            >
              <div class="flex justify-center items-center gap-1">
                Műveletek
              </div>
            </th>
          </tr>
        </thead>

        <tbody v-if="rows.length">
          <tr
            v-for="row in rows"
            :key="row.id"
            class="bg-white/40 dark:bg-slate-900/20 transition-colors hover:bg-indigo-50/80 dark:hover:bg-slate-800/50"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              class="px-3 py-2 text-sm text-slate-800 dark:text-slate-200 align-middle max-w-[28rem] truncate text-center border-b border-white/10"
              :title="
                String(
                  col.formatter
                    ? col.formatter(row[col.key], row)
                    : row[col.key]
                )
              "
            >
              {{
                col.formatter ? col.formatter(row[col.key], row) : row[col.key]
              }}
            </td>

            <td
              v-if="actions && actions.length"
              class="px-3 py-2 text-sm text-slate-800 dark:text-slate-200 align-middle max-w-[28rem] truncate text-center border-b border-white/10 whitespace-nowrap"
            >
              <div class="flex justify-center items-center gap-2">
                <template v-for="action in actions" :key="action?.label">
                  <button
                    @click="action.onClick(row)"
                    :class="[
                      'rounded-full px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 transition-colors flex items-center justify-center',
                      action.label === 'Szerkesztés'
                        ? 'bg-blue-500/80 hover:bg-blue-600 text-white focus:ring-blue-400'
                        : action.label === 'Törlés' &&
                          'bg-red-500/80 hover:bg-red-600 text-white focus:ring-red-400',
                    ]"
                    :title="action.label"
                  >
                    <template v-if="action.label === 'Szerkesztés'">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182l-12.12 12.12a2 2 0 0 1-.878.513l-4.01 1.07a.5.5 0 0 1-.617-.617l1.07-4.01a2 2 0 0 1 .513-.878l12.12-12.12z"
                        />
                      </svg>
                    </template>
                    <template v-else-if="action.label === 'Törlés'">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 7h12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z"
                        />
                      </svg>
                    </template>
                    <template v-else>
                      {{ action.label }}
                    </template>
                  </button>
                </template>
              </div>
            </td>
          </tr>
        </tbody>

        <tbody v-else>
          <tr>
            <td
              class="px-6 py-10 text-center text-slate-500"
              :colspan="columns.length + (actions?.length || 0)"
            >
              <div class="mx-auto mb-2 text-3xl">🗂️</div>
              <div class="text-sm">Nincs adat.</div>
              <div class="mt-1 text-xs text-slate-400">
                Adj hozzá új elemet, vagy módosítsd a szűrési feltételeket.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from "../../types/project";

defineProps<{
  rows: any[];
  columns: TableColumn[];
  actions?: {
    label: string;
    onClick: (row: any) => void;
  }[];
}>();
</script>
