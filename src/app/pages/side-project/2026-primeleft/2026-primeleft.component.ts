import { Component } from '@angular/core';
import {
  SideProjectDetail,
  SideProjectDetailComponent
} from '../../../components/side-project-detail/side-project-detail.component';

@Component({
  selector: 'app-2026-primeleft',
  standalone: true,
  imports: [SideProjectDetailComponent],
  templateUrl: './2026-primeleft.component.html',
  styleUrls: ['./2026-primeleft.component.scss']
})
export class Primeleft2026Component {
  project: SideProjectDetail = {
    eyebrow: '2026 · Independent Product',
    title: 'PrimeLeft / Sepal Auth Hub',
    subtitle: '一人完成端到端的賣家展示平台與授權層',
    description: 'PrimeLeft 是面向小型賣家的品牌展示網站；Sepal Auth Hub 則提供獨立的授權與服務權限驗證，讓產品展示、平台能力與存取控制可以分開演進。',
    purpose: '小型賣家常以試算表管理商品，再透過電商平台成交，但品牌展示與導購體驗容易受到平台限制。這個專案嘗試建立自有展示入口，並以模組化前端與獨立授權層控制功能開放範圍。',
    technologies: [
      'TypeScript',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Hono',
      'Drizzle ORM',
      'Modular Frontend',
      'CI/CD'
    ],
    highlights: [
      {
        title: '模組化平台設計',
        description: '將商品同步、展示與分享等能力封裝為可重用模組，降低後續擴充與維護成本。',
        icon: 'pi pi-box'
      },
      {
        title: '獨立授權層',
        description: '透過 Sepal Auth Hub 驗證 access token、服務名稱、帳號綁定與授權期限。',
        icon: 'pi pi-shield'
      },
      {
        title: '低成本自動部署',
        description: '採用 Cloudflare serverless 架構與 CI/CD，讓前後端更新可穩定部署並保留版本。',
        icon: 'pi pi-cloud-upload'
      }
    ],
    links: [
      {
        label: 'Visit PrimeLeft',
        url: 'https://primeleft.com/',
        icon: 'pi pi-external-link',
        primary: true
      }
    ],
    repositoryNote: '所有 repository 皆未公開，此處僅展示系統邊界與各自責任。',
    repositories: [
      {
        name: 'Sepal Auth Hub Core',
        type: 'Shared Core Library',
        description: '提供 Sepal 子專案共用的基礎函式與核心能力，讓驗證服務與後續專案可以重用。',
        visibility: 'Private',
        icon: 'pi pi-box'
      },
      {
        name: 'Sepal Auth Hub',
        type: 'Verification Service',
        description: '獨立的驗證服務，負責 token 驗證、服務權限、帳號綁定與授權有效期限。',
        visibility: 'Private',
        icon: 'pi pi-key'
      },
      {
        name: 'PrimeLeft Frontend',
        type: 'Web Application',
        description: '負責品牌展示、商品瀏覽與前端互動，並串接後端及 Sepal Auth Hub。',
        visibility: 'Private',
        icon: 'pi pi-desktop'
      },
      {
        name: 'PrimeLeft Backend',
        type: 'API Service',
        description: '負責商品與平台資料服務，提供前端所需 API，並整合授權驗證流程。',
        visibility: 'Private',
        icon: 'pi pi-server'
      }
    ]
  };
}
