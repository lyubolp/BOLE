import { Component, OnInit, Input } from '@angular/core';
import { Grade } from '../../interfaces/grade';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  @Input() grade: Grade;
  calculatedWidth: number;
  constructor() { }

  ngOnInit(): void {
    this.calculatedWidth = this.grade.grade / this.grade.gradeMax * 100;
  }

}
