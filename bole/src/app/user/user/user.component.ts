import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { CourseCardService } from 'src/app/services/course-card.service';
import { CourseCardSection } from '../../interfaces/course-card-section';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  courseSections: CourseCardSection[] = [];
  picture: string;

  constructor(private userService: UserService, private courseCardService: CourseCardService) {
  }

  ngOnInit(): void {
    this.userService.getUser(0).subscribe((user) => this.user = user);
    this.courseCardService.getCourseCardSections().subscribe((sections) => this.courseSections = sections);
    console.log(this.courseSections);
    console.log(this.user);
    this.picture = this.user.picture;
  }

}
