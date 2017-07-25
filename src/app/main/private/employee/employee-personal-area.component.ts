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
  lastIssues: IssueInfo[];

  constructor(private employeeService: EmployeeService,
              private issueService: IssueService,
              private router: Router) {
    this.employee = new Employee();
    this.lastIssues = [];
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
            this.lastIssues = response["data"];
          } else {
            console.log(response["error"]);
            return;
          }
        }
      )
  }

  showDetails(issueId: number): void {
      this.router.navigate(['/issue', issueId]);
  }


}
