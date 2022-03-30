import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  myForm: FormGroup = this.fb.group({
    name: ['santiago', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register() {
    this.authService.register(this.myForm.value).subscribe((result) => {
      if(result === true){
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', result, 'error');
      }
    });
  }
}
