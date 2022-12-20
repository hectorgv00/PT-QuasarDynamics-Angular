import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  // Header elements array. LinksHeader => Login and Register links on header
  Header: { linksHeader:any[], } = {linksHeader : [], }

  constructor(private router:Router){}

// Loads on init
  ngOnInit():void{


    this.Header.linksHeader = [
      {
        name: "logIn",
        icon: "uil uil-user",
        route: "/auth/login",
      },
      {
        name: "register",
        icon: "uil uil-user-plus",
        route: "/auth/register",

      },
    ]
  }


}
