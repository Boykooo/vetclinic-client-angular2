import {Injectable} from "@angular/core";
import {User} from "../entity/user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";

@Injectable()
export class UserService extends GenericService<User, string>{

  constructor(http: Http) {
    super(http, RequestConst.pathToUserApi);
  }
}
