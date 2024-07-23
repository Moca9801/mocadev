import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-modal-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-projects.component.html',
  styleUrls: ['./modal-projects.component.scss']
})
export class ModalProjectsComponent implements OnInit {
  images: CarouselImage[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    if (this.data.imagePaths) {
      if (Array.isArray(this.data.imagePaths)) {
        // Si es un array, asumimos que es un array de rutas de imagen
        this.images = this.data.imagePaths.map((path: string, index: number) => ({
          src: path,
          alt: `Image ${index + 1}`
        }));
      } else if (typeof this.data.imagePaths === 'string') {
        // Si es una cadena, asumimos que es una sola ruta de imagen
        this.images = [{
          src: this.data.imagePaths,
          alt: 'Image 1'
        }];
      } else {
        console.error('Unexpected type for imagePaths:', typeof this.data.imagePaths);
      }
    } else {
      console.warn('No image paths provided');
    }
  }
}