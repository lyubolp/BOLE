import { Component, OnInit, Input } from '@angular/core';
import { ChatThread } from '../../interfaces/chat-thread';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss']
})
export class ChatThreadComponent implements OnInit {

  @Input() thread: ChatThread = new ChatThread();
  picture: string;
  threadHTML: HTMLElement;
  userHTML: HTMLElement;
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.picture = "assets/icons/person-24px.svg";
  }
  toggleChatThread(event: MouseEvent) {
    if (!this.threadHTML) {
      this.threadHTML = document.getElementById('chat-messages');
    }
    if (this.threadHTML) {
      if (this.threadHTML.style.visibility === '') {
        this.threadHTML.style.visibility = 'hidden';
        this.threadHTML.style.height = '0';
      } else {
        this.threadHTML.style.visibility = '';
        this.threadHTML.style.height = '100%';
      }
    }
  }
  sendMessage() {
    this.newMessage = '';
  }
}
