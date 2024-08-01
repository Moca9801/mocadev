import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modal-cv',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule],
  templateUrl: './modal-cv.component.html',
  styleUrl: './modal-cv.component.scss'
})
export class ModalCvComponent {
 
}
