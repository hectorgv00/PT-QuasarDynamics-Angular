import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotokenGuard implements CanActivate {
  // getting the token from localStorage
  token: string | null = localStorage.getItem('token');

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkToken();
  }

  // We are checking if the user has a token. If he does, he cannot access this url
  checkToken(): boolean {
    if (this.token !== null) {
      this.router.navigate(['/users']);
      return false;
    } else {
      return true;
    }
  }
}
