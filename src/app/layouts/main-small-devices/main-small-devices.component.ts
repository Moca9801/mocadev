import { Component, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BioComponent } from '../../components/bio/bio.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-small-devices',
  standalone: true,
  imports: [HeaderComponent, BioComponent, SkillsComponent, ProjectsComponent, ContactComponent, TranslateModule],
  templateUrl: './main-small-devices.component.html',
  styleUrl: './main-small-devices.component.scss'
})
export class MainSmallDevicesComponent {
  currentYear: number = new Date().getFullYear();
  selectedComponent: string = 'Bio';

  constructor(private renderer: Renderer2, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  
  ngAfterViewInit() {
    const cursor = this.renderer.selectRootElement('.blob');

    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      this.renderer.setStyle(cursor, 'transform', `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`);
    });
  }

  onRadioChange(component: string) {
    this.selectedComponent = component;
  }
}
