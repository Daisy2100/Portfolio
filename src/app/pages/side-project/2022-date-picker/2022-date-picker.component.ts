import { Component } from '@angular/core';
import {
  SideProjectDetail,
  SideProjectDetailComponent
} from '../../../components/side-project-detail/side-project-detail.component';

@Component({
  selector: 'app-2022-date-picker',
  standalone: true,
  imports: [SideProjectDetailComponent],
  templateUrl: './2022-date-picker.component.html',
  styleUrls: ['./2022-date-picker.component.scss']
})
export class DatePicker2022Component {
  project: SideProjectDetail = {
    eyebrow: '2022 · Utility Tool',
    title: '週期選取器',
    subtitle: '替私人社團省下重複計算日期週期的時間',
    description: '私人社團經常需要依照起始日期計算固定週期，手動換算容易耗時或出錯，因此製作這個日期小工具。',
    purpose: '同一種週期計算在社團活動中會反覆出現。與其每次重新算日期，不如把規則做成工具，輸入條件後直接取得需要的日期範圍。',
    technologies: ['Vue 3', 'JavaScript', 'SCSS', 'Date Handling'],
    highlights: [
      {
        title: '週期自動換算',
        description: '根據選擇的日期與週期條件，自動產生對應結果，減少人工計算。',
        icon: 'pi pi-calendar'
      },
      {
        title: '簡單操作流程',
        description: '聚焦常用欄位與結果呈現，讓社團成員不需要理解計算細節也能使用。',
        icon: 'pi pi-check-circle'
      },
      {
        title: '實際情境驗證',
        description: '由私人社團的日常需求出發，以真實使用情境調整輸入方式與結果格式。',
        icon: 'pi pi-users'
      }
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Daisy2100/date-picker',
        icon: 'pi pi-github',
        primary: true
      },
      {
        label: 'Live Demo',
        url: 'https://daisy2100.github.io/date-picker',
        icon: 'pi pi-external-link'
      }
    ]
  };
}
