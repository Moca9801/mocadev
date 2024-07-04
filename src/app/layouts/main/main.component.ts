import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DrawerComponent } from '../../components/drawer/drawer.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, DrawerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  currentYear: number = new Date().getFullYear();

  constructor(private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    const cursor = this.renderer.selectRootElement('.blob');

    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      this.renderer.setStyle(cursor, 'transform', `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`);
    });
  }
}
