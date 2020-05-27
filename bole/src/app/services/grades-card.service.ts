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
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, gradeMin: 0, grade: 8, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, gradeMin: 0, grade: 6, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 3', gradeMax: 10, gradeMin: 0, grade: 10, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, gradeMin: 0, grade: 6, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, gradeMin: 0, grade: 7, weight: 10 }
          ]
        },
        {
          name: 'Курсов проект', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Проект', gradeMax: 10, gradeMin: 0, grade: 9, weight: 25 }
          ]
        },
        {
          name: 'Изпит', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Изпит', gradeMax: 10, gradeMin: 0, grade: 8, weight: 40 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 2, courseName: 'Анализ на софтуерните изисквания',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, gradeMin: 0, grade: 8, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 3', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, gradeMin: 0, grade: 6, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 10 }
          ]
        },
        {
          name: 'Курсов проект', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Проект', gradeMax: 10, gradeMin: 0, grade: 0, weight: 25 }
          ]
        },
        {
          name: 'Изпит', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Изпит', gradeMax: 10, gradeMin: 0, grade: 0, weight: 40 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 1, courseName: 'Web технологии',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, gradeMin: 0, grade: 8, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 3', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, gradeMin: 0, grade: 6, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 10 }
          ]
        },
        {
          name: 'Курсов проект', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Проект', gradeMax: 10, gradeMin: 0, grade: 0, weight: 25 }
          ]
        },
        {
          name: 'Изпит', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Изпит', gradeMax: 10, gradeMin: 0, grade: 0, weight: 40 }
          ]
        }
      ]
    });
    this.cards.push({
      studentId: 1, courseId: 2, courseName: 'Обектно-ориентирано програмиране',
      sections: [
        {
          name: 'Домашни', grades: [
            { studentId: 1, courseId: 1, taskId: 1, taskName: 'Домашно 1', gradeMax: 10, gradeMin: 0, grade: 8, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 },
            { studentId: 1, courseId: 1, taskId: 2, taskName: 'Домашно 3', gradeMax: 10, gradeMin: 0, grade: 0, weight: 5 }
          ]
        },
        {
          name: 'Контролни', grades: [
            { studentId: 1, courseId: 1, taskId: 3, taskName: 'Контролно 1', gradeMax: 10, gradeMin: 0, grade: 6, weight: 10 },
            { studentId: 1, courseId: 1, taskId: 4, taskName: 'Контролно 2', gradeMax: 10, gradeMin: 0, grade: 0, weight: 10 }
          ]
        },
        {
          name: 'Курсов проект', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Проект', gradeMax: 10, gradeMin: 0, grade: 0, weight: 25 }
          ]
        },
        {
          name: 'Изпит', grades: [
            { studentId: 1, courseId: 1, taskId: 5, taskName: 'Изпит', gradeMax: 10, gradeMin: 0, grade: 0, weight: 40 }
          ]
        }
      ]
    });
  }

  getGradesCards(): Observable<GradesCard[]> {
    return of(this.cards);
  }
}
