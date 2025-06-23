import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';
import { SkillsComponent } from '../../components/home/skills/skills.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { EducationComponent } from '../../components/home/education/education.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FlashAnimationComponent, SkillsComponent, ExperienceComponent, EducationComponent, AnimateOnScrollModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
        skills = [
            {
                category: 'Backend',
                icon: 'pi pi-server',
                description: '專精於後端系統架構設計，具備豐富的 .NET 框架開發經驗，能夠建構高效能、可擴展的 API 服務',
                technologies: ['C#', '.NET 8', 'Entity Framework', 'OAuth2.0', 'Node.js', 'Express.js']
            },
            {
                category: 'Frontend',
                icon: 'pi pi-desktop',
                description: '擅長現代化前端框架開發，熟悉響應式設計與用戶體驗優化，能夠打造直觀且高效的使用者介面',
                technologies: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS']
            },
            {
                category: 'Database',
                icon: 'pi pi-database',
                description: '具備完整的資料庫設計與優化能力，熟悉大數據處理與高可用性架構，能有效解決效能瓶頸問題',
                technologies: ['MySQL', 'MSSQL', 'Redis', 'TimescaleDB', 'Stored Procedure', 'Partition', 'MHA']
            },
            {
                category: 'DevOps & Others',
                icon: 'pi pi-cog',
                description: '擁有完整的 DevOps 流程管理經驗，熟悉容器化部署與雲端服務整合，提升開發與維運效率',
                technologies: [
                    'Docker',
                    'Grafana',
                    'Linux', 'Codepliot', 'GCP', 'Nginx', 'Git'
                ]
            }
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
            icon: 'pi pi-briefcase',
            color: '#0d9488'
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
            icon: 'pi pi-desktop',
            color: '#10b981'
        }
    ];

    // 學歷
    education = [
        {
            period: '2025/09 - 2028/06(預期)',
            title: '碩士',
            institution: '國立中興大學',
            department: '資訊工程系',

            project: {
                title: '實驗室：工商暨交通數據分析實驗室',
                technologies: ['客製化類神經網路', '可解釋化AI設計', '大數據分析']
            },

            icon: 'pi pi-graduation-cap',
            color: '#2563eb' // 藍色
        },
        {
            period: '2017/09 - 2021/06',
            title: '學士',
            institution: '國立臺北商業大學',
            department: '資訊管理系',
            project: {
                title: '畢業專題：Telegram聊天機器人-旅泊包',
                technologies: ['Python Flask', 'SQLite', 'HTML/CSS']
            },
            icon: 'pi pi-graduation-cap',
            color: '#3b82f6' // 藍色
        }
    ];
}
