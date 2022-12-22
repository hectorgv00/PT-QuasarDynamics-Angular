import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// This is no longuer needed. I used it to fake a token before implementing the login/ register.
export class OnTokenService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
