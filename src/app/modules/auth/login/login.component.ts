import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Adding FormGroup to a variable so we can use it on ngOnInit
  formLogin: FormGroup = new FormGroup({});

  constructor() {}

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
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }

  sendLogin():void {
    // setting the body value to pass it to the API using the values stored in formLogin
    const body = this.formLogin.value;
    console.log(body)
  }

}
