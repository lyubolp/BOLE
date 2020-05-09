import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';
import {CodeEditorComponent} from './code-editor/code-editor/code-editor.component';
import {ProjectPageComponent} from './project-main/project-page/project-page.component';
import {KanbanBoardComponent} from './kanban-board/kanban-board/kanban-board.component';
const routes: Routes = [
    {path: '', component: ProjectMainComponent},
    {path: 'code-editor', component: CodeEditorComponent},
    {path: 'project-page', component: ProjectPageComponent},
    {path: 'kanban-board', component: KanbanBoardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
