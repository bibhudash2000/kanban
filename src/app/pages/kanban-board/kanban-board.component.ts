import { Component, Inject, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

import { Board } from '../../model/board.model';
import { TaskColumn } from '../../model/column.model';
import { Task } from 'src/app/model/task.model';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatChipSelectionChange } from '@angular/material/chips';
import { TaskColumnService } from 'src/app/service/task-column/task-column.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  // public open: Task[] = [
  //   {
  //     taskName: 'Task1',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag1", "tag2"]
  //   },
  //   {
  //     taskName: 'Task2',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag3", "tag4"]
  //   },
  //   {
  //     taskName: 'Task14',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag5", "tag6"]
  //   },
  //   {
  //     taskName: 'Task20',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag7", "tag8"]
  //   }
  // ];

  // public inProgress: Task[] = [
  //   {
  //     taskName: 'Task3',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag9", "tag10"]
  //   },
  //   {
  //     taskName: 'Task4',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag11", "tag12"]
  //   },
  //   {
  //     taskName: 'Task24',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag13", "tag14"]
  //   }
  // ];
  // public onHold: Task[] = [
  //   {
  //     taskName: 'Task5',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag1", "tag2"]
  //   },
  //   {
  //     taskName: 'Task6',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag3", "tag2"]
  //   }
  // ];

  // public completed: Task[] = [
  //   {
  //     taskName: 'Task7',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag2", "tag1"]
  //   },
  //   {
  //     taskName: 'Task8',
  //     createdOn: new Date().toLocaleDateString(),
  //     responsible: 'Bibhu',
  //     tags: ["tag5", "tag8"]
  //   }
  // ];

  taskColumns: TaskColumn[] = [];

  // public board: Board = new Board('Kanban Board', [
  //   new Column('Open', '#00b0ff', '1', this.open),
  //   new Column('In-Progress', '#fdd835', '2', this.inProgress),
  //   new Column('On-Hold', '#d50000', '3', this.onHold),
  //   new Column('Completed', '#00c853', '4', this.completed)
  // ]);

  constructor(private dialog: MatDialog, public taskColumnService: TaskColumnService) {

  }
  public board: Board = new Board('Kanban Board', this.getColumns());


  getColumns(): any {
    this.taskColumnService.findAll().subscribe(
      (data) => {
        data.map(d => this.taskColumns.push(d));
      }
    );
    return this.taskColumns;
  }

  public task = Task;

  public chips = [
    "hard",
    "docs",
    "backend",
    "frontend",
  ]

  public chipsFinal = this.chips.slice(0, 2);

  openDialog(task: Task) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = task;
    this.dialog.open(DialogComponent, dialogConfig);

  }

  ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public getTasksBorderColor(color: string): string {
    return '4px solid ' + color;
  }

}

