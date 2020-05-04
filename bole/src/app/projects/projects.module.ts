import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {CodeEditorComponent} from './code-editor/code-editor/code-editor.component';
import {ProjectMainComponent} from './project-main/project-main/project-main.component';

@NgModule({
  declarations: [ProjectMainComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
