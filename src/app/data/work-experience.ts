export interface WorkExperience {
    period: string;
    title: string;
    company: string;
    duration: string;
    description: string;
    responsibilities: string[];
    icon: string;
    color: string;
    tags: string[];
    detailRoute?: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        period: '2025/08 - 2026/08',
        title: 'Senior Software Engineer',
        company: '緯致科技股份有限公司',
        duration: '1 年',
        description: '負責企業內部前端基礎建設，從共用 UI 元件庫、Storybook 文件到 Monorepo 架構，讓多個專案共用同一套元件與開發流程。',
        responsibilities: [
            '建置企業內部 Vue.js UI 元件庫，統一跨專案的視覺與互動規範',
            '導入 Storybook 作為元件文件與視覺測試平台，讓設計與開發在同一處對齊',
            '參與前端 Monorepo 架構開發，整合共用套件，降低跨專案重複開發'
        ],
        icon: 'pi pi-briefcase',
        color: '#6366f1',
        tags: ['Vue.js', 'TypeScript', 'Storybook', 'Monorepo', 'Frontend Components'],
        detailRoute: '/work/wits'
    },
    {
        period: '2022/04 - 2025/08',
        title: 'Full Stack Engineer',
        company: '精誠資訊股份有限公司',
        duration: '3 年 4 個月',
        description: '參與 8 個政府與企業專案，橫跨 SSO 單一登入、能源管理與製造業內部系統，負責前後端開發、API 設計與資料庫整合。',
        responsibilities: [
            '負責內政部建築中心 SSO 平台前後端開發，以 OAuth 2.0 與 AD 整合登入，作為後續金流與多標章系統的共用入口',
            '整理團隊前後端專案，抽出共用模組並建立公版框架，縮短新專案的起步時間',
            '開發 Envision360 能源管理系統，串接 IoT 電表（Modbus TCP）並將用電資料呈現在儀表板與客製化報表',
            '負責 Angular、Vue 前端與 .NET、Express.js 後端的開發、維運與效能改善'
        ],
        icon: 'pi pi-briefcase',
        color: '#0d9488',
        tags: ['C#', 'Entity Framework', 'Angular', 'Vue.js', 'MySQL', 'MSSQL', 'Docker'],
        detailRoute: '/work/systex'
    },
    {
        period: '2020/08 - 2022/04',
        title: 'Frontend Intern',
        company: 'ACCESS Taiwan（日商）',
        duration: '1 年 8 個月',
        description: '在日商團隊中參與電商平台前端開發，負責購物車流程與頁面互動。',
        responsibilities: [
            '使用 jQuery、HTML、CSS 開發與維護電商購物車流程',
            '調整頁面樣式與互動細節，累積在日商團隊中的協作經驗'
        ],
        icon: 'pi pi-desktop',
        color: '#10b981',
        tags: ['jQuery', 'HTML', 'CSS', 'JavaScript'],
        detailRoute: '/work/access'
    }
];
