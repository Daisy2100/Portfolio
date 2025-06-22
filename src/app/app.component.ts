import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.updateBackgroundOpacity();
  }

  ngOnInit(): void {
    this.updateBackgroundOpacity();
  }

  ngOnDestroy(): void {
    // 清理邏輯（如果需要）
  }
  private updateBackgroundOpacity(): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 計算滾動進度（0 到 2，分為兩個階段）
    const scrollProgress = Math.min(scrollY / windowHeight, 2);

    const bg1 = document.querySelector('.app-bg-1') as HTMLElement;
    const bg2 = document.querySelector('.app-bg-2') as HTMLElement;
    const bg3 = document.querySelector('.app-bg-3') as HTMLElement;

    if (bg1 && bg2 && bg3) {
      if (scrollProgress <= 1) {
        // 第一階段：藍色(bg-1)從完全顯示漸變到70%，紅色(bg-2)從0%漸變到90%
        // 創造藍 → 紫的效果
        bg1.style.opacity = '1'; // 1 → 0.7
        bg2.style.opacity = (scrollProgress * 0.2).toString();     // 0 → 0.9
        bg3.style.opacity = '0';
      } else {
        // 第二階段：藍色(bg-1)從50%漸變到0%，紅色(bg-2)保持50%，綠色(bg-3)從0%漸變到50%
        // 創造紫 → 橘的效果
        bg1.style.opacity = '1'; // 0.5 → 0.3
        bg2.style.opacity = (scrollProgress * 0.1).toString();    // 0.2 → 0.5
        bg3.style.opacity = (scrollProgress * 0.25).toString();       // 0 → 0.5
      }
    }
  }
}
