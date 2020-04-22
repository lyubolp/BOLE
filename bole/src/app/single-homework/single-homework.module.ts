import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleHomeworkRoutingModule} from './single-homework-routing.module';
import { SingleHomeworkComponent } from './single-homework/single-homework.component';



@NgModule({
  declarations: [SingleHomeworkComponent],
  imports: [
    CommonModule,
    SingleHomeworkRoutingModule
  ]
})
export class SingleHomeworkModule { }
