<script setup lang="ts">
import AppButton from "../UI/AppButton.vue";
import AppInput from "../UI/AppInput.vue";
import AppTextarea from "../UI/AppTextarea.vue";


import { ref } from "vue";

const name = ref<string | undefined>(undefined);
const description = ref<string | undefined>(undefined);
const startDate = ref<string | undefined>(undefined);
const budget = ref<number | null>(null);

</script>

<template>
  <form class="flex flex-col gap-4">
    <div>
      <label for="name" class="block text-sm font-medium">Projekt neve</label>
      <AppInput id="name" v-model="name" type="text" />
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
      <AppInput id="budget" v-model.number="budget" type="number" />
    </div>
    <AppButton type="submit" subtitle="Submit"/>
  </form>
</template>
