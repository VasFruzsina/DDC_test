import { ref } from "vue";

export type ToastType = "success" | "info" | "error";
export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const toasts = ref<Toast[]>([]);
let nextId = 1;

function showToast(message: string, type: ToastType = "info", duration = 3000) {
  const id = nextId++;
  toasts.value.push({ id, message, type });
  setTimeout(() => {
    removeToast(id);
  }, duration);
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id);
}

export function useToast() {
  return {
    toasts,
    showToast,
    removeToast,
  };
}
