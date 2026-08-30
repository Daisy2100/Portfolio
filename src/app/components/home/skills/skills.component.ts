import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

interface Skill {
    category: string;
    icon: string;
    description: string;
    technologies: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CardModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    @Input() skills: Skill[] = [];
}
