import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Employee} from "../entities/employee";
import {RequestConst} from "../util/request-const";
import {Client} from "../entities/client";
import {RegistrationForm} from "../entities/registration-form";

@Injectable()
export class AuthService {

  private token: string;
  private headers;
  private userType: string;

  constructor(private http: Http) {
    this.token = null;
    this.headers = RequestConst.BASE_HEADERS;
  }

  adminAuth(employee: Employee): any {
    return this.http
      .post(RequestConst.PATH_TO_ADMIN_AUTH,
        employee,
        this.headers
      )
      .map(response => {
        let body = response.json();
        this.token = body.token;
        this.userType = "EMPLOYEE"
        return body;
      });
  }

  userAuth(user: Client): any {
    return this.http
      .post(RequestConst.PATH_TO_USER_AUTH,
        user,
        this.headers
      )
      .map(response => {
        let body = response.json();
        this.token = body.token;
        this.userType = body.userType;
        return body;
      });
  }

  registration(registrationForm: RegistrationForm): any {
    return this.http
      .post(
        "http://localhost:8080/auth/registration",
        registrationForm,
        this.headers
      )
      .map(response => {
        let body = response.json();
        this.token = body.token;
        this.userType = body.userType;
        return body;
      });
  }

  logout(): void {
    this.token = null;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean {
    return this.token != null;
  }

  getUserType() {
    return this.userType;
  }

}
