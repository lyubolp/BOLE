import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';
import { CourseAnnouncement } from 'src/app/interfaces/course-announcement';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  id: number;
  course: Course;
  announcements: CourseAnnouncement[];

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getCourse();
  }

  getCourse(): void {
    this.courseService.getCourse(this.id).subscribe((result) => this.course = result);
    this.course.announcements.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      return -1;
    });
    this.announcements = this.firstEntries(this.course.announcements, 3);
  }

  clickSection(event: MouseEvent): void {
    const section = (event.currentTarget as HTMLElement);
    let div = section.querySelector('.section-content') as HTMLEmbedElement;
    if (div) {
      if (div.style.display === 'none') {
        div.style.display = 'flex';
      } else {
        div.style.display = 'none';
      }
    }
  }

  showAllAnnouncements() {
    this.announcements = this.course.announcements;
  }

  firstEntries(array: any[], n: number) {
    if (array == null) {
      return [];
    } else if (n == null) {
      return array[0];
    } else {
      return array.slice(0, Math.min(array.length, n));
    }
  };
}
