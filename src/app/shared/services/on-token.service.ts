import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnTokenService {

  callback:EventEmitter<any> = new EventEmitter<any>

  constructor() { }
}
