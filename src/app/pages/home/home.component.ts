import { Component } from '@angular/core';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlashAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
