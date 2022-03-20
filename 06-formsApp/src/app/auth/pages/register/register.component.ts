import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.nameLastNamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorsService.cannotBeSesp],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorsService.equalPasswords('password', 'password2'),
      ],
    }
  );

  get emailError(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'The email is required';
    } else if (errors?.pattern) {
      return 'The field must be a valid email';
    } else if (errors?.emailTaken) {
      return 'The email has been taken';
    } else {
      return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Santiago Espinosa',
      email: 'test1@test.com',
      username: 'sesp1',
      password: '123456',
      password2: '123456',
    });
  }

  invalidField(field: string): boolean {
    return (
      (this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched) ??
      true
    );
  }

  emailRequired() {
    return (
      this.myForm.get('email')?.errors?.required &&
      this.myForm.get('email')?.touched
    );
  }

  emailFormat() {
    return (
      this.myForm.get('email')?.errors?.pattern &&
      this.myForm.get('email')?.touched
    );
  }

  emailTaken() {
    return (
      this.myForm.get('email')?.errors?.emailTaken &&
      this.myForm.get('email')?.touched
    );
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
