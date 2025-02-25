export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  startDate: Date;
}

export type FilterType = "all" | "active" | "completed";
