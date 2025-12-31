import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DistributionComponent } from "../distribution/distribution.component";

type Section = 'distribution' | 'patrimonyGrowth' | 'dividends';

const SectionTitles: Record<Section, string> = {
  distribution: 'Distribution',
  patrimonyGrowth: 'Patrimony Growth',
  dividends: 'Dividends',
};

@Component({
  selector: 'app-investments-tab-component',
  standalone: true,
  imports: [CommonModule, DistributionComponent],
  templateUrl: './investments-tab.component.html',
  styleUrl: './investments-tab.component.css'
})
export class InvestmentsTabComponent {
  @Input() sections: Section[] = [];
  selectedSection: Section = 'distribution';

  getSectionTitle(section: Section) {
    return SectionTitles[section];
  }
}
