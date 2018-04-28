import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent
  ]
})
export class CoursesModule { }
