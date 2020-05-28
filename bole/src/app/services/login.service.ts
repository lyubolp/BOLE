import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  guest = {
    userId: -1,
    username: "",
    firstName: "Гост",
    lastName: "",
    dateJoined: new Date(),
    email: "",
    picture: "assets/icons/person-24px.svg",
    occupation: "",
    institution: "",
    CVLink: "",
    bio: "",
  }

  private userSource = new BehaviorSubject<User>(this.guest);

  user = this.userSource.asObservable();
  constructor(private userService: UserService) { }

  changeUser(username: string) {
    this.userService.getUserByUsername(username).subscribe(user => this.userSource.next(user));
  }
}
