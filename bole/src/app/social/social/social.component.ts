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

  colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];
  forumGeneralCardsFiltered: Forum[] = [];
  forumCourseCardsFiltered: Forum[] = [];
  forumGeneralCards: Forum[] = [];
  forumCourseCards: Forum[] = [];
  numbersGeneral: number[] = [];
  numbersCourse: number[] = [];

  ngOnInit(): void {
    this.forumService.getGeneralCards().subscribe((generalCards) => this.forumGeneralCards = generalCards);
    this.forumService.getCourseCards().subscribe((courseCards) => this.forumCourseCards = courseCards);
    this.filterCards();
    for (let i = 0; i < this.forumGeneralCardsFiltered.length; i++) {
      this.numbersGeneral.push(i);
    }
    for (let i = 0; i < this.forumCourseCardsFiltered.length; i++) {
      this.numbersCourse.push(i);
    }
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
