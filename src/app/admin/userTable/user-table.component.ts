import {Component, OnInit} from '@angular/core';
import {User} from "../../entity/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  providers: [UserService]
})

export class UserTableComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  )
  { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
}
