import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm?: NgForm;

  initForm = {
    product: '',
    price: 0,
    quantity: 0,
  };

  invalidProductName(): boolean {
    return (
      (this.myForm?.controls.product?.invalid &&
        this.myForm?.controls.product?.touched) ??
      true
    );
  }

  invalidPrice(): boolean {
    return (
      (this.myForm?.controls.price?.touched &&
        (this.myForm?.controls.price?.invalid ||
          this.myForm?.controls.price?.value < 0)) ??
      true
    );
  }

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.myForm?.resetForm({
      product: 'Something',
      price: 0,
      quantity: 0,
    });
  }
}
