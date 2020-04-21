import { Component, OnInit } from '@angular/core';
import { SocialCard } from '../social-card';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  socialGeneralCardsFiltered: SocialCard[] = [];
  socialPersonalCardsFiltered: SocialCard[] = [];
  SocialGeneralCards: SocialCard[] = [];
  SocialPersonalCards: SocialCard[] = [];
  searchText = '';

  ngOnInit(): void {
    this.SocialGeneralCards.push({ id: 1, name: 'Софтуерно инженерство 2017-2021', participants: 121, lastActivePost: 'Домашно по АСИ ???' });
    this.SocialGeneralCards.push({ id: 2, name: 'Софтуерно инженерство 2017-2012, група 2', participants: 22, lastActivePost: 'Домашно по АСИ ???' });
    this.SocialGeneralCards.push({ id: 3, name: 'ФМИ', participants: 500, lastActivePost: 'КСК?' });
    this.SocialPersonalCards.push({ id: 4, name: 'Обектно-ориентирано програмиране', participants: 121, lastActivePost: 'Домашно по АСИ ???' });
    this.SocialPersonalCards.push({ id: 5, name: 'Анализ на софтуерните изисвания', participants: 121, lastActivePost: 'Домашно по АСИ ???' });
    this.SocialPersonalCards.push({ id: 6, name: 'Web технорлогии', participants: 121, lastActivePost: 'Домашно по АСИ ???' });

    this.filterCards();
  }

  filterCards() {
    console.log(this.searchText);
    if (this.searchText === '') {
      this.socialGeneralCardsFiltered = this.SocialGeneralCards;
      this.socialPersonalCardsFiltered = this.SocialPersonalCards;
    } else {
      this.socialGeneralCardsFiltered = this.SocialGeneralCards.filter((generalCard) => generalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
      this.socialPersonalCardsFiltered = this.socialPersonalCardsFiltered.filter((personalCard) => personalCard.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
