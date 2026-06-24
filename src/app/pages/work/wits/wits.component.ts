import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        CommonModule,
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
        name: 'WITS',
        period: '2025/08 - 現在',
        role: 'Senior Engineer',
        duration: '在職中',
        icon: 'pi pi-briefcase',
        color: '#0d9488'
    };

    projects = [
        {
            name: '企業內部前端系統與元件庫開發',
            role: 'Senior Frontend Engineer',
            period: '2025/08 - 現在',
            description: '參與企業內部系統前端開發，負責 Vue.js 元件庫建置、Storybook 導入與 Monorepo 架構維護。',
            responsibilities: [
                '使用 Vue.js 與 TypeScript 開發與維護前端功能與互動流程',
                '建置企業內部共用前端 UI 元件庫，提升跨專案開發效率',
                '導入 Storybook 管理與展示元件，確保元件視覺一致性與可用性',
                '於 Monorepo 架構下進行開發與維護，優化前端程式碼共用與版控流程'
            ],
            technologies: {
                frontend: ['Vue.js', 'TypeScript', 'Storybook', 'Monorepo'],
                backend: [],
                database: []
            },
            icon: 'pi pi-building',
            status: '進行中',
            achievements: [
                '成功建置並導入共用元件庫，降低跨專案重複開發成本',
                '建立 Storybook 元件文件，提升設計與開發團隊協作效率',
                '熟悉 Monorepo 架構下的前端專案管理與開發流程'
            ]
        }
    ];

    // Timeline 事件
    timelineEvents = [
        {
            date: '現在',
            title: '持續開發與維護中',
            role: 'Senior Frontend Engineer',
            status: '進行中',
            icon: 'pi pi-star',
            color: '#6366f1'
        },
        ...this.projects.map((project, index) => ({
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
            role: 'Senior Frontend Engineer',
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

    getStatusSeverity(status: string): string {
        switch (status) {
            case '進行中':
                return 'warning';
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
