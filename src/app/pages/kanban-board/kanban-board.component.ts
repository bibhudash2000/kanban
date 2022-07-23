import { Component, Inject, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

import { Board } from '../../model/board.model';
import { Column } from '../../model/column.model';
import { Task } from 'src/app/model/task.model';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  public open: Task[] = [
    {
      taskName: 'Task1',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task2',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task14',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task20',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    }
  ];

  public inProgress: Task[] = [
    {
      taskName: 'Task3',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task4',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task24',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    }
  ];
  public onHold: Task[] = [
    {
      taskName: 'Task5',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task6',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    }
  ];

  public completed: Task[] = [
    {
      taskName: 'Task7',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    },
    {
      taskName: 'Task8',
      createdOn: new Date().toLocaleDateString(),
      responsible: 'Bibhu'
    }
  ];

  public board: Board = new Board('Kanban Board', [
    new Column('Open', '#00b0ff', '1', this.open),
    new Column('In-Progress', '#fdd835', '2', this.inProgress),
    new Column('On-Hold', '#d50000', '3', this.onHold),
    new Column('Completed', '#00c853', '4', this.completed)
  ]);
  constructor(public dialog: MatDialog) { }

  public task = Task;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        taskName: 'Test Task',
        createdOn: '12/06/2000',
        responsible: 'Bibhu'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.task = result;
    });
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

