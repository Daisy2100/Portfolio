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
            period: '2025/08 - 現在',
            title: 'Senior Engineer',
            company: 'WITS',
            duration: '入職中',
            description: '負責系統開發與維護',
            responsibilities: [
                '負責系統開發與維護'
            ],
            icon: 'pi pi-briefcase',
            color: '#6366f1',
            tags: [],
            detailRoute: '/work/wits'
        },
        {
            period: '2022/04 - 2025/08',
            title: 'Full Stack Engineer',
            company: '精誠資訊股份有限公司',
            duration: '3 年 4 個月',
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
            title: 'Frontend Intern',
            company: 'ACCESS Taiwan(日商)',
            duration: '1 年 8 個月',
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
