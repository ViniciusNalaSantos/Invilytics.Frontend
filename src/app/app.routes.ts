import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'overview',
        loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
    },
    {
        path: 'investments',
        loadComponent: () => import('./features/investments/investments.component').then(m => m.InvestmentsComponent)
    }
];
