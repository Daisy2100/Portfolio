import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsCompanyComponent } from './pages/news/news-company/news-company.component';
import { NewsProductComponent } from './pages/news/news-product/news-product.component';
import { NewsIndustryComponent } from './pages/news/news-industry/news-industry.component';
import { WorkComponent } from './pages/work/work.component';
import { SystexComponent } from './pages/work/systex/systex.component';
import { AccessComponent } from './pages/work/access/access.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'news',
        component: NewsComponent,
        children: [
            { path: 'company', component: NewsCompanyComponent },
            { path: 'product', component: NewsProductComponent },
            { path: 'industry', component: NewsIndustryComponent }
        ]
    },
    {
        path: 'work',
        children: [
            { path: '', component: WorkComponent },
            { path: 'systex', component: SystexComponent },
            { path: 'access', component: AccessComponent }
        ]
    },
    {
        path: 'side-project',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/side-project/side-project.component').then(m => m.SideProjectComponent),
                pathMatch: 'full'
            },
            {
                path: '2025-crypto-exchange',
                loadComponent: () => import('./pages/side-project/2025-crypto-exchange/2025-crypto-exchange.component').then(m => m.CryptoExchange2025Component)
            },
            {
                path: '2024-license-plate',
                loadComponent: () => import('./pages/side-project/2024-license-plate/2024-license-plate.component').then(m => m.LicensePlate2024Component)
            },
            {
                path: '2022-date-picker',
                loadComponent: () => import('./pages/side-project/2022-date-picker/2022-date-picker.component').then(m => m.DatePicker2022Component)
            }
        ]
    },
    { path: 'contact', component: ContactComponent },
];
