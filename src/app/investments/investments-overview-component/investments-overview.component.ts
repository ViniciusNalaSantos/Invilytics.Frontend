import { Component } from '@angular/core';
import { InvestmentsInformationComponent } from "../investments-information-component/investments-information.component";

@Component({
  selector: 'app-investments-overview-component',
  imports: [InvestmentsInformationComponent],
  templateUrl: './investments-overview.component.html',
  styleUrl: './investments-overview.component.css'
})
export class InvestmentsOverviewComponent {

}
