export interface ProjectForm {
  id: string;
  name: string;
  description: string;
  startDate: string;
  budget: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  name: string;
}

export interface TableColumn {
  key: string;
  label: string;
  formatter?: (value: any, row: any) => string;
}