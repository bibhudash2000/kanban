import { Task } from "./task.model";
export class Column {
  constructor(public name: string, public color: string, public id: string, public tasks: Task[]) { }
}
