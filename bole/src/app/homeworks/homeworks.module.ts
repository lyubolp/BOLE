import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { HomeworksComponent } from './homeworks/homeworks.component';


@NgModule({
  declarations: [HomeworksComponent],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
