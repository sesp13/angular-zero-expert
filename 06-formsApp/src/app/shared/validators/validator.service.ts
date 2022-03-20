import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  // Custom field validator
  cannotBeSesp(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value == 'sesp') {
      return {
        noSesp: true,
      };
    }
    return null;
  }

  equalPasswords(pass1: string, pass2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(pass1)?.value;
      const value2 = formGroup.get(pass2)?.value;
      if (value1 !== value2) {
        formGroup.get(pass2)?.setErrors({
          notEquals: true,
        });
        return {
          // The fields are not the same show the error!!
          notEquals: true,
        };
      } else {
        // Clean errors
        formGroup.get(pass2)?.setErrors(null);
      }
      // Ok!
      return null;
    };
  }
}
