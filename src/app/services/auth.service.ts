import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Employee} from "../entity/employee";
import {RequestConst} from "../util/request-const";
import {User} from "../entity/user";

@Injectable()
export class AuthService {

  private token: string;
  private headers;

  constructor(private http: Http) {
    this.token = "";
    this.headers = RequestConst.baseHeaders;
  }

  adminAuth(employee: Employee): any {
    return this.http
      .post(RequestConst.pathToAdminAuth,
        employee,
        this.headers
      )
      .map(response => {
        let body = response.json();
        this.token = body.token;
        return body;
      });
  }

  userAuth(user: User): any {
    return this.http
      .post(RequestConst.pathToUserAuth,
        user,
        this.headers
      )
      .map(response => {
        let body = response.json();
        this.token = body.token;
        return body;
      });
  }

  logout(): void {
    this.token = "null";
  }

  getToken(): string {
    return this.token;
  }

}
