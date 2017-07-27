import {Component, OnInit} from '@angular/core';
import {Client} from "../../../entities/client";
import {ClientService} from "../../../services/client.service";
import {Issue} from "../../../entities/issue";
import {IssueInfo} from "../../../entities/issueInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'user-personal-area',
  templateUrl: './client-personal-area.component.html'
})

export class ClientPersonalAreaComponent implements OnInit {
  client: Client;
  lastIssue: IssueInfo;

  constructor(private clientService: ClientService,
              private router: Router) {

  }

  ngOnInit(): void {

    this.client = new Client();
    this.lastIssue = new IssueInfo();

    this.clientService.getInfo().subscribe(
      response => {
        if (response["status"] === "OK") {
          this.client = response["data"];
        } else {
          console.log(response["error"]);
        }
      }
    );

    this.clientService.getLastClientRequest()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.lastIssue = response["data"];
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  showDetails(): void {
    this.router.navigate(['/issue', this.lastIssue.issueId]);
  }
}
