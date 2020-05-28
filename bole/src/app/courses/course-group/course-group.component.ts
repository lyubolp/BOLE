import { Component, OnInit, Input } from '@angular/core';
import { CourseCardSection } from '../../interfaces/course-card-section';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { CourseCard } from 'src/app/interfaces/course-card';

@Component({
  selector: 'app-course-group',
  templateUrl: './course-group.component.html',
  styleUrls: ['./course-group.component.scss']
})
export class CourseGroupComponent implements OnInit {
  @Input() section: CourseCardSection = new CourseCardSection();
  searchText: string = '';
  filteredCards: CourseCard[] = [];

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit(): void {
    this.searchBarService.currentSearch.subscribe(searchText => {
      this.searchText = searchText.toLowerCase();
      this.filterCards();
    });
  }

  filterCards(): void {
    this.filteredCards = [];
    this.section.cards.forEach(card => {
      if (card.name.toLowerCase().includes(this.searchText)) {
        this.filteredCards.push(card);
      }
    });
  }
  
}
