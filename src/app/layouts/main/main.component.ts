import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DrawerComponent } from '../../components/drawer/drawer.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, DrawerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
 
}
