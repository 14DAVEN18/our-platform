// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Environment variable
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isFeatureEnabled = environment.isFeatureReleased
}
