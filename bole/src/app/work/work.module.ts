import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from './work-page/work-page.component';
import {WorkRoutingModule} from './work-routing.module';
import { JobCardComponent } from './job-card/job-card.component';



@NgModule({
  declarations: [WorkPageComponent, JobCardComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
