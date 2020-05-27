import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialThreadComponent } from './social-thread/social-thread.component';


const routes: Routes = [
  { path: '', component: SocialThreadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialThreadRoutingModule { }
