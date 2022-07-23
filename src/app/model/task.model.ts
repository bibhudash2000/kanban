export class Task {
    taskName: string;
    createdOn: string;
    responsible: string;
    constructor(taskName: string, createdOn: string, responsible: string) {
        this.taskName = taskName;
        this.createdOn = createdOn;
        this.responsible = responsible;
    }
}
