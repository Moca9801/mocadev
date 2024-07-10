import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  sections = ['Frontend', 'Backend', 'Design'];
  currentSectionIndex = 0;

  skills: any = {
    Frontend: [
      { name: 'HTML', percentage: 80 },
      { name: 'CSS', percentage: 85 },
      { name: 'Bootstrap', percentage: 85 },
      { name: 'Angular', percentage: 95 },
      { name: 'Vue', percentage: 65 }
    ],
    Backend: [
      { name: 'Node', percentage: 90 },
      { name: 'NestJS', percentage: 60 },
      { name: 'SQL', percentage: 85 }
    ],
    Design: [
      { name: 'Creativity', percentage: 95 },
      { name: 'Microsoft Publisher', percentage: 100 },
      { name: 'Figma', percentage: 75 }
    ]
  };

  get currentSkills() {
    return this.skills[this.sections[this.currentSectionIndex]];
  }
  previousSection() {
    this.currentSectionIndex = (this.currentSectionIndex - 1 + this.sections.length) % this.sections.length;
  }

  nextSection() {
    this.currentSectionIndex = (this.currentSectionIndex + 1) % this.sections.length;
  }
}
