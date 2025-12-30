import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investments-information',
  imports: [],
  templateUrl: './investments-information.component.html',
  styleUrl: './investments-information.component.css'
})
export class InvestmentsInformationComponent {
  @Input() portfolioValue = 0;
  @Input() totalInvested = 0;
  @Input() yield = 0;
  @Input() budget = 0;
}
