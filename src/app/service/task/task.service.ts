import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public updateTask(task: Task) {
    return this.http.put(`${baseUrl}/tasks/`, task);
  }
}
