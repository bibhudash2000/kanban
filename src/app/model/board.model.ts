import { TaskColumn } from './column.model';

export class Board {
  constructor(public name: string, public columns: TaskColumn[]) { }
}
