import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
copy_status: boolean = false;
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = "aimc9801@gmail.com";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    //alert(this.translate.instant('COPIED_TO_CLIPBOARD')); // Mensaje de éxito
    this.copy_status = true;
    setTimeout(() => {
      this.copy_status = false;
    }, 3000);
  }
}
