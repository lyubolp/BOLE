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
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
