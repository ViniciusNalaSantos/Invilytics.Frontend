import { Component } from '@angular/core';
import { InvestmentsOverviewComponent } from '../investments-overview-component/investments-overview.component';
import { InvestmentsTabComponent } from "../investments-tab-component/investments-tab.component";

@Component({
  selector: 'app-investments-component',
  imports: [InvestmentsOverviewComponent, InvestmentsTabComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent {

}
