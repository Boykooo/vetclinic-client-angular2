import {Component, OnInit} from '@angular/core';
import {Client} from "../../entities/client";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  providers: [ClientService]
})

export class UserTableComponent implements OnInit {
  users: Client[] = [];
  user: Client = new Client();

  constructor(private userService: ClientService) {
  }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(users => this.users = users);
  }

  addUser(): void {
    this.userService.addEntity(this.user);
    //TODO: subscribe
  }

  updateUser() {
    this.userService.updateEntity(this.user);
    //TODO: subscribe
  }

  deleteUser() {
    this.userService.deleteEntity(this.user.email);
    //TODO: subscribe
  }
}
