import { TaskColumn } from "./column.model";
import { TaskAudit } from "./taskAudit.model";
import { User } from "./user.model";

export class Task {
    id: number;
    taskName: string;
    taskColumn: TaskColumn;
    dueDate: string;
    taskPriority: string;
    startDate: string;
    endDate: string;
    completionPercentage: number;
    assignedBy: User;
    responsible: User;
    taskAudits: TaskAudit[];

    // tags: string[];
    // constructor(taskName: string, createdOn: string, responsible: string, tags: string[]) {
    //     this.taskName = taskName;
    //     this.createdOn = createdOn;
    //     this.responsible = responsible;
    //     this.tags = tags;
    // }

    constructor(id: number,
        taskName: string,
        taskColumn: TaskColumn,
        dueDate: string,
        taskPriority: string,
        startDate: string,
        endDate: string,
        completionPercentage: number,
        assignedBy: User,
        responsible: User,
        taskAudits: TaskAudit[]) {

        this.id = id;
        this.taskName = taskName;
        this.taskColumn = taskColumn;
        this.dueDate = dueDate;
        this.taskPriority = taskPriority;
        this.startDate = startDate;
        this.endDate = endDate;
        this.completionPercentage = completionPercentage;
        this.assignedBy = assignedBy;
        this.responsible = responsible;
        this.taskAudits = taskAudits;

    }
}

/**
 * taskColumn
dueDate
taskPriority
startDate
endDate
completionPercentage
assignedBy
responsible
taskAudits
 */
