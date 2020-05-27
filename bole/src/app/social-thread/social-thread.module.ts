import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SocialThreadRoutingModule } from './social-thread-routing.module';
import { SocialThreadComponent } from './social-thread/social-thread.component';
import { SocialThreadCardComponent } from './social-thread-card/social-thread-card.component';
import { SocialThreadMessagesComponent } from './social-thread-messages/social-thread-messages.component';

@NgModule({
  declarations: [SocialThreadComponent, SocialThreadCardComponent, SocialThreadMessagesComponent],
  imports: [
    CommonModule,
    SocialThreadRoutingModule,
    FormsModule,
  ]
})
export class SocialThreadModule { }
