import {Injectable} from "@angular/core";
import {User} from "../entity/user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private pathToApi: string = 'http://localhost:8080/api/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllUsers(): Promise<User[]> {
    return this.http.get(this.pathToApi)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  addUser(user: User): void {
    this.http
      .post(this.pathToApi,
        user,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }

  updateUser(user: User): void {
    this.http
      .put(this.pathToApi,
        user,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }

  deleteUser(email: string): void {
    this.http
      .delete(this.pathToApi + '/' + email,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }
}