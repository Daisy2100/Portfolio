import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CardModule, AnimateOnScrollModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})

export class AboutComponent {

}
