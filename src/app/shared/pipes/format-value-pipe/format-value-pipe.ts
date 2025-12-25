import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

type FormatType = 'currency' | 'percent';

@Pipe({
  name: 'formatValue',
  standalone: true
})
export class FormatValuePipe implements PipeTransform {

  constructor(
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe
  ) {}
  
  transform(
    value: number,
    format: FormatType,
    currencyCode: string = 'BRL'
  ): string | null {

    if (format === 'currency') {
      return this.currencyPipe.transform(
        value,
        currencyCode,
        'symbol',
        '1.2-2'
      );
    }

    if (format === 'percent') {
      return this.percentPipe.transform(value, '1.0-2');
    }

    return value.toString();
  }
}
