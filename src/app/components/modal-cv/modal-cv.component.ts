import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-cv',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule, TranslateModule],
  templateUrl: './modal-cv.component.html',
  styleUrl: './modal-cv.component.scss'
})
export class ModalCvComponent {
  constructor(private translate: TranslateService, public dialogRef: MatDialogRef<ModalCvComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.translate = this.data.language;
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (event.target === document.getElementById('MyModal-1')) {
      this.dialogRef.close();
    }
  }
}