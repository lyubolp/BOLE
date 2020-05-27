import { Component, OnInit } from '@angular/core';
import { Forum, ForumCategory } from '../../interfaces/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  forumGeneralCardsFiltered: Forum[] = [];
  forumCourseCardsFiltered: Forum[] = [];
  forumGeneralCards: Forum[] = [];
  forumCourseCards: Forum[] = [];
  // searchText = '';

  // probably should be moved to services
  ngOnInit(): void {
    this.forumService.getGeneralCards().subscribe((generalCards) => this.forumGeneralCards = generalCards);
    this.forumService.getCourseCards().subscribe((courseCards) => this.forumCourseCards = courseCards);
    this.filterCards();
  }

  filterCards() {
    // console.log(this.searchText);
    // if (this.searchText === '') {
      this.forumGeneralCardsFiltered = this.forumGeneralCards;
      this.forumCourseCardsFiltered = this.forumCourseCards;
    // } else {
    //   this.forumGeneralCardsFiltered = this.forumGeneralCards.filter((generalCard) => generalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
    //   this.forumCourseCardsFiltered = this.forumCourseCards.filter((personalCard) => personalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
    // }
  }
}
