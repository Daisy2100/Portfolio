import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashAnimationComponent, AnimateOnScrollModule, CardModule, TimelineModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = [
    {
      category: 'Backend',
      icon: 'pi pi-server',
      description: '',
      technologies: ['C#', '.NET 8', 'Entity Framework', 'LINQ', 'OAuth2.0', 'Node.js', 'Express.js']
    },
    {
      category: 'Frontend',
      icon: 'pi pi-desktop',
      description: '',
      technologies: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS']
    },
    {
      category: 'Database',
      icon: 'pi pi-database',
      description: '多種資料庫管理經驗',
      technologies: ['MySQL', 'MSSQL', 'Redis', 'TimescaleDB', 'Stored Procedure', 'Partition', 'MHA']
    },
    {
      category: 'DevOps & CICD',
      icon: 'pi pi-cog',
      description: ' 與系統管理技能',
      technologies: [
        'Docker',
        'Grafana',
      ]
    },
    {
      category: 'Others',
      icon: 'pi pi-cog',
      description: 'DevOps 與系統管理技能',
      technologies: [
        'Linux', 'Codepliot', 'GCP', 'Nginx', 'Git'
      ]    },
  ];

  // 工作經歷
  workExperience = [
    {
      period: '2021/07 - 現在',
      title: '全端工程師',
      company: '精誠資訊股份有限公司',
      duration: '3 years+',
      description: '撰寫模組化及高可用的程式碼',
      responsibilities: [
        '撰寫模組化及高可用的程式碼',
        '與PM、SA團隊合作，評估需求與任務花費時程',
        '依需求開發API、維運'
      ],
      achievements: [
        '建築中心單一登入系統(OAuth2.0)、建築中心能效平台',
        'Envision360 能源管理系統 (IoT)',
        'IoT專案，資料庫新增 partition，解決大量資料查詢過慢的問題',
        '開發複用性高的元件，改善原程式不利維護與閱讀的缺點'
      ],
      icon: 'pi pi-briefcase',
      color: '#34d399'
    },
    {
      period: '2019/07 - 2021/04',
      title: '前端實習生',
      company: 'ACCESS Taiwan(日商)',
      duration: '1.75 years',
      description: '使用 JQuery / HTML / CSS 串接購物車',
      responsibilities: [
        '使用 JQuery / HTML / CSS 串接購物車'
      ],
      achievements: [
        '開發MyPage，協助AP Singapore客服減少50%工作量'
      ],
      icon: 'pi pi-desktop',
      color: '#60a5fa'
    }
  ];

  // 學歷
  education = [
    {
      period: '2025/09 - 2028/06(預期)',
      title: '碩士',
      institution: '國立中興大學',
      department: '資訊工程系',
      lab: '工商暨交通數據分析實驗室',
      research: '客製化類神經網路、可解釋化AI設計、大數據分析',
      icon: 'pi pi-graduation-cap',
      color: '#f59e0b'
    },
    {
      period: '2017/09 - 2021/06',
      title: '學士',
      institution: '國立臺北商業大學',
      department: '資訊管理系',
      project: {
        title: 'Telegram聊天機器人-旅泊包',
        technologies: ['Python Flask', 'SQLite', 'HTML/CSS']
      },
      icon: 'pi pi-graduation-cap',
      color: '#ef4444'
    }
  ];
}
