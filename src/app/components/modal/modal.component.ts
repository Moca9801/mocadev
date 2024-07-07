import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() display: string = 'none';

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      this.display = 'none';
    }
  }
}
