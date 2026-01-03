import { CommonModule } from '@angular/common';
import { Sector } from '../data-structures/models/sector';
import { Component, Input } from '@angular/core';
import { DistributionGeneralComponent } from "../distribution-general/distribution-general.component";
import { DistributionDetailedComponent } from "../distribution-detailed/distribution-detailed.component";


@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [CommonModule, DistributionGeneralComponent, DistributionDetailedComponent],
  templateUrl: './distribution.component.html',
  styleUrl: './distribution.component.css'
})
export class DistributionComponent {
  @Input() isDetailed = false;
  investmentsBySectorDetailed?: Sector[];
}
