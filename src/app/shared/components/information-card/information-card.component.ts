import { Component, input, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { InformationCardModel } from '../../models/information-card.model';

@Component({
  selector: 'app-information-card',
  imports: [CommonModule, CurrencyPipe, PercentPipe],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.scss'
})
export class InformationCardComponent {
  @Input() informations: InformationCardModel[] = [];
  
  validFormats = new Set(['currency', 'percent']);
  isKnownFormat = (format: string) => this.validFormats.has(format);
  valueFormatting = input<string>();
}
