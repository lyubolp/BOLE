import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { ForumMessage } from 'src/app/interfaces/forum-message';

@Component({
  selector: 'app-social-thread-messages',
  templateUrl: './social-thread-messages.component.html',
  styleUrls: ['./social-thread-messages.component.scss']
})
export class SocialThreadMessagesComponent implements OnInit {

  @Output() dialogController: EventEmitter<string> = new EventEmitter<string>();

  messages: ForumMessage[] = [];
  newMessage: string = '';
  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getMessages(1, 1).subscribe((messages) => this.messages = messages);
  }
  closeDialog() {
    this.dialogController.emit('close-it');
  }
  sendMessage() {
    if (this.newMessage != '') {
      this.messages.push({
        id: 2,
        threadId: 1,
        authorId: 2,
        authorUsername: "Current User",
        message: this.newMessage,
        date: new Date()
      });
      this.newMessage = '';
      if (this.messages.length > 8) this.messages.shift();
    }
  }
}
