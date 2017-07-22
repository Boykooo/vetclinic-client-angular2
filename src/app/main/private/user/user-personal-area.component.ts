import {Component, OnInit} from '@angular/core';
import {User} from "../../../entities/user";
import {ClientService} from "../../../services/client.service";
import {ClientRequest} from "../../../entities/client-request";
import {ClientRequestInfo} from "../../../entities/client-request-info";

@Component({
  selector: 'user-personal-area',
  templateUrl: './user-personal-area.component.html'
})

export class UserPersonalAreaComponent implements OnInit {
  user: User;
  lastClientRequest: ClientRequestInfo;

  constructor(private clientService: ClientService) {
    this.user = new User();
    this.lastClientRequest = new ClientRequestInfo();
  }

  ngOnInit(): void {
    this.clientService.getInfo().subscribe(
      user => this.user = user
    );

    this.clientService.getLastClientRequest()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.lastClientRequest = response["data"];
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  showDetails(): void {

  }
}
