import { Component, OnInit } from '@angular/core';
import { Homework } from '../../interfaces/homework';
import {createUrlResolverWithoutPackagePrefix, NONE_TYPE} from '@angular/compiler';
import { HomeworkService } from 'src/app/services/homework.service';
@Component({
  selector: 'app-single-homework',
  templateUrl: './single-homework.component.html',
  styleUrls: ['./single-homework.component.scss']
})
export class SingleHomeworkComponent implements OnInit {

  homework: Homework;

  dueDateString = '';
  timeLeft = '';

  darkenPanel: HTMLElement;
  uploadDialog: HTMLElement;
  constructor(private homeworkService: HomeworkService) {
  }

  ngOnInit(): void {
    // Get homework by id
    this.homeworkService.getHomework(1).subscribe((result) => {
      this.homework = result;
      const doc: HTMLElement = document.getElementById('test');
      doc.setAttribute('src', '../../../assets/mockup_assets/hw-' + this.homework.grade.taskId.toString() + '.pdf');
      this.dueDateString = this.homework.due_date.getDate() + '.' + this.homework.due_date.getMonth()
          + '.' + this.homework.due_date.getFullYear();
      this.timeLeft =this.convertTimeToString(this.homework.due_date.getTime() - new Date().getTime());
    });

    this.darkenPanel = document.getElementById('darken-page');
    this.uploadDialog = document.getElementById('dialog-window');
    console.log(this.darkenPanel);
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

  toogleUploadDialog(): void {
    if (this.darkenPanel.style.visibility === 'visible') {
      this.darkenPanel.style.visibility = 'hidden';
      this.uploadDialog.style.visibility = 'hidden';
    } else {
      this.darkenPanel.style.visibility = 'visible';
      this.uploadDialog.style.visibility = 'visible';
    }
  }
}
