import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
      this.receiptUsers$();

  }

  receiptUsers$(): void {
    // We are receiving the data from the UserService and saving it into userList
    this.userService.getAllUsers$()    
    .subscribe((r) => {
      this.userList = r;
    });
  }





  ngOndestroy(): void {
    this.listObservers$.forEach((obs) => obs.unsubscribe);
  }
}