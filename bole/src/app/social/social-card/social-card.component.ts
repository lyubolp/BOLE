import { Component, OnInit, Input } from '@angular/core';
import { SocialCard } from '../social-card';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  @Input() socialCard: SocialCard;

  constructor() { }

  ngOnInit(): void {
  }

}
