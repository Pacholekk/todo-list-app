export interface Todo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
  startDate: Date;
}

export type FilterType = "all" | "active" | "completed";
