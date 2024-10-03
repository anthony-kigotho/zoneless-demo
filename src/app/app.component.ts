import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="toggleView()">Toggle View</button>
    <button (click)="changeData()">Change Data</button>
    <ng-container *ngIf="isVisible">
      <p>{{ data }}</p>
    </ng-container>
  `,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isVisible = false;  // Controls visibility of the view
  data: string = 'Initial Data'; // Initial data to display

  toggleView() {
    this.isVisible = !this.isVisible; // Toggle view visibility
  }

  changeData() {
    this.data = 'Updated Data'; // Change the data
  }
}