import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'cloud', loadChildren: () => import('./cloud/cloud.module').then(m => m.CloudModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'grades', loadChildren: () => import('./grades/grades.module').then(m => m.GradesModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'homeworks', loadChildren: () => import('./homeworks/homeworks.module').then(m => m.HomeworksModule) },
  { path: 'homeworks/homework', loadChildren: () => import('./single-homework/single-homework.module').then(m => m.SingleHomeworkModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)},
  { path: 'social', loadChildren: () => import('./social/social.module').then(m => m.SocialModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: '**', redirectTo: '' } // 404 -> redirect to HomeModule
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
