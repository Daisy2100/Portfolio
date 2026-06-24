import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [AnimateOnScrollModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})

export class AboutComponent {
    private readonly careerStart = new Date(2022, 3, 1);

    get experienceYears(): number {
        const today = new Date();
        let years = today.getFullYear() - this.careerStart.getFullYear();
        const hasReachedAnniversary =
            today.getMonth() > this.careerStart.getMonth() ||
            (today.getMonth() === this.careerStart.getMonth() && today.getDate() >= this.careerStart.getDate());

        if (!hasReachedAnniversary) {
            years -= 1;
        }

        return Math.max(years, 0);
    }
}
