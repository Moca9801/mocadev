import { Component, HostListener, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, TranslateModule, MatTooltip, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  currentLang = 'en';

  constructor(private themeService: ThemeService, private dialog: MatDialog, private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }
  
  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

  toggleLanguage(){
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(this.currentLang);
  }

  openProjectModal() {
    this.dialog.open(ModalComponent, {
      data: {
        language: this.translate
      }
    })
  }
}
