import { Component, OnInit, Input } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-courses-preview',
  templateUrl: './courses-preview.component.html',
  styleUrls: ['./courses-preview.component.scss']
})
export class CoursesPreviewComponent implements OnInit {
  @Input() title: string;
  @Input() courses: CourseComponent[];

  constructor() { }

  ngOnInit(): void {
  }

  addCourseCard(card: CourseComponent) {
    this.courses.push(card);
  }
}
