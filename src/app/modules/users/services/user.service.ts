import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URL = environment.api;
  protected page = 1;

  constructor(private httpClient: HttpClient) {}

  // This function will use an observable to share the result (as redux)
  getAllUsers$(): Observable<any> {
    // We are calling the API and removing the data: from the response so a clean objects array will arrive.
    return this.httpClient.get(`${this.URL}users?page=${this.page}`).pipe(
      map(({ data }: any) => {
        return data;
      }),
      // We are sending the error by console in cse someyhing occurs
      catchError((err) => {
        console.log(`We tried to get the data but something went wrong. Error ===> `,err)
        return of([]);
      })
    );
  }
}
