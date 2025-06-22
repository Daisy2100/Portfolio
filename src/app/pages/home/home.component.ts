import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashAnimationComponent, AnimateOnScrollModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = [
    {
      category: 'Backend 後端開發',
      icon: 'pi pi-server',
      description: '企業要的專長你都具備嗎？職場增能課都在這',
      technologies: ['.NET 8', 'Entity Framework', 'Express.js']
    },
    {
      category: 'Frontend 前端開發',
      icon: 'pi pi-desktop',
      description: '現代化前端開發技術棧',
      technologies: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript']
    },
    {
      category: 'Others 其他技術',
      icon: 'pi pi-cog',
      description: 'DevOps 與系統管理技能',
      technologies: [
        'DevOps：CI/CD、Docker容器化部屬、Grafana、Nginx',
        'Others：Linux、GCP'
      ]
    },
    {
      category: 'Database 資料庫',
      icon: 'pi pi-database',
      description: '多種資料庫管理經驗',
      technologies: ['MySQL', 'MSSQL', 'Redis']
    }
  ];
}
