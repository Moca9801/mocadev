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
    'Digital ID Card for CJJ', 
    'Human resources system for CJJ', 
    'Electronic Signature Platform for CJJ',
    'CJJ page maintenance',
    'Vibes mood design',
    'Graphic design portfolio'
  ];
  descriptions = [
    'This project consists of the generation of an official digital identification for employees, with integration to the Google wallet and Apple wallet, we developed it from scratch, the app in Angular 17, the node API designed by us, it also includes the reading of files electronic signature of the SAT and the CJF.',
    'This project has not yet gone into production, but it consists of the digitization of the CJJ Human Resources department, including digital files, online procedures, construction of algorithms to optimize processes, all supported with the use of the electronic signature.',
    'This project is private, but it consists of consuming the electronic signature services of the CJF, a login was built on the platform, with a modern navigation panel, PDF preview, multi-signature and upload and download of signed files.',
    'Currently, maintenance is carried out on various systems of the Judicial Council of the State of Jalisco, such as the main page, sentences and tickets, the application is built in Angula, with an API developed in Node.',
    'In this project, the visual design of the mobile app was developed, I used Figma to carry out the design.',
    'In this section you can see all the graphic projects I have done, from logos, banners, cards and more, the majority of this portfolio was developed at Microsoft publisher.'
  ];
  links = [
    'https://credencial.cjj.gob.mx/',
    '',
    'https://firmae-doc.judicaturajalisco.net/',
    'https://cjj.gob.mx/',
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
