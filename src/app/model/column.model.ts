import { Task } from "./task.model";
export class TaskColumn {
  id: number;
  columnName: string;
  colorCode: string;
  tasks: Task[];
  constructor(id: number,
    columnName: string,
    colorCode: string,
    tasks: Task[]) {
    this.id = id;
    this.columnName = columnName;
    this.colorCode = colorCode;
    this.tasks = tasks;
  }
}
