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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().then(users => this.users = users);
  }

  addUser(): void {
    this.userService.addEntity(this.user);
  }

  updateUser() {
    this.userService.updateEntity(this.user);
  }

  deleteUser() {
    this.userService.deleteEntity(this.user.email);
  }
}
