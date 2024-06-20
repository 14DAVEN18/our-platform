// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Environment variable
import { environment } from '../../../../../environments/environment.development';

// Self made modules/components
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isFeatureEnabled = environment.isFeatureReleased
}
