import {Injectable} from "@angular/core";
import {User} from "../entities/user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService extends GenericService<User, string>{

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_USER_API, authService);
  }
}
