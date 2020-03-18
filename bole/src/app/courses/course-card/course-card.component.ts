import { Component, OnInit, Input } from '@angular/core';
import { CourseCard } from '../course-card';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() courseCard: CourseCard;
  constructor() { }

  ngOnInit(): void {
  }

}
