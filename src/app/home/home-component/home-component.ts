import { Component } from '@angular/core';
import { InformationCardComponent } from "../information-card-component/information-card-component";
import { ContentCardComponent } from "../content-card/content-card.component";
import { DoughnutGraph } from "../../shared/graphs/doughnut-graph/doughnut-graph";
import { PortfolioDiversificationComponent } from "../graphs/portfolio-diversification/portfolio-diversification.component";
import { LineGraphComponent } from "../../shared/graphs/line-graph/line-graph";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [InformationCardComponent, ContentCardComponent, DoughnutGraph, PortfolioDiversificationComponent, LineGraphComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
