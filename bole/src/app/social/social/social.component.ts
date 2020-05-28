import { Component, OnInit } from '@angular/core';
import { Forum, ForumCategory } from '../../interfaces/forum';
import { ForumService } from 'src/app/services/forum.service';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private forumService: ForumService, private searchBarService: SearchBarService) { }

  colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];
  forumGeneralCardsFiltered: Forum[] = [];
  forumCourseCardsFiltered: Forum[] = [];
  forumGeneralCards: Forum[] = [];
  forumCourseCards: Forum[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.forumService.getGeneralCards().subscribe((generalCards) => this.forumGeneralCards = generalCards);
    this.forumService.getCourseCards().subscribe((courseCards) => this.forumCourseCards = courseCards);
    
    this.searchBarService.currentSearch.subscribe(searchText => {
      this.searchText = searchText.toLowerCase();
      this.filterCards();
    });
  }

  filterCards() {
    this.forumGeneralCardsFiltered = [];
    this.forumGeneralCards.forEach(forum => {
      if (forum.name.toLowerCase().includes(this.searchText)) {
        this.forumGeneralCardsFiltered.push(forum);
      }
    });
    this.forumCourseCardsFiltered = [];
    this.forumCourseCards.forEach(forum => {
      if (forum.name.toLowerCase().includes(this.searchText)) {
        this.forumCourseCardsFiltered.push(forum);
      }
    });
  }
}
