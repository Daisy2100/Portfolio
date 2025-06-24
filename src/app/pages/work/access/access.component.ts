import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-access',
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
    templateUrl: './access.component.html',
    styleUrl: './access.component.scss'
})
export class AccessComponent {
    companyInfo = {
        name: 'ACCESS Taiwan (日商)',
        period: '2019/07 - 2021/04',
        role: '前端實習生',
        duration: '1.75 年',
        icon: 'pi pi-desktop',
        color: '#10b981'
    };

    projects = [
        {
            name: '電商平台購物車系統',
            role: '前端實習生',
            period: '2019/07 - 2021/04',
            description: '負責電商平台的購物車功能開發與維護，使用傳統前端技術進行開發，學習基礎的前端開發技能與團隊協作經驗',
            responsibilities: [
                '使用 jQuery / HTML / CSS 串接購物車',
                '購物車功能開發與維護',
                '前端頁面樣式調整',
            ],
            technologies: {
                frontend: ['jQuery', 'HTML', 'CSS', 'JavaScript'],
                backend: [],
                database: []
            },
            icon: 'pi pi-shopping-cart',
            status: '已完成',
            achievements: [
                '成功完成購物車核心功能開發',
                '學習並熟悉前端開發基礎技術',
                '培養團隊協作與溝通能力',
                '建立良好的代碼撰寫習慣'
            ]
        }
    ];

    // Timeline 事件
    timelineEvents = [
        {
            date: '2019/07',
            title: '加入 ACCESS Taiwan',
            description: '開始前端實習生職涯',
            icon: 'pi pi-user-plus',
            color: '#10b981'
        },
        {
            date: '2019/08 - 2021/04',
            title: '電商平台開發',
            description: '負責購物車系統串接',
            icon: 'pi pi-code',
            color: '#3b82f6'
        },
        {
            date: '2020/10 - 2020/12',
            title: 'UI/UX',
            description: '複數購物車 UIUX設計',
            icon: 'pi pi-shopping-cart',
            color: '#f59e0b'
        },
        {
            date: '2021/04',
            title: '實習結業',
            description: '完成實習，準備下一個職涯階段',
            icon: 'pi pi-graduation-cap',
            color: '#8b5cf6'
        }
    ];

    learningOutcomes = [
        {
            category: '技術能力',
            icon: 'pi pi-code',
            color: '#3b82f6',
            items: [
                '熟悉 HTML/CSS/JavaScript 基礎',
                '學會使用 jQuery 進行DOM操作',
                '理解前端與後端API串接',
                '掌握基本的前端開發流程'
            ]
        },
        {
            category: '軟技能',
            icon: 'pi pi-users',
            color: '#10b981',
            items: [
                '團隊協作與溝通技巧',
                '代碼審查與品質控制',
                '問題解決與分析能力',
                '時間管理與專案執行'
            ]
        },
        {
            category: '職場經驗',
            icon: 'pi pi-briefcase',
            color: '#f59e0b',
            items: [
                '了解企業開發流程',
                '學習需求分析與實作',
                '培養責任感與自主學習',
                '建立職場專業態度'
            ]
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

    trackByProjectName(index: number, project: any): string {
        return project.name;
    }

    trackByOutcomeCategory(index: number, outcome: any): string {
        return outcome.category;
    }
}
