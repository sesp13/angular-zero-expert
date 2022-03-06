import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
})
export class MyUpperCasePipe implements PipeTransform {
  transform(value: string, inUpper: boolean = true): string {
    return inUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
