import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-systex',
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
    templateUrl: './systex.component.html',
    styleUrl: './systex.component.scss'
})
export class SystexComponent {
    companyInfo = {
        name: '精誠資訊股份有限公司',
        period: '2022/04 - 現在',
        role: '全端工程師',
        duration: '3+ 年',
        icon: 'pi pi-briefcase',
        color: '#0d9488'
    };

    projects = [
        {
            name: '內政部建築中心SSO單一登入平台',
            role: '前端+後端',
            period: '2025/03 ~ 2025/06',
            description: '將建築中心目前標章案件使用的excel電子化，每日提供排程進行excel資料匯入。AD整合登入。為後續金流與其他標章，提供oauth2.0的單一登入功能',
            responsibilities: [
                '前端系統開發',
                '後端系統開發與協作',
                'SSO OAuth2.0 整合',
                'AD 登入功能開發'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', 'ASP.NET Core'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-shield',
            status: '已完成'
        },
        {
            name: '內部軟體開發整合',
            role: '前端+後端',
            period: '2024/12 ~ 2025/06',
            description: '整理目前專案的前後端，將內容討論並整理成公版，處理潛在的軟體風險，以利後續快速開發',
            responsibilities: [
                '前後端架構整合',
                '軟體風險評估與處理',
                '公版模組開發',
                '開發流程優化'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', 'ASP.NET Core'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-cog',
            status: '進行中'
        },
        {
            name: '群益證券永續平台開發案',
            role: '前端',
            period: '2024/10 ~ 2025/03',
            description: '提供客戶內部永續發展活動設定、行事曆顯示',
            responsibilities: [
                '前端系統開發',
                '與後端協作實現AD自動登入',
                '永續活動管理功能',
                '行事曆系統開發'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: [],
                database: []
            },
            icon: 'pi pi-calendar',
            status: '已完成'
        },
        {
            name: '台汽電-綠電帳單管理系統',
            role: '前端+部分後端支援',
            period: '2024/10 ~ 2025/01',
            description: '提供客戶對台電、客戶對客戶的帳單顯示',
            responsibilities: [
                '前端系統開發',
                '帳單管理介面設計',
                '後端API支援'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', 'ASP.NET Core'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-file',
            status: '已完成'
        },
        {
            name: '內政部建築中心能效平台-一案與二案',
            role: '前端',
            period: '2024/09 ~ 2024/11',
            description: '根據用戶申請標章類型，協助客戶計算評估能效等級',
            responsibilities: [
                '前端系統開發',
                '能效計算介面設計',
                '標章申請流程開發'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', 'ASP.NET Core'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-chart-line',
            status: '已完成'
        },
        {
            name: 'Envision360 能源管理系統',
            role: '前端+後端',
            period: '2023/05 ~ 2025/01',
            description: '能源管理系統，蒐集用電資訊並顯示至儀表板',
            responsibilities: [
                '前後端系統開發',
                'IoT設備串接',
                '電表資料收集',
                '客製化報表開發',
                '儀表板設計'
            ],
            technologies: {
                frontend: ['Vue3'],
                backend: ['Express.js', 'ModbusTCP'],
                database: ['MySQL']
            },
            icon: 'pi pi-bolt',
            status: '已完成'
        },
        {
            name: '富鐿實業報工系統',
            role: '前端+後端',
            period: '2022/10 ~ 2023/04',
            description: '企業內部報工管理系統，提升工作效率與管理品質',
            responsibilities: [
                '前後端系統開發與維運',
                '客製化調整',
                '系統維護'
            ],
            technologies: {
                frontend: ['Vue2'],
                backend: ['Express.js'],
                database: ['MySQL']
            },
            icon: 'pi pi-clock',
            status: '已完成'
        },
        {
            name: '富鐿實業廠內訂單系統',
            role: '前端+後端',
            period: '2022/04 ~ 2022/12',
            description: '廠內訂單管理系統，優化生產流程與訂單追蹤',
            responsibilities: [
                '前後端系統開發與維運',
                '客製化調整',
                '訂單流程優化'
            ],
            technologies: {
                frontend: ['Vue2'],
                backend: ['Express.js'],
                database: ['MySQL']
            },
            icon: 'pi pi-shopping-cart',
            status: '已完成'
        }
    ];

    // Timeline 事件
    timelineEvents = this.projects.map((project, index) => ({
        date: project.period,
        title: project.name,
        role: project.role,
        status: project.status,
        icon: project.icon,
        color: this.getStatusColor(project.status)
    }));

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
}
