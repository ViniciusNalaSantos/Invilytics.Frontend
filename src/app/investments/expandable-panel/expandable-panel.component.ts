import { Component, Input } from '@angular/core';
import { InvestmentsInformationComponent } from "../investments-information-component/investments-information.component";

@Component({
  selector: 'app-expandable-panel',
  imports: [InvestmentsInformationComponent],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.css'
})
export class ExpandablePanelComponent {
  @Input() title = '';

}
