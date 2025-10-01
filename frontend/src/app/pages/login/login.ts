import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public errorMessage = '';

  public submit() {
    if (this.form.invalid) return;

    this._authService
      .login(this.form.get('email')?.value as string, this.form.get('password')?.value as string)
      .pipe(take(1))
      .subscribe({
        next: ({ data }) => {
          const { token } = data;

          if (token) {
            this._authService.setToken(token);
            this._router.navigate(['/products']);
          }
        },
        error: ({ error }) => {
          this.errorMessage = error.message;
        },
      });
  }
}
