import { Component, OnInit } from '@angular/core';
import { CourseCardService } from 'src/app/services/course-card.service';
import { CourseCardSection } from 'src/app/interfaces/course-card-section';
import { CourseCard } from 'src/app/interfaces/course-card';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courseCardSection: CourseCardSection = new CourseCardSection();
  courseCards: CourseCard[] = [];
  tasks: Task[] = [];

  constructor(private courseCardService: CourseCardService, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.courseCardService.getCourseCardSections().subscribe((sections) => {
      this.courseCardSection = sections[0];
      this.courseCardSection.cards.forEach(card => {
        if (this.courseCards.length < 6) {
          this.courseCards.push(card);
        } else {
          return;
        }
      });
    });

    this.taskService.getTasksForUser(1).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  redirect(location: string) {
    if (location.startsWith('/')) {
      this.router.navigate([location]);
    } else {
      window.location.href = location;
    }
  }

}
