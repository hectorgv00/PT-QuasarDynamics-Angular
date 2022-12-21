import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly URL = environment.api;
  protected page = 1;

  constructor(private httpClient:HttpClient) {
    
  }

  // This function will use an observable to share the result (as redux)
  getAllUsers$():Observable<any> {

    // We are calling the API and remobving the data: from the response so a clean objects array will arrieve.
    return this.httpClient.get(`${this.URL}users?page=${this.page}`)
    .pipe(
      map(({data}:any) => {
        return data
      })
    )


  }

  sumOneToPage():void{
    this.page = this.page + 1
    console.log(this.page)

    this.getAllUsers$()
  }
}
