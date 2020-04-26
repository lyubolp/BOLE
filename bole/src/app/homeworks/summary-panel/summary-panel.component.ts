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

  constructor() {
    // this.timeLeft = (this.homeworkData.due_date.getTime() - Date.now()).toString();
  }

  ngOnInit(): void {
  }

  loadColor(): void {
    const colorPanel: HTMLElement = document.getElementById('panel-color-code');
    console.log(this.colorCode);
    colorPanel.style.backgroundColor = this.colorCode;
  }
}
