import {Component, OnInit} from '@angular/core';
import {Column} from '../../../interfaces/kanban/column';
import {Priority} from '../../../interfaces/kanban/card';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  projectName = 'ПООС';
  constructor() { }

  columns: Column[] = [];

  loadMockupBoard(): void {
    const toDoColumn: Column = {name: 'Незапочнати', cards: []};
    toDoColumn.cards.push({name: 'Нова икона', description: 'Да бъде създадена нова икона на приложението',
                            priority: Priority.Low, assignees: [1], dueDate: new Date('2020-05-25')});

    toDoColumn.cards.push({name: 'Чат', description: 'Да бъде създаден чат модула',
      priority: Priority.Medium, assignees: [1, 2], dueDate: new Date('2020-05-25')});

    toDoColumn.cards.push({name: 'Вход/регистрация', description: 'Да бъдат създадени страниците за вход и регистрация',
      priority: Priority.Medium, assignees: [3], dueDate: new Date('2020-05-25')});

    const inProgressColumn: Column = {name: 'В процес на работа', cards: []};

    inProgressColumn.cards.push({name: 'Kanban дъска', description: 'Да бъде създадена Kanban функционалността в приложението',
      priority: Priority.Low, assignees: [1], dueDate: new Date('2020-06-15')});

    inProgressColumn.cards.push({name: 'Оценка', description: 'Добавяне на връзка с базата данни при модула с оценки',
      priority: Priority.Low, assignees: [4], dueDate: new Date('2020-06-15')});

    inProgressColumn.cards.push({name: 'Компоненти към модул "Проекти"',
      description: 'Създаване на необходимите компоненти, свързани с модул "Проекти"',
      priority: Priority.Low, assignees: [4], dueDate: new Date('2020-06-15')});

    const readyColumn: Column = {name: 'Готови', cards: []};

    readyColumn.cards.push({name: 'Компоненти към модул "Проекти"',
      description: 'Създаване на необходимите компоненти, свързани с модул "Проекти"',
      priority: Priority.Low, assignees: [4], dueDate: new Date('2020-04-15')});

    this.columns.push(toDoColumn);
    this.columns.push(inProgressColumn);
    this.columns.push(readyColumn);
  }
  ngOnInit(): void {
    this.loadMockupBoard();
  }

}
