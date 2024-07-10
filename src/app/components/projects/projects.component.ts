import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  sections = [
    'My wedding',
    'Digital ID Card for CJJ', 
    'wedding invitation',
    'CJJ page maintenance',
    'Generic navigation model',
    'Vibes mood design',
    'Graphic design portfolio'
  ];
  descriptions = [
    'This is a digital invitation project created using HTML, CSS, and JavaScript. The invitation is designed to be sent and viewed through a web browser. I designed it for my wedding, which took place on July 17, 2022.',
    'This project generates official employee IDs and integrates them into Google and Apple wallets. It is developed in Angular and Node.js. The design and development were completely new.',
    'I developed this project in Nuxt 3 (Vue) with Vuetify as the UI library. It is a frontend project.',
    'Currently, maintenance is carried out on various systems of the Judicial Council of the State of Jalisco, such as the main page, sentences, and tickets. The application is built in Angular, with an API developed in Node.js.',
    'This is a frontend project with an original design and a modern user interface for navigation. It is responsive and made with HTML, CSS, and Bootstrap.',
    'In this project, the visual design of the mobile app was developed. I used Figma to carry out the design.',
    'In this section, you can see all the graphic projects I have done, from logos, banners, cards, and more. The majority of this portfolio was developed using Microsoft Publisher.'];
  links = [
    'https://boda-adrianayangel.netlify.app/',
    'https://credencial.cjj.gob.mx/',
    'https://brenda-and-jonathan.netlify.app/',
    'https://cjj.gob.mx/',
    'https://github.com/Moca9801/Generic-navigation-model',
    'https://www.figma.com/design/rvsi60iiHJzdcNfFsvFH5D/Vibes-mood?node-id=54796-1710&t=L6SxC781QINoehi3-1',
    'https://drive.google.com/drive/folders/10TKko2E0KpiOYoGN60yLzeUCL8qLrb2h?usp=sharing'
  ];
  currentSectionIndex = 0;
  

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
}
