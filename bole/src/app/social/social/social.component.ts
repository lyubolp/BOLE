import { Component, OnInit } from '@angular/core';
import { SocialCard } from '../social-card';
import { Forum, ForumCategory } from '../../interfaces/forum';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  forumGeneralCardsFiltered: Forum[] = [];
  forumCourseCardsFiltered: Forum[] = [];
  forumGeneralCards: Forum[] = [];
  forumCourseCards: Forum[] = [];
  searchText = '';

  ngOnInit(): void {
    this.forumGeneralCards.push({ id: 1, name: 'Софтуерно инженерство 2017-2021', participants: 121, category:ForumCategory.General, threads:[]}); //, lastActivePost: 'Домашно по АСИ ???' });
    this.forumGeneralCards.push({ id: 2, name: 'Софтуерно инженерство 2017-2012, група 2', participants: 22, category:ForumCategory.General, threads:[]}); //, lastActivePost: 'Домашно по АСИ ???' });
    this.forumGeneralCards.push({ id: 3, name: 'ФМИ', participants: 500, category:ForumCategory.General, threads:[]}); //, lastActivePost: 'КСК?' });
    this.forumCourseCards.push({ id: 4, name: 'Обектно-ориентирано програмиране', participants: 121, category:ForumCategory.Course, threads:[]}); //, lastActivePost: 'Домашно по АСИ ???' });
    this.forumCourseCards.push({ id: 5, name: 'Анализ на софтуерните изисвания', participants: 121, category:ForumCategory.Course, threads:[]}); //, lastActivePost: 'Домашно по АСИ ???' });
    this.forumCourseCards.push({ id: 6, name: 'Web технорлогии', participants: 121, category:ForumCategory.Course, threads:[]}); //, lastActivePost: 'Домашно по АСИ ???' });

    this.filterCards();
  }

  filterCards() {
    console.log(this.searchText);
    if (this.searchText === '') {
      this.forumGeneralCardsFiltered = this.forumGeneralCards;
      this.forumCourseCardsFiltered = this.forumCourseCards;
    } else {
      this.forumGeneralCardsFiltered = this.forumGeneralCards.filter((generalCard) => generalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
      this.forumCourseCardsFiltered = this.forumCourseCards.filter((personalCard) => personalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
