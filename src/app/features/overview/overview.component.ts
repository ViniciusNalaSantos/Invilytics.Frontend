import { Component } from '@angular/core';
import { InformationCardComponent } from '../../shared/components/information-card/information-card.component';
import { InformationCardModel } from '../../shared/models/information-card.model';
import { DisplayCardComponent } from "../../shared/display-card/display-card.component";

@Component({
  selector: 'app-overview',
  imports: [InformationCardComponent, DisplayCardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  portfolioValueAndTotalInvestedInformation : InformationCardModel[] = [
    { title: 'Portfolio Value', value: 10020 },
    { title: 'Total Invested', value: 10000 }
  ];

  profitInformation: InformationCardModel[] = [
    { title: 'Profit', value: 200 }
  ];

  dividendIncomeMonthlyInformation: InformationCardModel[] = [
    { title: 'Dividend Income (m/)', value: 67 }
  ];
  
  budgetInformation: InformationCardModel[] = [
    { title: 'Budget', value: 1000 }
  ];
}
