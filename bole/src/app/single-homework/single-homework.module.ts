import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleHomeworkRoutingModule} from './single-homework-routing.module';
import { SingleHomeworkComponent } from './single-homework/single-homework.component';
import { UploadHomeworkComponent } from './upload-homework/upload-homework.component';



@NgModule({
  declarations: [SingleHomeworkComponent, UploadHomeworkComponent],
  imports: [
    CommonModule,
    SingleHomeworkRoutingModule
  ]
})
export class SingleHomeworkModule { }
