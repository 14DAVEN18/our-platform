// Angular imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private _router: Router
  ) {}

  public currentTab: string = ''
  public listItems: { label: string, path: string}[] = [
    {
      label: 'Home',
      path: 'home'
    },
    {
      label: 'Dates',
      path: 'dates'
    }
  ]

  navigateTo(path: string) {
    this._router.navigate(['/' + path])
    this.currentTab = path
  }
}