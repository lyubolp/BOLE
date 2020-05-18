import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';



@NgModule({
  declarations: [KanbanBoardComponent, KanbanCardComponent, KanbanColumnComponent],
  imports: [
    CommonModule,
  ]
})
export class KanbanBoardModule { }
