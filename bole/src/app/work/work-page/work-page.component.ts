import { Component, OnInit } from '@angular/core';
import {Job} from '../../interfaces/job';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  isJobOpened = false;
  openedJobTitle = '';
  openedJobCompany = '';
  openedJobLevel = '';
  openedJobDescription = '';
  openedJobTechnology = '';
  openedJobRequirements = '';

  constructor() { }
  jobs: Job[] = [];
  ngOnInit(): void {
    this.jobs.push({title: 'Софтуерен инженер', company: 'SAP Labs',
      level: 'Младши', description: 'Проект свързан с разработката на IoT проект', technology: 'C/C++',
      requirements: ['Една или повече години опит свързан с IoT проекти'] });

    this.jobs.push({title: 'Софтуерен инженер', company: 'VMWare',
      level: 'Старши', description: 'Проект свързан с разработката на VMWare Player', technology: 'C/C++',
      requirements: ['Пет или повече години опит свързан с IoT проекти'] });

    this.jobs.push({title: 'Дизайнер', company: 'ПООС',
      level: 'Младши', description: 'ПООС търсят дизайнер за изграждането на потребителския интерфейс на тяхното приложение',
      technology: 'Adobe Illustrator',
      requirements: ['Желание за работа, лични или професионални проекти'] });

    this.jobs.push({title: 'Софтуерен инженер', company: 'SAP Labs',
      level: 'Младши', description: 'Проект свързан с разработката на IoT проект', technology: 'C/C++',
      requirements: ['Една или повече години опит свързан с IoT проекти'] });

  }

  closeJobDescription(): void {
    document.getElementById('dialog-window').style.visibility = 'hidden';
    document.getElementById('darken-page').style.visibility = 'hidden';
  }
  openJobDescription(jobInfo: Job): void {

      document.getElementById('dialog-window').style.visibility = 'visible';
      document.getElementById('darken-page').style.visibility = 'visible';
      this.isJobOpened = true;
      this.openedJobTitle = jobInfo.title;
      this.openedJobCompany = jobInfo.company;
      this.openedJobLevel = jobInfo.level;
      this.openedJobDescription = jobInfo.description;
      this.openedJobTechnology = jobInfo.technology;

      for (const req of jobInfo.requirements) {
        this.openedJobRequirements += req + ', ';
      }
  }
}
