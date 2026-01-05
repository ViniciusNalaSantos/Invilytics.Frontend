import { Component, Input } from '@angular/core';
import { InvestmentsInformationComponent } from "../investments-information-component/investments-information.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [InvestmentsInformationComponent, MatIconModule],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.css'
})
export class ExpandablePanelComponent {
  @Input() title = '';
  expanded = false;

  onExpand() {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
