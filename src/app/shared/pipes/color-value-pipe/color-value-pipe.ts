import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorValue',
  standalone: true
})
export class ColorValuePipe implements PipeTransform {

  transform(value: number): string {
    return value >= 0 ? '#0B893E' : '#C62828';
  }

}
