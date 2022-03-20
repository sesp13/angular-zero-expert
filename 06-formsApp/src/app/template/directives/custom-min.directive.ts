import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minValue?: number;
  constructor() {
    // console.log('Directive', this.minValue);
  }

  validate(control: FormControl) {
    const inputValue = control.value;
    return inputValue < (this.minValue ?? 0) ? { customMin: true } : null;
  }
}
