// Angular imports
import { Component } from '@angular/core';

// environment variable
import { environment } from '../../../../../environments/environment.development';
import { Activity } from '../interfaces/activity.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'date-page',
  templateUrl: './date-page.component.html',
  styleUrl: './date-page.component.css'
})
export class DatePageComponent {

  public activityTitle = new FormControl('');
  public activityDescription = new FormControl('');

  public isCreationActive = false
  isFeatureEnabled = environment.isFeatureReleased

  inPersonActivities: Activity[] = [];
  virtualActivities: Activity[] = [];

  constructor() {
  }

  createActivity() {
    this.isCreationActive = true
  }

  cancelActivityCreation() {
    this.isCreationActive = false
    this.activityTitle.setValue("")
  }

  addInPersonAvtivity() {
    if((this.activityTitle.value !== null && this.activityTitle.value !== '') && (this.activityDescription.value !== null && this.activityDescription.value !== '')) {
      let Activity: Activity = {
        id: `actip_${this.inPersonActivities.length + 1}`,
        title: this.activityTitle.value,
        creator: 'David',
        description: this.activityDescription.value,
        collapsed: true
      }

      this.inPersonActivities.push(Activity)
      this.activityTitle.setValue("")
      this.activityDescription.setValue("")
    }
  }

  addVirtualActivity() {
    if((this.activityTitle.value !== null && this.activityTitle.value !== '') && (this.activityDescription.value !== null && this.activityDescription.value !== '')) {
      const Activity: Activity = {
        id: `actvr_${this.inPersonActivities.length + 1}`,
        title: this.activityTitle.value,
        creator: 'David',
        description: this.activityDescription.value,
        collapsed: true
      }
      this.virtualActivities.push(Activity)
      this.activityTitle.setValue("")
      this.activityDescription.setValue("")
    }
  }

  toggleDescription(activity: Activity): void {
    // Collapse all activities except the clicked one
    this.inPersonActivities.forEach(a => {
      if (a !== activity) {
        a.collapsed = true;
      }
    });
    // Toggle the clicked activity
    activity.collapsed = !activity.collapsed;
  }









  downloadCSV() {
    const csvData = this.convertToCsv(this.inPersonActivities);
    this.downloadCsvFile(csvData, 'sample-data.csv');
  }

  convertToCsv(data: any[]): string {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
    return `${headers}\n${rows}`;
  }

  downloadCsvFile(csvData: string, filename: string) {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    a.click();
  }
}