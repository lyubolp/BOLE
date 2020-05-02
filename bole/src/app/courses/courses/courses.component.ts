import { Component, OnInit, Input } from '@angular/core';
import { CourseCardSection } from '../../interfaces/course-card-section';
import { CourseCardService } from 'src/app/services/course-card.service';
import { CourseCard } from 'src/app/interfaces/course-card';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  sections: CourseCardSection[] = [];

  constructor(private courseCardService: CourseCardService) {
  }

  courseCardsFiltered: CourseCard[] = [];
  courseCards: CourseCard[] = [];
  searchText = '';

  ngOnInit(): void {
    this.courseCardService.getCourseCardSections().subscribe((sections) => this.sections = sections);
  }
}
