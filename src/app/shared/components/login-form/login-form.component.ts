import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    console.log(this.loginForm.value);
    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';
    try {
      this.auth.login(email, password);
    }
    catch (error) {
      console.log(error);
    }
    // reload the page
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
