import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../entities/employee";
import {EmployeeService} from "../../../services/employee.service";
import {IssueInfo} from "../../../entities/issueInfo";
import {IssueService} from "../../../services/issue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employee-personal-area',
  templateUrl: './employee-personal-area.component.html',
  providers: [EmployeeService]
})

export class EmployeePersonalAreaComponent implements OnInit {

  employee: Employee;
  lastIssue: IssueInfo;

  constructor(private employeeService: EmployeeService,
              private issueService: IssueService,
              private router: Router) {
    this.employee = new Employee();
    this.lastIssue = new IssueInfo();
  }

  ngOnInit(): void {
    this.employeeService.getInfo()
      .subscribe(
        employee =>
        {
          this.employee = employee;
        }
      );

    this.issueService.getLastChangeByEmail()
      .subscribe(
        response => {
          console.log(response);
          if (response["status"] === "OK") {
            this.lastIssue = response["data"];
          } else {
            console.log(response["error"]);
            return;
          }
        }
      )
  }

  showDetails(): void {
      this.router.navigate(['/issue', this.lastIssue.issueId]);
  }
}
