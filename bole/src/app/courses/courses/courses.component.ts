import { Component, OnInit, Input } from '@angular/core';
import { CourseCardSection } from '../../interfaces/course-card-section';
import { CourseCardService } from 'src/app/services/course-card.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  sections: CourseCardSection[] = [];

  constructor(private courseCardService: CourseCardService) {
  }

  ngOnInit(): void {
    this.courseCardService.getCourseCardSections().subscribe((sections) => this.sections = sections);
  }
}
