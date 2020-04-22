import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleHomeworkComponent } from './single-homework/single-homework.component';

const routes: Routes = [
    { path: '', component: SingleHomeworkComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SingleHomeworkRoutingModule { }
