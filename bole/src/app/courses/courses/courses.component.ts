import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor() { }

  courseCardsFiltered: CourseCard[] = [];
  courseCards: CourseCard[] = [];
  searchText = '';

  ngOnInit(): void {
    this.courseCards.push({ id: 1, name: 'Data structures and algorithms' });
    this.courseCards.push({ id: 2, name: 'Object-oriented programming' });
    this.courseCards.push({ id: 3, name: 'Introduction to programming' });
    this.courseCards.push({ id: 4, name: 'Introduction to Software Engineering' });
    this.courseCards.push({ id: 5, name: 'Quality assurance' });
    this.courseCards.push({ id: 6, name: 'Discrete mathematics' });
    this.courseCards.push({ id: 7, name: 'C++ for beginners' });
    this.courseCards.push({ id: 8, name: 'Intermediate C++' });

    this.filterCards();
  }

  filterCards() {
    console.log(this.searchText);
    if (this.searchText === '') {
      this.courseCardsFiltered = this.courseCards;
    } else {
      this.courseCardsFiltered = this.courseCards.filter((card) => card.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
