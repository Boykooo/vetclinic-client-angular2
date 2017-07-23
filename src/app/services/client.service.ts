import {Injectable} from "@angular/core";
import {Client} from "../entities/client";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {IssueForm} from "../entities/issue-form";

@Injectable()
export class ClientService extends GenericService<Client, string> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_USER_API, authService);
  }

  sendClientRequest(clientRequestForm: IssueForm): any {
    this.refreshToken();

    return this.http.post(
      this.pathToApi + "/request/",
      clientRequestForm,
      this.options
    )
      .map(response => response.json())
  }

  getLastClientRequest(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + "/request/last/",
      this.options
    )
      .map(response => response.json());
  }
}
