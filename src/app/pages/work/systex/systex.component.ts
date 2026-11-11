import { Component } from '@angular/core';

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
        period: '2022/04 - 2025/08',
        role: 'Full Stack Engineer',
        duration: '3 年 4 個月',
        icon: 'pi pi-briefcase',
        color: '#0d9488'
    };

    projects = [
        {
            name: '內政部建築中心SSO單一登入平台',
            role: '前端+後端',
            period: '2025/03 ~ 2025/06',
            description: '將建築中心原本以 Excel 管理的標章案件電子化，並建立 OAuth 2.0 單一登入平台，作為後續金流與其他標章系統的共用登入入口。',
            responsibilities: [
                '開發平台前端介面，並與後端協作完成 API',
                '實作 OAuth 2.0 單一登入流程，讓其他標章系統可直接串接',
                '整合 AD 登入，讓內部人員沿用既有帳號',
                '建立每日排程，自動匯入既有 Excel 案件資料'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', '.NET 8'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-shield',
            status: '已完成'
        },
        {
            name: '前後端開發框架整合',
            role: '前端+後端',
            period: '2024/12 ~ 2025/06',
            description: '盤點團隊既有的前後端專案，與成員討論後整理成一套公版框架，並先處理潛在的軟體風險，讓新專案可以直接沿用、快速起步。',
            responsibilities: [
                '整合各專案的前後端架構，收斂成共用的公版',
                '評估既有程式碼的軟體風險並提出處理方式',
                '開發可重複使用的公版模組',
                '整理開發流程，降低新專案的起步成本'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', '.NET 8'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-cog',
            status: '進行中'
        },
        {
            name: '群益證券永續平台開發案',
            role: '前端',
            period: '2024/10 ~ 2025/03',
            description: '讓客戶內部設定與管理永續發展活動，並以行事曆呈現活動排程。',
            responsibilities: [
                '負責平台前端開發',
                '與後端協作完成 AD 自動登入',
                '開發永續活動的設定與管理功能',
                '開發行事曆檢視，集中呈現活動排程'
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
            description: '呈現綠電交易中客戶與台電、客戶與客戶之間的帳單，讓多方帳務一目了然。',
            responsibilities: [
                '負責系統前端開發',
                '設計帳單管理與查詢介面',
                '支援部分後端 API 開發'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', '.NET 8'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-file',
            status: '已完成'
        },
        {
            name: '內政部建築中心多標章評估系統-一案與二案',
            role: '前端',
            period: '2024/09 ~ 2024/11',
            description: '依申請的標章類型，引導使用者填寫資料並計算建築的能效等級。',
            responsibilities: [
                '負責系統前端開發',
                '設計能效計算的輸入與結果介面',
                '開發標章申請流程'
            ],
            technologies: {
                frontend: ['Angular'],
                backend: ['C#', '.NET 6'],
                database: ['MSSQL', 'Redis']
            },
            icon: 'pi pi-chart-line',
            status: '已完成'
        },
        {
            name: 'Envision360 能源管理系統',
            role: '前端+後端',
            period: '2023/05 ~ 2025/01',
            description: '透過 IoT 電表蒐集用電資料，並以儀表板與客製化報表呈現，協助客戶掌握能源使用狀況。',
            responsibilities: [
                '負責前後端系統開發',
                '以 Modbus TCP 串接 IoT 電表，收集用電資料',
                '設計儀表板，視覺化呈現用電資訊',
                '依客戶需求開發客製化報表'
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
            description: '工廠內部的報工管理系統，讓現場回報與工時管理改為線上進行。',
            responsibilities: [
                '負責前後端系統開發與維運',
                '依客戶需求進行客製化調整與系統維護'
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
            description: '工廠內部的訂單管理系統，串起訂單建立到生產追蹤的流程。',
            responsibilities: [
                '負責前後端系統開發與維運',
                '依需求進行客製化調整',
                '優化訂單流程，讓訂單狀態更容易追蹤'
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
    timelineEvents = [
        {
            date: '2025/08',
            title: '畢業',
            role: 'Full Stack Engineer',
            status: '已完成',
            icon: 'pi pi-flag',
            color: '#0d9488'
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
            date: '2022/04',
            title: '加入精誠資訊',
            role: 'Full Stack Engineer',
            status: '已完成',
            icon: 'pi pi-user-plus',
            color: '#0d9488'
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

    trackByProjectName(index: number, project: any): string {
        return project.name;
    }
}
