import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskColumn } from 'src/app/model/column.model';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class TaskColumnService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<TaskColumn[]>(`${baseUrl}/taskColumn/`);
  }
}
