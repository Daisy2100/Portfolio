import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlashAnimationComponent } from '../../components/flash-animation/flash-animation.component';
import { SkillsComponent } from '../../components/home/skills/skills.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { EducationComponent } from '../../components/home/education/education.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { WORK_EXPERIENCE } from '../../data/work-experience';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, FlashAnimationComponent, SkillsComponent, ExperienceComponent, EducationComponent, AnimateOnScrollModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
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
    workExperience = WORK_EXPERIENCE;

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
