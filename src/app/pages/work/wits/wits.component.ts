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
        duration: '入職中',
        icon: 'pi pi-briefcase',
        color: '#6366f1'
    };

    projects: {
        name: string;
        role: string;
        period: string;
        description: string;
        responsibilities: string[];
        technologies: {
            frontend: string[];
            backend: string[];
            database: string[];
        };
        icon: string;
        status: string;
        achievements?: string[];
    }[] = [];

    timelineEvents = [
        {
            date: '2025/08/18',
            title: '加入 WITS',
            description: '以 Senior Engineer 職稱開始新的職涯旅程',
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

    getStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
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
