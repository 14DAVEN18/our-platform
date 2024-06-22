// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Self made modules/components
import { MainComponent } from './main.component';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
