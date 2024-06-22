import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatePageComponent } from './pages/date-page/date-page.component';

const routes: Routes = [
  {
    path: '',
    component: DatePageComponent
  },
  {
    path: '*',
    redirectTo: 'dates'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DatesRoutingModule { }
