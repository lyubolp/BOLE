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

  constructor(private gradesCardService: GradesCardService) {
  }

  ngOnInit(): void {
    this.gradesCardService.getGradesCards().subscribe((cards) => this.cards = cards);
  }

}
