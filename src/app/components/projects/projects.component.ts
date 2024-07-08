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
    'Human resources system for CJJ', 
    'Vibes mood design',
    'Graphic design portfolio'
  ];
  descriptions = [
    'This is a digital invitation project created using HTML, CSS and JavaScript. The invitation is designed to be sent and viewed through a web browser. I designed it for my wedding, which took place on July 17, 2022.',
    'This project generates official employee IDs and integrates them into the Google and Apple wallets. It is developed in angular and node js, the design and development was completely new.',
    'I developed this project in Nuxt 3 (Vue), with vuetify as the UI library, it is a frontend project.',
    'Currently, maintenance is carried out on various systems of the Judicial Council of the State of Jalisco, such as the main page, sentences and tickets, the application is built in Angula, with an API developed in Node.',
    'This is a frontend project, it has an original design and consists of a modern user interface to navigate, it is responsive, it is made with html, css and boostrap.',
    'This project has not yet gone into production, but it consists of the digitization of the CJJ Human Resources department, including digital files, online procedures, construction of algorithms to optimize processes, all supported with the use of the electronic signature.',
    'In this project, the visual design of the mobile app was developed, I used Figma to carry out the design.',
    'In this section you can see all the graphic projects I have done, from logos, banners, cards and more, the majority of this portfolio was developed at Microsoft publisher.'
  ];
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

  navigateToLink() {
    window.open(this.currentLink, '_blank');
  }
}
