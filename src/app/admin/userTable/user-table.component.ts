import {Component, OnInit} from '@angular/core';
import {User} from "../../entity/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  providers: [UserService]
})

export class UserTableComponent implements OnInit {
  users: User[] = [];
  user: User = new User();

  constructor(
    private userService: UserService
  )
  { }

  ngOnInit(): void {
    this.userService.getAllUsers().then(users => this.users = users);
  }

  addUser(): void{
    this.userService.addUser(this.user);
  }

  updateUser(){
    this.userService.updateUser(this.user);
  }

  deleteUser(){
    this.userService.deleteUser(this.user.email);
  }
}
