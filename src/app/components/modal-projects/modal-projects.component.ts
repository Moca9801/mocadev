import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Image {
  src: string;
  alt: string;
  name?: string;
}

@Component({
  selector: 'app-modal-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule, TranslateModule],
  templateUrl: './modal-projects.component.html',
  styleUrls: ['./modal-projects.component.scss']
})
export class ModalProjectsComponent implements OnInit {
  images: Image[] = [];
  iconsTech: Image[] = [];


  constructor(
    private dialogRef: MatDialogRef<ModalProjectsComponent>,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.translate = this.data.language;
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (event.target === document.getElementById('MyModal-2')) {
      this.dialogRef.close();
    }
  }

  ngOnInit() {
    this.loadImages();
    this.loadIcons();
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

  loadIcons(){
    if (this.data.tech) {
      if (Array.isArray(this.data.tech)) {
        // Si es un array, asumimos que es un array de rutas de imagen
        this.iconsTech = this.data.tech.map((path: string, index: number) => ({
          src: path,
          alt: `Icon ${index + 1}`,
          name: (path.replace("../../../assets/img/technologies/", "").replace(".svg", ""))
        }));
      } else if (typeof this.data.tech === 'string') {
        // Si es una cadena, asumimos que es una sola ruta de imagen
        this.iconsTech = [{
          src: this.data.tech,
          alt: 'Icon 1',
          name: this.data.tech.replace("../../../assets/img/technologies/", "").replace(".svg", "")
        }];
      } else {
        console.error('Unexpected type for tech:', typeof this.data.tech);
      }
    } else {
      console.warn('No image paths provided');
    }

    console.log(this.iconsTech)
  }

  nextProject() {
    this.dialogRef.close('next');
  }

  previousProject() {
    this.dialogRef.close('previous');
  }
}