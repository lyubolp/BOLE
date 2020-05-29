import { Component, OnInit } from '@angular/core';
import { ChatThread } from 'src/app/interfaces/chat-thread';
import { ChatService } from 'src/app/services/chat.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatThreads: ChatThread[] = [];
  isOpen: boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChatThreads().subscribe((chatThreads) => this.chatThreads = chatThreads);
    const chat = document.getElementById('chat-container');
    const button = document.getElementById('chat-container');
    chat.style.visibility = 'hidden';

  }
  toggle() {
    const hideChat = document.getElementById('chat-container');
    const hideButton = document.getElementById('show-chat');
    if (hideChat.style.visibility === '') {
      hideChat.style.visibility = 'hidden';
      hideChat.style.height = '0';
      hideButton.style.right = '2em';
    } else {
      hideChat.style.visibility = '';
      hideChat.style.height = '100%';
      hideButton.style.right = '415px';
    }
  }
}
