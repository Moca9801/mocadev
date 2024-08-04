import { Component } from '@angular/core';
import { ModalCvComponent } from "../modal-cv/modal-cv.component";
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [ModalCvComponent, MatDialogModule, TranslateModule, MatTooltip],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

  constructor(private dialog: MatDialog,  private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  openProjectModal() {
    this.dialog.open(ModalCvComponent, {
      data:{
        language: this.translate
      }
    });
  }
}
