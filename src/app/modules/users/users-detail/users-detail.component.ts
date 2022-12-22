import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/core/models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent {
  userlist: Array<UserModel> = [];
  user: Array<UserModel> = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,  ) {}

   ngOnInit():any  {
    this.getUsers()
  }
   getUsers(){
        // We are getting the user id from the params
        const routeParams = this.route.snapshot.paramMap;
        // cleaning it to get only the number
        const userIdParams = Number(routeParams.get('id'));
    
       this.userService.getAllUsers$()    
        .subscribe((res) => {
           res.map((r:any)=> {
            if(r.id=== userIdParams){
              this.user = [r];
              console.log(this.user)
            }
           });
        });

        // const objectUser = this.usersComponent.userList.find(user => user.id=== userIdParams)
    
  }
}

