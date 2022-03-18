import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['The last of us', [Validators.required]],
        ['God of war', [Validators.required]],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', [Validators.required]);

  // Used to create favorite fields
  get favoritesArr(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  invalidField(field: string): boolean {
    return (
      this.myForm.controls[field].invalid && this.myForm.controls[field].touched
    );
  }

  addFavorite(): void {
    if (this.newFavorite.invalid) {
      return;
    }
    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, [Validators.required])
    );
    this.newFavorite.reset();
  }

  deleteFavorite(index: number): void {
    // if there are not favorites the form will be invalid
    this.favoritesArr.removeAt(index);
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
