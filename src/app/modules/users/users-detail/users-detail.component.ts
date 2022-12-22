import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/core/models/users.model';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent {
  private readonly URL = environment.api;
  userlist: Array<UserModel> = [];
  user: Array<UserModel> = [];
  status:string =""

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): any {
    //  this.getUsers()
    this.getUserById();
  }

  getUsers() {
    // We are getting the user id from the params
    const routeParams = this.route.snapshot.paramMap;
    // cleaning it to get only the number
    const userIdParams = Number(routeParams.get('id'));

    // We are using the service to call the api and map the information to filter it
    this.userService.getAllUsers$().subscribe((res) => {
      res.map((r: any) => {
        if (r.id === userIdParams) {
          this.user = [r];
          console.log(this.user);
        }
      });
    });
  }
  getUserById() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdParams = Number(routeParams.get('id'));

    // We are calling tot he API by user
    const call = this.httpClient.get(`${this.URL}users/${userIdParams}`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
    call.subscribe((res) => {
      this.user = [res];
    });
  }

  deleteUserById(){
    const routeParams = this.route.snapshot.paramMap;
    const userIdParams = Number(routeParams.get('id'));

    // We are sending the delete request to the api
    this.httpClient.delete(`${this.URL}users/${userIdParams}`)
    .subscribe({
      next: data => {
        this.status = `User with ID => [${userIdParams}] Deleted successfully`
        console.log(this.status)
      },
      error: error=> {
        this.status = error.message;
        console.log('Error', error)
      }
    })
  }
}
