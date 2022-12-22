import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent {


constructor(private route:ActivatedRoute){}


ngOnInit():void{
  const routeParams = this.route.snapshot.paramMap
  console.log(routeParams)
}


}
