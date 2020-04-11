import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];

  constructor() {
    this.courses.push(
      {
        id: 1,
        name: 'Обектно Ориентирано Програмиране',
        resources: [
          {
            name: 'Лекция 1',
            link: 'http://google.com',
            type: 'lecture'
          }
        ]
      },
      {
        id: 2,
        name: 'Проектиране на човешко машинен интерфейс',
        resources: [
          {
            name: 'Лекция 1',
            link: 'http://youtube.com',
            type: 'lecture'
          },
          {
            name: 'Упражнение 1',
            link: 'http://twitter.com',
            type: 'link'
          }
        ]
      });
  }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourse(id: number): Observable<Course> {
    const course = this.courses.filter((c) => c.id === id);
    if (course.length === 1) {
      return of(course[0]);
    } else {
      throw new Error('Course not found');
    }
  }
}
