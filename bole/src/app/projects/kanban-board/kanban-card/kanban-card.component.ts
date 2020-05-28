import {Component, Input, OnInit} from '@angular/core';
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
  priority = '';
  assignees: string[] = [];
  dueDate: Date;
  timeLeft = '';

  cardDOMObject: HTMLElement;
  descriptionDomObject: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.name = this.cardData.name;
    this.description = this.cardData.description;

    if (this.cardData.priority === Priority.Low) {
      this.priority = 'нисък';
    } else if (this.cardData.priority === Priority.Medium) {
      this.priority = 'среден';
    } else {
      this.priority = 'висок';
    }
    for (const assignee of this.cardData.assignees) {
      if (assignee === 1) {
        this.assignees.push('lyubo');
      } else if (assignee === 2) {
        this.assignees.push('luchev');
      } else if (assignee === 3) {
        this.assignees.push('zhechko');
      } else {
        this.assignees.push('ivo');
      }
    }
    this.dueDate = this.cardData.dueDate;
    this.timeLeft = this.convertTimeToString(this.dueDate.getTime() - new Date().getTime());
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

  openCard(e): void {
    if (e.target.id === 'close' || e.target.id === 'id') {
      return;
    }
    console.log(e.target.id);
    document.getElementById('card-main').classList.add('card-main-opened');
    document.getElementById('time-left-icon').style.display = 'none';
    document.getElementById('priority-buttons').style.display = 'block';
    document.getElementById('description-box').style.display = 'block';
    document.getElementById('darken-page').style.display = 'block';
    document.getElementById('time-left-container').classList.add('opened-card');
    document.getElementById('time-left-text').classList.remove('hide-element');
    document.getElementById('time-left-text').classList.add('sub-panel-title');
    document.getElementById('new-due-date').style.display = 'inline';
    document.getElementById('team').style.display = 'block';
    document.getElementById('team').classList.add('team-panel-open');
    document.getElementById('card-title').classList.remove('panel-title');
    document.getElementById('card-title').classList.add('page-title');
    document.getElementById('save-exit-buttons').style.display = 'flex';
    document.getElementById('save-exit-buttons').style.flexDirection = 'row-reverse';


    // this.descriptionDomObject.style.visibility = 'visible';
    // document.getElementById('priority-text').style.visibility = 'visible';
  }

  closeCard(): void {
    console.log(document.getElementById('card-main').classList);
    document.getElementById('card-main').classList.remove('card-main-opened');
    console.log(document.getElementById('card-main').classList);
    document.getElementById('time-left-icon').style.display = 'block';
    document.getElementById('priority-buttons').style.display = 'none';
    document.getElementById('description-box').style.display = 'none';
    document.getElementById('darken-page').style.display = 'none';
    document.getElementById('time-left-container').classList.remove('opened-card');
    document.getElementById('time-left-text').classList.add('hide-element');
    document.getElementById('time-left-text').classList.remove('sub-panel-title');
    document.getElementById('new-due-date').style.display = 'none';
    document.getElementById('team').style.display = 'none';
    document.getElementById('team').classList.remove('team-panel-open');
    document.getElementById('card-title').classList.add('panel-title');
    document.getElementById('card-title').classList.remove('page-title');
    document.getElementById('save-exit-buttons').style.display = 'none';
  }
}
