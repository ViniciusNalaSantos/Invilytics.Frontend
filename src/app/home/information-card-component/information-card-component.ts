import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormatValuePipe } from '../../shared/pipes/format-value-pipe/format-value-pipe';
import { ColorValuePipe } from '../../shared/pipes/color-value-pipe/color-value-pipe';

@Component({
  selector: 'app-information-card-component',
  standalone: true,
  imports: [CommonModule, FormatValuePipe, ColorValuePipe],
  templateUrl: './information-card-component.html',
  styleUrl: './information-card-component.css',
})
export class InformationCardComponent implements OnInit {
  @Input() isColored: boolean = false;
  @Input() title: string = '';
  @Input() value: number = 0.0;
  @Input() formatType: 'currency' | 'percent' = 'currency';

  constructor (
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe
  ) {}
  
  ngOnInit(): void {
    this.title = 'Profit';
    this.value = 25000;
    this.isColored = true;
  }  
}
