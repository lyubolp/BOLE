import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GradesCard } from '../interfaces/grades-card';

@Injectable({
  providedIn: 'root'
})
export class GradesCardService {

  cards: GradesCard[] = [];

  constructor() {
    this.cards.push({
      studentId: 1, courseId: 1, courseName: 'Обектно-ориентирано програмиране',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, grade: 8, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, grade: 0, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, grade: 6, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, grade: 0, weight: 10 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 2, courseName: 'Анализ на софтуерните изисквания',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 2, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, grade: 8, weight: 5 },
            { studentId: 1, courseId: 2, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, grade: 0, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 2, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, grade: 6, weight: 10 },
            { studentId: 1, courseId: 2, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, grade: 0, weight: 10 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 1, courseName: 'Обектно-ориентирано програмиране',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, grade: 1, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, grade: 2, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, grade: 3, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, grade: 4, weight: 10 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 2, courseName: 'Анализ на софтуерните изисквания',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 2, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, grade: 5, weight: 5 },
            { studentId: 1, courseId: 2, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, grade: 6, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 2, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, grade: 7, weight: 10 },
            { studentId: 1, courseId: 2, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, grade: 10, weight: 10 }
          ]
        }
      ]
    });
  }

  getGradesCards(): Observable<GradesCard[]> {
    return of(this.cards);
  }
}
