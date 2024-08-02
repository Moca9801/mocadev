import { Component } from '@angular/core';
import { ModalProjectsComponent } from "../modal-projects/modal-projects.component";
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ModalProjectsComponent, MatDialogModule, TranslateModule],
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
    'FIRMMO_DESCRIPT',
    'MY_WEDDING_DESCRIPT',
    'ID_CARD_DESCRIPT',
    'WEDDING_INV_DESCRIPTION',
    'CJJ_MAINTENNANCE_DESCRIPT',
    'GENERIC_NAV_DESCRIPT',
    'VIBES_MOOD_DESCRIP',
    'GRAPHIG_PORT_DESCRIPT'

  ]
  links = [
    'https://firmmo.netlify.app/',
    'https://boda-adrianayangel.netlify.app/',
    'https://credencial.cjj.gob.mx/',
    'https://brenda-and-jonathan.netlify.app/',
    'https://cjj.gob.mx/',
    'https://generic-nav-model.netlify.app/',
    'https://www.figma.com/design/rvsi60iiHJzdcNfFsvFH5D/Vibes-mood?node-id=54796-1710&t=L6SxC781QINoehi3-1',
    'https://drive.google.com/drive/folders/10TKko2E0KpiOYoGN60yLzeUCL8qLrb2h?usp=sharing'
  ];
  technologies =[
    [
      '../../../assets/img/technologies/vue.svg',
      '../../../assets/img/technologies/vuetify.svg',
      '../../../assets/img/technologies/node.svg'
    ],
    [
      '../../../assets/img/technologies/html.svg',
      '../../../assets/img/technologies/css.svg',
      '../../../assets/img/technologies/javascript.svg'
    ],
    [
      '../../../assets/img/technologies/angular.svg',
      '../../../assets/img/technologies/boostrap.svg',
      '../../../assets/img/technologies/typescript.svg',
      '../../../assets/img/technologies/node.svg',
      '../../../assets/img/technologies/oracle.svg'
    ],
    [
      '../../../assets/img/technologies/vue.svg',
      '../../../assets/img/technologies/vuetify.svg',
    ],
    [
      '../../../assets/img/technologies/angular.svg',
      '../../../assets/img/technologies/boostrap.svg',
      '../../../assets/img/technologies/typescript.svg',
      '../../../assets/img/technologies/node.svg',
      '../../../assets/img/technologies/oracle.svg'
    ],
    [
      '../../../assets/img/technologies/angular.svg',
      '../../../assets/img/technologies/boostrap.svg',
      '../../../assets/img/technologies/html.svg',
      '../../../assets/img/technologies/css.svg',
      '../../../assets/img/technologies/typescript.svg',
    ],
    [
      '../../../assets/img/technologies/figma.svg',
    ],
    [
      '../../../assets/img/technologies/publisher.svg',
    ],
  ];

  folderPath = [
    [
      '../../../assets/img/firmmo/1.png',
      '../../../assets/img/firmmo/2.png',
      '../../../assets/img/firmmo/3.png',
      '../../../assets/img/firmmo/4.png',
      '../../../assets/img/firmmo/5.png',
      '../../../assets/img/firmmo/6.png',
      '../../../assets/img/firmmo/7.png',
      '../../../assets/img/firmmo/8.png',
    ],
    [
      '../../../assets/img/MyWedding/1.png',
      '../../../assets/img/MyWedding/2.png',
      '../../../assets/img/MyWedding/3.png',
      '../../../assets/img/MyWedding/4.png',
      '../../../assets/img/MyWedding/5.png',
    ],
    [
      '../../../assets/img/credencial_cjj/1.png',
      '../../../assets/img/credencial_cjj/2.png',
      '../../../assets/img/credencial_cjj/3.png',
      '../../../assets/img/credencial_cjj/4.png',
      '../../../assets/img/credencial_cjj/5.png',
      '../../../assets/img/credencial_cjj/6.png',
    ],
    [
      '../../../assets/img/bren&jona/1.png',
      '../../../assets/img/bren&jona/2.png',
      '../../../assets/img/bren&jona/3.png',
      '../../../assets/img/bren&jona/4.png',
      '../../../assets/img/bren&jona/5.png',
      '../../../assets/img/bren&jona/6.png',
    ],
    [
      '../../../assets/img/cjj/1.png',
      '../../../assets/img/cjj/2.png',
      '../../../assets/img/cjj/3.png',
      '../../../assets/img/cjj/4.png',
      '../../../assets/img/cjj/5.png',
      '../../../assets/img/cjj/6.png',
    ],
    [
      '../../../assets/img/generic-nav-model/1.png',
      '../../../assets/img/generic-nav-model/2.png',
      '../../../assets/img/generic-nav-model/3.png',
      '../../../assets/img/generic-nav-model/4.png',
      '../../../assets/img/generic-nav-model/5.png',
      '../../../assets/img/generic-nav-model/6.png',
    ],
    [
      '../../../assets/img/vibesMood/1.png',
      '../../../assets/img/vibesMood/2.png',
      '../../../assets/img/vibesMood/3.png',
      '../../../assets/img/vibesMood/4.png',
      '../../../assets/img/vibesMood/5.png',
      '../../../assets/img/vibesMood/6.png',
    ],
    [
      '../../../assets/img/graphic_design/1.png',
      '../../../assets/img/graphic_design/2.png',
      '../../../assets/img/graphic_design/3.png',
      '../../../assets/img/graphic_design/4.png',
      '../../../assets/img/graphic_design/5.png',
      '../../../assets/img/graphic_design/6.png',
      '../../../assets/img/graphic_design/7.png',
      '../../../assets/img/graphic_design/8.png',
      '../../../assets/img/graphic_design/9.png',
      '../../../assets/img/graphic_design/10.png',
      '../../../assets/img/graphic_design/11.png',
      '../../../assets/img/graphic_design/12.png',
    ],
  ];

  video = [
    "../../../assets/videos/Firmmo.mp4", 
    "../../../assets/videos/MyWedding.mp4", 
    "../../../assets/videos/credencial_CJJ.mp4",
    "../../../assets/videos/brend-&-jona.mp4",
    "../../../assets/videos/CJJ.mp4",
    "../../../assets/videos/generic-nav-model.mp4",
    "../../../assets/videos/VibesMood.mp4",
    "../../../assets/videos/portfolioGrahicDesign.mp4",
  ]

  currentSectionIndex = 0;
  
  constructor(private dialog: MatDialog, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


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

  openProjectModal(index: number) {
    const dialogRef: MatDialogRef<ModalProjectsComponent> = this.dialog.open(ModalProjectsComponent, {
      data: {
        title: this.sections[index],
        description: this.descriptions[index],
        link: this.links[index],
        tech: this.technologies[index],
        imagePaths: this.folderPath[index],
        video: this.video[index],
        currentIndex: index,
        totalProjects: this.sections.length,
        language: this.translate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'next') {
        this.openProjectModal((index + 1) % this.sections.length);
      } else if (result === 'previous') {
        this.openProjectModal((index - 1 + this.sections.length) % this.sections.length);
      }
    });
  }
}
