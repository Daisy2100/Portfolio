import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { WORK_EXPERIENCE } from '../../data/work-experience';

@Component({
    selector: 'app-work',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        CardModule,
        ButtonModule,
        TagModule,
        AnimateOnScrollModule,
        ExperienceComponent
    ],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})

export class WorkComponent {
    // 工作經歷
    workExperience = WORK_EXPERIENCE;

    trackByCompanyId(index: number, company: any): string {
        return company.id;
    }
}
