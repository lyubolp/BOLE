import {Component, OnInit} from '@angular/core';
import {Homework} from '../homework';
import {CourseCardComponent} from '../../courses/course-card/course-card.component';

@Component({
    selector: 'app-homeworks',
    templateUrl: './homeworks.component.html',
    styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
    homeworks: Homework[] = [
        {
            id: 0, course: {id: 1, name: 'Обектно-ориентиране'},
            due_date: new Date('April 20, 2020 23:15:30'), discussion_id: 0, statement_id: 1
        },
        {
            id: 1, course: {id: 2, name: 'Анализ на софтуерните изисквания'},
            due_date: new Date('April 20, 2020 23:15:30'), discussion_id: 3, statement_id: 2
        }
    ];

    colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
