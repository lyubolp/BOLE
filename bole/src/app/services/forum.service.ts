import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumCategory, Forum } from '../interfaces/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  generalForums: Forum[] = [];
  socialForums: Forum[] = [];

  constructor() {

    this.generalForums.push({ id: 1, name: 'Софтуерно инженерство 2017-2021', participants: 121, category: ForumCategory.General, threads: [] }); //, lastActivePost: 'Домашно по АСИ ???' });
    this.generalForums.push({ id: 2, name: 'Софтуерно инженерство 2017-2012, група 2', participants: 22, category: ForumCategory.General, threads: [] }); //, lastActivePost: 'Домашно по АСИ ???' });
    this.generalForums.push({ id: 3, name: 'ФМИ', participants: 500, category: ForumCategory.General, threads: [] }); //, lastActivePost: 'КСК?' });
    this.socialForums.push({ id: 4, name: 'Обектно-ориентирано програмиране', participants: 121, category: ForumCategory.Course, threads: [] }); //, lastActivePost: 'Домашно по АСИ ???' });
    this.socialForums.push({ id: 5, name: 'Анализ на софтуерните изисвания', participants: 121, category: ForumCategory.Course, threads: [] }); //, lastActivePost: 'Домашно по АСИ ???' });
    this.socialForums.push({ id: 6, name: 'Web технорлогии', participants: 121, category: ForumCategory.Course, threads: [] }); //, lastActivePost: 'Домашно по АСИ ???' });

  }

  getGeneralCards(): Observable<Forum[]> {
    return of(this.generalForums);
  }

  getCourseCards(): Observable<Forum[]> {
    return of (this.socialForums);
  }
}
