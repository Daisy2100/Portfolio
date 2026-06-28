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
        period: '2025/08 - 現在',
        title: 'Senior Software Engineer',
        company: '緯致科技股份有限公司 — 華邦電駐點專案',
        duration: '在職中',
        description: '參與企業內部系統前端開發，專注於 Vue.js、TypeScript、UI 元件庫建置、Storybook 導入與 Monorepo 架構維護。',
        responsibilities: [
            '使用 Vue.js 與 TypeScript 開發與維護前端功能',
            '建置與維護前端 UI 元件庫，並導入 Storybook 進行視覺化測試與文件管理',
            '參與 Monorepo 前端架構的開發與維護，提升跨專案元件共用性與開發效率'
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
        description: '參與企業系統開發與維護，負責前端功能開發、後端 API 實作、資料庫整合與系統維運。',
        responsibilities: [
            '使用 Angular、Vue.js、C#、Entity Framework、Node.js 與資料庫技術開發企業內部系統',
            '依據需求設計與實作 API、資料流程、前端頁面與後台管理功能',
            '協助既有系統維護、debug、效能改善與功能擴充'
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
        description: '參與前端頁面開發與購物車功能串接。',
        responsibilities: [
            '使用 jQuery、HTML、CSS、JavaScript 開發與維護前端頁面',
            '協助購物車流程與頁面互動功能串接'
        ],
        icon: 'pi pi-desktop',
        color: '#10b981',
        tags: ['jQuery', 'HTML', 'CSS', 'JavaScript'],
        detailRoute: '/work/access'
    }
];
