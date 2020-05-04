import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { SummaryPanelComponent } from './summary-panel/summary-panel.component';


@NgModule({
  declarations: [HomeworksComponent, SummaryPanelComponent],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
