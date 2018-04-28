import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  Route.withShell([
    { path: 'courses', component: CoursesComponent, data: { title: extract('Courses') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CoursesRoutingModule { }
