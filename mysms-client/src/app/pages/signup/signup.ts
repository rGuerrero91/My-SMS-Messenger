import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password !== this.signupForm.value.passwordConfirmation) {
        console.error('Passwords do not match');
        return;
      }
      try {
      await this.authService.signup(
        this.signupForm.value.email,
        this.signupForm.value.password
      );
      this.router.navigate(['/login'])
      } catch (err: any) {
      console.error('SignUp failed', err);
        }
      };
    console.log('Signup:', this.signupForm.value);
  }
  
}
