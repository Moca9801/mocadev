import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-projects.component.html',
  styleUrl: './modal-projects.component.scss',
  template: `
    <h2>{{ data.title }}</h2>
    <p>{{ data.description }}</p>
    <a [href]="data.link" target="_blank">Ver proyecto</a>
  `,
})
export class ModalProjectsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
