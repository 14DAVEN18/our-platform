// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// environment variable
import { environment } from '../../../../../environments/environment.development';

// Self made modules/components
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';


@Component({
  selector: 'app-date-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './date-page.component.html',
  styleUrl: './date-page.component.css'
})
export class DatePageComponent {
  isFeatureEnabled = environment.isFeatureReleased
}
