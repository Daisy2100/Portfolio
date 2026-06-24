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
            title: 'Internal Platform / Auth System',
            company: 'PrimeLeft / Sepal Auth Hub',
            duration: 'Side Project',
            description: '輕量化授權與服務權限平台，涵蓋模組化前端、授權中心、license key 驗證、service entitlement verification 與 Cloudflare serverless 部署。',
            responsibilities: [
                '設計 Sepal Auth Hub 作為輕量化授權中心，支援 license key、shared secret、Cloudflare Account ID 綁定與服務權限驗證',
                '使用 Cloudflare Workers、Cloudflare D1、Hono、Drizzle ORM 與 Cloudflare CDN 建立 serverless application',
                '建立 npm package 型態的 modular frontend modules，支援不同前端專案複用與快速整合',
                '使用 ChatGPT、Claude、GitHub Copilot 輔助架構規劃、文件撰寫、程式碼檢查、重構與技術決策'
            ],
            icon: 'pi pi-shield',
            color: '#6366f1',
            tags: ['Cloudflare Workers', 'D1', 'Hono', 'Drizzle ORM', 'TypeScript', 'License Key', 'Service Entitlement', 'Modular Frontend', 'AI-assisted SDLC'],
            detailRoute: '/side-project/primeleft-sepal-auth-hub'
        },
        {
            period: '2025',
            title: '開源項目',
            company: '交易媒合平台',
            duration: '1 month',
            description: '撰寫模組化及高可用的程式碼',
            responsibilities: [
                '與大學同學合作，開發開源項目',
                '撰寫模組化及高可用的程式碼',
            ],
            icon: 'pi pi-briefcase',
            color: '#0d9488',
            tags: ['Angular19', 'Primeng', 'Tailwindcss', 'echarts'],
            detailRoute: '/2025-crypto-exchange'
        },
        {
            period: '2025',
            title: '練習用',
            company: '密碼與信箱洩漏驗證器',
            duration: '1 day',
            description: '串接公用API，辨識密碼與信箱是否洩漏',
            responsibilities: [
                '理解React與Next.js的基本概念',
                '串接公用API，辨識密碼與信箱是否洩漏'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['React', 'Next.js'],
            detailRoute: '/side-project/2025-cryptanalysis'
        },
        {
            period: '2024',
            title: '個人用',
            company: '車牌吉凶分析',
            duration: '1 day',
            description: '使用 Vue3 整合網路上訊息，建立吉凶分析',
            responsibilities: [
                '使用 Vue3 整合網路上訊息，建立吉凶分析'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['Vue3', 'SCSS'],
            detailRoute: '/side-project/2024-license-plate'
        },
        {
            period: '2022',
            title: '個人用',
            company: '週期選取器',
            duration: '1 day',
            description: '解決日期需要手動算的問題',
            responsibilities: [
                '解決日期需要手動算的問題'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['Vue3', 'SCSS'],
            detailRoute: '/side-project/2022-date-picker'
        }
    ];

    trackByCompanyId(index: number, company: any): string {
        return company.id;
    }
}
