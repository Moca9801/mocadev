import { Component, HostListener, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, TranslateModule],
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
    const dialogRef: MatDialogRef<ModalComponent> = this.dialog.open(ModalComponent, {

    })
  }
}
