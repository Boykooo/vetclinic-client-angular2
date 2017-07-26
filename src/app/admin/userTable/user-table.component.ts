import {Component, OnInit} from '@angular/core';
import {Client} from "../../entities/client";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  providers: [ClientService]
})

export class ClientTableComponent implements OnInit {
  clients: Client[] = [];
  client: Client = new Client();

  constructor(private userService: ClientService) {
  }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.clients = response["data"];
          } else {
            console.log(response["error"])
          }
        }
      );
  }

  addUser(): void {
    this.userService.addEntity(this.client)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"])
          }
        }
      )
  }

  updateUser() {
    this.userService.updateEntity(this.client)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"])
          }
        }
      )
  }

  deleteUser() {
    this.userService.deleteEntity(this.client.email)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"])
          }
        }
      )
  }
}
