import { Component, Input } from '@angular/core';
import { FormatValuePipe } from '../../shared/pipes/format-value-pipe/format-value-pipe';
import { ColorValuePipe } from '../../shared/pipes/color-value-pipe/color-value-pipe';

@Component({
  selector: 'app-investments-information-component',
  imports: [FormatValuePipe, ColorValuePipe],
  templateUrl: './investments-information.component.html',
  styleUrl: './investments-information.component.css'
})
export class InvestmentsInformationComponent {
  @Input() portfolioValue = 0;
  @Input() totalInvested = 0;
  @Input() yield = 0;
  @Input() budget = 1000;
}
