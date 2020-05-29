import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ChatThreadComponent } from './chat/chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChatComponent,
    ChatThreadComponent,
    ChatMessageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
