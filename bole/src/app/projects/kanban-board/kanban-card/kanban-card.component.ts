import { Component, Input, OnInit } from '@angular/core';
import {Card, Priority} from '../../../interfaces/kanban/card';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() cardData: Card;
  name = '';
  description = '';
  priority: Priority;
  assignees: number[] = [];
  dueDate: Date;
  timeLeft = '';

  cardDOMObject: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.name = this.cardData.name;
    this.description = this.cardData.description;
    this.priority = this.cardData.priority;
    this.assignees = this.cardData.assignees;
    this.dueDate = this.cardData.dueDate;
    console.log(this.dueDate);
    this.timeLeft = this.convertTimeToString(this.dueDate.getTime() - new Date().getTime());

    this.cardDOMObject = document.getElementById('card-main');
  }

  convertTimeToString(time: number): string {
    const millisecondsInASecond = 1000;
    time /= millisecondsInASecond;

    const secondsInAHour = 3600;
    const secondsInADay = secondsInAHour * 24;


    const days = (time / secondsInADay);
    const hours = (time % secondsInADay) / secondsInAHour;

    const result = Math.floor(days) + 'д. ' + Math.floor(hours) + 'ч.';
    return result;
  }

  openCard(): void {
    this.cardDOMObject.style.position = 'absolute';
    this.cardDOMObject.style.left = '0px';
    this.cardDOMObject.style.top = '0px';
    this.cardDOMObject.style.width = '50%';
    this.cardDOMObject.style.height = '50%';
  }
}
