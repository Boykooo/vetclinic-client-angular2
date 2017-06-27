
import {Injectable} from "@angular/core";
import {User} from "../entity/user";
import {Http} from "@angular/http";

const mockUsers: User[] = [
  {email: "test", lastName: "test", phoneNumber: "test", regDate: new Date('10/10/17'), firstName: "test"},
  {email: "test2", lastName: "test2", phoneNumber: "test2", regDate: new Date('10/10/17'), firstName: "test2"}
];

@Injectable()
export class UserService{

  constructor(
    private http: Http
  ) {}

  getAllUsers() {
    return this.http.get('users.json');
  }
}
