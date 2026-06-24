import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';
import { SkillsComponent } from '../../components/home/skills/skills.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { EducationComponent } from '../../components/home/education/education.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, FlashAnimationComponent, SkillsComponent, ExperienceComponent, EducationComponent, AnimateOnScrollModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    skills = [
        {
            category: 'Frontend',
            icon: 'pi pi-desktop',
            description: '熟悉現代化前端框架與企業內部系統開發，能依需求建立可維護、可擴充的前端架構，並與後端 API、權限流程與資料流程整合。',
            technologies: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS']
        },
        {
            category: 'Backend & API Integration',
            icon: 'pi pi-server',
            description: '具備全端協作與後端 API 開發經驗，能設計與串接 REST API、處理 OAuth/JWT 權限驗證、資料流程與企業內部系統整合。',
            technologies: ['C#', '.NET 8', 'Entity Framework', 'Node.js', 'Express.js', 'OAuth2.0', 'JWT', 'REST API']
        },
        {
            category: 'Database',
            icon: 'pi pi-database',
            description: '具備關聯式資料庫設計、查詢、資料流程整合與效能調整經驗，能支援企業內部系統的資料存取、報表需求與後端服務整合。',
            technologies: ['MySQL', 'MSSQL', 'Redis', 'TimescaleDB', 'Stored Procedure', 'Partition']
        },
        {
            category: 'DevOps / Cloud / AI-assisted SDLC',
            icon: 'pi pi-cog',
            description: '具備容器化部署、版本控管、CI/CD 與雲端服務整合經驗，並能使用 AI 工具輔助需求拆解、重構、debug 與文件整理。',
            technologies: ['Docker', 'Nginx', 'Linux', 'Git', 'GitHub Actions', 'GCP', 'Cloudflare Workers', 'GitHub Copilot', 'ChatGPT', 'Claude']
        }
    ];

    // 工作經歷
    workExperience = [
        {
            period: '2025/08 - 現在',
            title: 'Senior Frontend Engineer',
            company: '緯致科技股份有限公司 — 華邦電駐點專案',
            duration: '在職中',
            description: '參與企業內部系統前端開發，專注於 Vue.js、TypeScript、UI 元件庫建置、Storybook 導入與 Monorepo 架構維護。',
            responsibilities: [
                '使用 Vue.js 與 TypeScript 開發與維護前端功能',
                '建置與維護前端 UI 元件庫，並導入 Storybook 進行視覺化測試與文件管理',
                '參與 Monorepo 前端架構的開發與維護，提升跨專案元件共用性與開發效率'
            ],
            icon: 'pi pi-briefcase',
            color: '#6366f1',
            tags: ['Vue.js', 'TypeScript', 'Storybook', 'Monorepo', 'Frontend Components'],
            detailRoute: '/work/wits'
        },
        {
            period: '2022/04 - 2025/08',
            title: 'Full Stack Engineer',
            company: '精誠資訊股份有限公司',
            duration: '3 年 4 個月',
            description: '參與企業系統開發與維護，負責前端功能開發、後端 API 實作、資料庫整合與系統維運。',
            responsibilities: [
                '使用 Angular、Vue.js、C#、Entity Framework、Node.js 與資料庫技術開發企業內部系統',
                '依據需求設計與實作 API、資料流程、前端頁面與後台管理功能',
                '協助既有系統維護、debug、效能改善與功能擴充'
            ],
            icon: 'pi pi-briefcase',
            color: '#0d9488',
            tags: ['C#', 'Entity Framework', 'Angular', 'Vue.js', 'MySQL', 'MSSQL', 'Docker'],
            detailRoute: '/work/systex'
        },
        {
            period: '2020/08 - 2022/04',
            title: 'Frontend Intern',
            company: 'ACCESS Taiwan（日商）',
            duration: '1 年 8 個月',
            description: '參與前端頁面開發與購物車功能串接。',
            responsibilities: [
                '使用 jQuery、HTML、CSS、JavaScript 開發與維護前端頁面',
                '協助購物車流程與頁面互動功能串接'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['jQuery', 'HTML', 'CSS', 'JavaScript'],
            detailRoute: '/work/access'
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
