import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Adding FormGroup to a variable so we can use it on ngOnInit
  formRegister: FormGroup = new FormGroup({});
  error:boolean = false

  constructor(
    private _authService: AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      first_name: new FormControl('', [
        // Setting validators to the first_name input

        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^[a-z ,.'-]+$/i)
      ]),
      last_name: new FormControl('', [
        // Setting validators to the last_name input
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^[a-z ,.'-]+$/i)

      ]),
      email: new FormControl('', [
        // Setting validators to the email input
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        // Setting validators to the password input
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }

  sendRegister():void {
    const body = this.formRegister.value;
    let {email, password} = body;
    

    // Sending the data to the api call
    this._authService.sendCredentials(email, password, "register").subscribe({
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
