import { Component, OnInit } from '@angular/core';
import { Homework } from '../../interfaces/homework';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';
import { HomeworkService } from 'src/app/services/homework.service';
@Component({
  selector: 'app-single-homework',
  templateUrl: './single-homework.component.html',
  styleUrls: ['./single-homework.component.scss']
})
export class SingleHomeworkComponent implements OnInit {

  homework: Homework;

  // courseName = 'Обектно-ориентирано програмиране - домашно 1';
  // taskId = 1;
  // attemptsLeft = 0;
  // grade = 0;
  constructor(private homeworkService: HomeworkService) {
    // pass `current` as an argument to the constructor or whatever
    /*current: Homework = {};
    this.taskId = current.id;
    this.courseName = current.courseName;
    this.attemptsLeft = current.attemptsLeft;*/
  }

  ngOnInit(): void {
    // Get homework by id
    this.homeworkService.getHomework(1).subscribe((result) => {
      this.homework = result;
      const doc: HTMLElement = document.getElementById('test');
      doc.setAttribute('src', '../../../assets/mockup_assets/hw-' + this.homework.grade.taskId.toString() + '.pdf');
    });
  }
}
