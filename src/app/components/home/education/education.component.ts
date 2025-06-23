import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TagModule } from 'primeng/tag';

interface Education {
    period: string;
    title: string;
    institution: string;
    department: string;
    lab?: string;
    research?: string;
    project?: {
        title: string;
        technologies: string[];
    };
    icon: string;
    color: string;
}

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule, CardModule, TimelineModule, AnimateOnScrollModule, TagModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    @Input() education: Education[] = [];
}
