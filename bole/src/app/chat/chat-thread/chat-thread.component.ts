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
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.picture = "assets/icons/person-24px.svg";
    const hideMessages = document.getElementsByClassName('chat-messages');
    for (let i = 0; i < hideMessages.length; i++) {
      (hideMessages[i] as HTMLElement).style.visibility = 'hidden';
      (hideMessages[i] as HTMLElement).style.height = '0';
    }
  }
  toggleChatThread(event: MouseEvent) {
    const target = (event.composedPath()[2] as HTMLElement).children.item(0).children.item(1) as HTMLElement;
    if (target.className == 'chat-messages') {
      if (target.style.visibility === '') {
        target.style.visibility = 'hidden';
        target.style.height = '0';
      } else {
        target.style.visibility = '';
        target.style.height = '100%';
      }
    }
  }
  sendMessage() {
    this.newMessage = '';
  }
}
