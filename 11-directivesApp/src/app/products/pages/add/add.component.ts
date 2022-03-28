import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent {
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  text1 = 'Santiago Espinosa';
  color: string = 'green';

  constructor(private fb: FormBuilder) {}

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid ?? false;
  }

  changeName() {
    this.text1 = Math.random().toString();
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
