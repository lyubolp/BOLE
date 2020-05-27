import { Component, OnInit, Input } from '@angular/core';
import { ForumThread } from 'src/app/interfaces/forum-thread';
import { SocialThreadComponent } from '../social-thread/social-thread.component'

@Component({
  selector: 'app-social-thread-card',
  templateUrl: './social-thread-card.component.html',
  styleUrls: ['./social-thread-card.component.scss']
})
export class SocialThreadCardComponent implements OnInit {

  @Input() forumThread: ForumThread;

  constructor( private thread: SocialThreadComponent) { }

  participants: number;

  ngOnInit(): void {
    this.participants = this.forumThread.memberIds.length;
  }
  
  toggleMessagesWindow() {
    this.thread.toogleMessagesDialog()
  }
}
