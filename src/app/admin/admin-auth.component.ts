import {Component, OnInit} from '@angular/core'
import {Employee} from "../entity/employee";
import {Http} from "@angular/http";

@Component({
  selector: 'admin-auth',
  templateUrl: './admin-auth.component.html',
})

export class AdminAuthComponent implements OnInit {

  employee: Employee;
  private token: string;
  private pathToApi: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.pathToApi = "http://localhost:8080/api/auth/employee";
    this.employee = new Employee();
  }

  login(): void {
    this.http
      .post(this.pathToApi,
        this.employee,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }


}
