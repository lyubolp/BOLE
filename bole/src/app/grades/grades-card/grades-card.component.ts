import { Component, OnInit, Input } from '@angular/core';
import { GradesCard } from '../../interfaces/grades-card';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrls: ['./grades-card.component.scss']
})
export class GradesCardComponent implements OnInit {

  @Input() gradesCard: GradesCard;
  @Input() colorCode: string;
  finalGrade: number;

  constructor() { }

  ngOnInit(): void {
    this.calculateFinalGrade();
  }
  calculateFinalGrade() {
    this.finalGrade = 0;
    this.gradesCard.sections.forEach(section => {
      section.grades.forEach(grade => {
        this.finalGrade += grade.grade * (grade.weight / 100);
      });
    });
  }
}