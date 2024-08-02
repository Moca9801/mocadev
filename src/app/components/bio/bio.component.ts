import { Component } from '@angular/core';
import { ModalCvComponent } from "../modal-cv/modal-cv.component";
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [ModalCvComponent, MatDialogModule, TranslateModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

  constructor(private dialog: MatDialog,  private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  openProjectModal() {
    const dialogRef: MatDialogRef<ModalCvComponent> = this.dialog.open(ModalCvComponent, {

    })
  }
}
