import { Component, OnInit, Input } from '@angular/core';
import { GradesSection } from '../../interfaces/grades-section';

@Component({
  selector: 'app-grades-section',
  templateUrl: './grades-section.component.html',
  styleUrls: ['./grades-section.component.scss']
})
export class GradesSectionComponent implements OnInit {

  @Input() gradesSection: GradesSection;

  constructor() { }

  ngOnInit(): void {
  }

}
