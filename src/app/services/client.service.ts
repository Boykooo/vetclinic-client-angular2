import {Injectable} from "@angular/core";
import {User} from "../entities/user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {ClientRequestForm} from "../entities/client-requst-form";

@Injectable()
export class ClientService extends GenericService<User, string> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_USER_API, authService);
  }

  sendClientRequest(clientRequestForm: ClientRequestForm): any {
    this.refreshToken();

    return this.http.post(
      this.pathToApi + "/request/",
      clientRequestForm,
      this.options
    )
      .map(response => response.json())
  }
}
