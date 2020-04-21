import { Component, OnInit, Input } from '@angular/core';
import { CourseCardSection } from '../../interfaces/course-card-section';

@Component({
  selector: 'app-course-group',
  templateUrl: './course-group.component.html',
  styleUrls: ['./course-group.component.scss']
})
export class CourseGroupComponent implements OnInit {
  @Input() courseGroup: CourseCardSection = new CourseCardSection();

  constructor() { }

  ngOnInit(): void {
  }
}
