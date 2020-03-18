import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  declarations: [CoursesComponent, CourseCardComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
  ]
})
export class CoursesModule { }
