import { Component, Input } from '@angular/core';
import { PatrimonyGrowthDetailedComponent } from "../patrimony-growth-detailed/patrimony-growth-detailed.component";
import { PatrimonyGrowthGeneralComponent } from "../patrimony-growth-general/patrimony-growth-general.component";

@Component({
  selector: 'app-patrimony-growth',
  imports: [PatrimonyGrowthDetailedComponent, PatrimonyGrowthGeneralComponent],
  templateUrl: './patrimony-growth.component.html',
  styleUrl: './patrimony-growth.component.css'
})
export class PatrimonyGrowthComponent {
  @Input() isDetailed = false;
}
