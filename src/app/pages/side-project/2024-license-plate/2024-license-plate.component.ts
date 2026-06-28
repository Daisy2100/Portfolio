import { Component } from '@angular/core';
import {
  SideProjectDetail,
  SideProjectDetailComponent
} from '../../../components/side-project-detail/side-project-detail.component';

@Component({
  selector: 'app-2024-license-plate',
  standalone: true,
  imports: [SideProjectDetailComponent],
  templateUrl: './2024-license-plate.component.html',
  styleUrls: ['./2024-license-plate.component.scss']
})
export class LicensePlate2024Component {
  project: SideProjectDetail = {
    eyebrow: '2024 · Personal Tool',
    title: '車牌吉凶分析',
    subtitle: '把選車牌時的困擾，做成一個可以快速查詢的工具',
    description: '買車挑選車牌時，需要反覆查找與比較不同號碼的資訊，因此使用 Vue 3 製作一個簡單的車牌分析頁面。',
    purpose: '選車牌時需要在不同資料之間來回確認，既花時間也不容易比較。這個小工具把輸入、分析與結果整理在同一個流程中，讓選擇更直覺。',
    technologies: ['Vue 3', 'JavaScript', 'SCSS', 'GitHub Pages'],
    highlights: [
      {
        title: '從生活需求出發',
        description: '將實際買車時遇到的選牌困擾，轉化成範圍明確、可以快速完成的工具。',
        icon: 'pi pi-car'
      },
      {
        title: '即時分析互動',
        description: '依照輸入的車牌號碼呈現對應結果，減少手動查找與反覆比對。',
        icon: 'pi pi-search'
      },
      {
        title: 'Vue 3 練習',
        description: '使用 Vue 3 管理表單輸入、資料轉換與畫面狀態，完成可直接使用的單頁工具。',
        icon: 'pi pi-code'
      }
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Daisy2100/licensePlate',
        icon: 'pi pi-github',
        primary: true
      },
      {
        label: 'Live Demo',
        url: 'https://daisy2100.github.io/licensePlate',
        icon: 'pi pi-external-link'
      }
    ]
  };
}
