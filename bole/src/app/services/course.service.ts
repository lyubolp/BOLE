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
      subName:'Летен семестър 2020/2021',
      sections: [
        {
          id: 2,
          name: 'Седмица 1',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'pdf'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        },
        {
          id: 12,
          name: 'Седмица 2',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        },
        {
          id: 13,
          name: 'Седмица 3',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        },
        {
          id: 14,
          name: 'Седмица 4',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        },
        {
          id: 15,
          name: 'Седмица 5',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        },
        {
          id: 16,
          name: 'Седмица 6',
          resourceLinks: [
            {
              name: 'Лекция',
              link: 'TODO-ADD-LINK',
              type: 'video'
            },
            {
              name: 'Код от упражнения',
              link: 'TODO-ADD-LINK',
              type: 'code'
            },
            {
              name: 'Запис от лекцията',
              link: 'TODO-ADD-LINK',
              type: 'video'
            }
          ],
        }
      ],
      pinned: {
        id: 3,
        name: 'Закачени',
        resourceLinks: [
          {
            name: 'Облак на курса',
            link: 'TODO-ADD-LINK',
            type: 'cloud'
          },
          {
            name: 'Последна лекция',
            link: 'TODO-ADD-LINK',
            type: 'video'
          },
          {
            name: 'Общност на курса',
            link: 'TODO-ADD-LINK',
            type: 'social'
          },
        ]
      },
      announcements: [
        {
          id: 4,
          announcement: "Домашно 1 е качено",
          date: new Date('03.03.2020 21:53')
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
      subName: 'Зимен семестър 2019/2020',
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
              type: 'code'
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
              type: 'code'
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
            link: 'https://youtube.com/',
            type: 'link'
          }
        ]
      },
      announcements: [
        {
          id: 10,
          announcement: "Домашно 2 е качено",
          date: new Date('05.03.2019 22:22')
        },
        {
          id: 11,
          announcement: "Утре няма да има лекция",
          date: new Date('06.03.2019 22:22')
        },
        {
          id: 21,
          announcement: "Домашно 3 е качено",
          date: new Date('07.03.2019 22:22')
        },
        {
          id: 22,
          announcement: "Домашно 4 е качено",
          date: new Date('08.03.2019 22:22')
        },
        {
          id: 23,
          announcement: "Домашно 5 е качено",
          date: new Date('09.03.2019 22:22')
        },
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
