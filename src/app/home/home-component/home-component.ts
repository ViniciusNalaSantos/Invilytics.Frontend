import { Component } from '@angular/core';
import { InformationCardComponent } from "../information-card-component/information-card-component";
import { ContentCardComponent } from "../content-card/content-card.component";
import { DoughnutGraph } from "../../shared/doughnut-graph/doughnut-graph";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [InformationCardComponent, ContentCardComponent, DoughnutGraph],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
