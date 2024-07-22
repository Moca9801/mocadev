import { Component } from '@angular/core';
import { ModalProjectsComponent } from "../modal-projects/modal-projects.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ModalProjectsComponent, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  sections = [
    'Firmmo',
    'My wedding',
    'Digital ID Card for CJJ', 
    'Wedding invitation',
    'CJJ page maintenance',
    'Generic navigation model',
    'Vibes mood design',
    'Graphic design portfolio'
  ];
  descriptions = [
    'This platform is a startup that I intend to launch. It`s a web application for legally signing documents cryptographically in Mexico. At the moment, only the frontend has been developed due to budget constraints. The brand design, software development, and UI/UX design were done 100% by me.',
    'This is a digital invitation project created using HTML, CSS, and JavaScript. The invitation is designed to be sent and viewed through a web browser. I designed it for my wedding, which took place on July 17, 2022.',
    'This project generates official employee IDs and integrates them into Google and Apple wallets. It is developed in Angular and Node.js. The design and development were completely new.',
    'I developed this project in Nuxt 3 (Vue) with Vuetify as the UI library. It is a frontend project.',
    'Currently, maintenance is carried out on various systems of the Judicial Council of the State of Jalisco, such as the main page, sentences, and tickets. The application is built in Angular, with an API developed in Node.js.',
    'This is a frontend project with an original design and a modern user interface for navigation. It is responsive and made with HTML, CSS, and Bootstrap.',
    'In this project, the visual design of the mobile app was developed. I used Figma to carry out the design.',
    'In this section, you can see all the graphic projects I have done, from logos, banners, cards, and more. The majority of this portfolio was developed using Microsoft Publisher.'];
  links = [
    'https://firmmo.netlify.app/',
    'https://boda-adrianayangel.netlify.app/',
    'https://credencial.cjj.gob.mx/',
    'https://brenda-and-jonathan.netlify.app/',
    'https://cjj.gob.mx/',
    'https://github.com/Moca9801/Generic-navigation-model',
    'https://www.figma.com/design/rvsi60iiHJzdcNfFsvFH5D/Vibes-mood?node-id=54796-1710&t=L6SxC781QINoehi3-1',
    'https://drive.google.com/drive/folders/10TKko2E0KpiOYoGN60yLzeUCL8qLrb2h?usp=sharing'
  ];
  technologies =[
    ['Vue','Vuetify','Node'],
    ['HTML', 'CSS', 'JS'],
    ['Angular', 'Node', 'OracleDB'],
    ['Vue', 'Vuetify'],
    ['Angular','Node', 'MySQL', 'OracleDB'],
    ['Angular','Boostrap'],
    ['Figma'],
    ['Microsoft Publisher'],
  ];

  video = [
    '../../../assets/videos/Firmmo.mp4',
    '../../../assets/videos/MyWedding.mp4',
    '',
    '',
    '',
    '',
    '',
    '',

  ];

  currentSectionIndex = 0;
  
  constructor(private dialog: MatDialog) {}


  get currentDescription() {
    return this.descriptions[this.currentSectionIndex];
  }

  get currentLink() {
    return this.links[this.currentSectionIndex];
  }

  nextSection() {
    this.currentSectionIndex = (this.currentSectionIndex + 1) % this.sections.length;
  }

  previousSection() {
    this.currentSectionIndex = (this.currentSectionIndex - 1 + this.sections.length) % this.sections.length;
  }
  
  navigateToLink() {
    window.open(this.currentLink, '_blank');
  }

  openProjectModal() {
    this.dialog.open(ModalProjectsComponent, {
      data: {
        title: this.sections[this.currentSectionIndex],
        description: this.descriptions[this.currentSectionIndex],
        link: this.links[this.currentSectionIndex],
        tech: this.technologies[this.currentSectionIndex],
        video: this.video[this.currentSectionIndex]
      }
    });
  }

}
