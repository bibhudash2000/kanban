import { Task } from "./task.model";

export class TaskAudit {
    id: number;
    task: Task;
    stage: string;
    updatedBy: string;
    updatedOn: string;

    constructor(id: number,
        task: Task,
        stage: string,
        updatedBy: string,
        updatedOn: string) {
        this.id = id;
        this.task = task;
        this.stage = stage;
        this.updatedBy = updatedBy;
        this.updatedOn = updatedOn;

    }
}


/**
 * 


 */