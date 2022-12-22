import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
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
  token: string | null = localStorage.getItem('token');
  headerToken: boolean = false;

  constructor(    ) {}

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

    this.ifToken();
  }

  ngOnDestroy(): void {
    // We are making the component to unsuscribe from any suscription it may have before destroying the component to improve performance
    this.listObservers$.forEach((observer) => observer.unsubscribe());
  }

  ifToken(): void {
    // this will change the HTML of the header depending on the existance of the token
    this.token ? (this.headerToken = true) : (this.headerToken = false);
  }


}
