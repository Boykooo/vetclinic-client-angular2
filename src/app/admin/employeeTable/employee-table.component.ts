import {Component, OnInit} from '@angular/core';
import {Employee} from "../../entities/employee";
import {EmployeeService} from "../../services/employee.service";
import {Http} from "@angular/http";

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  providers: [EmployeeService]
})

export class EmployeeTableComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  roles: any[];
  selectedRole: number;

  constructor(private employeeService: EmployeeService,
              private http: Http) {
  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.roles = [];
    this.roles.push({id: 1, name: 'EMPLOYEE'});
    this.roles.push({id: 2, name: 'ADMIN'});
    this.selectedRole = 1;

    this.employeeService.getAll()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.employees = response["data"];
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  addEmployee(): void {
    console.log(this.selectedRole);
    this.employee.role = this.roles[this.selectedRole - 1].name;
    this.employeeService.addEntity(this.employee)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"]);
          }
        }
      );
  }

  updateEmployee(): void {
    this.employee.role = this.roles[this.selectedRole].name;
    this.employeeService.updateEntity(this.employee)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"]);
          }
        }
      );
  }

  deleteEmployee(): void {
    this.employeeService.deleteEntity(this.employee.email)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"]);
          }
        }
      );
  }
}

