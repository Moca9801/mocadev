import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cv',
  standalone: true,
  imports: [CommonModule, ModalCvComponent, MatDialogModule],
  templateUrl: './modal-cv.component.html',
  styleUrl: './modal-cv.component.scss'
})
export class ModalCvComponent {
 
}
