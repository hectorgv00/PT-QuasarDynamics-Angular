import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/core/models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userList: Array<UserModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private userService: UserService) {}

  ngOninit(): void {

    

  
  
  
  
  
  }

  ngOndestroy(): void {
    this.listObservers$.forEach((obs) => obs.unsubscribe);
  }
}
