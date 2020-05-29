import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/interfaces/chat-message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  dateHours: number;
  dateMinutes: number;

  constructor() { }

  ngOnInit(): void {
    this.dateHours = this.chatMessage.date.getHours();
    this.dateMinutes = this.chatMessage.date.getMinutes();
  }
}
