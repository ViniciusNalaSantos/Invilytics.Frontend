import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { InvestmentsComponent } from './investments/investments-component/investments.component';
import { DataManagement } from './data-management/data-management/data-management';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'investments',
        component: InvestmentsComponent,
        children: [
            {
                path: 'investments-by-sector',
                loadComponent: () => import('./investments/investments-by-sector/investments-by-sector').then(m => m.InvestmentsBySector)
            },
            {
                path: 'investments-detailed',
                loadComponent: () => import('./investments/investments-detailed/investments-detailed').then(m => m.InvestmentsDetailed)
            }
        ]
    },
    {
        path: 'data-management',
        component: DataManagement,
        children: [
            {
                path: 'investment-types',
                loadComponent: () => import('./data-management/investment-types/investment-types').then(m => m.InvestmentTypes)
            },
            {
                path: 'investment-sectors',
                loadComponent: () => import('./data-management/investment-sectors/investment-sectors').then(m => m.InvestmentSectors)
            },
            {
                path: 'stocks',
                loadComponent: () => import('./data-management/stocks/stocks').then(m => m.Stocks)
            },
            {
                path: 'purchases',
                loadComponent: () => import('./data-management/purchases/purchases').then(m => m.Purchases)
            },
            {
                path: 'sales',
                loadComponent: () => import('./data-management/sales/sales').then(m => m.Sales)
            },
            {
                path: 'stock-quotes-history',
                loadComponent: () => import('./data-management/stock-quotes-history/stock-quotes-history').then(m => m.StockQuotesHistory)
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
