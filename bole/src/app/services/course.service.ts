import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];

  constructor() {
    this.courses.push({
      id: 1,
      name: 'Обектно Ориентирано Програмиране',
      sections: [
        {
          id: 2,
          name: 'Седмица 1',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code-example'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video-link'
            }
          ],
        }
      ],
      pinned: {
        id: 3,
        name: 'Закачени',
        resourceLinks: [
          {
            name: 'График на провеждане',
            link: 'TODO-ADD-LINK',
            type: 'video'
          }
        ]
      },
      announcements: [
        {
          id: 4,
          announcement: "Домашно 1 е качено",
          date: new Date('17.03.2020 21:53')
        },
        {
          id: 5,
          announcement: "Утре (03.03) няма да има лекция",
          date: new Date('02.03.2020 21:53')
        }
      ]
    });

    this.courses.push({
      id: 6,
      name: 'Структури от данни и алгоритми',
      sections: [
        {
          id: 7,
          name: 'Седмица 1',
          resourceLinks: [
            {
              name: 'Лекция 1',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code-example'
            }
          ],
        },
        {
          id: 8,
          name: 'Седмица 2',
          resourceLinks: [
            {
              name: 'Лекция 2',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code-example'
            }
          ],
        }
      ],
      pinned: {
        id: 9,
        name: 'Закачени',
        resourceLinks: [
          {
            name: 'График на провеждане',
            link: 'TODO-ADD-LINK',
            type: 'video'
          },
          {
            name: 'Оценяване',
            link: 'TODO-ADD-LINK',
            type: 'link'
          },
          {
            name: 'Канал на курса',
            link: 'TODO-ADD-LINK',
            type: 'link'
          }
        ]
      },
      announcements: [
        {
          id: 10,
          announcement: "Домашно 2 е качено",
          date: new Date('17.03.2019 22:22')
        },
        {
          id: 11,
          announcement: "Утре няма да има лекция",
          date: new Date('02.03.2019 22:22')
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
