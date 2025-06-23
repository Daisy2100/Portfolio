import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TagModule } from 'primeng/tag';

interface WorkExperience {
    period: string;
    title: string;
    company: string;
    duration: string;
    description: string;
    responsibilities: string[];
    icon: string;
    color: string;
}

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, CardModule, TimelineModule, AnimateOnScrollModule, TagModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    @Input() workExperience: WorkExperience[] = [];
}
