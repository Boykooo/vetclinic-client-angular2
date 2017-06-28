import {Component, OnInit} from '@angular/core';
import {Employee} from "../../entity/employee";
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

  constructor(private employeeService: EmployeeService,
              private http: Http) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().then(res => this.employees = res);
    this.employee = new Employee();
  }

  addEmployee(): void {
    this.employeeService.addEntity(this.employee);
  }

  updateEmployee(): void {
    this.employeeService.updateEntity(this.employee);
  }

  deleteEmployee(): void {
    this.employeeService.deleteEntity(this.employee.email);
  }
}

