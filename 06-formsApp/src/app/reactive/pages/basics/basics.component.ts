import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  // Standard declaration
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 3080'),
  //   price: new FormControl(0),
  //   quantity: new FormControl(0),
  // });

  // declaration with form builder
  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    quantity: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Default values for myForm
    this.myForm.reset({
      name: 'RTX 3080',
      price: 0,
      quantity: 0,
    });
  }

  invalidField(field: string): boolean {
    return (
      this.myForm.controls[field].invalid && this.myForm.controls[field].touched
    );
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    } else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }
}
