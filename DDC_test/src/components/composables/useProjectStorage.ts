import type { ProjectForm } from "../../types/project";

export function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function removeProject(id: string): void {
  const projects = getItem<ProjectForm[]>("projectForms") ?? [];
  const updated = projects.filter((p) => p.id !== id);
  setItem("projectForms", updated);
}
