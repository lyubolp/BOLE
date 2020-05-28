import { Injectable } from '@angular/core';
import { ChatThread } from 'src/app/interfaces/chat-thread';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatThreads: ChatThread[] = [];

  constructor() {
    this.chatThreads.push(new ChatThread('Иван Лучев', [
      {
        id: 1,
        conversationId: 1,
        authorId: 1,
        message: 'Lorem ipsum dolor sit amet',
        date: new Date('2020-01-12 17:28')
      },
      {
        id: 2,
        conversationId: 1,
        authorId: 2,
        message: 'consectetur adipiscing elit',
        date: new Date('2020-01-12 17:30')
      },
      {
        id: 3,
        conversationId: 1,
        authorId: 2,
        message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: new Date('2020-01-12 17:31')
      },
      {
        id: 4,
        conversationId: 1,
        authorId: 1,
        message: 'Ut enim ad minim veniam',
        date: new Date('2020-01-12 17:42')
      },
      {
        id: 5,
        conversationId: 1,
        authorId: 2,
        message: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        date: new Date('2020-01-12 17:48')
      }
    ]))
    this.chatThreads.push(new ChatThread('Георги Георгиев', [
      {
        id: 1,
        conversationId: 1,
        authorId: 1,
        message: 'Lorem ipsum dolor sit amet',
        date: new Date('2020-01-12 17:28')
      },
      {
        id: 2,
        conversationId: 1,
        authorId: 2,
        message: 'consectetur adipiscing elit',
        date: new Date('2020-01-12 17:30')
      },
      {
        id: 3,
        conversationId: 1,
        authorId: 2,
        message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: new Date('2020-01-12 17:31')
      }
    ]))
  }

  getChatThreads(): Observable<ChatThread[]> {
    return of(this.chatThreads);
  }

}
