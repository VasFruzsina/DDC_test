export interface ProjectForm {
  id: number;
  name: string;
  description: string;
  startDate: string;
  budget: number | null;
}

export interface MenuItem {
  name: string;
  href: string;
  currentItem?: boolean;
}