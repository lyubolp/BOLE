import { Component } from '@angular/core';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses: CourseComponent[] = [];

  constructor() {
    const courseA = new CourseComponent();
    courseA.id = 1;
    courseA.name = 'SDA';

    const courseB = new CourseComponent();
    courseB.id = 2;
    courseB.name = 'USI';

    this.courses.push(courseA);
    this.courses.push(courseB);
  }
}
