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

  // getAllUsers(): Promise<User[]> {
  //   return this.http.get(this.pathToApi)
  //     .toPromise()
  //     .then(response => {
  //       return response.json();
  //     });
  // }
  //
  // addUser(user: User): void {
  //   this.http
  //     .post(this.pathToApi,
  //       user,
  //       this.headers
  //     )
  //     .toPromise()
  //     .then(res => console.log(res));
  // }
  //
  // updateUser(user: User): void {
  //   this.http
  //     .put(this.pathToApi,
  //       user,
  //       this.headers
  //     )
  //     .toPromise()
  //     .then(res => console.log(res));
  // }
  //
  // deleteUser(email: string): void {
  //   this.http
  //     .delete(this.pathToApi + '/' + email,
  //       this.headers
  //     )
  //     .toPromise()
  //     .then(res => console.log(res));
  // }
}
