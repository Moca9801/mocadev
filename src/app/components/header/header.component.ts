import { Component, HostListener, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private themeService: ThemeService, private dialog: MatDialog, private translateService: LanguageService){}
  isDarkTheme: boolean = false;
  currentLang = 'en';
  
  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

  toggleLanguage(){
  
  }

  openProjectModal() {
    const dialogRef: MatDialogRef<ModalComponent> = this.dialog.open(ModalComponent, {

    })
  }
}
