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
export class SessionGuard implements CanActivate {
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

  // We are checking if the user has a token so he can access to the route
  checkToken(): boolean {
    if (this.token !== null) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
