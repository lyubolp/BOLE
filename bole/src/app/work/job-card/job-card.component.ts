import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../interfaces/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() jobData: Job;

  title = '';
  company = '';
  level = '';
  technology = '';
  constructor() { }

  ngOnInit(): void {
    this.title = this.jobData.title;
    this.company = this.jobData.company;
    this.level = this.jobData.level;
    this.technology = this.jobData.technology;
  }

}
