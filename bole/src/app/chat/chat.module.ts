import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';



@NgModule({
  declarations: [ChatComponent, ChatThreadComponent, ChatMessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
  ]
})
export class ChatModule { }
