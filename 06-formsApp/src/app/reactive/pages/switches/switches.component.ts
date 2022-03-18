import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm = this.fb.group({
    gender: ['M', [Validators.required]],
    notifications: [false, [Validators.required]],
    conditions: [false, [Validators.requiredTrue]],
  });

  person = {
    gender: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Set initial values for person
    this.myForm.reset({ ...this.person, conditions: true });

    this.myForm.valueChanges.subscribe((form) => {
      const formValue = { ...form };
      delete formValue.conditions;
      this.person = formValue;
    });

    this.myForm.get('conditions')?.valueChanges.subscribe((newValue) => {
      console.log(newValue);
    });
  }

  save() {
    const formValue = { ...this.myForm.value };
    // Delete extra field
    delete formValue.conditions;
    this.person = formValue;
  }
}
