import { Component, OnInit, Input } from '@angular/core';
import { GradesCard } from '../../interfaces/grades-card';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrls: ['./grades-card.component.scss']
})
export class GradesCardComponent implements OnInit {

  @Input() gradesCard: GradesCard;
  
  finalGrade: number; // ---------------- calculate final grade ----------------

  constructor() { }

  ngOnInit(): void {
  }

}