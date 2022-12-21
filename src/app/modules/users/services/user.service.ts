import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from 'src/core/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(private httpClient:HttpClient) {
    
  }

  // getAllUsers$():Observable {



  // }
}
