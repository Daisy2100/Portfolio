import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-wits',
    standalone: true,
    imports: [
    RouterModule,
    CardModule,
    ButtonModule,
    TagModule,
    TimelineModule,
    AnimateOnScrollModule
],
    templateUrl: './wits.component.html',
    styleUrl: './wits.component.scss'
})
export class WitsComponent {
    companyInfo = {
        name: '緯致科技股份有限公司(原緯創軟體)',
        period: '2025/08 - 2026/08',
        role: 'Senior Software Engineer',
        duration: '1 年',
        icon: 'pi pi-briefcase',
        color: '#0d9488'
    };

    projects = [
        {
            name: '企業內部 UI 元件庫建置',
            role: 'Senior Software Engineer',
            period: '2025/08 - 2026/08',
            description: '負責建置企業內部 Vue.js UI 元件庫，並導入 Storybook 進行元件展示、測試與文件管理。',
            responsibilities: [
                '以 Vue.js 與 TypeScript 開發與維護共用 UI 元件',
                '規劃元件庫結構與 API，讓各專案能以一致的方式引用元件',
                '導入 Storybook 展示與測試元件，確保視覺一致與可用性'
            ],
            technologies: {
                frontend: ['Vue.js', 'TypeScript', 'Storybook'],
                backend: [],
                database: []
            },
            icon: 'pi pi-building',
            status: '已完成',
            achievements: [
                '共用元件庫已導入專案使用，降低跨專案重複開發的成本',
                '以 Storybook 元件文件作為設計與開發的共同參考，減少來回確認'
            ]
        },
        {
            name: '企業內部 Monorepo 前端架構開發',
            role: 'Senior Software Engineer',
            period: '2026/06 - 2026/08',
            description: '參與企業內部前端 Monorepo 架構的開發與維護，整合跨專案共用程式碼與開發流程。',
            responsibilities: [
                '以 Vue.js 與 TypeScript 開發與維護企業內部前端功能',
                '在 Monorepo 架構下整合跨專案的共用套件與程式碼'
            ],
            technologies: {
                frontend: ['Vue.js', 'TypeScript', 'Monorepo', 'Git'],
                backend: [],
                database: []
            },
            icon: 'pi pi-sitemap',
            status: '已完成',
            achievements: [
                '共用程式碼集中管理，跨專案修改只需改一處',
                '整理 Monorepo 下的前端開發與版控流程'
            ]
        }
    ];

    // Timeline 事件
    timelineEvents = [
        {
            date: '2026/08',
            title: '結束任職',
            role: 'Senior Software Engineer',
            status: '已完成',
            icon: 'pi pi-flag',
            color: '#6366f1'
        },
        ...this.projects.slice().reverse().map((project) => ({
            date: project.period,
            title: project.name,
            role: project.role,
            status: project.status,
            icon: project.icon,
            color: this.getStatusColor(project.status)
        })),
        {
            date: '2025/08/18',
            title: '加入緯致科技',
            role: 'Senior Software Engineer',
            status: '已完成',
            icon: 'pi pi-user-plus',
            color: '#6366f1'
        }
    ];

    getStatusColor(status: string): string {
        switch (status) {
            case '進行中':
                return '#f59e0b';
            case '已完成':
                return '#10b981';
            default:
                return '#6b7280';
        }
    }

    getStatusSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
        switch (status) {
            case '進行中':
                return 'warn';
            case '已完成':
                return 'success';
            default:
                return 'info';
        }
    }

    trackByProjectName(_index: number, project: { name: string }): string {
        return project.name;
    }
}
