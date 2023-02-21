import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: string | null): string | null {
    return `${value?.split(' ')[1]} ${value?.split(' ')[0]}`;
  }
}
