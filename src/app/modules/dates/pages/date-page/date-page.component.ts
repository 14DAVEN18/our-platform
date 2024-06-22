// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// environment variable
import { environment } from '../../../../../environments/environment.development';


@Component({
  selector: 'date-page',
  templateUrl: './date-page.component.html',
  styleUrl: './date-page.component.css'
})
export class DatePageComponent {
  public isCreationActive = false
  isFeatureEnabled = environment.isFeatureReleased

  createActivity() {
    this.isCreationActive = true
  }

  cancelActivityCreation() {
    this.isCreationActive = false
  }

  addInPersonAvtivity() {
    console.log("Activity added to in-person activities")
  }

  addVirtualActivity() {
    console.log("Actiity added to virtual activities")
  }
}