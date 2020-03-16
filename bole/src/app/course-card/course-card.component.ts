import { Component, OnInit, Input } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: CourseComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
