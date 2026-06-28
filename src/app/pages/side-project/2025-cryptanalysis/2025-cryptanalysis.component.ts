import { Component } from '@angular/core';
import {
  SideProjectDetail,
  SideProjectDetailComponent
} from '../../../components/side-project-detail/side-project-detail.component';

@Component({
  selector: 'app-2025-cryptanalysis',
  standalone: true,
  imports: [SideProjectDetailComponent],
  templateUrl: './2025-cryptanalysis.component.html',
  styleUrls: ['./2025-cryptanalysis.component.scss']
})
export class Cryptanalysis2025Component {
  project: SideProjectDetail = {
    eyebrow: '2025 · Learning Project',
    title: '密碼與信箱洩漏驗證器',
    subtitle: '用一個小工具理解 React 的開發方式',
    description: '透過簡單的查詢流程練習 React，並串接公開 API，檢查密碼或電子信箱是否曾出現在已知的資料外洩事件中。',
    purpose: '這個專案的重點不是打造完整產品，而是用一個範圍清楚的小工具，實際理解 React 的元件拆分、狀態管理、事件處理與 API 串接方式。',
    technologies: ['React', 'Next.js', 'JavaScript', 'Public API'],
    highlights: [
      {
        title: 'React 入門實作',
        description: '從畫面拆分、狀態更新到事件處理，建立對 React 開發流程的基本認識。',
        icon: 'pi pi-code'
      },
      {
        title: 'API 串接',
        description: '將使用者輸入轉為查詢請求，並處理載入、成功與錯誤等不同狀態。',
        icon: 'pi pi-link'
      },
      {
        title: '輕量驗證流程',
        description: '以單一功能完成可操作的練習成果，讓技術探索保持簡單且聚焦。',
        icon: 'pi pi-shield'
      }
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Daisy2100/cryptanalysis-lite',
        icon: 'pi pi-github',
        primary: true
      },
      {
        label: 'Live Demo',
        url: 'https://daisy2100.github.io/cryptanalysis-lite/',
        icon: 'pi pi-external-link'
      }
    ]
  };
}
