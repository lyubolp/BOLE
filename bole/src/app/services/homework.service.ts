import { Injectable } from '@angular/core';
import { Homework } from '../interfaces/homework';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  homeworks: Homework[] = [];

  constructor() {
    this.homeworks.push({
      attemptsLeft: 0,
      course: {
        id: 1,
        name: 'Обектно-ориентирано програмиране'
      },
      name: 'Домашно 1',
      due_date: new Date('25.12.2020'),
      discussionId: 1,
      grade: {
        courseId: 1,
        grade: 0,
        gradeMax: 10,
        gradeMin: 0,
        studentId: 1,
        taskId: 1,
        taskName: 'Домашно 1',
        weight: 5
      },
      id: 1,
      discussion_id: 1,
      statement_id: 1,
    });
  }

  getHomework(id: number): Observable<Homework> {
    const course = this.homeworks.filter((c) => c.id === id);
    if (course.length === 1) {
      return of(course[0]);
    } else {
      throw new Error('Homework not found');
    }
  }
}
