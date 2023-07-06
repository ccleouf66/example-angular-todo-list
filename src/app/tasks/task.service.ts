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

  apiUrl = 'https://example-go-todo-list-api-ccleouf66.app.codenito.io/task'

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
}
