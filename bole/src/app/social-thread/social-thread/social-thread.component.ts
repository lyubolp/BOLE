import { Component, OnInit } from '@angular/core';
import { ForumThread } from 'src/app/interfaces/forum-thread';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-social-thread',
  templateUrl: './social-thread.component.html',
  styleUrls: ['./social-thread.component.scss']
})
export class SocialThreadComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  forumName: string;
  forumGroup: string;
  forumThreads: ForumThread[] = [];
  forumThreadsFiltered: ForumThread[] = [];
  darkenPanel: HTMLElement;
  messagesDialog: HTMLElement;

  ngOnInit(): void {
    this.forumService.getThreads(1).subscribe((threads) => this.forumThreads = threads);
    this.forumService.getForumName(1).subscribe((forum) => {
      this.forumName = forum[0];
      this.forumGroup = forum[1]
    });
    this.darkenPanel = document.getElementById('darken-page');
    this.messagesDialog = document.getElementById('dialog-window');
    console.log(this.darkenPanel);

    this.filterCards();
  }
  filterCards() {
    this.forumThreadsFiltered = this.forumThreads;
  }
  toogleMessagesDialog(): void {
    if (this.darkenPanel.style.visibility === 'visible') {
      this.darkenPanel.style.visibility = 'hidden';
      this.messagesDialog.style.visibility = 'hidden';
    } else {
      this.darkenPanel.style.visibility = 'visible';
      this.messagesDialog.style.visibility = 'visible';
    }
  }
}
