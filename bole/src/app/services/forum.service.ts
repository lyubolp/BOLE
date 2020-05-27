import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumCategory, Forum } from '../interfaces/forum';
import { ForumThread } from '../interfaces/forum-thread';
import { ForumMessage } from '../interfaces/forum-message'

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  generalForums: Forum[] = [];
  socialForums: Forum[] = [];

  constructor() {

    this.generalForums.push({
      id: 1, name: 'Софтуерно инженерство 2017-2021', participants: 121, category: ForumCategory.General, threads: [
        {
          id: 1, name: "8-ми декември?", memberIds: [], messages: [
            {
              id: 1,
              threadId: 1,
              authorId: 1,
              authorUsername: "Ivan",
              message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              date: new Date('2020-05-11 16:04')
            },
            {
              id: 2,
              threadId: 1,
              authorId: 2,
              authorUsername: "Petar",
              message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              date: new Date('2020-05-11 16:05')
            },
            {
              id: 3,
              threadId: 1,
              authorId: 1,
              authorUsername: "Ivan",
              message: "Ut enim ad minim veniam.",
              date: new Date('2020-05-11 16:06')
            }
          ]
        },
        { id: 2, name: "Алабала, мързи ме да мисля текст", memberIds: [], messages: [] },
        { id: 3, name: "Анализ на софтуерните изисквания", memberIds: [], messages: [] }
      ]
    });
    this.generalForums.push({ id: 2, name: 'Софтуерно инженерство 2017-2012, група 2', participants: 22, category: ForumCategory.General, threads: [] });
    this.generalForums.push({ id: 3, name: 'ФМИ', participants: 500, category: ForumCategory.General, threads: [] });
    this.socialForums.push({ id: 4, name: 'Обектно-ориентирано програмиране', participants: 121, category: ForumCategory.Course, threads: [] });
    this.socialForums.push({ id: 5, name: 'Анализ на софтуерните изисвания', participants: 121, category: ForumCategory.Course, threads: [] });
    this.socialForums.push({ id: 6, name: 'Web технорлогии', participants: 121, category: ForumCategory.Course, threads: [] });

  }

  getGeneralCards(): Observable<Forum[]> {
    return of(this.generalForums);
  }

  getCourseCards(): Observable<Forum[]> {
    return of(this.socialForums);
  }
  getThreads(id: number): Observable<ForumThread[]> {
    const gforums = this.generalForums.filter((f) => f.id === id);
    if (gforums.length === 1) {
      return of(gforums[0].threads);
    }
    else {
      const sforums = this.socialForums.filter((f) => f.id === id);
      if (sforums.length === 1) {
        return of(sforums[0].threads);
      }
      else {
        throw new Error('Forum not found');
      }
    }
  }
  getForumName(id: number): Observable<string[]> {
    const gforums = this.generalForums.filter((f) => f.id === id);
    if (gforums.length === 1) {
      const result = [gforums[0].name, "Общи"];
      return of(result);
    }
    else {
      const sforums = this.socialForums.filter((f) => f.id === id);
      if (sforums.length === 1) {
        const result = [sforums[0].name, "Курсове"];
        return of(result);
      }
      else {
        throw new Error('Forum not found');
      }
    }
  }
  getMessages(forumId: number, threadId: number): Observable<ForumMessage[]> {
    const gforums = this.generalForums.filter((f) => f.id === forumId);
    if (gforums.length === 0) {
      const sforums = this.socialForums.filter((f) => f.id === forumId);
      if (sforums.length === 1) {
        const thread = sforums[0].threads.filter((t) => t.id = threadId);
        if (thread.length > 0) {
          return of(thread[0].messages.slice(-5));
        }
        else throw new Error('Messages not found');
      }
    }
    else {
      const thread = gforums[0].threads.filter((t) => t.id = threadId);
      if (thread.length > 0) {
          return of(thread[0].messages.slice(-5));
        }
        else throw new Error('Messages not found');
    }
    throw new Error('Thread or forum not found');
  }
}
