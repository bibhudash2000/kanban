import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Task } from 'src/app/model/task.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  task: Task;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.task = data;
  }

  // form!: FormGroup;

  // public mytags: string[] = [];

  ngOnInit(): void {
    // this.mytags = this.task.tags;
  }

  save() {
    // this.dialogRef.close(this.form.value);

  }
  closeDialog() {
    this.dialogRef.close();
  }

  addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our tag
  //   if (value) {
  //     this.task.tags.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }



  // remove(tag: string): void {
  //   const index = this.task.tags.indexOf(tag);

  //   if (index >= 0) {
  //     this.task.tags.splice(index, 1);
  //   }
  // }



}
