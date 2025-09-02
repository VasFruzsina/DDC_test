<template>
  <div class="fixed top-6 right-6 z-50 flex flex-col gap-3">
    <transition-group name="toast-fade" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'min-w-[220px] max-w-xs px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium',
          toast.type === 'success' ? 'bg-green-500 text-white' : '',
          toast.type === 'info' ? 'bg-blue-500 text-white' : '',
          toast.type === 'error' ? 'bg-red-500 text-white' : '',
        ]"
      >
        <span>{{ toast.message }}</span>
        <button
          class="ml-auto text-white/80 hover:text-white"
          @click="removeToast(toast.id)"
        >
          &times;
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "../composables/useToast";
const { toasts, removeToast } = useToast();
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
