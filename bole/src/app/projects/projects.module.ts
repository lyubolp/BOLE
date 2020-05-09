import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodeEditorModule } from './code-editor/code-editor.module';
import {ProjectCardComponent} from './project-main/project-card/project-card.component';
import { ProjectPageComponent } from './project-main/project-page/project-page.component';

@NgModule({
  declarations: [ProjectMainComponent, ProjectCardComponent, ProjectPageComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MonacoEditorModule.forRoot(),
    CodeEditorModule
  ]
})
export class ProjectsModule { }
