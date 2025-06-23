import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Skill {
    category: string;
    icon: string;
    description: string;
    technologies: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, CardModule, AnimateOnScrollModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    @Input() skills: Skill[] = [];
}
