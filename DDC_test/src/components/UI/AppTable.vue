<script setup lang="ts">
export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  formatter?: (value: any, row: T) => string;
}

const props = defineProps<{
  rows: any[];
  columns: TableColumn[];
  actions?: {
    label: string;
    onClick: (row: any) => void;
  }[];
}>();
</script>

<template>
  <table class="w-full border-collapse rounded">
    <thead>
      <tr class="bg-white/5">
        <th
          v-for="col in columns"
          :key="col.key"
          class="border px-3 py-2 text-center"
        >
          {{ col.label }}
        </th>
        <th
          v-if="actions && actions.length"
          :colspan="actions.length"
          class="border px-3 py-2 text-center"
        >
          Műveletek
        </th>
      </tr>
    </thead>

    <tbody v-if="rows.length">
      <tr v-for="(row, i) in rows" :key="row.id ?? i">
        <td v-for="col in columns" :key="col.key" class="border text-center">
          {{ col.formatter ? col.formatter(row[col.key], row) : row[col.key] }}
        </td>
        <td
          v-for="action in actions"
          :key="action.label"
          class="border text-center"
        >
          <button
            class="px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600"
            @click="action.onClick(row)"
          >
            {{ action.label }}
          </button>
        </td>
      </tr>
    </tbody>

    <tbody v-else>
      <tr>
        <td
          class="border px-3 py-4 text-center"
          :colspan="columns.length + (actions?.length || 0)"
        >
          Nincs adat.
        </td>
      </tr>
    </tbody>
  </table>
</template>
