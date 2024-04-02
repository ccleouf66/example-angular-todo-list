import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://37.59.28.30:8080/task'

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(taskName: string, taskDescription: string): Observable<Task>{
    let body: Task = {
      id: "",
      name: taskName,
      description: taskDescription,
      date: new Date()
    }
    return this.http.post<Task>(this.apiUrl, body);
  }

  deleteTask(taskID: string): Observable<Task>{
    let body: Task = {
      id: taskID,
      name: "",
      description: "",
      date: new Date()
    }
    return this.http.delete<Task>(this.apiUrl, {body: body});
  }
}
