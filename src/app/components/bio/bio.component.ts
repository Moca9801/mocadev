import { Component } from '@angular/core';
import { ModalCvComponent } from "../modal-cv/modal-cv.component";
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [ModalCvComponent, MatDialogModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

  constructor(private dialog: MatDialog){}

  openProjectModal() {
    const dialogRef: MatDialogRef<ModalCvComponent> = this.dialog.open(ModalCvComponent, {

    })
  }
}
