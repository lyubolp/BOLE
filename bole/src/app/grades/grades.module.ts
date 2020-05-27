import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades/grades.component';
import { GradesCardComponent } from './grades-card/grades-card.component';
import { GradesSectionComponent } from './grades-section/grades-section.component';
import { GradeComponent } from './grade/grade.component';


@NgModule({
  declarations: [GradesComponent, GradesCardComponent, GradesSectionComponent, GradeComponent],
  imports: [
    CommonModule,
    GradesRoutingModule
  ]
})
export class GradesModule { }
