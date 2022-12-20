import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  // Header elements array


  Header: { linksHeader:any[], accessLink:any[]} = {linksHeader : [], accessLink : []}



  ngOnInit():void{
    this.Header.linksHeader = [
      {
        name: "logIn",
        icon: "uil uil-user",
        router: ""
      },
      {
        name: "register",
        icon: "uil uil-user-plus",
        router: ""
      },
    ]
  }

}
