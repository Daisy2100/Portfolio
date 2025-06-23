import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-intro-animation',
    templateUrl: './intro-animation.component.html',
    styleUrls: ['./intro-animation.component.scss'],
    imports: [CommonModule]
})

export class IntroAnimationComponent implements OnInit {

    show = true;
    @Output() animationEnd = new EventEmitter<void>();

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.renderer.addClass(document.body, 'overflow-hidden');
            this.startAnimation();
        }, 100);
    }

    startAnimation() {
        setTimeout(() => {
            const title = document.querySelector('.intro-title');
            title?.classList.add('fade-out');
        }, 1000);
        setTimeout(() => {
            const grayBg = document.querySelector('.intro-bg-gray');
            grayBg?.classList.add('slide-up');
        }, 1700);
        setTimeout(() => {
            const whiteBg = document.querySelector('.intro-bg-white');
            whiteBg?.classList.add('slide-up');
        }, 2000);
        setTimeout(() => {
            this.show = false;
            this.renderer.removeClass(document.body, 'overflow-hidden');
        }, 2300);
    }

    onAnimationEnd() {
        if (!this.show) {
            this.animationEnd.emit();
        }
    }
}
