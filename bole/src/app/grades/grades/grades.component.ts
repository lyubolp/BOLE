import { Component, OnInit } from '@angular/core';
import { GradesCard } from '../../interfaces/grades-card';
import { GradesCardService } from 'src/app/services/grades-card.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  cards: GradesCard[] = [];
  colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];
  numbers: number[] = [];

  constructor(private gradesCardService: GradesCardService) {
  }

  ngOnInit(): void {
    this.gradesCardService.getGradesCards().subscribe((cards) => this.cards = cards);
    for (let i = 0; i < this.cards.length; i++) {
      this.numbers.push(i);
    }
  }

}
