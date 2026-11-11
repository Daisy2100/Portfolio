import { Component } from '@angular/core';

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
    imports: [RouterModule, FlashAnimationComponent, SkillsComponent, ExperienceComponent, EducationComponent, AnimateOnScrollModule],
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
            description: '以 Angular 與 Vue 開發企業系統，擅長把複雜的權限與資料流程，整理成好維護的元件與頁面結構；也建置過共用 UI 元件庫與 Storybook 文件。',
            technologies: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'Storybook']
        },
        {
            category: 'Backend & API Integration',
            icon: 'pi pi-server',
            description: '使用 .NET 8 與 Express.js 設計 REST API，實作過 OAuth 2.0 單一登入與 AD 整合登入，能獨立完成從 API 到前端的完整功能。',
            technologies: ['C#', '.NET 8', 'Entity Framework', 'Node.js', 'Express.js', 'OAuth2.0', 'JWT', 'REST API']
        },
        {
            category: 'Database',
            icon: 'pi pi-database',
            description: '負責關聯式資料庫的設計、查詢與效能調整，處理過 IoT 電表資料與客製化報表，也熟悉 Redis、TimescaleDB 等不同類型的資料儲存。',
            technologies: ['MySQL', 'MSSQL', 'Redis', 'TimescaleDB', 'Stored Procedure', 'Partition']
        },
        {
            category: 'DevOps / Cloud / AI-assisted SDLC',
            icon: 'pi pi-cog',
            description: '以 Docker、GitHub Actions 與 Cloudflare Workers 建立自動化部署流程，並將 AI 工具實際用在需求拆解、重構、除錯與文件整理。',
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
