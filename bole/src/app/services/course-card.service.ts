import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseCardSection } from '../interfaces/course-card-section';

@Injectable({
  providedIn: 'root'
})
export class CourseCardService {

  sections: CourseCardSection[] = [];

  constructor() {
    this.sections.push(new CourseCardSection('Летен Семестър 2019/2020', [
      { id: 6, name: 'Структури от данни и алгоритми' },
      { id: 1, name: 'Обектно ориентирано програмиране' },
      { id: 3, name: 'Introduction to programming' },
      { id: 4, name: 'Introduction to Software Engineering' },
      { id: 5, name: 'Quality assurance' },
      { id: 2, name: 'Discrete mathematics' },
    ]));

    this.sections.push(new CourseCardSection('Зимен семестър 2018/2019', [
      { id: 5, name: 'Quality assurance' },
      { id: 6, name: 'Discrete mathematics' },
      { id: 7, name: 'C++ for beginners' },
      { id: 8, name: 'Intermediate C++' }
    ]));
  }

  getCourseCardSections(): Observable<CourseCardSection[]> {
    return of(this.sections);
  }
}
