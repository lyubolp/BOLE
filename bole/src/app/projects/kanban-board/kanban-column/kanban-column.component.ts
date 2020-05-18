import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../../interfaces/kanban/column';
import {Card} from '../../../interfaces/kanban/card';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {
  @Input() columnData: Column;

  name = '';
  cards: Card[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.name = this.columnData.name;
    this.cards = this.columnData.cards;
  }

}
