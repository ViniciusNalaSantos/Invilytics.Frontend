import { Component, Input } from '@angular/core';
import { InvestmentsInformationComponent } from "../investments-information-component/investments-information.component";

@Component({
  selector: 'app-investments-overview-component',
  standalone: true,
  imports: [InvestmentsInformationComponent],
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
