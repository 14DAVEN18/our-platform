import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesRoutingModule } from './dates-routing.module';
import { DatePageComponent } from './pages/date-page/date-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatePageComponent],
  imports: [
    CommonModule,
    DatesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DatesModule { }
