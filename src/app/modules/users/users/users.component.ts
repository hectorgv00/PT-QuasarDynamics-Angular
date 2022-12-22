import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '@core/models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userList: Array<UserModel> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.receiptUsers$();
  }

  receiptUsers$(): void {
    // We are receiving the data from the UserService and saving it into userList
    this.userService.getAllUsers$().subscribe((r) => {
      this.userList = r;
    });
  }
}
