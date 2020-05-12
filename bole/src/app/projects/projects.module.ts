import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {CodeEditorComponent} from './code-editor/code-editor/code-editor.component';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';
import {ProjectCardComponent} from './project-main/project-card/project-card.component';
import { ProjectPageComponent } from './project-main/project-page/project-page.component';
import { TeamDialogComponent } from './project-main/team-dialog/team-dialog.component';

@NgModule({
  declarations: [ProjectMainComponent, ProjectCardComponent, ProjectPageComponent, TeamDialogComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
