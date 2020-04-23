import { Component, OnInit, Input } from '@angular/core';
import { Forum, ForumCategory } from '../../interfaces/forum';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  @Input() Forum: Forum;

  constructor() { }

  ngOnInit(): void {
  }

}
