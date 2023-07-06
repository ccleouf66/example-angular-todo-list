import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './tasks/task.service';


import { Task } from './tasks/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'example-angular-todo-list';
  tasks: Task[] = [];
  selectedTask: Task | null = null;

  applyForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  selectTask(task: Task): void {
    this.selectedTask = task;
  }

  createTask() {
    this.taskService.createTask(this.applyForm.value.name!, this.applyForm.value.description!).subscribe((task: Task) => {
      console.log(task.name + "created");
      this.getTasks();
    })
  }
}