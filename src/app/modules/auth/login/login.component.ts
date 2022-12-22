import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Adding FormGroup to a variable so we can use it on ngOnInit
  formLogin: FormGroup = new FormGroup({});

  error: boolean = false;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Setting the inputs our form has
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        // Setting validators to the email input
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        // Setting validators to the first_name input
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }

  sendLogin(): void {
    // setting the body value to pass it to the API using the values stored in formLogin
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;
    this._authService.sendCredentials(email, password, "login").subscribe({
      // If evrything goes well
      next: (res) => {
        const { token } = res
        localStorage.setItem("token", token)
        this.router.navigate(["/users"])
      },
      // If something goes wrong
      error: (error) => {
        console.log(error);
        this.error = !this.error;
      },
    });
  }

}
