import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ExperienceComponent } from '../../components/home/experience/experience.component';

@Component({
    selector: 'app-work',
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
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})

export class WorkComponent {
    // 工作經歷
    workExperience = [
        {
            period: '2022/04 - 現在',
            title: '全端工程師',
            company: '精誠資訊股份有限公司',
            duration: '3 years+',
            description: '撰寫模組化及高可用的程式碼',
            responsibilities: [
                '撰寫模組化及高可用的程式碼',
                '與PM、SA團隊合作，評估需求與任務花費時程',
                '依需求開發API、維運'
            ],
            icon: 'pi pi-briefcase',
            color: '#0d9488',
            tags: ['C#', 'Entity Framework', 'Angular', 'Vue.js', 'Mysql', 'Mssql', 'Docker'],
            detailRoute: '/work/systex'
        },
        {
            period: '2020/08 - 2022/04',
            title: '前端實習生',
            company: 'ACCESS Taiwan(日商)',
            duration: '1.75 years',
            description: '使用 JQuery / HTML / CSS 串接購物車',
            responsibilities: [
                '使用 JQuery / HTML / CSS 串接購物車'
            ],
            icon: 'pi pi-desktop',
            color: '#10b981',
            tags: ['jQuery', 'HTML', 'CSS', 'JavaScript'],
            detailRoute: '/work/access'
        }
    ];

    trackByCompanyId(index: number, company: any): string {
        return company.id;
    }
}
