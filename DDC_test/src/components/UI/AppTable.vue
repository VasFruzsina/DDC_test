<script setup lang="ts">
import type { ProjectForm } from "../../types/project";
import { getItem } from "../composables/useProjectStorage";
import AppButton from "./AppButton.vue";
import { removeProject } from "../composables/useProjectStorage";

const one = getItem<ProjectForm>("projectForm");
const many = getItem<ProjectForm[]>("projectForms");
const rows: ProjectForm[] = many ?? (one ? [one] : []);

</script>

<template>
  <table class="w-full border-collapse rounded">
    <thead>
      <tr class="bg-white/5">
        <th class="border px-3 py-2 text-center">Projekt neve</th>
        <th class="border px-3 py-2 text-center">Leírás</th>
        <th class="border px-3 py-2 text-center">Kezdési dátum</th>
        <th class="border px-3 py-2 text-center">Költségvetés</th>
        <th class="border px-3 py-2 text-center" colspan="2">Műveletek</th>
      </tr>
    </thead>

    <tbody v-if="rows.length">
      <tr v-for="item in rows" :key="item.id ?? item.name + item.startDate">
        <td class="border text-center">{{ item.name }}</td>
        <td class="border text-center">{{ item.description }}</td>
        <td class="border text-center">{{ item.startDate }}</td>
        <td class="border text-center">{{ item.budget }}</td>
        <td class="border text-center">
          <AppButton subtitle="Szerkesztés" type="button" />
        </td>
        <td class="border text-center">
          <AppButton subtitle="Törlés" type="button" @click="removeProject(item.id)" />
        </td>
      </tr>
    </tbody>

    <tbody v-else>
      <tr>
        <td class="border px-3 py-4 text-center" colspan="6">
          Nincs mentett projekt.
        </td>
      </tr>
    </tbody>
  </table>
</template>
