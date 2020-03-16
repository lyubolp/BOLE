import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesPreviewComponent } from './courses-preview/courses-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CoursesPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
