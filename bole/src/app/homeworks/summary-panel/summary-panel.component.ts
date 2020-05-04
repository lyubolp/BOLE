import {Component, Input, OnInit} from '@angular/core';
import { HomeworkCard } from 'src/app/interfaces/homework-card';

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrls: ['./summary-panel.component.scss']
})
export class SummaryPanelComponent implements OnInit {
  @Input() homeworkData: HomeworkCard;
  @Input() colorCode: string;

  timeLeft: string;
  title: string;

  constructor() {
    // this.timeLeft = (this.homeworkData.due_date.getTime() - Date.now()).toString();
  }

  ngOnInit(): void {
    this.title = this.homeworkData.course.name;
    this.timeLeft = this.convertTimeToString(this.homeworkData.due_date.getTime() - new Date().getTime());
  }

  loadColor(): void {
    const colorPanel: HTMLElement = document.getElementById('panel-color-code');
    console.log(this.colorCode);
    colorPanel.style.backgroundColor = this.colorCode;
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
