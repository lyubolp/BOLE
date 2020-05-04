import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';
import {CodeEditorComponent} from './code-editor/code-editor/code-editor.component';

const routes: Routes = [
    {path: '', component: ProjectMainComponent},
    {path: 'code-editor', component: CodeEditorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
