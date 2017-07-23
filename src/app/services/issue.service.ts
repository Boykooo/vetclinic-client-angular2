import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {GenericService} from "./generic.service";
import {Issue} from "../entities/issue";
import {RequestConst} from "../util/request-const";
import {Message} from "../entities/message";
import {Injectable} from "@angular/core";

@Injectable()
export class IssueService extends GenericService<Issue, any> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_ISSUE_API, authService);
  }

  sendMessage(issueInfoId: number, message: Message): any {
    this.refreshToken();

    return this.http.post(
      "http://localhost:8080/api/issue/" + issueInfoId + "/",
      message,
      this.options
    )
      .map(
        response => response.json()
      );
  }

  getIssueInfo(issueInfoId: number): any {
    this.refreshToken();

    return this.http.get(
      "http://localhost:8080/api/issue/" + issueInfoId + "/",
      this.options
    )
      .map(
        response => response.json()
      );
  }

  getAllByAnimalId(id: number): any {
    this.refreshToken();

    return this.http.get(
      "http://localhost:8080/api/issue/animal/  " + id + "/",
      this.options
    )
      .map(
        response => response.json()
      );
  }

  getInvolvedByEmail(): any {
    this.refreshToken();

    return this.http.get(
      "http://localhost:8080/api/issue/involvedByEmail",
      this.options
    )
      .map(
        response => response.json()
      );
  }

  getAllByAnimalIdAndEmail(id: number): any {
    this.refreshToken();

    return this.http.get(
      "http://localhost:8080/api/issue/email/" + id + "/",
      this.options
    )
      .map(
        response => response.json()
      );
  }
}
