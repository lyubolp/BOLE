import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleHomeworkRoutingModule} from './single-homework-routing.module';
import { SingleHomeworkComponent } from './single-homework/single-homework.component';
import { UploadHomeworkComponent } from './upload-homework/upload-homework.component';
import {SocialThreadModule} from '../social-thread/social-thread.module';


@NgModule({
  declarations: [SingleHomeworkComponent, UploadHomeworkComponent],
    imports: [
        CommonModule,
        SingleHomeworkRoutingModule,
        SocialThreadModule
    ]
})
export class SingleHomeworkModule { }
