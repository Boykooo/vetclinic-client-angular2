import {Component, OnInit} from "@angular/core";
import {IssueService} from "../../services/issue.service";
import {Message} from "../../entities/message";
import {IssueInfo} from "../../entities/issueInfo";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: "issue",
  templateUrl: "./issue.component.html"
})

export class IssueComponent implements OnInit {
  issueInfo: IssueInfo;
  message: Message;

  constructor(private issueService: IssueService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.issueInfo = new IssueInfo();
    this.issueInfo.messages = [];
    this.message = new Message();

    this.route.paramMap
      .switchMap((params: ParamMap) => this.issueService.getIssueInfo(+params.get('id')))
      .subscribe(
        response => {
          console.log(response);
          if (response["status"] === "OK") {
            this.issueInfo = response["data"];
          }
        }
      );
  }

  sendMessage(): void {
    this.issueService.sendMessage(this.issueInfo.issueId, this.message)
      .subscribe();
  }
}
