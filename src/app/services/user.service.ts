import {Injectable} from "@angular/core";
import {User} from "../entity/user";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

const mockUsers: User[] = [
  {
    email: "test", lastName: "test", phoneNumber: "test",
    password: "4123",
    regDate: new Date('10/10/17'), firstName: "test", animals: []
  },
  {
    email: "test2",
    lastName: "test2",
    phoneNumber: "test2",
    regDate: new Date('10/10/17'),
    firstName: "test2",
    password: "123",
    animals: []
  }
];

@Injectable()
export class UserService {
  private users: User[];
  private pathToApi = 'http://localhost:8080/api/user'
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
