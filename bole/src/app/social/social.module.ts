import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social/social.component';
import { SocialCardComponent } from './social-card/social-card.component';


@NgModule({
  declarations: [SocialComponent, SocialCardComponent],
  imports: [
    CommonModule,
    SocialRoutingModule,
    FormsModule
  ]
})
export class SocialModule { }
