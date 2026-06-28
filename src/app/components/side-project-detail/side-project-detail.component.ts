import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface SideProjectLink {
    label: string;
    url: string;
    icon: string;
    primary?: boolean;
}

export interface SideProjectHighlight {
    title: string;
    description: string;
    icon: string;
}

export interface SideProjectRepository {
    name: string;
    type: string;
    description: string;
    visibility: 'Public' | 'Private';
    icon: string;
    url?: string;
}

export interface SideProjectDetail {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    purpose: string;
    technologies: string[];
    highlights: SideProjectHighlight[];
    links: SideProjectLink[];
    repositories?: SideProjectRepository[];
    repositoryNote?: string;
}

@Component({
    selector: 'app-side-project-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './side-project-detail.component.html',
    styleUrl: './side-project-detail.component.scss'
})
export class SideProjectDetailComponent {
    @Input({ required: true }) project!: SideProjectDetail;
}
