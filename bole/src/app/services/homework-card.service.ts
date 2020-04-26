import { Injectable } from '@angular/core';
import { HomeworkCard } from '../interfaces/homework-card';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkCardService {
  homeworkCards: HomeworkCard[] = [];

  constructor() {
    this.homeworkCards.push({
      id: 0,
      course: {
        id: 0,
        name: 'Обектно-ориентиране',
      },
      due_date: new Date('April 20, 2020 23:15:30'),
      discussion_id: 0,
      statement_id: 1
    });
    this.homeworkCards.push({
      id: 1,
      course: {
        id: 2,
        name: 'Анализ на софтуерните изисквания',
      },
      due_date: new Date('April 20, 2020 23:15:30'),
      discussion_id: 3,
      statement_id: 2
    });
  }

  getHomeworkCards(): Observable<HomeworkCard[]> {
    return of(this.homeworkCards);
  }
}
