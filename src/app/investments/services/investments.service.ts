import { Injectable } from '@angular/core';
import { Investment } from '../data-structures/models/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor() { }

  getInvestmentsByUser(): Investment[] {
    return [
      {
        name: 'FIIs',
        portfolioValue: 8000,
        totalInvested: 7000,
        yield: 0.05,
        sectors: [
          {
            name: 'Imóveis Industriais e Logísticos',
            position: 3000,
            invested: 2050
          },
          {
            name: 'Shoppings',
            position: 4070.50,
            invested: 3100.52
          }
        ]
      }
    ]
  }
}
