import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.tasks.push({
      courseId: 6,
      title: "Контролно 1 по СДА",
      userId: 1,
    });
    this.tasks.push({
      courseId: 6,
      title: "Домашно 1 по СДА",
      userId: 1,
    });
    this.tasks.push({
      courseId: 1,
      title: "Домашно 2 по ООП",
      userId: 1,
    });
  }

  getTasksForUser(userId: number): Observable<Task[]> {
    return of(this.tasks.filter(task => task.userId === userId));
  }
}
