import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {CodeEditorComponent} from './code-editor/code-editor/code-editor.component';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';
import {ProjectCardComponent} from './project-main/project-card/project-card.component';

@NgModule({
  declarations: [ProjectMainComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
