import { Component } from '@angular/core';
import { InformationCardComponent } from "../information-card-component/information-card-component";
import { ContentCardComponent } from "../content-card/content-card.component";
import { DoughnutGraph } from "../../shared/graphs/doughnut-graph/doughnut-graph";
import { PortfolioDiversificationComponent } from "../graphs/portfolio-diversification/portfolio-diversification.component";
import { LineGraphComponent } from "../../shared/graphs/line-graph/line-graph";
import { PatrimonyGrowthComponent } from "../graphs/patrimony-growth/patrimony-growth";
import { StackedBarGraph } from "../../shared/graphs/stacked-bar-graph/stacked-bar-graph";
import { GraphLabelsDto } from '../../shared/graphs/dtos/graph-data-dto';
import { SideNavComponent } from "../../layout/side-nav/side-nav";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [InformationCardComponent, ContentCardComponent, DoughnutGraph, PortfolioDiversificationComponent, LineGraphComponent, PatrimonyGrowthComponent, StackedBarGraph, SideNavComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  labels: GraphLabelsDto[] = [
    { key: 'jan', label: 'Jan' },
    { key: 'feb', label: 'Feb' },
    { key: 'may', label: 'May' },
    { key: 'apr', label: 'Apr' },
    { key: 'mar', label: 'Mar' }
  ];
  data = [
    {
      label: 'Sales',
      data: [{jan: 120}, {feb: 150}, {may:180}, {apr:170}, {mar:200}],
      backgroundColor: '#4F46E5',
      stack: 'stack-1'
    },
    {
      label: 'Expenses',
      data: [{jan: 100}, {feb: 100}, {may:100}, {apr:100}, {mar:100}],
      backgroundColor: '#22C55E',
      stack: 'stack-1'
    },
    {
      label: 'Profit',
      data: [{jan: 140}, {feb: 170}, {may:190}, {apr:195}, {mar:220}],
      backgroundColor: '#F97316',
      stack: 'stack-1'
    }
  ]
}
