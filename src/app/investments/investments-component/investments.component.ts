import { Component } from '@angular/core';
import { InvestmentsOverviewComponent } from '../investments-overview-component/investments-overview.component';

@Component({
  selector: 'app-investments',
  imports: [InvestmentsOverviewComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent {

}
