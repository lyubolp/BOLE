import { Component, OnInit } from '@angular/core';
import {ProjectCard} from '../../../interfaces/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }
  colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];

  title = '';
  colorCode = '';
  timeLeft = '';
  description = '';
  amountOfMembers = 0;
  newMessages = 0;

  ngOnInit(): void {
    const data: ProjectCard = {id: 1, name: 'BOLE', description: 'To learn about recursion, go to recursion',
      dueDate: new Date('2020-06-15'), amountOfMembers: 4, newMessages: 0, colorCode: '#203964'};

    this.title = data.name;
    this.colorCode = data.colorCode;
    this.timeLeft = this.convertTimeToString((data.dueDate.getTime() - new Date().getTime()));
    this.description = data.description;
    this.amountOfMembers = data.amountOfMembers;
    this.newMessages = data.newMessages;
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

}
