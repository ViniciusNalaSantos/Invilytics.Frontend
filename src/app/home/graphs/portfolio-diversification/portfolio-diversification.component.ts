import { Component } from '@angular/core';
import { DoughnutGraph } from "../../../shared/graphs/doughnut-graph/doughnut-graph";
import { GraphLabelsDto } from '../../../shared/graphs/dtos/graph-data-dto';

@Component({
  selector: 'app-portfolio-diversification',
  imports: [DoughnutGraph],
  templateUrl: './portfolio-diversification.component.html',
  styleUrl: './portfolio-diversification.component.css',
})
export class PortfolioDiversificationComponent {
  labels: GraphLabelsDto[] = [
    { key: 'fii', label: 'FIIs' },
    { key: 'stock', label: 'Stocks' },
    { key: 'publicTreasure', label: 'Public Treasure' }
  ]

  data: any[] = [
    { fii: 60 },
    { stock: 20 },
    { publicTreasure: 20 },
  ]
}
