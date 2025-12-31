import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Section = 'distribution' | 'patrimonyGrowth' | 'dividends';

const SectionTitles: Record<Section, string> = {
  distribution: 'Distribution',
  patrimonyGrowth: 'Patrimony Growth',
  dividends: 'Dividends',
};

@Component({
  selector: 'app-investments-tab-component',
  standalone: true,
  imports: [CommonModule],
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
