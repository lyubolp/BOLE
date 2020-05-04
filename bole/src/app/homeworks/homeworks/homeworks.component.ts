import {Component, OnInit} from '@angular/core';
import { HomeworkCardService } from 'src/app/services/homework-card.service';
import { HomeworkCard } from 'src/app/interfaces/homework-card';

@Component({
    selector: 'app-homeworks',
    templateUrl: './homeworks.component.html',
    styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
   colors: string[] = ['#203964', '#5B1001', '#35642A', '#2A6264', '#573278', '#2A557B'];

    homeworkCards: HomeworkCard[] = [];
    numbers: number[] = [];

    constructor(private homeworkCardService: HomeworkCardService) {
    }

    ngOnInit(): void {
        this.homeworkCardService.getHomeworkCards().subscribe((result) => this.homeworkCards = result);

        for (let i = 0; i < this.homeworkCards.length; i++) {
            this.numbers.push(i);
        }
        console.log(this.homeworkCards);
    }

}
