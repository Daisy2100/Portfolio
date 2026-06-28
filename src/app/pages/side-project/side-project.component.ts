import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ExperienceComponent } from '../../components/home/experience/experience.component';

@Component({
    selector: 'app-side-project',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        CardModule,
        ButtonModule,
        TagModule,
        AnimateOnScrollModule,
        ExperienceComponent
    ],
    templateUrl: './side-project.component.html',
    styleUrls: ['./side-project.component.scss']
})

export class SideProjectComponent {
    // 工作經歷
    workExperience = [
        {
            period: '2026',
            title: 'Independent Product / Auth Platform',
            company: 'PrimeLeft / Sepal Auth Hub',
            duration: 'Side Project',
            description: '面向小型賣家的品牌展示網站，以及獨立的服務授權與驗證平台。',
            responsibilities: [
                '建立 PrimeLeft 品牌展示網站，整合商品瀏覽、分享與平台前後端服務',
                '將系統拆分為 Sepal Auth Hub Core、Sepal Auth Hub、PrimeLeft Frontend 與 PrimeLeft Backend 四個 repository',
                '由 Core 提供子專案共用基礎函式，Auth Hub 獨立負責 token、服務權限、帳號綁定與授權期限驗證',
                '使用 Cloudflare Workers、D1、Hono、Drizzle ORM 與 CI/CD 建立低成本 serverless 部署流程'
            ],
            icon: 'pi pi-shield',
            color: '#6366f1',
            tags: ['TypeScript', 'Cloudflare Workers', 'D1', 'Hono', 'Drizzle ORM', 'Sepal Auth Hub', 'Modular Frontend', 'CI/CD'],
            detailRoute: '/side-project/2026-primeleft'
        },
        {
            period: '2025',
            title: 'React Learning Project',
            company: '密碼與信箱洩漏驗證器',
            duration: 'Learning Project',
            description: '用一個範圍清楚的小工具理解 React 的基本開發方式。',
            responsibilities: [
                '練習 React 的元件拆分、狀態管理與事件處理',
                '串接公開 API，檢查密碼或電子信箱是否曾出現在已知資料外洩事件中'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['React', 'Next.js', 'JavaScript', 'Public API'],
            detailRoute: '/side-project/2025-cryptanalysis'
        },
        {
            period: '2024',
            title: 'Personal Utility',
            company: '車牌吉凶分析',
            duration: 'Side Project',
            description: '把買車選牌時反覆查找與比較的困擾，做成可以快速操作的工具。',
            responsibilities: [
                '整合車牌號碼的分析資訊，減少選牌時手動查找與反覆比對',
                '使用 Vue 3 管理表單輸入、資料轉換與分析結果'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['Vue 3', 'JavaScript', 'SCSS', 'GitHub Pages'],
            detailRoute: '/side-project/2024-license-plate'
        },
        {
            period: '2022',
            title: 'Utility Tool',
            company: '週期選取器',
            duration: 'Side Project',
            description: '替私人社團省下重複計算日期週期的時間。',
            responsibilities: [
                '依照起始日期與週期條件，自動換算所需日期範圍',
                '以私人社團的日常使用情境調整輸入流程與結果呈現'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['Vue 3', 'JavaScript', 'SCSS', 'Date Handling'],
            detailRoute: '/side-project/2022-date-picker'
        }
    ];

    trackByCompanyId(index: number, company: any): string {
        return company.id;
    }
}
