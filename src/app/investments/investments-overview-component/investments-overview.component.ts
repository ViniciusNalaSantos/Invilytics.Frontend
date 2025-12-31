import { Component, Input } from '@angular/core';
import { InvestmentsInformationComponent } from "../investments-information-component/investments-information.component";
import { InvestmentsTabComponent } from "../investments-tab-component/investments-tab.component";

@Component({
  selector: 'app-investments-overview-component',
  standalone: true,
  imports: [InvestmentsInformationComponent, InvestmentsTabComponent],
  templateUrl: './investments-overview.component.html',
  styleUrl: './investments-overview.component.css'
})
export class InvestmentsOverviewComponent {
  @Input() sectorName = 'FIIs';

  get title(): string {
    return this.sectorName && this.sectorName.trim() !== ''
      ? `Analysis by sector detailed (${this.sectorName})`
      : 'Analysis by sector';
  }
}
