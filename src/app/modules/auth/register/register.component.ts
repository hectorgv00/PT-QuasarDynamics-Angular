import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Adding FormGroup to a variable so we can use it on ngOnInit
  formRegister: FormGroup = new FormGroup({});

  constructor() {}

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
    console.log(body)
  }
}
