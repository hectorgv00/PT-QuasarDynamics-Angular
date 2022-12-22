import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginModel } from '../../../../core/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  public sendCredentials(email:string,password:string, route:string): Observable<any> {
    return this.httpClient.post(`${this.URL}${route}`, {
      email,
      password
    });
  }
}
