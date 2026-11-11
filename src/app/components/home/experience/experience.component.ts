import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { WorkExperience } from '../../../data/work-experience';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [RouterModule, CardModule, TimelineModule, AnimateOnScrollModule, TagModule, ButtonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    @Input() sectionTitle = '工作經歷';
    @Input() sectionSubtitle = '從前端實習到企業前端基礎建設';
    @Input() workExperience: WorkExperience[] = [];

    constructor(private router: Router) {}

    navigateToDetail(route: string): void {
        this.router.navigate([route]).then(() => {
            // 滾動到頁面頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
