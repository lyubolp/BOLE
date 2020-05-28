import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    this.users.push({
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
    });
    this.users.push({
      userId: 1,
      username: "ivan",
      firstName: "Иван",
      lastName: "Иванов",
      dateJoined: new Date('2020-02-15 13:45'),
      email: "ivan.ivanov@gmail.com",
      picture: "assets/icons/person-24px.svg",
      occupation: "Student",
      institution: "Sofia University",
      CVLink: "link",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    })
    this.users.push({
      userId: 2,
      username: "georgi",
      firstName: "Георги",
      lastName: "Георгиев",
      dateJoined: new Date('2020-03-16 15:12'),
      email: "george.georgiev@gmail.com",
      picture: "assets/icons/person-24px.svg",
      occupation: "Trainee",
      institution: "Microsoft",
      CVLink: "link",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    })
  }

  getUserById(id: number): Observable<User> {
    return of(this.users.find(user => user.userId === id));
  }

  getUserByUsername(username: string): Observable<User> {
    return of(this.users.find(user => user.username === username));
  }
}
