export interface ProjectForm {
  id: string;
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

export interface TableColumn {
  key: string;
  label: string;
  formatter?: (value: any, row: any) => string;
}