import { Component, OnInit, Input } from '@angular/core';
import { CourseGroupComponent } from '../course-group/course-group.component';
import { CourseGroup } from '../course-group';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseGroups: CourseGroup[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.courseGroups.push(new CourseGroup('Летен Семестър 2019/2020', [
      { id: 1, name: 'Data structures and algorithms' },
      { id: 2, name: 'Object-oriented programming' },
      { id: 3, name: 'Introduction to programming' },
      { id: 4, name: 'Introduction to Software Engineering' },
      { id: 5, name: 'Quality assurance' },
      { id: 6, name: 'Discrete mathematics' },
    ]));
    
    this.courseGroups.push(new CourseGroup('Зимен семестър 2018/2019', [
      { id: 5, name: 'Quality assurance' },
      { id: 6, name: 'Discrete mathematics' },
      { id: 7, name: 'C++ for beginners' },
      { id: 8, name: 'Intermediate C++' }
    ]));
  }
}
