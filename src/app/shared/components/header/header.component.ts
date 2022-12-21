import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnTokenService } from '@shared/services/on-token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Header elements array. LinksHeader => Login and Register links on header
  Header: { linksHeader: any[] } = { linksHeader: [] };
  listObservers$: Array<Subscription> = [];

  constructor(private router: Router, private onTokenService: OnTokenService) {}

  // Loads on init
  ngOnInit(): void {
    // Sends the information of the icons to the header so they can be created using a *ngFor
    this.Header.linksHeader = [
      {
        name: 'logIn',
        icon: 'uil uil-user',
        route: '/auth/login',
      },
      {
        name: 'register',
        icon: 'uil uil-user-plus',
        route: '/auth/register',
      },
    ];

    // receives the token from onTokenService
    const hasToken: Subscription = this.onTokenService.callback.subscribe(
      (response: string) => {
        console.log(`el token en el header => ${response}`);
      }
    );
    this.listObservers$ = [hasToken];
  }

  ngOnDestroy(): void {
    // We are making the component to unsuscribe from any suscription it may have before destroying the component to improve performance
    this.listObservers$.forEach((observer) => observer.unsubscribe());
  }
}
