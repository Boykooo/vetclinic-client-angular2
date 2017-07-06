import {Component, OnInit} from '@angular/core'
import {Employee} from "../entity/employee";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-auth',
  templateUrl: './admin-auth.component.html'
})

export class AdminAuthComponent implements OnInit {

  employee: Employee;
  error: string;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.employee = new Employee();
  }

  login(): void {
    this.authService.employeeAuth(this.employee).subscribe(
      body => {
        if (body.status === "OK") {
          this.router.navigate(['admin/user']);
        }
        else {
          this.error = body.error;
        }
      }
    );
  }
}

