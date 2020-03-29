import { Component, OnInit, Input } from '@angular/core';
import { CourseGroup } from '../course-group';

@Component({
  selector: 'app-course-group',
  templateUrl: './course-group.component.html',
  styleUrls: ['./course-group.component.scss']
})
export class CourseGroupComponent implements OnInit {
  @Input() courseGroup: CourseGroup = new CourseGroup();

  constructor() { }

  ngOnInit(): void {
    // this.courseGroup.cards.push({ id: 1, name: 'Data structures and algorithms' });
    // this.courseGroup.cards.push({ id: 2, name: 'Object-oriented programming' });
    // this.courseGroup.cards.push({ id: 3, name: 'Introduction to programming' });
    // this.courseGroup.cards.push({ id: 4, name: 'Introduction to Software Engineering' });
    // this.courseGroup.cards.push({ id: 5, name: 'Quality assurance' });
    // this.courseGroup.cards.push({ id: 6, name: 'Discrete mathematics' });
    // this.courseGroup.cards.push({ id: 7, name: 'C++ for beginners' });
    // this.courseGroup.cards.push({ id: 8, name: 'Intermediate C++' });
  }
}
